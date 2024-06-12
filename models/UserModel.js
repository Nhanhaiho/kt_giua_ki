import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref:'Profile'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }

})

const UserModel = mongoose.model("user", userSchema)
export default UserModel
