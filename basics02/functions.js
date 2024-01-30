function addAnyNumberOfNumnbers() {
    let sum = 0
    for(let index=0 ; index < arguments.length ; index++)
    {
        sum += arguments[index]
    }
    return sum
}

result = addAnyNumberOfNumnbers(2,3,4,5,6,7,8)
console.log(result);