import { Request, Response } from "express";
import { Service } from "../entities/Service";

interface ServiceBody {
    name: string,
    status: number
}

export const getServices = async (req: Request, res: Response) => {
    try {
        const [AllServices, servicesCount] = await Service.findAndCount();
        return res.status(200).json({
            status: 200,
            total: servicesCount,
            data: AllServices
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

export const getService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const service = await Service.findOneBy({ id: parseInt(id) });

        if (!service) return res.status(404).json({
            status: 404,
            message: "Not service found."
        });

        return res.status(200).json({
            status: 200,
            data: service
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

export const createService = async (
    req: Request<unknown, unknown, ServiceBody>,
    res: Response
) => {
    const { name, status } = req.body;
    const service = new Service();

    if (name === "") {
        return res.status(400).json({
            status: 400,
            message: "Service name is required."
        });
    }

    service.name = name;

    await service.save();
    return res.status(200).json({
        status: 200,
        data: service
    });
};

export const updateService = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const service = await Service.findOneBy({ id: parseInt(id) });
        if (!service) return res.status(404).json({
            status: 404,
            message: "Not service found."
        });

        if (req.body.name === "") {
            return res.status(400).json({
                status: 400,
                message: "Service name is required."
            });
        }

        await Service.update({ id: parseInt(id) }, req.body);

        return res.status(200).json({
            status: 200,
            message: "Service updated successfully."
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


export const activeService = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const service = await Service.findOneBy({ id: parseInt(id) });
        if (!service) return res.status(404).json({
            status: 404,
            message: "Not service found."
        });

        await Service.update(
            { id: parseInt(id) },
            { status: 1 }
        );

        return res.status(200).json({
            status: 200,
            message: "Service active successfully."
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

export const deactiveService = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const service = await Service.findOneBy({ id: parseInt(id) });
        if (!service) return res.status(404).json({
            status: 404,
            message: "Not service found."
        });
        await Service.update(
            { id: parseInt(id) },
            { status: 0 }
        );

        return res.status(200).json({
            status: 200,
            message: "Service desactive successfully."
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


export const deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Service.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({
                status: 404,
                message: "Not service found."
            });

        return res.status(200).json({
            status: 200,
            message: "Service delete successfully."
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