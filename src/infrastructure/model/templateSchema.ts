import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },    
  components: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Component' }],  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
});

const Template = mongoose.model('Template', templateSchema);
export default Template