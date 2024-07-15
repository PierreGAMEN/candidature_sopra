/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Points, PointsMaterial, SphereGeometry } from 'three';

const Stars = ({ count, size }) => {
    const particlesRef = useRef();

    // Générer aléatoirement la position des particules
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * size; // x
        positions[i3 + 1] = (Math.random() - 0.5) * size; // y
        positions[i3 + 2] = (Math.random() - 0.5) * size; // z
    }

    // Mise à jour des particules dans useFrame
    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.0005; // Rotation des particules
        }
    });

    return (
        <Points ref={particlesRef} position={[0, 0, 0]}>
            <SphereGeometry args={[1, 5, 5]} />
            <PointsMaterial color="white" size={0.02}>
                <bufferGeometry attach="geometry" />
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </PointsMaterial>
        </Points>
    );
};

export default Stars;
