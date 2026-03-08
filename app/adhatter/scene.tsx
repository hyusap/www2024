"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type HatMotion = {
  offset: number;
  roll: number;
};

export default function AdHatterScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#e8bca1");
    scene.fog = new THREE.Fog("#e8bca1", 5.5, 13);

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;

    scene.add(new THREE.AmbientLight("#f6dbc5", 0.95));

    const warmKey = new THREE.PointLight("#ffbe91", 18, 30, 2);
    warmKey.position.set(-1.3, 4.5, 1.8);
    warmKey.castShadow = true;
    scene.add(warmKey);

    const bounce = new THREE.PointLight("#9ef7cb", 3.5, 15, 2);
    bounce.position.set(2.8, 1.4, 0.4);
    scene.add(bounce);

    const wallMat = new THREE.MeshStandardMaterial({
      color: "#efe0d2",
      roughness: 0.96,
      metalness: 0,
    });

    const leftWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 5.2, 8),
      wallMat,
    );
    leftWall.position.set(-4, 2.55, 0);
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const backWall = new THREE.Mesh(
      new THREE.BoxGeometry(8, 5.2, 0.1),
      wallMat,
    );
    backWall.position.set(0, 2.55, -4);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const ceiling = new THREE.Mesh(
      new THREE.BoxGeometry(8.1, 0.1, 8.1),
      new THREE.MeshStandardMaterial({ color: "#f1d8c8", roughness: 0.95 }),
    );
    ceiling.position.set(0, 5.05, 0);
    scene.add(ceiling);

    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(14, 0.08, 14),
      new THREE.MeshStandardMaterial({ color: "#6a5447", roughness: 0.93 }),
    );
    floor.position.set(0, -0.04, 0);
    floor.receiveShadow = true;
    scene.add(floor);

    const bedBase = new THREE.Mesh(
      new THREE.BoxGeometry(2.7, 0.46, 2.2),
      new THREE.MeshStandardMaterial({ color: "#755d48", roughness: 0.85 }),
    );
    bedBase.position.set(-2.9, 0.26, -2.9);
    bedBase.castShadow = true;
    bedBase.receiveShadow = true;
    scene.add(bedBase);

    const mattress = new THREE.Mesh(
      new THREE.BoxGeometry(2.45, 0.16, 2.04),
      new THREE.MeshStandardMaterial({ color: "#f2ece2", roughness: 0.95 }),
    );
    mattress.position.set(-2.9, 0.56, -2.9);
    mattress.castShadow = true;
    mattress.receiveShadow = true;
    scene.add(mattress);

    const railY = 3.6;
    const railZ = -3.87;

    const conveyorRail = new THREE.Mesh(
      new THREE.BoxGeometry(8.2, 0.14, 0.12),
      new THREE.MeshStandardMaterial({
        color: "#232833",
        roughness: 0.52,
        metalness: 0.3,
      }),
    );
    conveyorRail.position.set(-0.2, railY, railZ);
    conveyorRail.castShadow = true;
    conveyorRail.receiveShadow = true;
    scene.add(conveyorRail);

    const beltStrip = new THREE.Mesh(
      new THREE.BoxGeometry(8.2, 0.03, 0.18),
      new THREE.MeshStandardMaterial({
        color: "#0e1218",
        roughness: 0.28,
        metalness: 0.35,
      }),
    );
    beltStrip.position.set(-0.2, railY + 0.09, railZ + 0.01);
    scene.add(beltStrip);

    const slotFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.38, 0.15),
      new THREE.MeshStandardMaterial({
        color: "#171c24",
        roughness: 0.56,
        metalness: 0.14,
      }),
    );
    slotFrame.position.set(-3.78, railY + 0.02, -3.9);
    scene.add(slotFrame);

    const slotVoid = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.22, 0.03),
      new THREE.MeshStandardMaterial({ color: "#040608", roughness: 0.2 }),
    );
    slotVoid.position.set(-3.78, railY + 0.02, -3.83);
    scene.add(slotVoid);

    const pegGeometry = new THREE.CylinderGeometry(0.012, 0.012, 0.08, 12);
    const pegMaterial = new THREE.MeshStandardMaterial({
      color: "#a6adb8",
      roughness: 0.35,
      metalness: 0.7,
    });
    const pegs: THREE.Mesh[] = [];

    const startX = -5.2;
    const endX = 3.4;
    const trackLength = endX - startX;

    for (let index = 0; index < 28; index += 1) {
      const peg = new THREE.Mesh(pegGeometry, pegMaterial);
      peg.rotation.z = Math.PI / 2;
      peg.position.set(
        startX + (index / 28) * trackLength,
        railY - 0.04,
        -3.84,
      );
      scene.add(peg);
      pegs.push(peg);
    }

    const hatMotion: HatMotion[] = Array.from({ length: 10 }, (_, index) => ({
      offset: (index / 10) * trackLength,
      roll: (index % 2 === 0 ? -1 : 1) * (0.08 + (index % 3) * 0.03),
    }));

    const hats: THREE.Group[] = [];
    const loader = new GLTFLoader();
    let cancelled = false;

    loader
      .loadAsync("/hat.gltf")
      .then((gltf) => {
        if (cancelled) {
          return;
        }

        const source = gltf.scene;
        const sourceBounds = new THREE.Box3().setFromObject(source);
        const sourceSize = new THREE.Vector3();
        sourceBounds.getSize(sourceSize);

        const maxDim = Math.max(sourceSize.x, sourceSize.y, sourceSize.z) || 1;
        const scale = 0.52 / maxDim;

        const cutY = sourceBounds.min.y + sourceSize.y * 0.67;
        const clipCapOnly = new THREE.Plane(new THREE.Vector3(0, 1, 0), -cutY);

        hatMotion.forEach(() => {
          const hat = source.clone(true);
          hat.scale.setScalar(scale);

          hat.traverse((node) => {
            if (!(node instanceof THREE.Mesh)) {
              return;
            }

            const base = node.material;
            if (Array.isArray(base)) {
              node.material = base.map((material) => {
                const cloned = material.clone();
                cloned.clippingPlanes = [clipCapOnly];
                return cloned;
              });
            } else {
              const cloned = base.clone();
              cloned.clippingPlanes = [clipCapOnly];
              node.material = cloned;
            }

            node.castShadow = true;
            node.receiveShadow = true;
          });

          scene.add(hat);
          hats.push(hat);
        });
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        hatMotion.forEach(() => {
          const hat = new THREE.Group();

          const brim = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.24, 0.04, 24),
            new THREE.MeshStandardMaterial({
              color: "#e5e9f4",
              roughness: 0.8,
            }),
          );
          brim.castShadow = true;

          const crown = new THREE.Mesh(
            new THREE.CylinderGeometry(0.17, 0.21, 0.18, 24),
            new THREE.MeshStandardMaterial({
              color: "#d95b55",
              roughness: 0.72,
            }),
          );
          crown.position.y = 0.1;
          crown.castShadow = true;

          hat.add(brim, crown);
          scene.add(hat);
          hats.push(hat);
        });
      });

    const clock = new THREE.Clock();
    let frameId = 0;

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (height === 0) {
        return;
      }

      const mobile = width < 720;
      camera.position.set(
        mobile ? -1.85 : -1.72,
        mobile ? 2.34 : 2.52,
        mobile ? 1.42 : 1.1,
      );
      camera.lookAt(-2.55, 3.44, -3.86);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      pegs.forEach((peg, index) => {
        const base = (index / pegs.length) * trackLength;
        const looped = (elapsed * 2 + base) % trackLength;
        peg.position.x = startX + looped;
      });

      hats.forEach((hat, index) => {
        const motion = hatMotion[index];
        const looped = (elapsed * 0.92 + motion.offset) % trackLength;

        hat.position.set(startX + looped, railY - 0.06, -3.79);
        hat.rotation.set(
          0.14 + Math.sin(elapsed * 1.3 + index) * 0.04,
          Math.PI,
          motion.roll,
        );
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);

      scene.traverse((node) => {
        if (!(node instanceof THREE.Mesh)) {
          return;
        }

        node.geometry.dispose();
        if (Array.isArray(node.material)) {
          node.material.forEach((material) => material.dispose());
        } else {
          node.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}
