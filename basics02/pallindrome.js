function reverseString(String){
    let ultaString = ""
    let length = String.length
    for(i=0 ; i < length ; i++)
    {
        ultaString += String[length - 1 - i]
    }
    if (ultaString == String)
    {
        console.log(`${String} is in pallindrome`);
    }else{
        console.log(`${String} is not in pallindrome`);
    }
}

const username = "laal"

reverseString(username)
