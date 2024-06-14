import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Loginform/Login';
import Signup from './Components/Signupform/Signup';

function App() {
  const route=createBrowserRouter([
  
  {path:('/'), 
   element:<Login/>,
  },
   { path:('/signup'),
    element:<Signup/>,

   },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>

    </div>
  );
}

export default App;
