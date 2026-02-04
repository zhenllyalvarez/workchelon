import express from 'express';
import { createExpert, deleteExpert, getAllExpert, updateExpert, getOneExpert } from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllExpert);
router.get('/:id', getOneExpert);
router.post('/', createExpert);
router.put('/:id', updateExpert);
router.delete('/:id', deleteExpert);

export default router;