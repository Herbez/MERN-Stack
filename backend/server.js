const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
// const Students = require('./models/Students')
const route = require('./routes/studentRoutes')

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// mongoose.connect("mongodb://127.0.0.1:27017/school")

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected!");
}).catch((err) => {
    console.log("Db connection error", err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api/student", route);



// app.get("/getUsers", async (req, res) => {
//     const UserData = await Students.find();
//     res.json(UserData);
// })



// app.post("/addUser", async (req, res) => {
//     try {
//         const stud = new Students(req.body);
//         const { name } = stud;

//         const UserExist = await Students.findOne({ name });
//         if (UserExist) {
//             return res.status(400).json({ message: "User already exists." });
//         }
//         const saveStud = await stud.save();
//         res.status(201).json(saveStud);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

// app.delete("/deleteUser/:id", async (req, res) => {
//     try {
//         const deletedUser = await Students.findByIdAndDelete(req.params.id);
//         if (!deletedUser) {
//             return res.status(404).json({ message: "User not found." });
//         }
//         res.status(200).json({
//             message: "User deleted successfully.",
//             deletedId: deletedUser._id
//         });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
