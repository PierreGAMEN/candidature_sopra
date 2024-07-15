/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ShootingStar = () => {
  const starRef = useRef();

  // Initialiser la position aléatoire
  const initialPosition = new THREE.Vector3(
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10
  );

  // Vitesse aléatoire
  const speed = new THREE.Vector3(
    Math.random() * 0.02 - 0.01,
    Math.random() * 0.02 - 0.01,
    Math.random() * 0.02 - 0.01
  );

  useFrame(() => {
    if (starRef.current) {
      // Mettre à jour la position
      starRef.current.position.add(speed);

      // Réinitialiser la position si elle dépasse les limites
      if (
        starRef.current.position.x > 10 ||
        starRef.current.position.x < -10 ||
        starRef.current.position.y > 10 ||
        starRef.current.position.y < -10 ||
        starRef.current.position.z > 10 ||
        starRef.current.position.z < -10
      ) {
        starRef.current.position.set(
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        );
      }
    }
  });

  return (
    <mesh ref={starRef} position={initialPosition}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

export default ShootingStar;
