import { getConnection } from "./../database/database";

const getestados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idEstadoEquipo, nombre_EstadoEquipo, Estado_EstadoEquipo, FechaCreacion_EstadoEquipo, FechaActualizacion_EstadoEquipo FROM estadoequipo");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 
};

const getestado= async (req, res) => {
    try {
        const { idEstadoEquipo} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idEstadoEquipo, nombre_EstadoEquipo, Estado_EstadoEquipo, FechaCreacion_EstadoEquipo, FechaActualizacion_EstadoEquipo FROM estadoequipo", idEstadoEquipo);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const addestado = async (req, res) => {
    try {
        const { idEstadoEquipo, nombre_EstadoEquipo, Estado_EstadoEquipo, FechaCreacion_EstadoEquipo, FechaActualizacion_EstadoEquipo } = req.body;

        if (nombre_EstadoEquipo === undefined ||Estado_EstadoEquipo === undefined ||FechaCreacion_EstadoEquipo === undefined || FechaActualizacion_EstadoEquipo === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const EstadoEquipo = {  nombre_EstadoEquipo, Estado_EstadoEquipo, FechaCreacion_EstadoEquipo, FechaActualizacion_EstadoEquipo  };
        const connection = await getConnection();
        await connection.query("INSERT INTO EstadoEquipo SET ?", EstadoEquipo);
        res.json({ message: "estado equipo added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteestado = async (req, res) => {
    try {
        const { idEstadoEquipo} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM estadoequipo WHERE idEstadoEquipo= ?", idEstadoEquipo);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateestado = async (req, res) => {
    try {
        const { id_EstadoEquipo } = req.params;
        const { nombre_EstadoEquipo, Estado_EstadoEquipo, FechaCreacion_EstadoEquipo, FechaActualizacion_EstadoEquipo} = req.body;

        if ( nombre_EstadoEquipo === undefined ||Estado_EstadoEquipo === undefined ||FechaCreacion_EstadoEquipo === undefined || FechaActualizacion_EstadoEquipo === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const EstadoEquipo = { nombre_EstadoEquipo, Estado_EstadoEquipo, FechaCreacion_EstadoEquipo, FechaActualizacion_EstadoEquipo};
        const connection = await getConnection();
        const result = await connection.query("UPDATE EstadoEquipo SET ? WHERE id_EstadoEquipo = ?", [EstadoEquipo, id_EstadoEquipo]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




export const methods = {
    getestados,
    addestado,
    getestado,
    deleteestado,
    updateestado
   
};