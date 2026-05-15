import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/', clientsController.index);

router.get('/sobrenos', (req, res)=>{
    res.render('index2')
});

router.get('/trabalheconosco', (req, res)=>{
    res.send("<h1>Trabalhe conosco</h1>")
});

export default router;