/**
 * this function is responsible for setting up a adminstratice store new store base on the command of a authorized admininstrator
 * we pass to this function t
 * -the name
 * -the location 
 * -phone contact information
 * -email contact information
 * -password
 * 
 * with this details we setup this store
 * We first check is there is a company with the same name at and same location if not we save else we 
 * inform the constommer of the problem with an error
 */

const db_connection = require('../Model/DB_connection');



// DB.insertOne({ name: 'name', location: 'location', telephoneContacts: ['phone'], email: 'email', password: 'password' })
module.exports = async function(name, location, [phone], email, password) {

    try {
        let DB = await db_connection(name, 'Administrator')

        if (!password) {
            return ('password not added')
        }

        let shorp = {
            name: name,
            location: location,
            telephoneContacts: [phone],
            email: email,
            password: password
        }
        let newbuss = await DB.insertOne(shorp)

        return newbuss

    } catch (error) {
        console.log('err: ' + error)
    }




}