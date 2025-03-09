
function goHome() {
    let btn1 = document.getElementById('btn_01');
    let btn2 = document.getElementById('btn_02');
    let currentPage = window.location.pathname;
    if (!currentPage.includes("main.html")) {
        btn1.classList.remove('active');
        btn2.classList.remove('active');
        window.location.href = "../index.html";
    }
}

function goBlog() {
    let btn1 = document.getElementById('btn_01');
    let btn2 = document.getElementById('btn_02');
    let currentPage = window.location.pathname;
    if (!currentPage.includes("Blog.html")) {
        btn2.classList.remove('active');
        window.location.href = "../mainn/Blog.html";
    }
}

function goNotes() {
    let btn1 = document.getElementById('btn_01');
    let btn2 = document.getElementById('btn_02');
    let currentPage = window.location.pathname;
    if (!currentPage.includes("Notes.html")) {
        btn1.classList.remove('active');
        window.location.href = "../mainn/Notes.html";
    }
}

function goLink() {
    let btn1 = document.getElementById('btn_01');
    let btn2 = document.getElementById('btn_02');
    window.location.href = "https://replit.com/@RamennSama21/Codeforcess";
}

function goCodeforces() {
    window.location.href = "../mainn/codeforces.html";
}

function goLeetcode() {
    window.location.href = "../mainn/leetcode.html";
}

function goSpoj() {
    window.location.href = "../mainn/spoj.html";
}

function goCSES() {
    window.location.href = "../mainn/cses.html";
}





