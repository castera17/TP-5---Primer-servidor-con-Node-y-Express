import express, { json } from "express";
import TiempoYa from "./time.js"

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
})

app.get('/hora', (req, res) => {
    res.send(TiempoYa().Hora)
})

app.get('/fecha-completa', (req, res) => {
    res.send(TiempoYa().FechaActual)
})

export default app