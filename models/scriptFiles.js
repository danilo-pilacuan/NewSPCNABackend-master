const mongoose = require("mongoose");

const scriptFileSchema = mongoose.Schema({
    name:  { type : String , required : true },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    isLesson:{
        type: mongoose.Schema.Types.Number,
        default: 0
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        default: null
    },
    content:{
        type: Object,
        default: []
    },
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("ScriptFile",scriptFileSchema);