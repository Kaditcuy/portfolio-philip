"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface RotatingSpheresProps {
  textures: string[];
}

const RotatingSpheres = ({ textures }: RotatingSpheresProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(300, 300);
    mount.appendChild(renderer.domElement);
    camera.position.z = 20;

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 2).normalize();
    scene.add(directionalLight);

    const textureLoader = new THREE.TextureLoader();
    const spheres: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(3, 32, 32);

    // Arrange spheres in a grid or circular pattern
    textures.forEach((texturePath, index) => {
      const texture = textureLoader.load(texturePath);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Prevents stretching

      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.5,
        metalness: 0.3,
      });

      const sphere = new THREE.Mesh(geometry, material);
      const angle = (index / textures.length) * Math.PI * 2;
      sphere.position.set(Math.cos(angle) * 10, Math.sin(angle) * 10, 0);

      scene.add(sphere);
      spheres.push(sphere);
    });

    // Load OrbitControls dynamically
    let controls: import("three/examples/jsm/controls/OrbitControls.js").OrbitControls | undefined;

    const loadOrbitControls = async () => {
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.rotateSpeed = 0.5;
      controls.enableDamping = true;
    };

loadOrbitControls();


    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      spheres.forEach((sphere) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      controls?.dispose();
      spheres.forEach((sphere) => scene.remove(sphere));
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [textures]); // Include `textures` as dependency

  return (
    <div className="flex items-center justify-center h-[400px]">
      <div ref={mountRef} className="w-[300px] h-[300px]" />
    </div>
  );
};

export default RotatingSpheres;
