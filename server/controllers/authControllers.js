import User from '../src/models/User.js';
import bcrypt from 'bcryptjs';
import createSecretToken from '../src/serectToken.js';
import validator from 'validator'

export const register = async (req,res ) => {
   try {
    const {email, username, password} = req.body;

    // validation
    if(!email || !username || !password) return res.status(400).json({message: "Please fill out all fields"})

    if(!validator.isEmail(email)) return res.status(400).json({message: "Email is not valid"})

    const isUsernameExists = await User.findOne({username})
    if(isUsernameExists) return res.status(400).json({message: "User already exists"})

    const isEmailExists = await User.findOne({email})
    if(isEmailExists) return res.status(400).json({message: "Email already exists"})

    // hash passowrd
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    // create and save new user
    const newUser = await User.create({
        username,
        email,
        password: hashPassword
    })

    // create token
    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    }).status(200)
      .json({ message: "User signed in successfully", success: true, newUser, token });
   } catch (error) {
        res.status(400).json({error: error.message})
   }

}

export const login = async (req,res ) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) return res.status(400).json({message: "Please enter all field"})

        const user = await User.findOne({username});
        if(!user) {return res.status(400).json({message: "Can't find user"})};

        const comparePassword = await bcrypt.compare(password, user.password); 
        if(!comparePassword) return res.status(400).json({message: "Incorrect password"});
        
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
         }).status(200).json(user);
    } catch (error) {
        console.error(error)
    }
}


export const logout = async (req,res ) => {
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out successfully!")
    }
    catch(err){
        res.status(500).json(err)
    }
}