import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

const Cube = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparency

        renderer.setSize(300, 300); // Adjust size as needed
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshNormalMaterial(); // Use MeshNormalMaterial for black edges
        const cube = new THREE.Mesh(geometry, material);
        cube.scale.set(3, 3, 3); // Adjust cube scale
        scene.add(cube);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Add ambient light
        scene.add(ambientLight);

        camera.position.set(2, 2, 5); // Adjust camera position

        const controls = new OrbitControls(camera, renderer.domElement); // Initialize OrbitControls

        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            controls.update(); // Update OrbitControls

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            controls.dispose(); // Dispose OrbitControls to prevent memory leaks
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', bottom: '80px', left: '120px' }} />;
};

export default Cube;
