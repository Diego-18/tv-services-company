import { Request, Response } from "express";
import { Client } from "../entities/Client";
import { Service } from "../entities/Service";
import { Technical } from "../entities/Technical";
import { Ticket } from "../entities/Ticket";

interface TicketBody {
    technical: Technical;
    client: Client;
    service: Service;
    description: string;
    status: number;
}

export const getTickets = async (req: Request, res: Response) => {
    try {
        const [AllTickets, ticketsCount] = await Ticket.findAndCount();
        return res.status(200).json({
            status: 200,
            total: ticketsCount,
            data: AllTickets
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        }
    }
};

export const getTicket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findOneBy({ id: parseInt(id) });

        if (!ticket) return res.status(404).json({
            status: 404,
            message: "Not Ticket found."
        });

        return res.status(200).json({
            status: 200,
            data: ticket
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        }
    }
};


export const createTicket = async (
    req
        : Request<unknown, unknown, TicketBody>,
    res: Response
) => {
    try {
        const { description, client, service, status } = req.body;
        const query = "select id from technical order by random() LIMIT 1;";
        let technical = await Technical.query(query);
        const ticket = new Ticket();

        ticket.technical = technical[0];
        ticket.client = client;
        ticket.service = service;
        ticket.description = description;
        ticket.status = status;
        await ticket.save();
        return res.status(200).json({
            status: 200,
            data: ticket
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        }
    }
}

export const updateTicket = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const ticket = await Ticket.findOneBy({ id: parseInt(id) });
        if (!ticket) return res.status(404).json({
            status: 404,
            message: "Not Ticket found."
        });

        await Ticket.update({ id: parseInt(id) }, req.body);

        return res.status(200).json
            ({
                status: 200,
                message: "Ticket updated successfully.",
                data: ticket
            });
    } catch (error) {
        if (error instanceof Error
        ) {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        }
    }
};


export const deleteTicket = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Ticket.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({
                status: 404,
                message: "Not Ticket found."
            });

        return res.status(200).json({
            status: 200,
            message: "Ticket delete successfully."
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        }
    }
};

