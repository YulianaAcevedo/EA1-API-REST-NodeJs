import { response, Router } from "express";
import { methods as estadocontroller } from "./../controllers/estado.controller";

const router = Router();

router.get("/", estadocontroller.getestados);
router.post("/", estadocontroller.addestado);
router.get("/:idEstadoEquipo", estadocontroller.getestado);
router.delete("/:idEstadoEquipo", estadocontroller.deleteestado);
router.put("/:idEstadoEquipo", estadocontroller.updateestado);

export default router;