import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry } from 'three'

export default function CreateNewBook() {
    return(
        <div >
            <Canvas  className='canvas' >
               <ambientLight intensity={0.1}  />
                <directionalLight position={[0, 0, 0]} />
                <mesh rotation={[0,.5,0]} >
                    <boxGeometry args={[6, 9, 4]} />
                    <meshStandardMaterial />
                </mesh>
                <OrbitControls minDistance={12} maxDistance={12} />
            </Canvas>
        </div>
    )
}