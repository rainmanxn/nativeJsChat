import { Router } from './lib/Router/Router';
import { Login } from './pages/Login';
import { Page } from './pages/Index';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Main } from './pages/Main';
import { Error404Page } from './pages/404';
import { Error500Page } from './pages/500';
import './styles.scss';

const router = new Router('.app');

router
  .use('/', Page)
  .use('/register', Register)
  .use('/login', Login)
  .use('/profile', Profile)
  .use('/main', Main)
  .use('/404', Error404Page)
  .use('/500', Error500Page)
  .use('/.*', Error404Page)
  .start();
