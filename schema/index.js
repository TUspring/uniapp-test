/** * 用户信息 */
var mongoose = require('./db.js'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String }, //用户账号 
  userpwd: { type: String }, //密码
  userage: { type: Number }, //年龄 
  userid: { type: Number }, //年龄 
  logindate: { type: Date } //最近登录时间 
});

var User = mongoose.model('User', UserSchema);

//  插入
// function insert() {
//   var user = new User({
//     username: 'Timo', //用户账号 
//     userpwd: 'abcd', //密码
//     userage: 18, //年龄 
//     user_id: Math.ceil(Math.random() * 10000000000),
//     logindate: new Date() //最近登录时间 });
//   })
//   user.save(function (err, res) {
//     if (err) {
//       console.log("Error:" + err);
//     } else {
//       console.log("Res:" + res);
//     }
//   })
// }
// insert();


// // 更新
// function update() {
//   var wherestr = { 'username': 'Tracy McGrady' };
//   var updatestr = { 'userpwd': 'zzzz88' };
//   User.update(wherestr, updatestr, function (err, res) {
//     if (err) {
//       console.log("Error:" + err);
//     } else {
//       console.log("Res:" + res);
//     }
//   })
// }
// update();

// 删除
// function del() {
//   var wherestr = { 'user_id': '3967121528.0' }; User.remove(wherestr, function (err, res) {
//     if (err) {
//       console.log("Error:" + err);
//     } else {
//       console.log("Res:" + res);
//     }
//   })
// }
// del();


// 查询
// function getByConditions() {
//   var wherestr = { 'username': 'Tracy McGrady' };
//   User.find(wherestr, function (err, res) {
//     if (err) {
//       console.log("Error:" + err);
//     } else {
//       console.log(res);
//     }
//   })
// }
// getByConditions();


// 根据id查询
// function getById() {
//   var id = '5e718f30f1da7835e03ff2d9';
//   User.findById(id, function (err, res) {
//     if (err) {
//       console.log("Error:" + err);
//     } else {
//       console.log("Res:" + res);
//     }
//   })
// }
// getById();


// 模糊查询 用户名中带m的名字
// function getByRegex() {
//   var whereStr = { 'username': { $regex: /m/i } };
//   User.find(whereStr, function (err, res) {
//     if (err) {
//       console.log("Error:" + err);
//     } else {
//       console.log("Res:" + res);
//     }
//   })
// }
// getByRegex();
