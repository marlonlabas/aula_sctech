import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

// Rotas específicas (devem vir ANTES das rotas com parâmetro)
router.get('/clients/', clientsController.index);
router.get('/clients/create', clientsController.create);
router.post('clients/create', clientsController.store);

router.get('/clients/edit/:id', clientsController.edit);
router.post('/clients/update/:id', clientsController.update);
router.get('/clients/delete/:id', clientsController.remove);   // ou get se preferir

// Rota com parâmetro genérico (deve ser a última)
router.get('/clients/:id', clientsController.show);   // ← esta estava capturando /create

export default router;