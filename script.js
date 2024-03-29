function updateContent(isCorrect, profession) {
    const container = document.querySelector(".container");
    const image = document.querySelector(".w-48.h-48.mx-auto.mb-4");
    const title = document.querySelector(".text-3xl.text-center.font-bold.mb-8");
    const text = document.querySelector(".text-xl.mb-4");
    
    image.src = isCorrect ? "image benar.png" : "image bohong.png";
    container.style.backgroundColor = isCorrect ? "#6FD240" : "#e12e2e";
    
    title.textContent = isCorrect ? "Anda Benar!" : "Anda Berbohong!";
    text.textContent = `Anda adalah seorang ${profession}`;
    
    document.getElementById("Yes").remove();
    document.getElementById("No").remove();
}

function btnYes() {
    updateContent(true, "Mahasiswa");
}

function btnNo() {
    updateContent(false, "Teknisi");
}
