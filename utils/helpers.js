module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    },
    capitalize_sentences:(sentence)=>{
      const arrayOfWords = sentence.split(' ')
      for(let i = 0; i<arrayOfWords.length;i++){
          arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1)
      }
      return arrayOfWords.join(' ')
    },
    logger:(object)=>{
        return console.log(object)
    }
}