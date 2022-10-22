import cors from "cors";
import express, { Application } from "express";
import session from "express-session";
import routes from "./routes";
import sequelize from "./sequelize";
import socket from "./socket";

const app: Application = express();
const port: number = 8000;
const FileStore = require("session-file-store")(session);

const sessionMiddleware = session({
  secret: "kakaotalk",
  saveUninitialized: true,
  cookie: { secure: false },
  resave: false,
  store: new FileStore(),
});
app.use(sessionMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

sequelize.sync({ force: true });

app.use("/", routes);

const server = app.listen(port, () => {
  console.log("start");
});

socket(server, app, sessionMiddleware);
