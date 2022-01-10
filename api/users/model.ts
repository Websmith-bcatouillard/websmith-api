import { model, Schema } from 'mongoose';

const userSchema = new Schema({
   username: String,
   password: String
},
{
   toJSON: {
      virtuals: true
   },
   toObject: {
      virtuals: true
   }
});


const userModel = model('User', userSchema);

export default userModel;