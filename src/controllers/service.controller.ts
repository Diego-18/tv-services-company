import { Request, Response } from "express";
import { Service } from "../entities/Service";

interface ServiceBody {
    name: string,
    status: number
}

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find();
        return res.json(services);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const service = await Service.findOneBy({ id: parseInt(id) });

        if (!service) return res.status(404).json({ message: "Service not found" });

        return res.json(service);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createService = async (
    req: Request<unknown, unknown, ServiceBody>,
    res: Response
) => {
    const { name, status } = req.body;
    const service = new Service();
    service.name = name;
    service.status = status;
    await service.save();
    return res.json(service);
};

export const updateService = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const service = await Service.findOneBy({ id: parseInt(id) });
        if (!service) return res.status(404).json({ message: "Not user found" });

        await Service.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const activeService = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const service = await Service.findOneBy({ id: parseInt(id) });
        if (!service) return res.status(404).json({ message: "Not user found" });
        await Service.update(
            { id: parseInt(id) },
            { status: 1 }
        );

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deactiveService = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const service = await Service.findOneBy({ id: parseInt(id) });
        if (!service) return res.status(404).json({ message: "Not user found" });
        await Service.update(
            { id: parseInt(id) },
            { status: 0 }
        );

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Service.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "User not found" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};