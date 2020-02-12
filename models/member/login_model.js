console.log('login_model');
const db = require('../connection_db');
console.log('2login_model');
module.exports = function memberLogin(memberData) {
    let result = {};
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM member WHERE email = ? AND password = ?', [memberData.email, memberData.password], function (err,rows){
            if (err) {
                result.status = "登入失敗";
                result.err = "伺服器錯誤，請稍後在試！";
                reject(result);

                return;
            }else {
                resolve(rows);

            }
            
        });
    });
}