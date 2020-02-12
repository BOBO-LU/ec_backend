require('dotenv').config()

module.exports = {
    mysql: {
      host: process.env.HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE
    },
    secret: process.env.MY_SECRET,
    senderMail: {
      user: process.env.SEND_MAIL_USER,
      password: process.env.SEND_MAIL_PASSWORD
    }
}

/*
HOST = 'localhost'
DATABASE_USER = 'test'
DATABASE_PASSWORD = '1234'
DATABASE = 'shopping_cart'

SUPPRESS_NO_CONFIG_WARNING = 'disable'

SEND_MAIL_USER = 'jonathan200415@gmail.com'
SEND_MAIL_PASSWORD = 'jo0917222169' 
 */
