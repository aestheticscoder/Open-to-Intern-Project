const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const internSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        mobile: {
            type: Number,
            required: true,
            unique: true
        },
        collegeId: {
            type: Schema.Types.ObjectId,
            ref: "College",
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },{timestamps: true}
);

module.exports = new mongoose.model("Intern", internSchema);