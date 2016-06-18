console.log("Starting Password Manager");

var storage = require('node-persist');
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


/*Password Manager Part 2*/
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

            }
        });
    })
    .help('help')
    .argv;
var command = argv._[0];

if (command === 'create' && typeof argv.name !== 'undefined' && typeof argv.username !== 'undefined' && typeof argv.password !== 'undefined') {
    createAccount({
        name: 'Facebook',
        username: 'Shekar',
        password: '1234'
    });
}
else if (command === 'get' && typeof argv.name !== 'undefined') {
    var facebookAccount = getAccount('Facebook');
    console.log(facebookAccount);
}

function createAccount(account) {
    var accounts = storage.getItemSync('accounts');
    if (typeof accounts === 'undefined') {
        accounts = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return accounts;
}

function getAccount(accountName) {
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;
    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}
