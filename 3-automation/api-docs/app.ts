import express, {json, urlencoded, Response as ExResponse, Request as ExRequest, NextFunction} from "express";
import { RegisterRoutes } from "./build/routes";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = require('../swagger.json')

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

const options = {
  swaggerOptions: {
      url: "/docs/swagger.json",
  },
}
app.get('/docs/swagger.json', (req, res) => res.json(swaggerDocument));
app.use('/docs', swaggerUi.serveFiles(swaggerDocument, options), swaggerUi.setup(swaggerDocument, options));

app.use("/", swaggerUi.serve, (req: ExRequest, res: ExResponse) => {
  return res.redirect('/docs')
});

RegisterRoutes(app);