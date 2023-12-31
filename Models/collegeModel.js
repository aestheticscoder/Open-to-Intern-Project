const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
            },
            fullName: {
                type: String,
                required: true,
                trim: true  
             },
             logoLink: {
                type: String,
                required: true
             },
             isDeleted: {
                type: Boolean,
                default: false
             }

    },
    {timestamps: true}
);

module.exports = new mongoose.model('College',collegeSchema );