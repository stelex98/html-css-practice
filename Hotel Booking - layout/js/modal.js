const bookNowCollection = document.getElementsByClassName("button-control-book-now");
const modal = document.getElementsByClassName("modal");
const mainTextModalContent = document.getElementsByClassName("modal__text-content");
const mainImageContent = document.getElementsByClassName("modal__image");
const closeModalButton = document.getElementsByClassName("close-modal-button");

closeModalButton[0].addEventListener("click", hideModal);

for(const item of bookNowCollection) {
    item.addEventListener("click", bookModal)
}

function bookModal(event) {
    const outerHtmlOfActiveCard = event.target.parentElement.parentElement.parentElement.outerHTML;
    const activeChildrenCard = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children;
    let imageSrc = null;

    if (activeChildrenCard[0].children[0].children.length) {
        imageSrc = activeChildrenCard[0].children[0].children[0].src;
    } else {
        imageSrc = activeChildrenCard[0].children[0].src;
    }

    showModal(imageSrc, outerHtmlOfActiveCard);

}

function showModal(src = '', outerHtmlOfActiveCard = '') {
    mainImageContent[0].children[0].src = src;
    mainTextModalContent[0].innerHTML = outerHtmlOfActiveCard;

    modal[0].classList.add("show-modal");
}

function hideModal() {
    modal[0].classList.remove("show-modal");
}