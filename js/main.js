var modalOpened = false;

const openModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.add("open");
}
const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove("open");
}
const manageModal = () => {
    const modal = document.getElementById('modal');
    if(modalOpened){
        closeModal();
    }else{
        openModal();
    }
    modalOpened = !modalOpened;
}