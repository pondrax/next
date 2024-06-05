document.addEventListener('DOMContentLoaded', function() {
  const url = '/floorplan.dxf'; // Update this to the path of your DXF file

  // Fetch the DXF file
  fetch(url)
      .then(response => response.text())
      .then(dxfContent => {
          const parser = new DxfParser();
          const dxf = parser.parseSync(dxfContent);

          // Set up the renderer
          const renderer = new THREE.WebGLRenderer();
          renderer.setSize(window.innerWidth, window.innerHeight);
          document.body.appendChild(renderer.domElement);

          // Set up the scene
          const scene = new THREE.Scene();
          const cad = new ThreeDxf.Viewer(dxf, renderer, scene, 0, 0, window.innerWidth, window.innerHeight);

          // Add some lighting
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
          scene.add(ambientLight);

          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
          directionalLight.position.set(0, 70, 100);
          scene.add(directionalLight);

          // Animation loop
          function animate() {
              requestAnimationFrame(animate);
              renderer.render(scene, cad.camera);
          }

          animate();
      });
});
