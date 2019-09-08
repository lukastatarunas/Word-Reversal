function reverseWords(string) {
    return string.replace(/[a-z]+/ig, function(w){return w.split('').reverse().join('')})
}
  
console.log(reverseWords("Hi Daniele, How are you?"))