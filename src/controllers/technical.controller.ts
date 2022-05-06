import { Request, Response } from "express";
import { Technical } from "../entities/Technical";

interface TechnicalBody {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    status: number
}

export const getTechnicals = async (req: Request, res: Response) => {
    try {
        const Technicals = await Technical.find();
        return res.status(200).json({
            status: 200,
            data: Technicals
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

export const getTechnical = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const technical = await Technical.findOneBy({ id: parseInt(id) });

        if (!technical) return res.status(404).json({
            status: 404,
            message: "Not Technical found."
        });

        return res.status(200).json({
            status: 200,
            data: technical
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

export const createTechnical = async (
    req: Request<unknown, unknown, TechnicalBody>,
    res: Response
) => {
    const { firstName, lastName, email, phone, status } = req.body;
    const technical = new Technical();
    technical.firstName = firstName;
    technical.lastName = lastName;
    technical.email = email;
    technical.phone = phone;
    technical.status = status;
    await technical.save();
    return res.status(200).json({
        status: 200,
        data: technical
    });
};

export const updateTechnical = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const technical = await Technical.findOneBy({ id: parseInt(id) });
        if (!technical) return res.status(404).json({
            status: 404,
            message: "Not Technical found."
        });

        await Technical.update({ id: parseInt(id) }, req.body);

        return res.status(200).json({
            status: 200,
            message: "Technical updated successfully."
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


export const activeTechnical = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const technical = await Technical.findOneBy({ id: parseInt(id) });
        if (!Technical) return res.status(404).json({
            status: 404,
            message: "Not Technical found."
        });

        await Technical.update(
            { id: parseInt(id) },
            { status: 1 }
        );

        return res.status(200).json({
            status: 200,
            message: "Technical active successfully."
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

export const deactiveTechnical = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const technical = await Technical.findOneBy({ id: parseInt(id) });
        if (!technical) return res.status(404).json({
            status: 404,
            message: "Not Technical found."
        });
        await Technical.update(
            { id: parseInt(id) },
            { status: 0 }
        );

        return res.status(200).json({
            status: 200,
            message: "Technical desactive successfully."
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


export const deleteTechnical = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Technical.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({
                status: 404,
                message: "Not Technical found."
            });

        return res.status(200).json({
            status: 200,
            message: "Technical delete successfully."
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