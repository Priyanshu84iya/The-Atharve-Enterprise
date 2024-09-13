const express = require('express')

const app = express();

const port = 5055;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`server successful, listening a port ${port}`)
})
