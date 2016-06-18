var grades = [10,20];
grades.unshift(0);
grades.push(30);
console.log(grades);
grades.pop();
console.log(grades);
grades.shift();
console.log(grades);
grades.forEach(function (item) {
    console.log(item);
});