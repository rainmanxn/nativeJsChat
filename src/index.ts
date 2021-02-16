import { Router } from './lib/Router/Router.js';
import { Login } from './pages/Login/index.js';
import { Page } from './pages/Index/index.js';
import { Register } from './pages/Register/index.js';
import { Profile } from './pages/Profile/index.js';
import { Main } from './pages/Main/index.js';
import { Error404Page } from './pages/404/index.js';
import { Error500Page } from "./pages/500/index.js";

const router = new Router(".app");

router
  .use('/', Page)
  .use('/register', Register)
  .use('/login', Login)
  .use('/profile', Profile)
  .use('/main', Main)
  .use('/404', Error404Page)
  .use('/500', Error500Page)
  .use(`/.*`, Error404Page)
  .start();
