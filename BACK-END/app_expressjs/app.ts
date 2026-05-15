import express from "express";
import clientRouter from "./Router/clients";

const app = express();

app.use(clientRouter);
app.set('view engine', 'pug');
app.set('views', './Views');

app.listen(3000, () => {
    console.log("Servidor criado...")
});