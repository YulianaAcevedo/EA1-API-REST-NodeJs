import { response, Router } from "express";
import { methods as marcacontroller } from "./../controllers/marcas.controller";

const router = Router();

router.get("/", marcacontroller.getmarcas);
router.post("/", marcacontroller.addmarca);
router.get("/:id_marca", marcacontroller.getmarca);
router.delete("/:id_marca", marcacontroller.deletemarca);
router.put("/:id_marca", marcacontroller.updatemarca);

export default router;