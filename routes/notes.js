import express from "express";
import { notes, removeNote, addNote, editNote } from "../persistence.js"
import { v4 as uuidv4 } from "uuid";  

const router = express.Router();

//add new note
router.post("/", (req, res, next) => {
    // console.log(req.body.noteText);
    const id = uuidv4(); 
    addNote(id, req.body.noteText);  
    res.status(200).redirect("/");
});

router.delete("/delete/:id", (req, res, next) => {
    // console.log(req.params.id);
    removeNote(req.params.id);

    // console.log(notes());

    // it is interesting because differently from the first request, this one gives me an error when i try to redirect!!
    // res.status(200).redirect("/");
});

router.patch("/update/:id/:data", (req, res, next) => {
    // console.log(req.params.data);
    editNote(req.params.id, req.params.data);

    // console.log(notes());

    // it is interesting because differently from the first request, this one ALSO gives me an error when i try to redirect!!
    // res.status(200).redirect("/");
});

export default router;
