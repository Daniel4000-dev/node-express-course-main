const mongoose = require("mongoose");

mongoose.connect(

)
.then(() => console.log('database connected successfully'))
.catch((e) => console.log(e));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.now}
});

// Create user model
const User = mongoose.model('User', userSchema);

async function runQueryExamples() {
    try {
        // Create a new document
        const newUser = await User.create({
            name: 'Updated User',
            email: 'updateduser@gamil.com',
            age: 22,
            isActive: false,
            tags: ['developer', 'designer', 'manager'],
        })

        // const newUser = new User({
        //     name: 'Sensei Daniel',
        //     email: 'Sadekunle31@gamil.com',
        //     age: 22,
        //     isActive: true,
        //     tags: ['developer', 'designer', 'manager'],
        // })

        // await newUser.save()

        console.log('created new user', newUser);

        // const allUsers = await User.find({});
        // console.log(allUsers);

        // const getUserOfActiveFalse = await User.find({isActive: false});
        // console.log(getUserOfActiveFalse)

        // const getJohnDoeUser = await User.findOne({name: "John Doe"})
        // console.log(getJohnDoeUser);

        // const getLastCreatedUserByUserId = await User.findById(newUser._id);
        // console.log(getLastCreatedUserByUserId, 'getCreatedUserByUserId')

        // const selectedFields = await User.find().select('name email -_id');
        // console.log(selectedFields);

        // const limitedUsers = await User.find().limit(5).skip(1);
        // console.log(limitedUsers);

        // const sortedUsers = await User.find().sort({age: -1});
        // console.log(sortedUsers);

        // const countDoc = await User.countDocuments({isActive: true});
        // console.log(countDoc);

        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log("deleted user", deletedUser);

        const updatedUser = await User.findByIdAndUpdate(newUser._id, {
            $set: {age: 100}, $push: {tags: 'updated'}
        }, {new: true});
        console.log(updatedUser);
    } catch(e) {
        console.log('Error ->', e);
    } finally {
        await mongoose.connection.close()
    }
}

runQueryExamples()

