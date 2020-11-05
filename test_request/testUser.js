const axios = require('axios');


async  function testAll() {

    await axios.get('http://localhost:3000/users/coco')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})

    await axios.post('http://localhost:3000/users/',
        {
            name: "antony",
            attribute: "noob"
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
    await axios.put('http://localhost:3000/users/coco',
        {
            name: "coco",
            attribute: "noob"
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
    await axios.patch('http://localhost:3000/users/coco',
        {
            name: "coco",
            attribute: "bigboss"
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
    await axios.delete('http://localhost:3000/users/antony')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
}
testAll().then(()=>{
    console.log("done");})
