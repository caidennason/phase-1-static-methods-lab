class Formatter {
  static capitalize(string){
    let fixedWord = string[0].toUpperCase() + string.slice(1)
    return fixedWord 
  }
  static sanitize(string){
  const replaced = string.replace(/[^-, 'A-Za-z0-9]+/g, '')
  return replaced
  }
  static titleize(string){
    let wordArr = []
    let words = ['the',  'a',  'an',
    'but',  'of', 'and',
    'for',  'at', 'by',
    'from']
    let parts = string.split(' ')
    for (let i = 0; i < parts.length; i++){
    if (i == 0){
      wordArr.push(this.capitalize(parts[i]))
      console.log(wordArr)
    } else {
      if (words.includes(parts[i])){
        wordArr.push(parts[i])
      } else {
        wordArr.push(this.capitalize(parts[i]))
      }
    }
  }
  return wordArr.join(' ')
}
}
