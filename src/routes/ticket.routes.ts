import { Router } from 'express';
import {
    createTicket, deleteTicket, getTicket, getTickets, updateTicket
} from "../controllers/ticket.controller";

const TicketRouter = Router();

TicketRouter.get("/tickets", getTickets);

TicketRouter.get("/tickets/:id", getTicket);

TicketRouter.post("/tickets", createTicket);

TicketRouter.put("/tickets/:id", updateTicket);

TicketRouter.delete("/tickets/:id", deleteTicket);

export default TicketRouter;