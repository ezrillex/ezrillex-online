const CryptoJS = require('crypto-js');
const fs = require('fs')

const data = fs.readFileSync('data.json', 'utf8');

const password = process.env.DATA_ENCRYPTION_PASSWORD;

if (!password) {
  throw new Error('Set DATA_ENCRYPTION_PASSWORD before encrypting data.');
}


var encrypted = CryptoJS.AES.encrypt(data, password).toString()//.toString(CryptoJS.enc.Utf8);


fs.writeFileSync("data.txt", encrypted)


console.log("finished")
