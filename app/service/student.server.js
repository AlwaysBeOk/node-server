'use strict';


class StudentService {
  async addStudent (req) {
    const SQL = `insert into student(name,sex,age) values("${req.name}", ${req.sex},${req.age});`;
    let result =  await connectionQuery(SQL);
    return result;
  }
  async getStudent () {
    const SQL = 'select * from student;';
    let result =  await connectionQuery(SQL);
    return result;
  }
}

module.exports = new StudentService();