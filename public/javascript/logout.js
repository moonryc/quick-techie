const logoutHandler = async () => {

    const response = await fetch('/api/users/logout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    })



    document.location.replace('/');


}


document.getElementById('logout').addEventListener('click', logoutHandler)