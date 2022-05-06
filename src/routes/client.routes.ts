import { Router } from 'express';
import {
    activeClient, createClient, deactiveClient, deleteClient, getClient, getClients, updateClient
} from "../controllers/client.controller";

const ClientRouter = Router();

ClientRouter.get("/clients", getClients);

ClientRouter.get("/clients/:id", getClient);

ClientRouter.post("/clients", createClient);

ClientRouter.put("/clients/:id", updateClient);

ClientRouter.put("/clients-act/:id", activeClient);

ClientRouter.put("/clients-deact/:id", deactiveClient);

ClientRouter.delete("/clients/:id", deleteClient);

export default ClientRouter;