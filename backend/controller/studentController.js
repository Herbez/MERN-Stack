const Students = require("../models/Students");

const getUsers = async (req, res) => {
    const UserData = await Students.find();
    res.json(UserData);
};

const getUser = async (req, res) => {
    try {
        const UserData = await Students.findById(req.params.id);
        if (!UserData) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(UserData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const addUser = async (req, res) => {
    try {
        const stud = new Students(req.body);
        const { name } = stud;

        const UserExist = await Students.findOne({ name });
        if (UserExist) {
            return res.status(400).json({ message: "User already exists." });
        }
        const saveStud = await stud.save();
        res.status(201).json(saveStud);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteUser = async (req, res) => {
        try {
            const deletedUser = await Students.findByIdAndDelete(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found." });
            }
            res.status(200).json({
                message: "User deleted successfully.",
                deletedId: deletedUser._id
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    const updateUser = (req, res) => {
        const id = req.params.id
        Students.findByIdAndUpdate({_id:id}, { name: req.body.name, gpa: req.body.gpa })
            .then(res.json({
                message: "User Updated successfully.",
                updatedId: id } ))
            .catch(err => res.status(400).json({ message: err.message }));
    };
    

module.exports = { getUsers, addUser, deleteUser, getUser, updateUser };
