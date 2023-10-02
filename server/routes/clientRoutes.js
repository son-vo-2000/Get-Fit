import express from 'express';
import { createNewClient, deleteClient, getAllClients } from '../controllers/clientControllers.js';
import { createNewExerciseOfClientId, deleteExerciseOfClientId, getAllExerciseOfClientId, updateExerciseOfClientId, toggleCompleteExercise } from '../controllers/exerciseControllers.js';

const router = express.Router();

router.post("/",getAllClients);
router.post("/create", createNewClient);
// this router is for update client (can use for name...) router.put();
router.delete("/:clientId", deleteClient);

// for exercise
router.get("/:clientId/exercises", getAllExerciseOfClientId);
router.post("/:clientId/exercises", createNewExerciseOfClientId);
router.put("/:clientId/exercises/:index/complete", toggleCompleteExercise);
router.delete("/:clientId/exercises/:index", deleteExerciseOfClientId);
router.put("/:clientId/exercises/:index", updateExerciseOfClientId);

export default router;