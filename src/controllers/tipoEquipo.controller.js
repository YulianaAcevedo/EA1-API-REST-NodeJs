import { getConnection } from "./../database/database";

const gettipos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_tipoEquipo, nombre_tipoEquipo, Estado_tipoEquipo, FechaCreacion_tipoEquipo, FechaActualizacion_tipoEquipo FROM tipoEquipo");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 
};

const gettipo= async (req, res) => {
    try {
        const { id_tipoEquipo} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_tipoEquipo, nombre_tipoEquipo, Estado_tipoEquipo, FechaCreacion_tipoEquipo, FechaActualizacion_tipoEquipo FROM tipoEquipo", id_tipoEquipo);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const addtipo = async (req, res) => {
    try {
        const { id_tipoEquipo, nombre_tipoEquipo, Estado_tipoEquipo, FechaCreacion_tipoEquipo, FechaActualizacion_tipoEquipo } = req.body;

        if (nombre_tipoEquipo === undefined ||Estado_tipoEquipo === undefined ||FechaCreacion_tipoEquipo === undefined || FechaActualizacion_tipoEquipo === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const tipoEquipo = {  nombre_tipoEquipo, Estado_tipoEquipo, FechaCreacion_tipoEquipo, FechaActualizacion_tipoEquipo  };
        const connection = await getConnection();
        await connection.query("INSERT INTO tipoEquipo SET ?", tipoEquipo);
        res.json({ message: "tipo equipo added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletetipo = async (req, res) => {
    try {
        const { id_tipoEquipo} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM tipoEquipo WHERE id_tipoEquipo= ?", id_tipoEquipo);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatetipo = async (req, res) => {
    try {
        const { id_tipoEquipo } = req.params;
        const { nombre_tipoEquipo, Estado_tipoEquipo, FechaCreacion_tipoEquipo, FechaActualizacion_tipoEquipo} = req.body;

        if (id_tipoEquipo === undefined|| nombre_tipoEquipo === undefined ||Estado_tipoEquipo === undefined ||FechaCreacion_tipoEquipo === undefined || FechaActualizacion_tipoEquipo === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const tipoEquipo = { nombre_tipoEquipo, Estado_tipoEquipo, FechaCreacion_tipoEquipo, FechaActualizacion_tipoEquipo};
        const connection = await getConnection();
        const result = await connection.query("UPDATE tipoEquipo SET ? WHERE id_tipoEquipo = ?", [tipoEquipo, id_tipoEquipo]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




export const methods = {
    gettipos,
    addtipo,
    gettipo,
    deletetipo,
    updatetipo
   
};