console.log("Starting Password Manager");

var storage = require('node-persist');
var crypto = require('crypto-js');
storage.initSync();

/*Soring string*/
//storage.setItemSync('name','Shekar');
// var name = storage.getItemSync('name');
// console.log("Saved name is "+name);

/*Storing n retriving object array*/
// storage.setItemSync('accounts',[{
//     username: "Shekar",
//     balance : 0
// }]);
// var accounts = storage.getItemSync('accounts');
// console.log(accounts);

/*Updating object array*/
// var accounts = storage.getItemSync('accounts');
// accounts.push([{
//     username: "Chandra",
//     balance : 1000
// }]);
// storage.setItemSync('accounts',accounts);
// var accounts = storage.getItemSync('accounts');
// console.log(accounts);

/*Password Manager Part 1*/
// function createAccount(account) {
//      var accounts = storage.getItemSync('accounts');
//     if(typeof accounts === 'undefined'){
//         accounts = [];
//     }
//     accounts.push(account);
//     storage.setItemSync('accounts',accounts);
//     return accounts;
// }
//
// function getAccount(accountName) {
//     var accounts = storage.getItemSync('accounts');
//     var matchedAccount;
//     accounts.forEach(function (account) {
//         if(account.name === accountName){
//             matchedAccount = account;
//         }
//     });
//     return matchedAccount;
// }
//
// createAccount({
//     name: 'Facebook',
//     username: 'Shekar',
//     password: '1234'
// });
//
// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);


/*Password Manager Part 2
 -   Add command line capabilities to create and get account */
// var argv = require('yargs')
//     .command('create', 'Create user account', function (yargs) {
//         yargs.options({
//             name: {
//                 demand: true,
//                 alias: 'n',
//                 description: 'Name',
//                 type: 'String'
//             },
//             username: {
//                 demand: true,
//                 alias: 'u',
//                 description: 'Username',
//                 type: 'String'
//             },
//             password: {
//                 demand: true,
//                 alias: 'p',
//                 description: 'Password',
//                 type: 'String'
//             }
//         });
//
//     })
//     .command('get', 'Get user account', function (yargs) {
//         yargs.options({
//             name: {
//                 demand: true,
//                 alias: 'n',
//                 description: 'Name',
//                 type: 'String'
//
//             }
//         });
//     })
//     .help('help')
//     .argv;
// var command = argv._[0];
//
// if (command === 'create' && typeof argv.name !== 'undefined' && typeof argv.username !== 'undefined' && typeof argv.password !== 'undefined') {
//     var createdAccount=createAccount({
//         name: argv.name,
//         username: argv.username,
//         password: argv.password
//     });
//     console.log("Account created");
//     console.log(createdAccount);
//
// }
// else if (command === 'get' && typeof argv.name !== 'undefined') {
//     var account = getAccount(argv.name);
//     if(typeof account === 'undefined'){
//         console.log("Account not found");
//     }
//     else {
//         console.log("Account found");
//         console.log(account);
//     }
// }
//
// function createAccount(account) {
//     var accounts = storage.getItemSync('accounts');
//     if (typeof accounts === 'undefined') {
//         accounts = [];
//     }
//     accounts.push(account);
//     storage.setItemSync('accounts', accounts);
//     return accounts;
// }
//
// function getAccount(accountName) {
//     var accounts = storage.getItemSync('accounts');
//     var matchedAccount;
//     accounts.forEach(function (account) {
//         if (account.name === accountName) {
//             matchedAccount = account;
//         }
//     });
//     return matchedAccount;
// }


/*Password Manager Part 3
 -   Add encryption to Accounts */
var argv = require('yargs')
    .command('create', 'Create user account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Name',
                type: 'String'
            },
            username: {
                demand: true,
                alias: 'u',
                description: 'Username',
                type: 'String'
            },
            password: {
                demand: true,
                alias: 'p',
                description: 'Password',
                type: 'String'
            },
            masterpassword: {
                demand: true,
                alias: 'mp',
                description: 'Used to encrypt and decrypt accounts',
                type: 'String'
            }

        });

    })
    .command('get', 'Get user account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Name',
                type: 'String'

            },
            masterpassword: {
                demand: true,
                alias: 'mp',
                description: 'Used to encrypt and decrypt accounts',
                type: 'String'
            }
        });
    })
    .help('help')
    .argv;
var command = argv._[0];

if (command === 'create' && typeof argv.name !== 'undefined' && typeof argv.username !== 'undefined' && typeof argv.password !== 'undefined' && typeof argv.masterpassword !== 'undefined') {
    var createdAccount = createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
    }, argv.masterpassword);
    console.log("Account created");
    console.log(createdAccount);

}
else if (command === 'get' && typeof argv.name !== 'undefined' && typeof argv.masterpassword !== 'undefined') {
    var account = getAccount(argv.name, argv.masterpassword);
    if (typeof account === 'undefined') {
        console.log("Account not found");
    }
    else {
        console.log("Account found");
        console.log(account);
    }
}

function createAccount(account, masterPassword) {
    var decryptedAccounts = getDecryptedAccounts(masterPassword);
    decryptedAccounts.push(account);
    var encryptedAccounts = saveAccounts(decryptedAccounts, masterPassword);
    return encryptedAccounts;
}

function getAccount(accountName, masterPassword) {
    var decryptedAccounts = getDecryptedAccounts(masterPassword);
    var matchedAccount;
    decryptedAccounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

function getDecryptedAccounts(masterPassword) {
    var encryptedAccounts = storage.getItemSync('accounts');
    var decryptedAccounts;
    if (typeof encryptedAccounts === 'undefined') {
        decryptedAccounts = [];
    }
    else {
        var bytes = crypto.AES.decrypt(encryptedAccounts.toString(), masterPassword);
        decryptedAccounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
    return decryptedAccounts;
}

function encryptAccounts(accounts, masterPassword) {
    var stringAccounts = JSON.stringify(accounts);
    var encryptedAccounts = crypto.AES.encrypt(stringAccounts, masterPassword);
    return encryptedAccounts;
}

function saveAccounts(accounts, masterPassword) {
    var encryptedAccounts = encryptAccounts(accounts, masterPassword);
    storage.setItemSync('accounts', encryptedAccounts.toString());
    return encryptedAccounts;
}



