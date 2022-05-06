import { Router } from 'express';
import {
    activeService, createService, deactiveService, deleteService, getService, getServices, updateService
} from "../controllers/service.controller";

const ServiceRouter = Router();

ServiceRouter.get("/services", getServices);

ServiceRouter.get("/services/:id", getService);

ServiceRouter.post("/services", createService);

ServiceRouter.put("/services/:id", updateService);

ServiceRouter.put("/services-act/:id", activeService);

ServiceRouter.put("/services-deact/:id", deactiveService);

ServiceRouter.delete("/services/:id", deleteService);

export default ServiceRouter;