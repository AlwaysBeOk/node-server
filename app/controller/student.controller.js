const Services = require('../service');

class UsersController {
  async create (req, res) {
    const paramas = req.body;
    console.log(paramas);
    const result = await Services.students.addStudent(paramas);
    res.json(result)
  }

  async getList (req, res) {
    const paramas = req.body;
    const result = await Services.students.getStudent(paramas);
    res.json(result)
  }
}

module.exports = new UsersController();