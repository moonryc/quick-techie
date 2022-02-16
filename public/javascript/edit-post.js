
const editPostHandler = async (event) => {
  event.preventDefault()

  const id = document.location.href.split('/')[document.location.href.split('/').length - 1]
  const title = document.getElementById('edit-title').value.trim()
  const body = document.getElementById('text-body').value.trim()

  try{

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title:title,
        body:body
      }),
      headers:{
        'Content-Type': 'application/json'
      }
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


document.getElementById('update-btn').addEventListener('click',editPostHandler)