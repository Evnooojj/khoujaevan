import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { createNoise3D } from 'simplex-noise'

const OceanMesh = () => {
    const mesh = useRef()
    const noise3D = useMemo(() => createNoise3D(), [])

    // Geometry parameters: width, height, widthSegments, heightSegments
    // Higher segments = smooth waves but more performance cost
    const geometry = useMemo(() => new THREE.PlaneGeometry(20, 20, 64, 64), [])

    // Config
    const speed = 0.2
    const noiseScale = 0.3
    const waveHeight = 0.5

    useFrame((state) => {
        const time = state.clock.getElapsedTime() * speed
        const { array, count } = mesh.current.geometry.attributes.position

        for (let i = 0; i < count; i++) {
            const x = array[i * 3]
            const y = array[i * 3 + 1]
            // Z animation based on X, Y and Time
            array[i * 3 + 2] = noise3D(x * noiseScale, y * noiseScale, time) * waveHeight
        }
        mesh.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
            <primitive object={geometry} attach="geometry" />
            <meshStandardMaterial
                color="#07A3B2"
                wireframe={true}
                roughness={0.4}
                metalness={0.8}
                emissive="#000000"
            />
        </mesh>
    )
}

const OceanBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#021F24]">
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#2C5364" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <OceanMesh />
                <fog attach="fog" args={['#021F24', 5, 20]} />
            </Canvas>
        </div>
    )
}

export default OceanBackground
