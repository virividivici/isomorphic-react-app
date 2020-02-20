import App from './App';
import Home from './containers/Home';
import About from './containers/Todos';
import Posts from './containers/Posts';
import Todos from './containers/Todos';
import NotFound from './containers/NotFound';

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