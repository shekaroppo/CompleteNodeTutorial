//Open account
var shekarAccount = {
    userName: 'Shekar',
    balance:0
}
var chandraAccount = {
    userName: 'Chandra',
    balance:0
}
var accounts = [];

// Create Accounts
function createAccount(account) {
    accounts.push(account)
}

//Deposit
function deposit(username , amount) {
    account = getAccount(username);
    account.balance= account.balance+amount;
}
//Withdraw
function withdraw(username , amount) {
    account = getAccount(username);
    account.balance= account.balance-amount;
}
//Balance
function balance(username) {

    account = getAccount(username);
    return account.balance
}

function getAccount(username) {
    var matchedAccount
    accounts.forEach(function (account) {
        if(account.userName === username){
            matchedAccount= account;
        }
    })
    return matchedAccount;
}

createAccount(shekarAccount);
createAccount(chandraAccount);
deposit(shekarAccount.userName,10);
console.log(balance(shekarAccount.userName));
withdraw(shekarAccount.userName,5);
console.log(balance(shekarAccount.userName));
console.log(accounts);