import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Error from './pages/Error/Error'
import Dashboard from './pages/Dashboard/Dashboard'
import CardDetal from './pages/CardDetal/CardDetal'

export const AppContext = createContext()

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
      {
        path: '/card-detal',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            element: <CardDetal />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
])

function App() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    fullTime: null,
  })

  return (
    <div className='App'>
      <AppContext.Provider value={{ formData, setFormData }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
