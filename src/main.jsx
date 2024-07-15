import ReactDOM from 'react-dom/client'
import App from './components/Layout/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Article1 from './components/Article1/Article1.jsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          { index: true, element: <Home /> },
          { path: "/article/top10", element: <Article1 /> },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
