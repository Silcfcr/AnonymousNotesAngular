const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

const Notes = mongoose.model('notes', NotesSchema);

const NotesModel = {
    createOne: function (newUser) {
        return Notes.create(newUser);
    },
    getAll: function () {
        return Notes.find();
    },
    // getOne: function (userName) {
    //     return Notes.findOne({ userName });
    // },
    // deleteOne: function (userName) {
    //     return Notes.deleteOne({ userName });
    // },
    // updateOne: function (userName, userToUpdate) {
    //     return Notes.findOneAndUpdate({ userName }, { $set: userToUpdate }, { new: true })
    // }
};

module.exports = { NotesModel };
