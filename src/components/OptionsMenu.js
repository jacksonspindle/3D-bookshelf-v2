import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
import App from '../App'
import CreateNewBook from './CreateNewBook'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry } from 'three'

 
export default function OptionsMenu() {


    

    const [new3DBookSearch, setNew3DBookSearch] = useState("");
    // const [newSearch, setNewSearch] = useState("");
    // console.log(newSearch)

    // let  searchInput  = document.getElementById('search')
    // let bookSearch = searchInput.value.replace(/\s/g, '%')


    //  var googleBooksAPI = `https://www.googleapis.com/books/v1/volumes?q=${newSearch}&key=AIzaSyB-eY3THmPgmrOUocC5878fMAvp2RpfjF0`;
    //                 console.log(googleBooksAPI)
    //                 $.getJSON(googleBooksAPI, function (response) {
    //                     console.log(response.items)

    //                     // This Gets the # of pages of the book searched -- will be used to determine width of 3D mesh
    //                     var bookWidth = response.items[0].volumeInfo.pageCount
    //                     // console.log(bookWidth)
    //                 })
    

    return(
        <div>
            {/* <input 
                id='search' 
                type="text" 
                onChange= { () =>{

                // let  searchInput  = document.getElementById('search')
                
                if (searchInput && searchInput.value) {


                     // This replaces all spaces in the string input value with % so that API link still works 
                    // let bookSearch = searchInput.value.replace(/\s/g, '%')
                    // console.log(bookSearch) 

                    // var googleBooksAPI = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&key=AIzaSyB-eY3THmPgmrOUocC5878fMAvp2RpfjF0`;
                    // console.log(googleBooksAPI)
                    // $.getJSON(googleBooksAPI, function (response) {
                    //     console.log(response.items)

                    //     This Gets the # of pages of the book searched -- will be used to determine width of 3D mesh
                    //     var bookWidth = response.items[0].volumeInfo.pageCount
                    //     console.log(bookWidth)
                     })

                    // const bookMesh = [<div >
                    //                     <Canvas  className='canvas' >
                    //                     <ambientLight intensity={0.1}  />
                    //                         <directionalLight position={[0, 0, 0]} />
                    //                         <mesh rotation={[0,.5,0]} >
                    //                             <boxGeometry args={[6, 9, 4]} />
                    //                             <meshStandardMaterial />
                    //                         </mesh>
                    //                         <OrbitControls minDistance={12} maxDistance={12} />
                                                
                    //                     </Canvas>
                    //                 </div>]
                    
                    
                    // () => setNew3DBookSearch(bookMesh)

                    

                    
  
                    // function newBookMesh() {
                    //     return(
                    //         <div >
                    //             <Canvas  className='canvas' >
                    //             <ambientLight intensity={0.1}  />
                    //                 <directionalLight position={[0, 0, 0]} />
                    //                 <mesh rotation={[0,.5,0]} >
                    //                     <boxGeometry args={[6, 9, 4]} />
                    //                     <meshStandardMaterial />
                    //                 </mesh>
                    //                 <OrbitControls minDistance={12} maxDistance={12} />
                                        
                    //             </Canvas>
                    //         </div>
                    //     )
                    // }
                   
                
                
                    // <CreateNewBook />
                }else {
                    


                }

                

            }}
            ></input> */}
            <input id='search'
                   type="text"
                   ></input>
            <button type="submit" onClick={() => setNew3DBookSearch("This is a test")}>Search</button>
            <div>
            {}
                {/* {{new3DBookSearch}} */}
                {/* <div >
                                <Canvas  className='canvas' >
                                <ambientLight intensity={0.1}  />
                                    <directionalLight position={[0, 0, 0]} />
                                    <mesh rotation={[0,.5,0]} >
                                        <boxGeometry args={[6, 9, 4]} />
                                        <meshStandardMaterial />
                                    </mesh>
                                    <OrbitControls minDistance={12} maxDistance={12} />
                                        
                                </Canvas>
                            </div> */}
            </div>
        </div> 
    )

}

// <div >
//             <Canvas  className='canvas' >
//                <ambientLight intensity={0.1}  />
//                 <directionalLight position={[0, 0, 0]} />
//                 <mesh rotation={[0,.5,0]} >
//                     <boxGeometry args={[6, 9, 4]} />
//                     <meshStandardMaterial />
//                 </mesh>
//                 <OrbitControls minDistance={12} maxDistance={12} />
                    
//             </Canvas>
//         </div>