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
        Susunan Balok-Kolom
      </div>


      <div id="control" className="min-h-screen mb-5">
        <div>
          <div className="p-2">
            <input className="input input-bordered" value={"AS ABC-001"} />
          </div>
          <div className="overflow-x-auto">
            <div className="join join-horizontal bg-base-200 gap-2 px-2 my-10">
              <div className="tooltip tooltip-open py-2" data-tip="Kolom">
                <input className="input input-sm text-center bg-neutral text-neutral-content" value={100} style={{ width: 100 / 2 }} />
              </div>
              <div className="tooltip  py-2" data-tip="Balok">
                <input className="input input-sm text-center" value={200} style={{ width: 200 / 2 }} />
              </div>
              <div className="tooltip tooltip-open py-2" data-tip="Kolom">
                <input className="input input-sm text-center bg-neutral text-neutral-content" value={100} style={{ width: 100 / 2 }} />
              </div>
              <div className="tooltip py-2" data-tip="Balok">
                <input className="input input-sm text-center" value={500} style={{ width: 500 / 2 }} />
              </div>
              <div className="tooltip tooltip-open py-2" data-tip="Kolom">
                <input className="input input-sm text-center bg-neutral text-neutral-content" value={200} style={{ width: 200 / 2 }} />
              </div>
              <div className="tooltip py-2" data-tip="Balok">
                <input className="input input-sm text-center" value={500} style={{ width: 500 / 2 }} />
              </div>
              <div className="tooltip tooltip-open py-2" data-tip="Kolom">
                <input className="input input-sm text-center bg-neutral text-neutral-content" value={200} style={{ width: 200 / 2 }} />
              </div>
              <div className="tooltip py-2" data-tip="Balok">
                <input className="input input-sm text-center" value={500} style={{ width: 500 / 2 }} />
              </div>
              <div className="tooltip tooltip-open py-2" data-tip="Kolom">
                <input className="input input-sm text-center bg-neutral text-neutral-content" value={200} style={{ width: 200 / 2 }} />
              </div>
              <div className="tooltip py-2" data-tip="Balok">
                <input className="input input-sm text-center" value={500} style={{ width: 500 / 2 }} />
              </div>
              <div className="tooltip tooltip-open py-2" data-tip="Kolom">
                <input className="input input-sm text-center bg-neutral text-neutral-content" value={200} style={{ width: 200 / 2 }} />
              </div>
            </div>
          </div>
          {/* <ul className="menu menu-horizontal bg-base-200 rounded-box">
            <li>
              <a className="tooltip tooltip-open active" data-tip="Kolom" style={{width:100}}>
                  <input className="input input-bordered input-sm w-24"/>
                <div className="absolute top-12 left-0">
                  <input className="input input-bordered input-sm w-24"/>
                </div>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-right" data-tip="Details">2 </a>
            </li>
            <li>
              <a className="tooltip tooltip-right" data-tip="Stats">
                3</a>
            </li>
          </ul> */}
          {/* <div className="join join-horizontal bg-base-200 p-3">
            <div className="tooltip tooltip-open join-item" data-tip="Kolom">
              <input className="input input-bordered join-item"/>
            </div>
            <div className="tooltip tooltip-open join-item" data-tip="Balok">
              <input className="input input-bordered joint-item"/>
            </div>
          </div> */}
          {/* <ul class="join join-horizontal p-5 bg-base-200 rounded-box">
            <li className="tooltip tooltip-open bg-base-100" data-tip="Kolom">
              <input className="input input-sm input-bordered" />
            </li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul> */}
        </div>
      </div>
    </div>

  );
}
