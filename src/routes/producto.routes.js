import { Router } from 'express';
import { check } from 'express-validator';
import { validationData } from '../middlewares/validation.js';

// importamos controladores
import { insertProducto } from './../controllers/producto.controller.js';
import { barcodeExists } from './../middlewares/databaseValidations.js';

const router = Router();

router.post("/", insertProducto);


export default router;