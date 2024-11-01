import Layout from './Layout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css'
import Dashboard from './Container/Dashboard';
import GoogleProvider from './Context/GoogleDriveContext';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      
    },
    {
      path: '/dashboard',
      element:<Dashboard />
    }
  ])

  return (
    <>
    <GoogleProvider>
    <RouterProvider router={router} />
    </GoogleProvider>
    </>
  )
}
export default App;
