class jsonAnswer {
  constructor(status, code, message, data) {
    this.status = status; //result true or false
    this.code = code; //code of response. 200/404/....
    this.message = message; //message
    this.data = data; //object with data
  }
}

module.exports = {
  jsonAnswer
};
