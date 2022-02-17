
const deleteCommentHandler = async (e) => {

    const id = document.getElementById('delete-comment-btn').dataset.commentId

    try{
        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        })


        if(response.ok){
          return  document.location.reload()
        }

        alert(response.statusText)

    }catch (e) {
        alert(e)
    }


}


document.getElementById('delete-comment-btn').addEventListener('click',deleteCommentHandler)