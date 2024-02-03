import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Mentor from './components/getMentor/mentor';
import Add from './components/addMentor/addMentor'

//we install 3 package axios, react-router-dom, react-hot-toast

const route = createBrowserRouter([
  {
    path:"/",
    element: <Mentor/>,      // we will pass component here
  },
  {
    path:"/edit",
    element: "Edit"      // we will pass component here
  },
  {
    path:"/add",
    element: <Add/>     // we will pass component here
  },
])
function App() {
  return (
    //      WE HAVE CREATED ROUTES ABOVE WE NEED TO PROVIDE THEM HERE USING "RouterProvider" and we have pass "route" to it

    <div className="App">
      <RouterProvider router={route}>       

      </RouterProvider>
    </div>
  );
}

export default App;
