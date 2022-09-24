import express from "express";
import morgan from "morgan";

// Routes
import usuarioRoutes from "./routes/usuario.routes";
import tipoEquipos from "./routes/tipoEquipo.routes";
import estadoEquipos from "./routes/estado.routes";
import marcas from "./routes/marcas.routes";
const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/tipoequipos", tipoEquipos);
app.use("/api/estadoequipos", estadoEquipos);
app.use("/api/marcas", marcas);
export default app;