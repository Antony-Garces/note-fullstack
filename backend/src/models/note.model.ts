import { Schema,  model } from "mongoose";
import { Note } from '../interfaces/note.interface';

const noteSchema = new Schema<Note>(
  {
    title: {
      type: String,
      requite: true
    },
    text: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const NoteModel = model("notes", noteSchema)

export default NoteModel;
