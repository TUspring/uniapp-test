var mongoose = require('mongoose'),
DB_URL = 'mongodb://localhost:27017/mongoosesample'; /** * 连接 */ 

mongoose.connect( DB_URL, { useNewUrlParser: true, useUnifiedTopology: true },function(err){
  if(err){
    //throw err;
    console.log(err);
  }else{
    console.log('数据库连接成功');
  }
});
module.exports = mongoose;