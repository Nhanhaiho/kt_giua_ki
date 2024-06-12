import mongoose, { Schema } from "mongoose";

const ProFileSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    placeOfBirth: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    education:
        {
            degree: String,
            startDate: Date,
            endDate: Date,
        },
    skills: [String],
    projects: 
        {
            name: String,
            description: String,
            role: String,
            startDate: Date,
            endDate: Date,
    },
    work_ex: {
        startDate: null,
        endDate: null,
        company: String,
        role:String
    },
    hobbies: [String],
    goals: [String],

})

const ProfileModel = mongoose.model('profile', ProFileSchema)
export default ProfileModel