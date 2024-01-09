window.onload = () => {
    const shareBtn = document.querySelector('.share-btn');
    const shareBlock = document.querySelector('.share-block');

    shareBtn.addEventListener('click', () => {
        shareBlock.classList.toggle('is-active');
    })
    // shareBtn.addEventListener('mouseover', () => {
    //     shareBlock.classList.add('is-active');
    // })
    // shareBtn.addEventListener('mouseout', () => {
    //     // isShareOpened = true;

    //     // if (isShareOpened) {

    //     // }
    //     // setTimeout(() => {
    //         shareBlock.classList.remove('is-active');
    //     // }, 2000)
    // })
    // shareBlock.addEventListener('mouseover', () => {
    //     shareBlock.classList.add('is-active');
    // })
    // shareBlock.addEventListener('mouseout', () => {   
    //     shareBlock.classList.remove('is-active');
    // })
}