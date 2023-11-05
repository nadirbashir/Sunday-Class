const express = require('express');
const router = express.Router();


router.get('/:cat',(req, res) => {
    res.send(`products catogary ${req.params.cat}`)
})

router.get('/', (req, res) => {
    res.send(req.data)
})

router.post('/', (req, res) => {
    res.send('post request')
});


module.exports = router;