var express = require('express');
var router = express.Router();
var ressource = [{
    "name": "coco",
    "attribute": "boss"
}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.params);
    res.send('coucou');
});
router.get('/:name', function(req, res) {
    let info = ressource.find(value => value.name === req.params.name)
    res.json(info)
})
router.post('/', function(req, res) {
    let newObject={
        "name": req.body.name,
        "attribute": req.body.attribute
    }
    console.log(req.body);
    ressource.push(newObject)
    res.json(ressource)
})
router.put('/:name', function(req, res) {
    let info = ressource.find(value => value.name === req.params.name)
    let index = ressource.indexOf(info)
    ressource[index].attribute = req.body.attribute
    res.json(ressource)
})
router.patch('/:name', function(req, res) {
    let info = ressource.find(value => value.name === req.params.name)
    let index = ressource.indexOf(info)
    ressource[index]= req.body
    res.json(ressource)
})
router.delete('/:name', function(req, res) {
    let info = ressource.find(value => value.name === req.params.name)
    let index = ressource.indexOf(info)
    ressource.splice(index, 1)
    res.json(ressource)
})
module.exports = router;
