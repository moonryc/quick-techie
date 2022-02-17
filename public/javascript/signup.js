
const signupHandler = async (event) => {
    event.preventDefault()

    const email = document.getElementById('email-signup').value.trim()
    const username = document.getElementById('username-signup').value.trim()
    const password = document.getElementById('password-signup').value.trim()

    if(!email || !password || !username){
        return alert("username/password/email are blank, this is not allowed")
    }

    if(password.length>10 || username.length >10){
        return alert("username or password cannot be greater that 10 characters")
    }

    if(email.length>20){
        return alert("email cannot be greater than 20 characters")
    }



    const response = await fetch('/api/users',
        {
            method:'POST',
            body: JSON.stringify({username, password, email}),
            headers:{
                'Content-Type': 'application/json'
            }
        })

    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert(response.statusText)
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupHandler)

document.querySelector('.login-btn').addEventListener('click', ()=>{
    document.location.replace('/login')
})


