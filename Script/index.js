let usersData = JSON.parse(localStorage.getItem('users')) || [];
let logedUser = JSON.parse(localStorage.getItem('loged-user')) || {}
let cartarr = JSON.parse(localStorage.getItem(`${logedUser.name}-cart`)) || [];

let navbarBtns = document.querySelector("#navabar-btns")

let userInfo = document.querySelectorAll(".user-info");
let navBtns = document.querySelectorAll(".nav-btns");

let name = document.querySelector("#name")
let email = document.querySelector("#email")
let number = document.querySelector("#no")
let logout = document.querySelector("#logout")
let userName = document.querySelector("#user-name")
let cartCount = document.querySelector("#cart-count");
cartCount.textContent = cartarr.length



// logout 
logout.addEventListener("click",()=>{
    localStorage.removeItem('loged-user');
    location.reload()
})


if(logedUser.name){
    userInfo.forEach((el)=>{
        el.style.display = "block"
    })
    navBtns.forEach((el)=>{
        el.style.display = "none"
    })
   name.textContent = logedUser.name
   userName.textContent =  `Hi, ${logedUser.name.substr(0,6)}`
   email.textContent = logedUser.email
   number.textContent = logedUser.phone
   navbarBtns.style.marginLeft = "32%"
}else{
    navbarBtns.style.marginLeft = "43%"
}


 
getUserData()

function getUserData(){
    let signin_form = document.querySelector("#sign-in");
    signin_form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let formData = {
            name : signin_form.name.value,
            email : signin_form.email.value,
            phone : signin_form.number.value,
            password : signin_form.password.value,
        }
        usersData.push(formData)
        localStorage.setItem("users",JSON.stringify(usersData));
        console.log(formData)
        let signin = document.querySelector("#signin-modal")
        signin.setAttribute("data-bs-dismiss",'modal')
        alert("Account Created Successfully");
    })
    

}


function loginUser(){
    let login = false;
    let login_form = document.querySelector("#log-in")
    let login_modal= document.querySelector("#login-modal")
    login_modal.setAttribute("data-bs-dismiss",'modal')
    login_form.addEventListener('submit',(e)=>{
         e.preventDefault();
         let email = login_form.loginEmail.value;
         let password = login_form.loginPassword.value;
         for(let i=0;i<usersData.length;i++){
            if(usersData[i].email == email && usersData[i].password == password){
                logedUser = usersData[i];
                localStorage.setItem('loged-user',JSON.stringify(logedUser))
                login = true
                break;
            }
         }
         if(login){
            alert("Login Succesfull");
            userInfo.forEach((el)=>{
                el.style.display = "block"
            })
            navBtns.forEach((el)=>{
                el.style.display = "none"
            })
            location.reload()
        }else{
            alert("Wrong Credential")
        }
       
    })

}

loginUser()


let userInfoBtn = document.querySelector("#dropdownMenuUser")
let userDiv = document.querySelector("#user-div")
let btnClose = document.querySelector("#btn-close")


userInfoBtn.addEventListener("click",()=>{
    userDiv.style.display = "block"
    
})

btnClose.addEventListener("click",()=>{
    userDiv.style.display = "none"
})










