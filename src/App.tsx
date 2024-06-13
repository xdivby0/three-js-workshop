import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Environment, OrbitControls, Sphere, useTexture } from '@react-three/drei';
import { useControls } from 'leva';
import { DoubleSide, ShaderMaterial } from 'three';

const Scene = () => {
    const controls = useControls({
    });

    return (
        <>
            <Box>
                <meshStandardMaterial wireframe={true}/>
            </Box>
        </>
    );
};

const App = () => {
    return (
        <Canvas camera={{ fov: 70, position: [0, 10, 30] }}>
            <OrbitControls autoRotate={true} autoRotateSpeed={0.5}/>
            <Scene/>
        </Canvas>
    );
};

export default App;
