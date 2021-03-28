const bookNowCollection = document.getElementsByClassName("button-control-book-now");
const modal = document.getElementsByClassName("modal");
const closeModalButton = document.getElementsByClassName("close-modal-button");

closeModalButton[0].addEventListener("click", hideModal);

for(const item of bookNowCollection) {
    item.addEventListener("click", showModal)
}

function showModal() {
    modal[0].classList.add("hide-modal");
}

function hideModal() {
    modal[0].classList.remove("hide-modal");
}