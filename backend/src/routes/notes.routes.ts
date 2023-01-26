import { Router } from "express";
import { deleteNote, getNote, getNotes, postNote, updateNote } from "../controllers/note.controller";



const router = Router();

router.get('/', getNotes)
router.get('/:id',getNote)
router.post('/',postNote)
router.patch('/:id',updateNote)
router.delete('/:id',deleteNote)

export default router