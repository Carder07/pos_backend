const express = require('express');
const app = express();
require('./Model/DB_connection')
const administrative_instance = require('./admin_mount');







//middleware
app.use(express.json())
app.use('/admin', administrative_instance);








app.listen(3000, () => {
    console.log("app is listening on port 3000");
})