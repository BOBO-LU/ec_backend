const db = require('../connection_db');

module.exports = function getProductData(memberData) {
    let result = {};
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM product', function (err,rows) {
            if (err) {
                console.log(err);
                result.status = "無法取得全部訂單資料。"
                result.err = "伺服器錯誤,請之後在嘗試"
                reject(result);
                return;
            }
            resolve(rows);
        })
    })
}