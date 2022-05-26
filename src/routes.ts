import { Express, Request, Response } from 'express';
import { createSessionHandler } from './controllers/session.controller';
import { createUserHandler } from './controllers/user.controller';
import validateResource from "./middleware/validateResource"
import { createSessionScheam } from './schema/session.schema';
import { createUserScheam } from './schema/user.schem';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200)
  });

  app.post("/api/users", validateResource(createUserScheam), createUserHandler);
  
  app.post("/api/sessions", validateResource(createSessionScheam), createSessionHandler);
}

export default routes;
