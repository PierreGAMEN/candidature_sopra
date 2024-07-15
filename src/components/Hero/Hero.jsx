// src/App.jsx
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import "./hero.scss";
import { Stars } from "@react-three/drei";
import OrbitingSphere from "./OrbitingSphere";


const Hero = () => {

  return (
    <div className="hero">
      <Canvas
        style={{
          background: "linear-gradient(to right, #0b183b 0%, #0b183b 70%, #804814 100%)"
          // background: "#0b183b"
        }}
      >
        <Sphere />
        <Stars count={5000} size={50} />
        <OrbitingSphere center={[0, 0, 5]} radius={8} speed={0.4} />
        
      </Canvas>
    </div>
  );
};

export default Hero;
