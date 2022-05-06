import { Request, Response } from "express";
import { Client } from "../entities/Client";

interface ClientBody {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    status: number
}

export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await Client.find();
        return res.status(200).json({
            status: 200,
            data: clients
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

export const getClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const client = await Client.findOneBy({ id: parseInt(id) });

        if (!client) return res.status(404).json({
            status: 404,
            message: "Not Client found."
        });

        return res.status(200).json({
            status: 200,
            data: Client
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

export const createClient = async (
    req: Request<unknown, unknown, ClientBody>,
    res: Response
) => {
    const { firstName, lastName, email, phone, status } = req.body;
    const client = new Client();
    client.firstName = firstName;
    client.lastName = lastName;
    client.email = email;
    client.phone = phone;
    client.status = status;
    await client.save();
    return res.status(200).json({
        status: 200,
        data: client
    });
};

export const updateClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const client = await Client.findOneBy({ id: parseInt(id) });
        if (!client) return res.status(404).json({
            status: 404,
            message: "Not Client found."
        });

        await Client.update({ id: parseInt(id) }, req.body);

        return res.status(200).json({
            status: 200,
            message: "Client updated successfully."
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


export const activeClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const client = await Client.findOneBy({ id: parseInt(id) });
        if (!client) return res.status(404).json({
            status: 404,
            message: "Not Client found."
        });

        await Client.update(
            { id: parseInt(id) },
            { status: 1 }
        );

        return res.status(200).json({
            status: 200,
            message: "Client active successfully."
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

export const deactiveClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const client = await Client.findOneBy({ id: parseInt(id) });
        if (!client) return res.status(404).json({
            status: 404,
            message: "Not Client found."
        });
        await Client.update(
            { id: parseInt(id) },
            { status: 0 }
        );

        return res.status(200).json({
            status: 200,
            message: "Client desactive successfully."
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


export const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Client.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({
                status: 404,
                message: "Not Client found."
            });

        return res.status(200).json({
            status: 200,
            message: "Client delete successfully."
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