import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'User teste',
    email: 'userteste@gmail.com',
    password_hash: 'testeste123',
  });

  return res.json(user);
});

export default routes;
