const {format_date,format_plural,capitalize_sentences,logger} = require('../utils/helpers')

describe('Test the helpers used by handlebars',()=>{

    it('Tests that a date string is converted into a human readable format',()=>{
        const date = new Date('2020-.3-20 16:12:03');
        expect(format_date(date)).toBe('3/20/2020')
    })

    it('Tests that if a word needs to be puralized it will puralize the word by adding an s',()=>{
        const word = 'comment'
        const amount = 1
        expect(format_plural(word,amount)).toBe('comment')
        expect(format_plural(word,amount+1)).toBe('comments')
    })

    it('Tests that each word in a sentence starts with a capitalized letter',()=>{
        const sentence = 'this is an all lower case example sentence'
        const sentenceTwo = 'this Sentence has Some capitals'
        expect(capitalize_sentences(sentence)).toEqual('This Is An All Lower Case Example Sentence')
        expect(capitalize_sentences(sentenceTwo)).toEqual('This Sentence Has Some Capitals')
    })

    it('Tests that it console logs the value provided',()=>{
        const spy = jest.spyOn(console,'log')
        logger('hello')
        expect(spy).toHaveBeenCalled()
    })
})