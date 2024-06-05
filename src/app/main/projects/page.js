'use client'

import Link from "next/link";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const { register, handleSubmit, reset } = useForm()
  const {
    data,
    error,
    isValidating,
    mutate: mutateData
  } = useSWR(API_URL + '/api/projects', url => fetch(url).then(res => res.json()));


  const postData = async (formData) => {
    try {
      // Perform the POST request
      const response = await fetch(API_URL + '/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if request was successful
      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      // Update the data in the cache
      document.getElementById('modal-add').close()
      reset()
      mutateData();
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };
  useEffect(() => {
    {

      console.log(error)

    }
  })

  return (
    <div className="w-full max-w-screen-xl">
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li><Link href="/main">Beranda</Link></li>
          <li>Semua Proyek</li>
        </ul>
      </div>

      <div>
        <div className="flex justify-between">
          <div className="join">
            <button
              className="btn btn-primary join-item"
              onClick={() => document.getElementById('modal-add').showModal()}>
              Buat Proyek Baru
            </button>
            {/* <button className="btn btn-sm join-item">Preview</button> */}
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Cari" />
            <span className="iconify bxs--search-alt-2"></span>
          </label>
        </div>
        <div className="overflow-x-auto w-full max-h-[500px] my-5">
          <table className="table table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Nama Proyek</td>
                <td>Tanggal</td>
                <td>Manajer</td>
                <td>Pengguna</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {
                isValidating ? (
                  <tr>
                    <td colSpan={10} className="text-center">LOADING...</td>
                  </tr>
                ) : (data || []).map((d, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{d?.namaProyek}</td>
                    <td>{d?.tanggal}</td>
                    <td>{d?.manajer}</td>
                    <td>{d?.staf}</td>
                    <td>{d?.status ? 'Selesai' : 'Progress'}</td>
                  </tr>
                ))}
            </tbody>
            {/* <tfoot>
              <tr>
                <th></th>
                <td>Name</td>
                <td>Job</td>
                <td>company</td>
                <td>location</td>
                <td>Last Login</td>
                <td>Favorite Color</td>
                <th></th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>

      <dialog id="modal-add" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Buat Proyek Baru</h3>
          <form onSubmit={handleSubmit(postData)}>
            <label className="form-control max-w-sm">
              <div className="label">
                <span className="label-text">Nama Proyek</span>
              </div>
              <input type="text" placeholder="Nama Proyek" className="input input-bordered" autoFocus={true}
                {...register("namaProyek", { required: true, maxLength: 20 })} />
            </label>
            <label className="form-control max-w-sm">
              <div className="label">
                <span className="label-text">Tanggal</span>
              </div>
              <input type="date" placeholder="Tanggal" className="input input-bordered"
                {...register("tanggal", { required: true, maxLength: 20 })} />
            </label>

            <label className="form-control max-w-sm">
              <div className="label">
                <span className="label-text">Manajer</span>
              </div>
              <input type="text" placeholder="Manajer" className="input input-bordered "
                {...register("tanggal", { required: true, maxLength: 20 })} />
            </label>

            <label className="form-control max-w-sm">
              <div className="label">
                <span className="label-text">Staf</span>
              </div>
              <input type="text" placeholder="Manajer" className="input input-bordered "
                {...register("staf", { required: true, maxLength: 20 })} />
            </label>

            <label className="form-control max-w-sm">
              <div className="label">
                <span className="label-text">Staf</span>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Remember me</span>
                  <input type="checkbox" class="toggle" checked />
                </label>
              </div>
            </label>
            <div className="mt-5">

              <button className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
