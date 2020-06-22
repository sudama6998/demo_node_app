const CryptoJS = require('crypto-js');
const decryptKey = "contactApp";

module.exports = data => {
  console.log(data)
  let decipher = CryptoJS.AES.decrypt(data, decryptKey);
  console.log(decipher)
  decipher = decipher.toString(CryptoJS.enc.Utf8);
  console.log(decipher)
  return decipher;
}