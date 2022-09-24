import { response, Router } from "express";
import { methods as usuarioController } from "./../controllers/usuario.controller";

const router = Router();

router.get("/", usuarioController.getusuarios);
router.post("/", usuarioController.addusuario);
router.get("/:id_nombreUsuario", usuarioController.getusuario);
router.delete("/:id_nombreUsuario", usuarioController.deleteusuario);
router.put("/:id_nombreUsuario", usuarioController.updateusuario);
export default router;