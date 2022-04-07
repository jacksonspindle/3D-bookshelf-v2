import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Scene  from './components/Scene'
import OptionsMenu from './components/OptionsMenu'
import CreateNewBook from './components/CreateNewBook'


export default function App() {
    return (
        <div>
            <Navbar />
            <OptionsMenu />

            <Scene />
        </div>
    )
}