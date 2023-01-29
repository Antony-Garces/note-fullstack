import { Request, Response, NextFunction } from 'express';
import { getNoteItems, getNoteItem, postNoteItem, updateNoteItem, deleteNoteItem } from "../services/note.service";
import createHttpError from 'http-errors';
import mongoose from 'mongoose';




const getNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await getNoteItems();
    res.status(200).json(notes);
  } catch (error) {
    next(error)
    
  }
}
const getNote = async ({params}: Request, res: Response, next: NextFunction) => {
  try {
    
    const {id} = params;
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "invalid  note id")
    }
    const note = await getNoteItem(id);
    if (!note){
      throw createHttpError(404, "Note not found")
    }
    res.send(note)
    res.status(200).json(note)
  } catch (error) {
    next( error);
    
  }
}
const postNote = async ({body}: Request, res: Response, next: NextFunction) => {
  const title = body.title
  try {
    if(!title){
      throw createHttpError(400, "Note must have a title")
    }
    const note = await postNoteItem(body)
    res.status(201).json(note)
    
  } catch (error) {
    next(error)
    
  }
}
const updateNote = async ({params, body}: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = params;
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "invalid  note id")
    }
    const title = body.title;
    if(!title){
      throw createHttpError(400, "Note must hava a title")
    }
    const note = await updateNoteItem(id, body)
    if(!note) {
      throw createHttpError(404, "Note not found")
    }
    res.status(200).json(note)
  } catch (error) {
    next(error)
    
  }
}
const deleteNote = async ({params}: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = params;
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "invalid  note id")
    }
    const note = await deleteNoteItem(id)
    if(!note) {
      throw createHttpError(404, "Note not found")
    }
    res.sendStatus(204)
  } catch (error) {
    next(error)
    
  }
}

export {
  getNotes,
  getNote,
  postNote,
  updateNote,
  deleteNote,
}