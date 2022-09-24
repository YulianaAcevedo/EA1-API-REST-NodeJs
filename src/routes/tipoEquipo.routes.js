import { response, Router } from "express";
import { methods as tipocontroller } from "./../controllers/tipoEquipo.controller";

const router = Router();

router.get("/", tipocontroller.gettipos);
router.post("/", tipocontroller.addtipo);
router.get("/:id_tipoEquipo", tipocontroller.gettipo);
router.delete("/:id_tipoEquipo", tipocontroller.deletetipo);
router.put("/:id_tipoEquipo", tipocontroller.updatetipo);

export default router;