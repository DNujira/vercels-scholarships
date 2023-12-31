const mongoose = require('mongoose');

const SculsSchema = new mongoose.Schema({
    sid: Number,
    sname: String,
    stype: String,
    opendate: String,
    closedate: String,
    sfaculty: Array,
    sbranch: Array,
    sclass: String,
    sgpa: String,
    country: String,
    university: String,
    costoflive: String,
    costoflean: String,
    costofabode: String,
    stoeic: Number,
    sielts: Number,
    stoefl: Number,
    sgiver: String,
    url: String,
    pinnedcount: Number,
    scrapdate: Date,
    watchcount:Number
})

module.exports = mongoose.model('Scholarship', SculsSchema)

module.exports.saveScholarship = function(model,data) {
    model.save(data)
}