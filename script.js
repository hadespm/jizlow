function copyPageLink() {

    navigator.clipboard.writeText(window.location.href);

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

/* 3D Card */

const card = document.querySelector(".card");

if(card){

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*8;
        const rotateX = ((y / rect.height)-0.5)*-8;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

}
const lastUpdate = document.getElementById("lastUpdate");

if(lastUpdate){

    const today = new Date();

    const date =
        today.getDate().toString().padStart(2,"0") + "/" +
        (today.getMonth()+1).toString().padStart(2,"0") + "/" +
        today.getFullYear();

    lastUpdate.textContent = "Cập nhật: " + date;

}
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: "JiZ LoW",
            text: "Liên hệ nạp xu - JiZ LoW",
            url: window.location.href
        });
    } else {
        copyPageLink();
    }
}
