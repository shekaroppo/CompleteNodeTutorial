// try {
//     throw new Error('Unable to decrypt msg');
// }
// catch(e) {
//     console.log(e.message);
// }
// finally {
//     console.log('Finally block executed');
// }
// console.log('Try Catch Ended');


console.log('======Challenge Area========');

function doWork() {
    throw new Error('Unable to work');
}

try {
    doWork();
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log('Finally block executed');
}
console.log('Try Catch Ended');
