

class wrap {

  query = (sql) => {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
      connection.query(sql, ( err, rows) => {
        if ( err ) {
          // express 就能捕获 ERROR和reject抛出的错误
          reject( err );
          // throw new Error('query error!');
        }
        resolve( rows )
      })
    })
  }
}


module.exports = wrap;
