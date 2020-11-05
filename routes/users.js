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
router.get('/create/:name/:attribute', function(req, res) {
    let newObject={
        "name": req.params.name,
        "attribute": req.params.attribute
    }
    ressource.push(newObject)
    res.json(ressource)
})
router.get('/replace/:toReplace/:name/:attribute', function(req, res) {
    let info = ressource.find(value => value.name === req.params.toReplace)
    let index = ressource.indexOf(info)
    ressource[index]={
        "name": req.params.name,
        "attribute": req.params.attribute
    }
    res.json(ressource)
})
router.get('/modify/:toReplace/:newAttribute', function(req, res) {
    ressource.find(value => value.name === req.params.toReplace).attribute=req.params.newAttribute

    res.json(ressource)
})
router.get('/delete/:toReplace', function(req, res) {
    let info = ressource.find(value => value.name === req.params.toReplace)
    let index = ressource.indexOf(info)
    ressource.splice(index, 1)
    res.json(ressource)
})
module.exports = router;
