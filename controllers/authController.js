import UserModel from "../models/UserModel";
import ProfileModel from "../models/Profile";


const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!body.username) {
            throw new Error('username is required')
        }
        if (!body.password) {
            throw new Error('password is required')
        }

        const user = await UserModel.findOne({ username })
        if (!user) {
            return res.status(401).json({
                message:'Wrong name or password'
            })
        }
        if (!user || user.length === 0) {
            throw new Error('user not found')
        }
        const existingUser = users.find(element => element.username == body.username)
        if (!existingUser) {
            res.status(404)
            throw new Error('user not found')
        }
        const isMatchPassword = existingUser.password === body.password
        if (!isMatchPassword) {
            res.status(405)
            throw new Error('username or password incorrect')
        }
        res.status(200).json({
            message: 'login successful',
            data: {
                id: existingUser.id,
                username:existingUser.username
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data:null
         });
    }
}

const register = async (req, res) => {
    try {
        const {username,email,profile} = req.body

        const newProfile = new ProfileModel(profile)
        await newProfile.save();

        const newUser = new UserModel({
            username,
            email
        })
        await newUser.save();
        res.status(201).json({
            message:'user create succesfully!!!'
        })
    } catch (error) {
        console.log("error when create user");
        res.status(500).json({
            error: error.message
        })
    }
}


const logout = (req, res) => {
    res.status(200).json({
        message:'log out successfully!!!'
    })
}

export {login,logout,register}