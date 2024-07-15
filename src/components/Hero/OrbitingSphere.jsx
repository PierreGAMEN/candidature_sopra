/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';


const OrbitingSphere = ({ center, radius, speed }) => {
    const OrbitingSphereRef = useRef();

    useFrame(({ clock }) => {
        if (OrbitingSphereRef.current) {
            const angle = clock.elapsedTime * speed;
            const x = center[0] + radius * Math.cos(angle);
            const z = center[0] + radius * Math.sin(angle);
            
            OrbitingSphereRef.current.position.set(x, center[1], z);
        }
    });

    return (
        <mesh ref={OrbitingSphereRef} position={center}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="lightblue" />
        </mesh>
    );
};

export default OrbitingSphere;
