function copyrightYear() {
    let c = document.getElementById("date");
    let d = new Date();
    c.innerHTML = d.getFullYear();
}

window.onload = () => {
    copyrightYear();
};
