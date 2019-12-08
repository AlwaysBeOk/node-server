'use strict';


class StudentService {
  async addStudent (req) {
    const SQL = `insert into student(name,sex,age) values("${req.name}", ${req.sex},${req.age});`;
    let result =  await connectionQuery(SQL);
    return result;
  }
  async getStudent (paramas, next) {
    const SQL = 'select * from student;';
    let result =  await connectionQuery(SQL,next);
    return result;
  }
}

module.exports = new StudentService();
