const { NotesModel } = require('../models/notesModel');

const APIController = {
    getAll: function (request, response) {
        console.log("I'm here")
        NotesModel.getAll()
            .then(authors => {
                response.status(200).json(authors);
            });

    },
    // getOne: function (request, response) {
    //     let id = request.params.id;

    //     NotesModel.getOne({ _id: id })
    //         .then(data => {
    //             console.log(id, data);
    //             response.status(200).json(data);
    //         });

    // },
    // deleteOne: function (request, response) {
    //     let id = request.params.id;

    //     AuthorModel
    //         .getOne({ _id: id })
    //         .then(user => {
    //             if (user === null) {
    //                 throw new Error("That user doesn't exist");
    //             }
    //             else {
    //                 AuthorModel
    //                     .deleteOne({ _id: id })
    //                     .then(result => {
    //                         response.status(204).end();
    //                     });
    //             }
    //         })
    //         .catch(error => {
    //             response.statusMessage = error.message;
    //             response.status(404).end();
    //         })

    // },
    addOne: function (request, response) {
        let { content } = request.body;

        if (content) {
            let newNote = {
                content: content
            };

            NotesModel
                .createOne(newNote)
                .then(user => {
                    console.log(user);
                    if (user === null) {
                        response.statusMessage = "Name must be at least 3 characters long";
                        response.status(406).end();
                    }
                    else {
                        response.status(201).json(user);
                    }
                });
        }
        else {
            response.statusMessage = "You are missing a field to create a new user ('userName', 'firstName', 'lastName', 'password')";
            response.status(406).end();
        }
    }
    // updateOne: function (request, response) {
    //     let { firstName } = request.body;
    //     let id = request.params.id;

    //     let fieldsToUpdate = {}

    //     if (firstName) {
    //         fieldsToUpdate.firstName = firstName;
    //     }

    //     if (Object.keys(fieldsToUpdate).length === 0) {
    //         response.statusMessage = "You need to provide at least one of the following fields to update the user";
    //         response.status(406).end();
    //     }
    //     else {
    //         AuthorModel
    //             .getOne({ _id: id })
    //             .then(user => {
    //                 if (user === null) {
    //                     throw new Error("That user doesn't exist");
    //                 }
    //                 else {
    //                     AuthorModel
    //                         .updateOne(id, fieldsToUpdate)
    //                         .then(result => {
    //                             response.status(202).json(result);
    //                         });
    //                 }
    //             })
    //             .catch(error => {
    //                 response.statusMessage = error.message;
    //                 response.status(404).end();
    //             })

    //     }
    // }
}

module.exports = { APIController };


