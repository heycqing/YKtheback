var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql')
 
var app = express();
 
    // // bodyParser.urlencoded解析form表单提交的数据
    // app.use(bodyParser.urlencoded({extended: false}));
    
    // // bodyParser.json解析json数据格式的
    // app.use(bodyParser.json());
    // 设置头文件
    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header("Content-Type", "application/json");
        if (req.method == 'post') {
            res.send(200);
            //  /让options请求快速返回/
        }
        else {
            next();
        }
    });

    // app.post('/postData',function(req, res){
       
    var connection = mysql.createConnection({     
        host     : '39.108.58.83',       
        user     : 'root',              
        password : '1234',       
        port: '3306',                   
        database: 'YK', 
    }); 

    connection.connect();

  
    //获取所有用户的信息
    var sql_all = 'select * from dataOfYK';    
    connection.query(sql_all,function (err, result) {
        if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
        }
        if(result === 0){
            return;
        }        
        console.log('--------------------------select----------------------------');
        console.log('SELECT affectedRows',result);
        var data = JSON.stringify(result);
        console.log('-----------------------------------------------------------------\n\n');

        // 把获的数据传到/postData页面上；
        app.get('/postData', function(req, res) {
            res.send(result);
        });
    
         
        fs.writeFile('YKdata.json',data, 'utf8', function(){
            // 保存完成后的回调函数
            console.log("保存完成");
        });

    });

    // 获取已经通过的用户信息，where sccuess
    var sql_pass = "select * from dataOfYK where markStatus = \'通过\' ";
    connection.query(sql_pass,function (err, result) {
        if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
        }
        if(result === 0){
            return;
        }        
        console.log('--------------------------select----------------------------');
        console.log('SELECT affectedRows',result);
        var data = JSON.stringify(result);
        console.log('-----------------------------------------------------------------\n\n');

        // 把获的数据传到/postData页面上；
        app.get('/passData', function(req, res) {
            res.send(result);
        });
    
         
        fs.writeFile('YKdata_pass.json',data, 'utf8', function(){
            // 保存完成后的回调函数
            console.log("保存完成");
        });

    });
    
    // 获取已经淘汰的用户信息  where out
    var sql_out = "select * from dataOfYK where markStatus = \'淘汰\' ";
    connection.query(sql_out,function (err, result) {
        if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
        }
        if(result === 0){
            return;
        }        
        console.log('--------------------------select----------------------------');
        console.log('SELECT affectedRows',result);
        var data = JSON.stringify(result);
        console.log('-----------------------------------------------------------------\n\n');

        // 把获的数据传到/postData页面上；
        app.get('/outData', function(req, res) {
            res.send(result);
        });
    
         
        fs.writeFile('YKdata_out.json',data, 'utf8', function(){
            // 保存完成后的回调函数
            console.log("保存完成");
        });

    });

    // 获取待定的用户信息 where waiting
    var sql_waiting= "select * from dataOfYK where markStatus = \'待定\' ";
    connection.query(sql_waiting,function (err, result) {
        if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
        }
        if(result === 0){
            return;
        }        
        console.log('--------------------------select----------------------------');
        console.log('SELECT affectedRows',result);
        var data = JSON.stringify(result);
        console.log('-----------------------------------------------------------------\n\n');

        // 把获的数据传到/postData页面上；
        app.get('/waitingData', function(req, res) {
            res.send(result);
        });
    
         
        fs.writeFile('YKdata_waiting.json',data, 'utf8', function(){
            // 保存完成后的回调函数
            console.log("保存完成");
        });

    });


    // 修改用户状态：init状态==>通过，待定状态==>通过  (where name =? && status= ?)
    app.post('changeToPass',function(req,res){
        // 获取唯一值：电话号码
        var phone_pass = res.body.phone;
        var sql_changePass = "update dataOfYk SET markStatus = '通过' where phone = \' "+phone_pass + "\'";
        connection.query(sql_changePass,function (err, result) {
            if(err){
                    console.log('[update ERROR] - ',err.message);
                    return;
            }
            if(result === 0){
                return;
            }        
            console.log('--------------------------select----------------------------');
            console.log('update affectedRows',result);
            var data = JSON.stringify(result);
            console.log('-----------------------------------------------------------------\n\n');
             
        });



    })
    // 修改用户状态：init状态==>待定  (where name =? && status= ?)
    app.post('changeToWaiting',function(req,res){
        // 获取唯一值：电话号码
        var phone_Waiting = res.body.phone;
        var sql_changeWaiting = "update dataOfYk SET markStatus = '待定' where phone = \' "+phone_Waiting+ "\'";
        connection.query(sql_changeWaiting,function (err, result) {
            if(err){
                    console.log('[update ERROR] - ',err.message);
                    return;
            }
            if(result === 0){
                return;
            }        
            console.log('--------------------------select----------------------------');
            console.log('update affectedRows',result);
            var data = JSON.stringify(result);
            console.log('-----------------------------------------------------------------\n\n');
             
        });



    })
    // 修改用户状态：init状态==>淘汰，待定状态==>淘汰  (where name =? && status= ?)
    app.post('changeToOut',function(req,res){
        // 获取唯一值：电话号码
        var phone_Out = res.body.phone;
        var sql_changeOut = "update dataOfYk SET markStatus = '待定' where phone = \' "+phone_Out+ "\'";
        connection.query(sql_changeOUt,function (err, result) {
            if(err){
                    console.log('[update ERROR] - ',err.message);
                    return;
            }
            if(result === 0){
                return;
            }        
            console.log('--------------------------select----------------------------');
            console.log('update affectedRows',result);
            var data = JSON.stringify(result);
            console.log('-----------------------------------------------------------------\n\n');
             
        });



    })
    // 更新用户基本信息：餐厅，商圈，电话号码（一起更新和单独更新）
    
    
    connection.end();

 
// });
 
app.listen(3333);
console.log('监听3333端口')