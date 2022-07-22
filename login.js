let form = document.querySelector("form");
let userData=JSON.parse(localStorage.getItem('userData')) || [];
let bag = Boolean(localStorage.getItem('bool')) || [];
let signin = JSON.parse(localStorage.getItem("signin")) ||[];

form.addEventListener('submit',(el)=>{
    el.preventDefault();
    let data={
        email:form.email.value,
        pass:form.pass.value
    }
    if(checksignin(data.email,data.pass)===true){
        localStorage.setItem('signin',JSON.stringify(data));
        bag=true;
        localStorage.setItem('bool',bag);
        alert("Login Successful");
        window.location.href="index.html";
    } else{
        alert("Wrong Details");
        location.reload();
    }

});
function checksignin(email,pass){
    let filter = userData.filter((elem)=>{
        return elem.email===email && elem.pass ===pass
    })
    if(filter.length>0){
        return true
    }else{
        return false
    }
}


