class jsonAnswer {
  constructor(status, code, message, data) {
    this.status = status; //result true or false
    this.code = code; //code of response. 200/404/....
    this.message = message; //message
    this.data = data; //object with data
  }
  successResponse(data) {
    this.status = true;
    this.code = 200;
    this.message = "all fine";
    this.data = data;
    return this;
  }
}

module.exports = {
  jsonAnswer
};
