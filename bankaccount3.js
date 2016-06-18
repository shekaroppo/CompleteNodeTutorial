//Open account
var shekarAccount = {
    userName: 'Shekar',
    balance:0
}
var chandraAccount = {
    userName: 'Chandra',
    balance:100
}
var accounts = [];

// Create Accounts
function createAccount(account) {
    accounts.push(account)
}

//Deposit
function deposit(username , amount) {
    if(typeof amount === 'number') {
        account = getAccount(username);
        account.balance = account.balance + amount;
    }
    else{
        console.log("Deposit failed. Amount is not a number");
    }
}
//Withdraw
function withdraw(username , amount) {
    if(typeof amount === 'number') {
        account = getAccount(username);
        account.balance = account.balance - amount;
    }
    else{
        console.log("ithdraw failed. Amount is not a number");
    }
}
//Balance
function balance(username) {
    account = getAccount(username);
    return account.balance
}

function createBalanceGetter(account) {
    return function () {
       return account.balance;
    }
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
var chandraAccountBal = getAccount('Chandra');
var chandrBalance = createBalanceGetter(chandraAccountBal);
console.log(chandrBalance());