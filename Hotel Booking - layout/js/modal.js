const infoDialog = document.getElementById('info-dialog');
const dialogCard = infoDialog.querySelector('.dialog');
const infoDialogTriggers = document.querySelectorAll('[data-target="info-dialog"]');
const infoDialogCloseTriggers = document.querySelectorAll('[data-target-close="info-dialog"]');

for (const closeTrigger of infoDialogCloseTriggers) {
    closeTrigger.addEventListener('click', () => {
        const targetElem = document.getElementById(closeTrigger.dataset.targetClose);

        targetElem.style.display = 'none';

        // enable scroll
        document.body.style.overflow = 'visible';
    });
}

window.addEventListener('click', event => {
    const isDialogTriggerClicked = [...infoDialogTriggers].some(
        dialogTrigger => dialogTrigger.contains(event.target)
    )

    if (isDialogTriggerClicked) {
        infoDialog.style.display = 'flex';

        // disable scroll
        document.body.style.overflow = 'hidden';
    }
    else if (!dialogCard.contains(event.target)) {
        infoDialog.style.display = 'none';
    }
});

