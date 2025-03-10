import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About.jsx';
import Error from './Pages/Error.jsx';
import Home from './Components/Home.jsx';
import Contact from './Pages/Contact.jsx';
import RestMenu from './Components/RestMenu.jsx';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/menu/:id',
        element : <RestMenu/>
      },

    ],
    errorElement: <Error />
  },
 
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
     <StrictMode>
     <App />
     </StrictMode>
  </RouterProvider>
)
