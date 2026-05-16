import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index(req: Request, res: Response) {
  const clients = await clientsModel.findAll();
  res.json(clients);           // mude para res.render('index', { clients }) quando quiser
}

async function show(req: Request, res: Response) {
  const { id } = req.params;
  const client = await clientsModel.findByPk(Number(id));
  res.json(client);
}

function create(req: Request, res: Response) {
  res.render("create");
}

async function store(req: Request, res: Response) {
  try {
    const clientData = req.body as IClients;

    await clientsModel.create({
      name: clientData.name,
      email: clientData.email,
    });

    res.redirect('/');
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    res.status(500).send("Erro ao salvar cliente");
  }
}

async function edit(req: Request, res: Response) {
  try {
    const { id } = req.params;
    
    if (!id) return res.status(400).send("ID não informado");

    const client = await clientsModel.findByPk(Number(id));

    if (!client) return res.status(404).send("Cliente não encontrado");

    res.render("edit", { client: client.toJSON() });
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    res.status(500).send("Erro interno");
  }
}

// ==================== UPDATE ====================
async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const clientData = req.body as IClients;

    const [updated] = await clientsModel.update(
      {
        name: clientData.name,
        email: clientData.email,
      },
      {
        where: { id: Number(id) }
      }
    );

    if (updated === 0) {
      return res.status(404).send("Cliente não encontrado ou sem alterações");
    }

    res.redirect('/');
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    res.status(500).send("Erro ao atualizar cliente");
  }
}

// ==================== DELETE ====================
async function remove(req: Request, res: Response) {   // nome "remove" ou "destroy"
  try {
    const { id } = req.params;

    const deleted = await clientsModel.destroy({
      where: { id: Number(id) }
    });

    if (deleted === 0) {
      return res.status(404).send("Cliente não encontrado");
    }

    res.redirect('/');
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    res.status(500).send("Erro ao deletar cliente");
  }
}

export default { 
  index, 
  create, 
  store, 
  show, 
  edit, 
  update, 
  remove   // ← adicionei
};