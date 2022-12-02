import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import ServiceSection from './Pages/Shared/ServiceComponent/ServiceSection/ServiceSection';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import Blog from './Pages/Blog/Blog';
import MyReviews from './Pages/MyReviews/MyReviews';
import AddService from './Pages/AddService/AddService';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home datasize={3}></Home>
        },
        {
          path: "/home",
          element: <Home datasize={3}></Home>
        },
        {
          path: '/service',
          element: <PrivateRoute><ServiceSection></ServiceSection></PrivateRoute>
        },
        {
          path: '/service/:id',
          loader: ({ params }) => fetch(`https://farias-cloud-kitchen.onrender.com/services/${params.id}`),
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> 
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/myreviews',
          element:<PrivateRoute> <MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/addservice',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div className="bg-lime-50">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
