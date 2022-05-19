/** this
 *   route is responsible for adding a new product to a store
 */



const router = require('express').Router()

const newProduct = require('../../controllers/newProduct')

/* A post request to the server. */
router.post('/', async(req, res) => {


    /* The above code is a function that is being called from the route. The function is called
    newProduct and it is being passed the parameters name, price, category, and productType. The
    function is then being awaited and if the outcome is acknowledged as true, then the product is
    added to the store successfully. */
    let name = req.body.name;
    let price = req.body.price;
    let category = req.body.category;
    let productType = req.body.productType;


    try {
        let outcome = await newProduct(name, price, category, productType)

        if (outcome.acknowledged == true) {
            res.send('Product added to store successfully')
        }

    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;