const {User} = require('../models')


const userData=[
    {
        username: 'john',
        email:'john@beatles.com',
        password:'legend'
    },
    {
        username:'paul',
        email:'paul@beatles.com',
        password:'mcartney'
    },
    {
        username: 'ringo',
        email:'ringo@beatles.com',
        password:'star'
    },
    {
        username: 'george',
        email:'george@beatles.com',
        password:'harrison'
    },
    {
        username: 'yoko',
        email:'yoko@beatles.com',
        password:'ono'
    }
]

const seedUser =()=> User.bulkCreate(userData)

module.exports = seedUser