//Calculator

function numberValidator(n){
    if(typeof n!=='number'|| Number.isNaN(n)){
    return false
}
    return true
}