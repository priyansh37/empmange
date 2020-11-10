  
const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    dob: { type: String },
    address: { type: String },
    role: { type: String },
    salary: { type: Number },
    experience: { type: String }
});

module.exports = { Employee };