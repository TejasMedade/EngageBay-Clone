
let form = document.querySelector('form');
let userData=JSON.parse(localStorage.getItem('userData')) ||[];

form.addEventListener('submit',function(el){
    el.preventDefault();
    let data={
        name:form.name.value,
        email:form.email.value,
        web:form.web.value,
        pass:form.pass.value
    }
    if(checkmail(data.email)===true){
        userData.push(data)
        localStorage.setItem("userData",JSON.stringify(userData))
      
        window.location.href="login.html"
    }else{
        alert("Email Exists !")
    }
});

function checkmail(email){
    let checker = userData.filter((elem)=>{
        return email===elem.email;
    })
    if(checker.length>0){
        return false
    }else{
        return true;
    }
}