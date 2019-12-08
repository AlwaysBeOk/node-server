const Services = require('../service');

class UsersController {
  async create (req, res) {
    const paramas = req.body;
    console.log(paramas);
    const result = await Services.students.addStudent(paramas);
    res.json(result)
  }

  async getList (req, res, next) {
    const paramas = req.body;
    try{
      const result = await Services.students.getStudent(paramas);
      res.json(result)
    }catch (e){
      next(e);
    }
  }
}

module.exports = new UsersController();
