import { model, Schema } from 'mongoose';

const userSchema = new Schema({});


const userModel = model('User', userSchema);

export default userModel;