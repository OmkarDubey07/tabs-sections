const tabs = document.querySelector('.tabs');
const buttons = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.content');

tabs.addEventListener("click", (event) => {

    const id = event.target.dataset.id;

    if (id) {

        buttons.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live");

        articles.forEach((art)=>{
            art.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }   
});