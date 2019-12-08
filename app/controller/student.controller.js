const Services = require('../service');
const Result = require('../utils/package-result');

class UsersController {
  async create (req, res) {
    const paramas = req.body;
    console.log(paramas);
    const result = await Services.students.addStudent(paramas);
    res.json(new Result(result,'成功！'))
  }

  async getList (req, res, next) {
    const paramas = req.body;
    try{
      const result = await Services.students.getStudent(paramas);
      res.json(new Result(result,'成功！'))
    }catch (e){
      next(e);
    }
  }
}

module.exports = new UsersController();
