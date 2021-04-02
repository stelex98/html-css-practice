const infoDialog = document.getElementById('info-dialog');
const dialogCard = infoDialog.querySelector('.dialog');
const infoDialogTriggers = document.querySelectorAll('[data-target="info-dialog"]');
const infoDialogCloseTriggers = document.querySelectorAll('[data-target-close="info-dialog"]');

const modalTitle = document.querySelector(".modal__title");
const modalContent = document.querySelector(".modal__content");

for (const closeTrigger of infoDialogCloseTriggers) {
    closeTrigger.addEventListener('click', () => {
        const targetElem = document.getElementById(closeTrigger.dataset.targetClose);

        targetElem.style.display = 'none';

        // reset modal content
        modalTitle.innerText = '';
        modalContent.innerText = '';

        // enable scroll
        document.body.style.overflow = 'visible';
    });
}

window.addEventListener('click', event => {
    let title = '';
    let mainContent = '';
    const classWrapper = ".card-type-wrapper";

    const { isDialogTriggerClicked,  clickedElement: element} =
        addEventBookNowTrigger(event, classWrapper);

    if (isDialogTriggerClicked) {
        title = element.querySelector("h2").innerText;

        if (element.querySelector("p")) {
            mainContent = element.querySelector("p").innerText;
        } else {
            mainContent = `Current price: ${element.querySelector(".current-price").innerText}`;
        }

        modalTitle.innerText = title;
        modalContent.innerText = mainContent;

        infoDialog.style.display = 'flex';

        // disable scroll
        document.body.style.overflow = 'hidden';
    }
    else if (!dialogCard.contains(event.target)) {
        infoDialog.style.display = 'none';
    }
});

function addEventBookNowTrigger(event, classWrapper) {
    let clickedElement = null;
    const isDialogTriggerClicked = [...infoDialogTriggers].some(
        dialogTrigger => {
            const result = dialogTrigger.contains(event.target);

            if (result) {
                clickedElement = event.target.closest(classWrapper)
            }

            return result
        }
    )

    return {
        isDialogTriggerClicked,
        clickedElement
    }
}