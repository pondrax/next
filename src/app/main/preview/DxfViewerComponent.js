import React, { useEffect, useRef, useState } from 'react';
import { DxfViewer } from 'dxf-viewer';
// import * as THREE from 'three';

 
// const DXF = dynamic(() => import('dxf-viewer'), {
//   ssr: false,
// })

// const DxfViewer = DXF.DxfViewer;

const DxfViewerComponent = ({ dxfUrl, fonts, options }) => {
  const canvas = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dxfViewer, setDxfViewer] = useState(null);
  const [layers, setLayers] = useState([]);

  useEffect(() => {

    const viewer = new DxfViewer(canvas.current, {
      // clearColor: new THREE.Color('fffff00'),
      clearAlpha: 0,
      autoResize: true,
      colorCorrection: true,
      sceneOptions: {
        wireframeMesh: true
      },
      antialias: true,
    });
    setDxfViewer(viewer);
    // console.log()
    return () => {
      if (viewer) {
        viewer.Destroy();
      }
    };
  }, []);

  useEffect(() => {
    const loadDxf = async () => {
      if (dxfUrl !== null) {
        setIsLoading(true);
        setError(null);
        try {
          await dxfViewer.Load({
            url: dxfUrl,
            fonts: ['/Roboto-LightItalic.ttf'],
          });

          const visibleLayers = dxfViewer.GetLayers()
          visibleLayers.forEach(layer => layer.visible = true)
          console.log(visibleLayers)

          setLayers(visibleLayers);
        } catch (error) {
          console.warn(error);
          setError(error.toString());
        } finally {
          setIsLoading(false);
        }
      } else {
        setError(null);
        setIsLoading(false);
      }
    };

    loadDxf();

  }, [dxfUrl, fonts]);

  const toggleLayerVisibility = (layer) => {
    const updatedLayers = layers.map((l) => {
      if (l.name === layer.name) {
        return { ...l, visible: !l.visible };
      }
      return l;
    });

    dxfViewer.ShowLayer(layer.name, !layer.visible);
    setLayers(updatedLayers);
  };

  return (
    <div className="w-full h-full bg-base-200 rounded-xl my-5 relative">
      {isLoading && <div>Loading...</div>}
      {error && (
        <div className="error" title={error}>
          <img src="warning" className="text-red" style={{ fontSize: '4rem' }} alt="warning" />
          Error occurred: {error}
        </div>
      )}
      {layers.length > 0 ? (
        <div className='fixed bottom-0 left-0 w-64 p-5 m-5 lg:m-0 z-20 text-xs bg-base-300 rounded-xl opacity-75'>
          <div className='text-xl mb-5'>Layers</div>
          <div className='max-h-96 overflow-y-auto'>
            {layers.map((layer) => (
              <div key={layer.name}>
                <input
                  type="checkbox"
                  id={layer.name}
                  checked={layer.visible}
                  onChange={() => toggleLayerVisibility(layer)}
                  className='mr-2'
                />
                <label htmlFor={layer.name}>{layer.name}</label>
              </div>
            ))}
          </div>
        </div>
      ) : ''}


      <div className="w-full h-full min-h-screen min-w-48 bg-base-200 rounded-xl" ref={canvas} />
    </div>
  );
};

export default DxfViewerComponent;
