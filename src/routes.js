import App from './App';
import Home from './components/Home';
import About from './components/Todos';
import Posts from './components/Posts';
import Todos from './components/Todos';
import NotFound from './components/NotFound';

import loadData from './helpers/loadData';

const Routes = [
    {
      path: '/',
      exact: true,
      component: Home
    },
    {
      path: '/about',
      component: About,
      loadData: () => loadData('about')
    },
    {
      path: '/posts',
      component: Posts,
      loadData: () => loadData('posts')
    },
    {
      path: '/todos',
      component: Todos,
      loadData: () => loadData('todos')
    },
    {
      component: NotFound
    }
  ];
  
  export default Routes;