import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import Home from './components/home/Home';
import Details from './components/details/Details';

const routes = [
  {
    path: '/',
    domain: 'Home',
    element: <Home />,
  },
  {
    path: '/country/:name',
    domain: 'Details',
    element: <Details />,
  },
];

const App = () => (

  <>
    <LoadingBar className="App-loading-bar" />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </>
);

export default App;
