import { Express } from "express";

export const web = express();
web.use(express.json());