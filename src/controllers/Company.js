let Company = require("./../models/Company");


async function create(name) {
    var company = new Company({name})
    await company.save();
    return company;
}

async function getById(id) {
    return Company.findOne({_id: id}).lean().exec();
}

module.exports = {create, getById}