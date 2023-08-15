export const markTask = () => {
    const bgTask = document.querySelectorAll(".todo-item");
    bgTask.forEach((el) => {
        el.addEventListener("click", () => {
            el.classList.toggle("active")
        })
    })
}