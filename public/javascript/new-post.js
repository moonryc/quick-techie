


const newPostHandler = async (event) => {
  event.preventDefault()

  const title = document.getElementById("text-title").value.trim()
  const body = document.getElementById("text-body").value.trim()

  const response = await fetch('/api/posts',{
    method:"POST",
    body:JSON.stringify({title,body}),
    headers:{
      'Content-Type': "application/json"
    }
  })

  if(response.ok){
    document.location.replace('/dashboard')
  }else{
    alert(response.statusText)
  }

}



document.querySelector(".new-post-form").addEventListener('submit',newPostHandler)