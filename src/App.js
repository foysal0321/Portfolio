import logo from './logo.svg';
import './App.css';
import Main from './lyout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Routs';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>
      <Toaster />

      </RouterProvider>
     
    </div>
  );
}

export default App;
