import express from 'express';
import { createExpert, deleteExpert, getAllExpert, updateExpert } from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllExpert);
router.post('/', createExpert);
router.put('/:id', updateExpert);
router.delete('/:id', deleteExpert);

export default router;