'use client'
export default function Home() {
  return (
    <div className="w-full max-w-screen-xl">
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li><a>Beranda</a></li>
          <li>Semua Proyek</li>
        </ul>
      </div>


      <div className="">
        <div className="flex justify-between">
          <div class="join">
            <button
              class="btn btn-primary join-item"
              onClick={() => document.getElementById('modal-add').showModal()}>
              Buat Proyek Baru
            </button>
            {/* <button class="btn btn-sm join-item">Preview</button> */}
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>3/25/2021</td>
                <td>Quality Control Specialist</td>
                <td>Canada</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>3/25/2021</td>
                <td>Desktop Support Technician</td>
                <td>United States</td>
              </tr>
              <tr>
                <th>3</th>
                <td>China</td>
                <td>8/15/2020</td>
                <td>Carroll Group</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Marjy Ferencz</td>
                <td>3/25/2021</td>
                <td>Crimson</td>
                <td>Russia</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Yancy Tear</td>
                <td>5/22/2020</td>
                <td>Brazil</td>
                <td>Indigo</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Wiza, Bins and Emard</td>
                <td>12/8/2020</td>
                <td>Venezuela</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>7</th>
                <td>Schuster-Schimmel</td>
                <td>2/17/2021</td>
                <td>Philippines</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <th>8</th>
                <td>Sammy Seston</td>
                <td>5/23/2020</td>
                <td>Crimson</td>
                <td>Crimson</td>
              </tr>
              <tr>
                <th>9</th>
                <td>Lesya Tinham</td>
                <td>2/21/2021</td>
                <td>Philippines</td>
                <td>Maroon</td>
              </tr>
              <tr>
                <th>10</th>
                <td>Zaneta Tewkesbury</td>
                <td>6/23/2020</td>
                <td>VP Marketing</td>
                <td>Green</td>
              </tr>
              <tr>
                <th>11</th>
                <td>Hilpert Group</td>
                <td>7/9/2020</td>
                <td>Poland</td>
                <td>Indigo</td>
              </tr>
              <tr>
                <th>12</th>
                <td>Sophi Biles</td>
                <td>2/12/2021</td>
                <td>Indonesia</td>
                <td>Maroon</td>
              </tr>
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

          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text-alt">Nama Proyek</span>
            </div>
            <input type="text" placeholder="Nama Proyek" class="input input-bordered w-full max-w-xs" autoFocus={true}/>
          </label>
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text-alt">Tanggal</span>
            </div>
            <input type="date" placeholder="Tanggal" class="input input-bordered w-full max-w-xs" />
          </label>

          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text-alt">Manajer</span>
            </div>
            <input type="text" placeholder="Manajer" class="input input-bordered w-full max-w-xs" />
          </label>
          <div className="mt-5">

          <button className="btn btn-primary">
            Simpan
          </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
