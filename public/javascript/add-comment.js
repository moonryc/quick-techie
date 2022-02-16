const addCommentHandler = async (event) => {
  event.preventDefault()

  const comment_text = document.getElementById('comment-body').value.trim()
  const locationArray = window.location.href.split('/')
  const post_id = locationArray[locationArray.length-1]


  const response = await fetch('/api/comments',{
    method:'POST',
    body:JSON.stringify({
      post_id:post_id,
      comment_text:comment_text
    }),
    headers:{
      "Content-Type": "application/json"
    }
  })

  if(response.ok){
    document.location.replace(`/post/${post_id}`)
  }else {
    alert(response.statusText)
  }


}

document.getElementById('submit-comment').addEventListener('click',addCommentHandler)