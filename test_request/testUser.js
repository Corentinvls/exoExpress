const axios = require('axios');


async  function testAll() {

   await axios.get('http://localhost:3000/users/coco')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
       .catch(()=>{
           console.log("try to reload server");})

    await axios.get('http://localhost:3000/users/create/antony/noob')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
    await axios.get('http://localhost:3000/users/replace/antony/brian/noob')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
    await axios.get('http://localhost:3000/users/modify/coco/bigboss')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})
    await axios.get('http://localhost:3000/users/delete/coco')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(()=>{
            console.log("try to reload server");})


}
testAll().then(()=>{
    console.log("done");}).catch(()=>{
    console.log("try to reload server");})