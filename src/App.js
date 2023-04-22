import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchImage from './components/WatchImage';
import Demo from './components/Demo'
import ResultContainer from './components/ResultContainer';

function App() {

  const appRouter = createBrowserRouter([{
    path: '/',
    element: <Routes/>,
    children: [{
      path: '',
      element: <MainContainer/>
    },
    {
      path: '/watch',
      element: <WatchImage/>
    },
    {
      path: '/results',
      element: <ResultContainer/>
    },
    {
      path: '/demo',
      element: <Demo/>
    }
  ]
  }])


  return (
    <Provider store={store}>
       <RouterProvider router={appRouter}>
        <Head/>
        <Body/>
      </RouterProvider>
    </Provider>
  );
}

export default App;


const Routes = () => {
  return (
    <>
      <Head/>
      <Body/>
    </>
  )
}
