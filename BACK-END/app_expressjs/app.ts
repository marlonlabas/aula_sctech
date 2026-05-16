import express from "express";
import dotenv from "dotenv";
import clientRouter from "./Router/clients";
import db from "./db";
import usersRouter from "./Router/users";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'pug');
app.set('views', './Views');


app.use('/', clientRouter);
app.use(usersRouter);


db.sync()
  .then(() => {
    console.log(" Conectado com o BD:", process.env.DB_NAME);
    app.listen(PORT, () => {
      console.log(` Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Erro ao conectar com o banco:", err);
  });