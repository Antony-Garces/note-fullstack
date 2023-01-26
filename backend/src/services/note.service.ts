import NoteModel from '../models/note.model';
import { Note } from '../interfaces/note.interface';

const getNoteItems = async () => {
  const responseNotes = await NoteModel.find({}).exec()
  return responseNotes
}
const getNoteItem = async (id: string) => {
  const responseNote = await NoteModel.findOne({_id:id}).exec()
  return responseNote
}
const postNoteItem = async (item: Note) => {
  const reponseInsert = await NoteModel.create(item)
  return reponseInsert
}
const updateNoteItem= async (id: string, data: Note) => {
  const responseUddate = await NoteModel.findByIdAndUpdate({_id:id}, data, {new: true}).exec()
  return responseUddate
}
const deleteNoteItem = async (id: string) => {
  const responseDelete = await NoteModel.remove({_id:id}).exec()
  return responseDelete
}

export {
  getNoteItems,
  getNoteItem,
  postNoteItem,
  updateNoteItem,
  deleteNoteItem,
}