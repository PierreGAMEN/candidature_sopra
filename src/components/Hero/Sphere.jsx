/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import "./sphere.scss";

const Sphere = () => {
  const sphereRef = useRef();
  const text = "Sopra steria et Pierre GAMEN, vers une alliance stratégique";


  return (
    <>
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.3}
        minPolarAngle={Math.PI / 4} // Limite la rotation verticale minimale (en radians)
        maxPolarAngle={Math.PI / 2} // Limite la rotation verticale maximale (en radians)
        minDistance={6} // Distance minimale de zoom
        maxDistance={8} // Distance maximale de zoom/>
      />

      <directionalLight position={[4, 3, 3]} intensity={4} />
      <ambientLight intensity={1.5} />
      <group>
        <mesh>
          <sphereGeometry ref={sphereRef} args={[2.5, 32, 32]} />
          <meshStandardMaterial color="lightblue" wireframe />
        </mesh>
        <Html position={[-5, 0, 1]}>
          <div className="hero_text">{text}</div>
        </Html>
      </group>
    </>
  );
};

export default Sphere;
