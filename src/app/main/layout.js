'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NEXT_PUBLIC_APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export default function RootLayout({ children }) {

  const [theme, setTheme] = useState(null);
  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem('theme')))
  }, []);
  useEffect(() => {
    if (theme != null) {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }, [theme]);

  return (
    <main>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-100 text-base-content p-5">
          {/* Page content here */}

          <div className="join mb-10 ">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="light" onChange={() => setTheme('light')} checked={theme == 'light'} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" onChange={() => setTheme('dark')} checked={theme == 'dark'} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" onChange={() => setTheme('retro')} checked={theme == 'retro'} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" value="cupcake" onChange={() => setTheme('cupcake')} checked={theme == 'cupcake'} /></li>
              </ul>
            </div>

          </div>
          <div className="flex flex-col items-center">
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Image src="/logo.webp" width={240} height={120} className="rounded-md" alt="logo" />
            </li>
            <li className="text-xl text-center mb-10">{NEXT_PUBLIC_APP_NAME}</li>

            <li>
              <Link href="/main">
                <span className="iconify bxs--home"></span>
                Beranda
              </Link>
            </li>
            <li>
              <details open>
                <summary>
                  <span className="iconify bxs--spreadsheet"></span>
                  Proyek
                </summary>
                <ul>
                  <li>
                    <Link href="/main/projects">
                      Semua Proyek
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/projects">
                      Data Balok
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/projects">
                      Data AS Kolom
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/projects">
                      Resume
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>
                  <span className="iconify bxs--server"></span>
                  Manajemen
                </summary>
                <ul>
                  <li>
                    <Link href="/main/manage">
                      Standar Umum
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li><Link href="/main/preview">Preview</Link></li>
            {/* <li><Link href="/main/material">Material</Link></li> */}
          </ul>

        </div>
      </div>
    </main>
  );
}
