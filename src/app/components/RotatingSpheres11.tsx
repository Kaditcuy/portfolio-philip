"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface RotatingSpheresProps {
  textures: string[];
}

const RotatingSpheres = ({ textures }: RotatingSpheresProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const initScene = async () => {
      // ✅ Dynamically Import OrbitControls and DecalGeometry
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
      const { DecalGeometry } = await import("three/examples/jsm/geometries/DecalGeometry.js");

      // ✅ Setup Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 15;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(250, 250);
      mountRef.current?.appendChild(renderer.domElement);

      // ✅ Load Textures
      const textureLoader = new THREE.TextureLoader();
      const spheres: THREE.Mesh[] = [];

      const geometry = new THREE.SphereGeometry(3, 32, 32);
      const baseMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(215 / 255, 213 / 255, 208 / 255), // Light gray
        roughness: 0.5,
        metalness: 0.1 
      });

      textures.forEach((texturePath, index) => {
        const sphere = new THREE.Mesh(geometry, baseMaterial);
        scene.add(sphere);
        spheres.push(sphere);

        // ✅ Arrange spheres in a circle
        const angle = (index / textures.length) * Math.PI * 2;
        sphere.position.set(Math.cos(angle) * 10, Math.sin(angle) * 10, 0);

        // ✅ Load and Apply Decal
        textureLoader.load(texturePath, (texture) => {
          const decalSize = new THREE.Vector3(2, 2, 2);
          const decalPosition = new THREE.Vector3(0, 0, 3.1); // Adjust for visibility
          const decalRotation = new THREE.Euler(0, 0, 0); // Correct rotation

          const decalMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            depthTest: false,
            depthWrite: false, // ✅ Ensure decals render on top
          });

          const decalGeometry = new DecalGeometry(sphere, decalPosition, decalRotation, decalSize);
          const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
          sphere.add(decalMesh);
        });
      });

      // ✅ Add Lighting
      const light = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(light);

      // ✅ Add Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.rotateSpeed = 0.5;

      // ✅ Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        spheres.forEach((sphere) => {
          sphere.rotation.y += 0.005;
        });
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // ✅ Cleanup Function
      return () => {
        controls.dispose();
        renderer.dispose();
        mountRef.current?.removeChild(renderer.domElement);
      };
    };

    initScene();

    // Cleanup when component unmounts
    return () => {
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, [textures]);

  return <div ref={mountRef} className="w-[250px] h-[250px]" />;
};

export default RotatingSpheres;
