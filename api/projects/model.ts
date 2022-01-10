import { model, Schema } from 'mongoose';

const projectSchema = new Schema({});


const projectModel = model('Project', projectSchema);

export default projectModel;