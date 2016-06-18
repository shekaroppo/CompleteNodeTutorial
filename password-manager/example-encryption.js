var crypto = require('crypto-js');

// var secreatMessage ='I will play cricket on Thursday';
// var secreatKey = '1234';
//
// var encryptedMessage = crypto.AES.encrypt(secreatMessage,secreatKey);
// console.log("Encrypted msg: "+ encryptedMessage);
//
// var bytes = crypto.AES.decrypt(encryptedMessage,secreatKey);
// var decryptedMessage = bytes.toString(crypto.enc.Utf8);
//
// console.log("Encrypted msg: "+ decryptedMessage);


console.log('======Challenge Area========');

var secreatMessage = {
    name: 'Shekar',
    secretNAme: 'she007',
    password: 1234
};
var array = [secreatMessage];
var secreatKey = '1234';

//As crypto won't take object convert object to string with JSON
var secretStringMessage = JSON.stringify(array);
console.log("secretStringMessage msg: " + secretStringMessage);
//Encrypt Msg
var encryptedMessage = crypto.AES.encrypt(secretStringMessage, secreatKey);
console.log("Encrypted msg: " + encryptedMessage);

//Decrypt Msg
var bytes = crypto.AES.decrypt(encryptedMessage, secreatKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log("Decrypted msg:");
console.log(decryptedMessage);