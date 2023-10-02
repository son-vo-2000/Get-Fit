// create Schema a.k.a footprint
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: String,
  exercises: [{ name: String, duration: String, isCompleted: {type:Boolean, default: false} }],
  user_id: { type: String, require:true},
});


const Client = mongoose.model("Client", ClientSchema);

export default Client;