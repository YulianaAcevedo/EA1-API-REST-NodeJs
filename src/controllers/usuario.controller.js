import { getConnection } from "./../database/database";


const getusuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_nombreUsuario, email, Estado_usuario, FechaCreacion_Usuario, FechaActualizacion_Usuario FROM usuario");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

   
};

const getusuario = async (req, res) => {
    try {
        const { id_nombreUsuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_nombreUsuario, email, Estado_usuario, FechaCreacion_Usuario, FechaActualizacion_Usuario FROM usuario WHERE id_nombreUsuario= ?", id_nombreUsuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};





const addusuario = async (req, res) => {
    try {
        const { email, Estado_usuario, FechaCreacion_Usuario, FechaActualizacion_Usuario } = req.body;

        if (email === undefined || Estado_usuario === undefined ||FechaCreacion_Usuario === undefined ||FechaActualizacion_Usuario === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const usuario = { email, Estado_usuario, FechaCreacion_Usuario, FechaActualizacion_Usuario };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuario SET ?", usuario);
        res.json({ message: "usuario added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteusuario = async (req, res) => {
    try {
        const { id_nombreUsuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE id_nombreUsuario= ?", id_nombreUsuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateusuario = async (req, res) => {
    try {
        const { id_nombreUsuario } = req.params;
        const { email, Estado_usuario, FechaCreacion_Usuario, FechaActualizacion_Usuario} = req.body;

        if (id_nombreUsuario === undefined || email === undefined || FechaActualizacion_Usuario === undefined||Estado_usuario === undefined|| FechaCreacion_Usuario === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const usuario = { email, Estado_usuario, FechaCreacion_Usuario, FechaActualizacion_Usuario};
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET ? WHERE id_nombreUsuario = ?", [usuario, id_nombreUsuario]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getusuarios,
    addusuario,
    getusuario,
    deleteusuario,
    updateusuario
};