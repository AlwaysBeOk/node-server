module.exports = function(result, msg, isSucceed=true) {
  return {
    success: isSucceed,
    massage: msg,
    data: result
  }
}
