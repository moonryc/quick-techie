const deletePostHandler = async (event) => {
    event.preventDefault()

    const id = document.location.href.split('/')[document.location.href.split('/').length - 1]

    try{


    const response = await fetch(`/api/posts/${id}`,{
        method:"DELETE"
    })

    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert(response.statusText)
    }
    }catch (e) {
        alert(e)
    }

}

document.getElementById('delete-btn').addEventListener('click',deletePostHandler)