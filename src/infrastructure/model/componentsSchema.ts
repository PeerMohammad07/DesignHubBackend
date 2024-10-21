import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String },
  position: { x: Number, y: Number },
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' }
});

const Component = mongoose.model('Component', componentSchema);
export default Component