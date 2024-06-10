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
  } = useSWR(API_URL + '/api/bendings', url => fetch(url).then(res => res.json()));


  const postData = async (formData) => {
    try {
      // Perform the POST request
      const response = await fetch(API_URL + '/api/bendings', {
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
  const scale = 20;

  return (
    <div className="w-full max-w-screen-xl">
      <div className="text-sm breadcrumbs">
        <ul>
          <li><Link href="/main">Beranda</Link></li>
          <li><Link href="/main/projects">Proyek</Link></li>
          <li>(Nama Proyek)</li>
        </ul>
      </div>

      <div className="mb-5">
        Resume Penulangan
      </div>

      <div>

        <div className="flex justify-between">
          <div className="join join-horizontal">
            <button className="btn btn-neutral join-item">
              ALL
            </button>
            <button className="btn join-item">
              S001
            </button>
            <button className="btn join-item">
              S002
            </button>
          </div>
        </div>
        <div className="overflow-x-auto w-full max-h-[60vh] my-5">
          <table className="table table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th>No</th>
                <th>Project</th>
                <th>Structure</th>
                <th>Tipe</th>
                <th>Diameter</th>
                <th>Bentuk</th>
                <th>Total (mm)</th>
                <th>Jumlah</th>
                <th>Kode</th>
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
                    <td>{d?.projectId}</td>
                    <td>{d?.structureId}</td>
                    <td>{d?.barId}</td>
                    <td>{d?.diameter}</td>
                    <td>
                      {/* {JSON.stringify(d?.structure)} */}

                      <div className="p-2">
                        <div className="relative border-base-content text-xs m-auto"
                          style={{
                            width: Math.max(d?.top, d?.bottom) / scale,
                            height: Math.max(d?.left, d?.right) / scale,
                            borderTopWidth: d?.top && d?.diameter / 4,
                            borderBottomWidth: d?.bottom && d?.diameter / 4,
                            borderLeftWidth: d?.left && d?.diameter / 4,
                            borderRightWidth: d?.right && d?.diameter / 4,
                          }}>
                          <div className="absolute -top-5 text-center w-full">{d?.top > 0 ? d?.top : ''}</div>
                          {/* <div className="absolute -bottom-5 text-center w-full">{d?.bottom > 0 ? d?.bottom : ''}</div> */}
                          <div className="absolute -left-10 text-right">{d?.left > 0 ? d.left : ''}</div>
                          {/* <div className="absolute -right-10">{d?.right > 0 ? d?.right : ''}</div> */}
                          <div className="absolute -bottom-5 -left-5">{d?.topleft > 0 ? d?.topleft : ''}</div>
                          <div className="absolute -bottom-5 -right-5">{d?.topright > 0 ? d?.topright : ''}</div>
                          <div className="absolute top-0 left-0 border-base-content rotate-45 origin-top-left" style={{
                            width: d?.topleft / scale,
                            borderTopWidth: d?.topleft && d?.diameter / 4,
                          }}></div>
                          <div className="absolute top-0 right-0 border-base-content -rotate-45 origin-top-right" style={{
                            width: d?.topright / scale,
                            borderTopWidth: d?.topright && d?.diameter / 4,
                          }}></div>
                        </div>
                      </div>
                    </td>
                    <td>{d?.left + d?.top + d?.right + d?.bottom}</td>
                    <td>{d?.quantity}</td>
                    <td>{d?.code}</td>
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
