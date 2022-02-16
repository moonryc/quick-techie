
const logoutHandler = async () => {

    const response = await fetch('/api/users/logout',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if(response.ok){
        document.location.replace('/');
    }else{
        alert(JSON.stringify(response))
    }

}



document.getElementById('logout').addEventListener('click',logoutHandler)