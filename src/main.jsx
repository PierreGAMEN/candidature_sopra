import ReactDOM from 'react-dom/client'
import App from './components/Layout/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Article1 from './components/DetailedArticle/Article1/Article1.jsx';
import Article2 from './components/DetailedArticle/Article2/Article2.jsx';
import Article3 from './components/DetailedArticle/Article3/Article3.jsx';
import Article4 from './components/DetailedArticle/Article4/Article4.jsx';


const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          { index: true, element: <Home /> },
          { path: "article/top10", element: <Article1 /> },
          { path: "article/motivations", element: <Article2 /> },
          { path: "article/alliance", element: <Article3 /> },
          { path: "article/skills", element: <Article4 /> },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
