import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry } from 'three'
import { Camera } from 'three'
import { axios } from 'axios'
import $ from 'jquery'




export default function Scene() {


// var googleAPI = "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyB-eY3THmPgmrOUocC5878fMAvp2RpfjF0";

// $.getJSON(googleAPI, function (response) {
//     console.log(response.items);

// });

// console.log(response.items);
// let bookWidth = response.




    // axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyB-eY3THmPgmrOUocC5878fMAvp2RpfjF0").then(data => {
    //     console.log(data)
    // })
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