import { Express, Request, Response } from 'express';
import { createUserHandler } from './controllers/user.controller';
import validateResource from "./middleware/validateResource"
import { createUserScheam } from './schema/user.schem';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200)
  });

  app.post("/api/users", validateResource(createUserScheam), createUserHandler);
}

export default routes;
