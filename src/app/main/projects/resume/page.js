'use client'

import Link from "next/link";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import dayjs from "dayjs";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'all' })
  const {
    data,
    error,
    isValidating,
    mutate: mutateData
  } = useSWR(API_URL + '/api/resume', url => fetch(url).then(res => res.json()));


  const postData = async (formData) => {
    try {
      // Perform the POST request
      const response = await fetch(API_URL + '/api/resume', {
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

      console.log(errors)

    }
  })

  return (
    <div className="w-full max-w-screen-xl">
      <div className="text-sm breadcrumbs">
        <ul>
          <li><Link href="/main">Beranda</Link></li>
          <li><Link href="/main/projects">Proyek</Link></li>
          <li>Semua Proyek</li>
        </ul>
      </div>

      <div className="mb-5">
        Resume Perhitungan Penulangan Balok
      </div>
      <div>
        <div className="flex justify-between">
          <button
            className="btn btn-primary join-item"
            onClick={() => document.getElementById('modal-add').showModal()}>
            {/* Buat Proyek Baru */}
          </button>
          {/* <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Cari" />
            <span className="iconify bxs--search-alt-2"></span>
          </label> */}
        </div>
        <div className="overflow-x-auto w-full max-h-[60vh] my-5">
          <table className="table table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th>No</th>
                <th className="border-l">Project</th>
                <th className="border-l">Item</th>
                <th className="border-l">
                  <div className="h-6">Kebutuhan</div>
                  <div>Batang</div>
                </th>
                <th>
                  <div className="mt-6">Panjang (m)</div>
                </th>
                <th>
                  <div className="mt-6">Berat (kg)</div>
                </th>
                <th className="border-l">
                  <div className="h-6">Terpakai</div>
                  <div>Panjang (m)</div>
                </th>
                <th>
                  <div className="mt-6">Berat (kg)</div>
                </th>
                <th className="border-l">
                  <div className="h-6">Terbuang</div>
                  <div>Panjang (m)</div>
                </th>
                <th>
                  <div className="mt-6">Berat (kg)</div>
                </th>
                <th className="border-l">Terbuang (%)</th>
              </tr>
              {/* <tr>
                <th rowSpan={2} >No</th>
                <td rowSpan={2} className="border-l">Item</td>
                <td colSpan={3} className="border-l">Kebutuhan</td>
                <td colSpan={2} className="border-l">Terpakai</td>
                <td colSpan={2} className="border-l">Sisa</td>
                <td rowSpan={2} className="border-l">% Sisa</td>
              </tr>
              <tr>
                <th className="border-l">Batang</th>
                <td>Panjang (m)</td>
                <td>Berat (kg)</td>
                <td className="border-l">Panjang (m)</td>
                <td>Berat (kg)</td>
                <td className="border-l">Panjang (m)</td>
                <td>Berat (kg)</td>
              </tr> */}
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
                    <td className="border-l">{d?.projectId}</td>
                    <td className="border-l">{d?.item}</td>
                    <td className="border-l">{Math.ceil(Math.random() * 100)}</td>
                    <td className="border-l">{(Math.random() * 1000).toFixed(2)}</td>
                    <td className="border-l">{(Math.random() * 1000).toFixed(2)}</td>
                    <td className="border-l">{(Math.random() * 1000).toFixed(2)}</td>
                    <td className="border-l">{(Math.random() * 1000).toFixed(2)}</td>
                    <td className="border-l">{(Math.random() * 1000).toFixed(2)}</td>
                    <td className="border-l">{(Math.random() * 1000).toFixed(2)}</td>
                    <td className="border-l">{(Math.random() * 100).toFixed(2)} %</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <dialog id="modal-add" className="modal">
        <div className="modal-box max-w-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Buat Proyek Baru</h3>
          <form onSubmit={handleSubmit(postData)}>
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Nama Proyek</span>
                <span className="label-text-alt text-error">{errors?.namaProyek?.message}</span>
              </div>
              <input {...register('namaProyek', { required: 'This field is required' })}
                placeholder="Nama Proyek"
                className="input input-bordered"
                autoFocus={true}
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Tanggal</span>
                <span className="label-text-alt text-error">{errors?.tanggal?.message}</span>
              </div>
              <input {...register('tanggal', { required: 'This field is required' })}
                type="date"
                className="input input-bordered"
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Manajer</span>
                <span className="label-text-alt text-error">{errors?.manajer?.message}</span>
              </div>
              <input {...register('manajer', { required: 'This field is required' })}
                placeholder="manajer"
                className="input input-bordered"
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Staf</span>
                <span className="label-text-alt text-error">{errors?.staf?.message}</span>
              </div>
              <input {...register('staf', { required: 'This field is required' })}
                placeholder="Staf"
                className="input input-bordered"
              />
            </label>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Selesai</span>
                <input {...register("status")}
                  type="checkbox"
                  className="toggle"
                />
              </label>
            </div>

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
