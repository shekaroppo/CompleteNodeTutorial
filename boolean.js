var idValid = true;
function toggleBoolean(boolVar) {
    if(typeof boolVar === "boolean"){
        return !boolVar;
    }
    else{
        return "Not a boolean"
    }
}
console.log(toggleBoolean(idValid));
