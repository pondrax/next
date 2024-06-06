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
        <div className="bg-base-200 rounded-xl w-[900px] h-[750px] m-auto relative p-5 text-center" style={{ transform: 'scale(1)' }}>
          <div className="text-xl ">DATA BALOK</div>
          <div className="absolute left-[40px] top-[100px] w-[260px] h-[500px] border-base-content border-2 p-12">
            <div className="absolute top-[-30px]">TUMPUAN KIRI</div>
            <div className="absolute z-20 -m-1 h-[405px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="absolute top-0 w-4 h-4 bg-base-content rounded-full -m-1" style={{ left: i * (160/ 2) }}></div>
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="absolute bottom-0 w-4 h-4 -m-1 bg-base-content rounded-full" style={{ left: i * (160 / 3) }}></div>
              ))}
            </div>
            <div className="relative w-full h-full border-base-content border-2">
              <div className="absolute left-1/2 border-primary border-dashed border-l-2 h-full"></div>
              <div className="absolute top-1/2 border-primary border-dashed border-t-2 w-full"></div>


              <div className="absolute left-[-60px] top-[-40px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">N1</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={3} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-60px] top-[-40px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">D1</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>


              <div className="absolute left-[-60px] bottom-[-50px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">N2</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-60px] bottom-[-50px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">D2</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>

              <div className="absolute right-[-150px] top-[150px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">N3</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-150px] top-[190px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">D3</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>


              <div className="absolute right-[-200px] top-[40px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">DS</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-200px] top-[80px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">SS</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>


              <div className="absolute right-[-200px] bottom-[100px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">NH</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-200px] bottom-[60px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">DH</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>



              <div className="absolute right-[-200px] bottom-[-20px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">NV</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-200px] bottom-[-60px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">DV</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>

              <div className="absolute left-[-100px] bottom-[-120px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">P</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute left-[-100px] top-[100px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">t</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="absolute left-[500px] top-[100px] w-[260px] h-[500px] border-base-content border-2 p-12">
            <div className="absolute top-[-30px]">TUMPUAN KANAN</div>
            <div className="relative w-full h-full border-base-content border-2">
              <div className="absolute left-1/2 border-primary border-dashed border-l-2 h-full"></div>
              <div className="absolute top-1/2 border-primary border-dashed border-t-2 w-full"></div>


              <div className="absolute left-[-60px] top-[-40px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">N4</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-60px] top-[-40px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">D4</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>


              <div className="absolute left-[-60px] bottom-[-50px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">N5</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-60px] bottom-[-50px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">D5</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>



              <div className="absolute right-[-200px] top-[40px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">DT</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-200px] top-[80px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">ST</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>


              <div className="absolute right-[-200px] bottom-[100px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">NI</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-200px] bottom-[60px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">DI</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>



              <div className="absolute right-[-200px] bottom-[-20px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">NU</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
              </div>
              <div className="absolute right-[-200px] bottom-[-60px] w-[150px] h-[40px]">
                <div className="tooltip mb-2" data-tip="VARIABLE">
                  <div className="join join-horizontal">
                    <div className="join-item btn btn-sm btn-info">DU</div>
                    <input type="number" className="join-item input input-sm input-bordered w-20" value={4} />
                  </div>
                </div>
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
