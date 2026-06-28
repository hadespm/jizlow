function copyPageLink() {
    navigator.clipboard.writeText(window.location.href);

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
