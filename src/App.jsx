
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Error from './pages/Error/Error'
import Dashboard from './pages/Dashboard/Dashboard'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
      },
   
    ],
  },
])



function App() {
 

  return (
  <div className="App">
   
   <RouterProvider router={router} />
  </div>
  )
}

export default App
