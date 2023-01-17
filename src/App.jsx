// Importación de  Librerías y otros archivos
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'

//Declarar Router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />} >

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

