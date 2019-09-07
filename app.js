reverseString = string => {
    const splittedString = string.split("")
    const reversedArray = splittedString.reverse()
    const joinedArray = reversedArray.join("")
    return joinedArray
}
 
reverseString(`Lukas is a React Developer`)