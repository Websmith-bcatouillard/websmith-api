import { model, Schema } from 'mongoose';

const projectSchema = new Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    clientName: String
});


const projectModel = model('Project', projectSchema);

export default projectModel;