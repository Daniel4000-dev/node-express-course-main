const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register controller
const registerUser = async(req, res) => {
    try {
        // extract user information from our request body
        const {username, email, password, role} = req.body;

        // check if user already exists in database
        const checkExistingUser = await User.findOne({$or: [{username}, {email}]});
        if(checkExistingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exist either with same username or email. Please try another username or email'
            })
        }

        // hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user and save in database
        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'user'
        })

        await newlyCreatedUser.save();

        if(newlyCreatedUser) {
            res.status(200).json({
                success: true,
                message: 'User registered successfully!'
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Unable to register user please try again'
            });
        }

    } catch(e)  {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured Please try again'
        })
    }
}

// login controller
const loginUser = async(req, res) => {
    try {
        const {username, password} = req.body;

        // find if the current user is already on the database
        const user = await User.findOne({username});

        if(!user) {
            return res.status(400).json({
                success : false,
                message : 'User does not exist'
            });
        }

        // if the password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password );

        if(!isPasswordMatch) {
            return res.status(400).json({
                success : false,
                message : 'Invalid a credentials!'
            });
        }

        // create user token
        const accessToken = jwt.sign({
            userId : user._id,
            username : user.username,
            role : user.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn : '15m'
        })

        res.status(200).json({
            success : true,
            message : 'Logged in successfully',
            accessToken
        })
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured Please try again'
        })
    }
}

module.exports = {registerUser, loginUser};