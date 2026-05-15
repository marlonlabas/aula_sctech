import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send("<h1>Rota inicial</h1>")
});

router.get('/sobrenos', (req, res)=>{
    res.send("<h1>Sobre nós</h1>")
});

router.get('/trabalheconosco', (req, res)=>{
    res.send("<h1>Trabalhe conosco</h1>")
});

export default router;