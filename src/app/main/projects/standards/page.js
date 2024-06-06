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

      console.log(errors)

    }
  })

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
        Standar Umum
      </div>


      <div id="control" className="overflow-auto max-h-[80vh] mb-5">
        <div className="bg-base-200 rounded-xl w-[900px] h-[750px] m-auto relative p-5 text-center" style={{ transform: 'scale(0.8)' }}>
          <div className="text-xl -mt-5">STANDAR UMUM</div>
          <div className="absolute left-[150px] top-[37.5px] w-[600px] h-[75px] border-base-content border-l-2 border-b-2 border-r-2"></div>
          <div className="absolute left-[150px] top-[262.5px] w-[600px] h-[75px] border-base-content border-l-2 border-t-2 border-r-2"></div>
          <div className="absolute left-[75px] top-[150px] w-[300px] h-[75px] border-base-content border-l-2 border-t-2"></div>
          <div className="absolute right-[75px] top-[150px] w-[300px] h-[75px] border-base-content border-r-2 border-t-2"></div>
          <div className="absolute left-[225px] top-[180px] w-[450px] h-[45px] border-base-content border-b-2">Lapangan</div>
          <div className="absolute left-[37.5px] top-[37.5px] h-[300px] border-base-content border-l-2"></div>
          <div className="absolute right-[37.5px] top-[37.5px] h-[300px] border-base-content border-l-2"></div>
          <div className="absolute left-[37.5px] top-[435px] w-[330px] h-[112.5px] border-base-content border-2"></div>
          <div className="absolute left-[75px] top-[465px] w-[180px] border-base-content border-t-2"></div>
          <div className="absolute left-[150px] top-[480px] w-[180px] border-base-content border-t-2"></div>

          <div className="absolute right-[37.5px] top-[500px] w-[420px] h-[40px] border-base-content border-2 text-xs">
            <div className="tooltip tooltip-hover" data-tip="Panjang Lonjor Tulangan">
              <div className="join join-horizontal">
                <div className="join-item btn btn-sm btn-ghost font-normal">Panjang Lonjor Tulangan</div>
                <input type="number" className="join-item input input-sm input-bordered w-24" value={12000} />
                <div className="join-item btn btn-sm">mm</div>
              </div>
            </div>
          </div>

          <div className="absolute left-[37.5px] top-[600px] w-[300px] border-base-content border-t-2"></div>
          <div className="absolute left-[150px] top-[585px] w-[300px] border-base-content border-t-2"></div>
          <div className="absolute left-[37.5px] top-[675px] w-[112.5px] border-base-content border-t-2"></div>
          <div className="absolute left-[75px] top-[690px] w-[375px] border-base-content border-t-2"></div>

          <div className="absolute right-[230px] top-[580px] w-[100px] h-[140px] border-base-content border-2">
            <div className="relative">
              Posisi Tulangan Torsi
              <div className="absolute left-[-5px] top-[50px] w-3 h-3 rounded-full bg-base-content" />
              <div className="absolute left-[-5px] top-[70px] w-3 h-3 rounded-full bg-base-content" />
              <div className="absolute left-[-5px] top-[90px] w-3 h-3 rounded-full bg-base-content" />
              <div className="absolute right-[-5px] top-[50px] w-3 h-3 rounded-full bg-base-content" />
              <div className="absolute right-[-5px] top-[70px] w-3 h-3 rounded-full bg-base-content" />
              <div className="absolute right-[-5px] top-[90px] w-3 h-3 rounded-full bg-base-content" />
            </div>
          </div>

          <div className="absolute right-[50px] top-[580px] w-[20px] h-[140px] border-accent border-l-2 flex flex-col justify-center">
            H
          </div>

          {/** Guidelines Vertical */}
          <div className="absolute left-[300px] top-[45px] w-[300px] h-[375px] border-primary border-l-2 border-r-2 border-dotted"></div>
          <div className="absolute left-[150px] top-[330px] w-[600px] h-[75px] border-primary border-l-2 border-r-2 border-dotted"></div>
          <div className="absolute left-[150px] top-[465px] w-[105px] h-[75px] border-primary border-l-2 border-r-2 border-dotted"></div>
          <div className="absolute left-[150px] top-[585px] w-[150px] h-[150px] border-primary border-l-2 border-r-2 border-dotted"></div>

          {/** Guidelines Horizontal */}
          <div className="absolute left-[37.5px] top-[300px] w-[112.5px] h-[25px] border-accent border-b-2">
            K.ki
          </div>
          <div className="absolute right-[37.5px] top-[300px] w-[112.5px] h-[25px] border-accent border-b-2">
            K.ka
          </div>
          <div className="absolute left-[150px] top-[320px] w-[600px] h-[25px] border-accent border-b-2">
            Lb
          </div>
          <div className="absolute left-[270px] top-[600px] w-[200px] text-sm">
            Overlap Tulangan Atas
          </div>
          <div className="absolute left-[25px] top-[650px] w-[200px] text-sm">
            Overlap Tulangan Bawah
          </div>

          {/** Form Input  */}
          <div className="absolute left-[75px] top-[45px] w-[75px] h-[40px] border-secondary border-b-2 ">
            <div className="tooltip" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={0.67} step={0.01} />
                <div className="join-item btn btn-sm btn-info">K.ki</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[80px] top-[150px] w-[75px] h-[75px] border-secondary border-l-2">
            <div className="tooltip mt-5" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={12} />
                <div className="join-item btn btn-sm btn-info">D</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[300px] top-[45px] w-[75px] h-[40px] border-secondary border-b-2">
            <div className="tooltip" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={15} />
                <div className="join-item btn btn-sm btn-info">D</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[225px] top-[270px] w-[75px] h-[40px] border-secondary border-b-2">
            <div className="tooltip" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={20} />
                <div className="join-item btn btn-sm btn-info">D</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[150px] top-[360px] w-[150px] h-[40px] border-secondary border-b-2 ">
            <div className="tooltip mb-2" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={0.25} />
                <div className="join-item btn btn-sm btn-info">Lb</div>
              </div>
            </div>
            Tumpuan
          </div>
          <div className="absolute left-[300px] top-[360px] w-[300px] h-[40px] border-secondary border-b-2 ">
            <div className="btn btn-sm btn-ghost mb-2">{0.5} Lb</div>
            <br />
            Lapangan
          </div>


          <div className="absolute left-[150px] top-[490px] w-[105px] h-[40px] border-secondary border-b-2">
            <div className="tooltip mb-2" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={40} />
                <div className="join-item btn btn-sm btn-info">D</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[150px] top-[700px] w-[150px] h-[40px] border-secondary border-b-2">
            <div className="tooltip mb-2" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={500} />
                <div className="join-item btn btn-sm btn-info">mm</div>
              </div>
            </div>
          </div>

          <div className="absolute right-[90px] top-[630px] w-[130px] h-[50px] border-secondary border-l-2">
            <div className="tooltip mt-3" data-tip="VARIABLE">
              <div className="join join-horizontal">
                <input type="number" className="join-item input input-sm input-bordered w-20" value={0.3} />
                <div className="join-item btn btn-sm btn-info">H</div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div>
        <div className="flex justify-between">
          <button
            className="btn btn-primary join-item"
            onClick={() => document.getElementById('modal-add').showModal()}>
            Buat Proyek Baru
          </button>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Cari" />
            <span className="iconify bxs--search-alt-2"></span>
          </label>
        </div>
        <div className="overflow-x-auto w-full max-h-[60vh] my-5">
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
                    <td>{dayjs(d?.tanggal).format('YYYY-MM-DD')}</td>
                    <td>{d?.manajer}</td>
                    <td>{d?.staf}</td>
                    <td>{d?.status ? 'Selesai' : 'Progress'}</td>
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
