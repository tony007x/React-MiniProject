import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Calculator from './pages/calculator.tsx'
import './index.css'
import Todo from './pages/todo.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "calculator",
    element: <Calculator />
  },
  {
    path: "todo",
    element: <Todo />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  , 
)