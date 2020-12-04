// const sql = require('mssql');
const sql = '';
//db global 변수 설정 예시
const config = {
  "user": "example",
  "password": "qwer1324!",
  "server": "172.20.30.152",
  "database": "hystec_bus"
  "port" : 1433,
  "options": {
      "encrypt": true
  },
  "multipleStatements": true
}

module.exports = {
  sql, config
}
