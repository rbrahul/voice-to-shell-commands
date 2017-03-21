import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    display_name: String,
    phone: String,
    address: String,
    avatar: String,
    password: String,
    status: {type: mongoose.SchemaTypes.Number},
    created_at: {type: mongoose.SchemaTypes.Date, default: Date.now},
    updated_at: {type: mongoose.SchemaTypes.Date, default: Date.now}
});

const User = mongoose.model('User',userSchema, 'users');
export default User;