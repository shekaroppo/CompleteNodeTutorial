//Open account
var account = {
    balance:0
}
//Deposit
function deposit(account , amount) {
    account.balance= account.balance+amount;
}
//Withdraw
function withdraw(account , amount) {
    account.balance= account.balance-amount;
}
//Balance
function balance(account) {
    return account.balance
}
deposit(account,10);
console.log(balance(account));
withdraw(account,5);
console.log(balance(account));
