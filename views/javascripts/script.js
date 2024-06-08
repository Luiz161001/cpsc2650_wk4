document.addEventListener("DOMContentLoaded", () => {
    let deleteBtns = document.querySelectorAll('.delete-btn');
    // console.log(deleteBtns);
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let id = btn.getAttribute("data-id");
            fetch(`/notes/delete/${id}`, {method: 'DELETE'})
            .then(location.reload())
            .catch(error => console.error("Something went wrong: ", error));
        })
    })

    let saveBtns = document.querySelectorAll('.edit-btn');
    // console.log(saveBtns);
    saveBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let id = btn.getAttribute("data-id");
            let data = btn.parentNode.firstChild.innerHTML;

            fetch(`/notes/update/${id}/${data}`, {method: 'PATCH'})
            .then(location.reload())
            .catch(error => console.error("Something went wrong: ", error));
        })
    })
})