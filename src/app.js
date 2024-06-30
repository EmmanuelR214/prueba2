import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import datosRoute from './routes/datos.routes.js';

const app = express();

const corsOptions = {
  origin: 'https://labarbada.store',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/api', datosRoute);

app.get("/api", (req, res) => {
  res.send('Bienvenido a la Api')
})

app.get('/', (req, res) => {
  res.send('¡El API está en funcionamiento!')
})

app.use((req,res, next)=>{
  res.status(404).json({
      message:"ruta no encontrada"
  })
})

export default app