import { getConnection } from "./../database/database";

const getmarcas= async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_marca, nombre_marca, Estado_marca, FechaCreacion_marca, FechaActualizacion_marca FROM marcas");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 
};

const getmarca= async (req, res) => {
    try {
        const { id_marca} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_marca, nombre_marca, Estado_marca, FechaCreacion_marca, FechaActualizacion_marca FROM marcas", id_marca);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const addmarca = async (req, res) => {
    try {
        const { id_marca, nombre_marca, Estado_marca, FechaCreacion_marca, FechaActualizacion_marca } = req.body;

        if (nombre_marca === undefined ||Estado_marca === undefined ||FechaCreacion_marca === undefined || FechaActualizacion_marca === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const marcas = {  nombre_marca, Estado_marca, FechaCreacion_marca, FechaActualizacion_marca };
        const connection = await getConnection();
        await connection.query("INSERT INTO marcas SET ?", marcas);
        res.json({ message: "marca added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletemarca = async (req, res) => {
    try {
        const { id_marca} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM marcas WHERE id_marca= ?", id_marca);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatemarca = async (req, res) => {
    try {
        const { id_marca } = req.params;
        const { nombre_marca, Estado_marca, FechaCreacion_marca, FechaActualizacion_marca} = req.body;

        if ( nombre_marca === undefined ||Estado_marca === undefined ||FechaCreacion_marca === undefined || FechaActualizacion_marca === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const Marca = { nombre_marca, Estado_marca, FechaCreacion_marca, FechaActualizacion_marca};
        const connection = await getConnection();
        const result = await connection.query("UPDATE marcas  SET ? WHERE id_marca = ?", [Marca, id_marca ]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




export const methods = {
    getmarcas,
    addmarca,
    getmarca,
    deletemarca,
    updatemarca
   
};