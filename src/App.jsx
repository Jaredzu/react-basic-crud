// Importación de  Librerías y otros archivos
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Admin from './Admin'
import Home from './Home'
import Navbar from './Navbar'


//Declarar Router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />} >
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
        </Route>
    )
)



// Declarar componente
const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
// Exportamos el componente
export default App // Default export JS

