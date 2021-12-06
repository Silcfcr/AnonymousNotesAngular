const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    }
});

const Author = mongoose.model('authors', AuthorSchema);

const AuthorModel = {
    createOne: function (newUser) {
        return Author.create(newUser);
    },
    getAll: function () {
        return Author.find();
    },
    getOne: function (userName) {
        return Author.findOne({ userName });
    },
    deleteOne: function (userName) {
        return Author.deleteOne({ userName });
    },
    updateOne: function (userName, userToUpdate) {
        return Author.findOneAndUpdate({ userName }, { $set: userToUpdate }, { new: true })
    }
};

module.exports = { AuthorModel };
