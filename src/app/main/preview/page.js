'use client'

import React, { useState } from 'react';
// import DxfViewerComponent from './DxfViewerComponent'; // Adjust the path if needed
import dynamic from 'next/dynamic';

const DxfViewerComponent = dynamic(
  () => import('./DxfViewerComponent'),
  { ssr: false }
);
const Page = () => {
  const [dxfUrl, setDxfUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDxfUrl(url);
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='flex justify-between'>
        <input type="file" onChange={handleFileChange} />

        <div className='join join-horizontal'>
          <div className='btn btn-ghost btn-sm join-item'>Unduh sample: </div>
          <a href="/floorplan.dxf" className='btn btn-sm join-item'>Floorplan.dxf</a>
          <a href="/dimensions.dxf" className='btn btn-sm join-item'>Dimensions.dxf</a>
        </div>
      </div>
      <DxfViewerComponent dxfUrl={dxfUrl} fonts={null} options={{}} />
    </div>
  );
};

export default Page;