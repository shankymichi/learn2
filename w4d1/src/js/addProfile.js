
//const axios = require('axios');


 function saveProfile() {
    let name=document.getElementById('name');
    let phoneno=document.getElementById('phoneno');
    let location=document.getElementById('location');
    let workexperience=document.getElementById('workexperience');
    let education=document.getElementById('education');
    let skills=document.getElementById('skills');
    let userid=document.getElementById('userid');
    sendRequest(userid , name , phoneno , location, education , workexperience,skills)
 }

 function sendRequest(userid , name , phoneno , location, education , workexperience,skills){
    
        axios.post('https://localhost:9002/profile/add', {

        userid : userid,

        name : name,

        phoneno : phoneno,

        location : location,

        education :  education,

        workexperience : workexperience,

        skills : skills,

    }).then(res => {

        console.log(res)

        console.log('added successful')

    })

    .catch(error => {

        console.error(error)

    })  
    
    }
    console.log("in js");