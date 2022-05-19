/**
 * Tihis route is responsible for creating a new administrtor and a new store .
 * we create a new store linked to the new admin 
 * Every store has a name , list on product and list of venders stations with their various venders responsible for selling products
 */
const router = require('express').Router()



//controller
const setup = require('../../controllers/businessSetup')


router.post('/', async(req, res, next) => {
    let name = req.body.name;
    let location = req.body.location
    let telephoneContact = [req.body.telephoneContact]
    let email = [req.body.email]
    let password = req.body.password

    try {
        let result = await setup(name, location, telephoneContact, email, password);
        res.send(result);
    } catch (err) {
        console.log("Err:" + err)
        res.send("Err:" + err)
    }

})

module.exports = router