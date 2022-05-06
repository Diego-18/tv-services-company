import { Router } from 'express';
import {
    activeTechnical, createTechnical, deactiveTechnical, deleteTechnical, getTechnical, getTechnicals, updateTechnical
} from "../controllers/technical.controller";

const TechnicalRouter = Router();

TechnicalRouter.get("/technicals", getTechnicals);

TechnicalRouter.get("/technicals/:id", getTechnical);

TechnicalRouter.post("/technicals", createTechnical);

TechnicalRouter.put("/technicals/:id", updateTechnical);

TechnicalRouter.put("/technicals-act/:id", activeTechnical);

TechnicalRouter.put("/technicals-deact/:id", deactiveTechnical);

TechnicalRouter.delete("/technicals/:id", deleteTechnical);

export default TechnicalRouter;