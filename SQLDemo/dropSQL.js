/**
 * Created by Administrator on 2017/2/6.
 */
var mysql = require('mysql');
var connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
});
var dropSQL='DROP DATABASE RUNOOB';
connection.connect(function(err){
        if(err){
            console.log("数据库连接失败");
            throw(err);
        }else{
            console.log("数据库连接成功");
            connection.query(dropSQL, function(err,result){
                if(err){
                    console.log("删除数据库失败")
                    // throw err
                }else{
                    console.log("删除数据库成功")
                }
            })
        }
    })

