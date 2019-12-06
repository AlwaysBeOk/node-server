

class wrap {

  query = (sql) => {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
      connection.query(sql, ( err, rows) => {
        if ( err ) {
          reject( err )
          throw err;
        }
        resolve( rows )
        // 结束会话
        // connection.end();

      })
    })
  }
}


module.exports = wrap;