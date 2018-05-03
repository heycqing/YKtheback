var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql')
// var msgPost = require('./msgPost')
 
var app = express();
 
    // bodyParser.urlencoded解析form表单提交的数据
    app.use(bodyParser.urlencoded({extended: false}));
    
    // bodyParser.json解析json数据格式的
    app.use(bodyParser.json());
    // 设置头文件
    app.all('*', function(req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        // res.set('')
        res.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.set("Content-Type", "text/plain;charset=utf-8");
        if (req.method == 'post') {
            res.send(200);
        }
        else {
            next();
        }
    });

    app.post('/changeToPass',function(req,res){
        // 获取唯一值：电话号码
        console.log(res.body)
        var phone_pass = res.body.phone;
        console.log('\n\n\n\n\n\n =====================================\n phone_pass:'+phone_pass+'\n=======================================\n\n\n\n\n')


        var connection = mysql.createConnection({     
            host     : '39.108.58.83',       
            user     : 'root',              
            password : '1234',       
            port: '3306',                   
            database: 'YK', 
        }); 
    
        connection.connect();
        
        var sql_changePass = "update dataOfYk SET markStatus = '通过' where phone = \' "+phone_pass + "\'";
        connection.query(sql_changePass,function (err, result) {
            if(err){
                    console.log('[update ERROR] - ',err.message);
                    return;
            }
            if(result === 0){
                return;
            }        
            console.log('--------------------------ksksksk----------------------------');
            console.log('update affectedRows',result);
            var data = JSON.stringify(result);
            console.log('-----------------------------------------------------------------\n\n');
             
        });


    connection.end();
    fs.writeFile('change.json',str_json, 'utf8', function(){
        // 保存完成后的回调函数
        console.log("保存完成");
        });        
    })

console.log('监听端口3233')
app.listen(3233);