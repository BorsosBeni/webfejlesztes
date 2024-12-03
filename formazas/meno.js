// Eseménykezelők az article elemekhez
document.getElementById("article1").addEventListener("click", function () {
    toggleVisibility("lenyil1");
});

document.getElementById("article2").addEventListener("click", function () {
    toggleVisibility("lenyil2");
});

document.getElementById("article3").addEventListener("click", function () {
    toggleVisibility("lenyil3");
});

// Eseménykezelők az aside elemekhez
document.getElementById("aside1").addEventListener("click", function () {
    toggleVisibility("lenyilAside1");
});

document.getElementById("aside2").addEventListener("click", function () {
    toggleVisibility("lenyilAside2");
});

// Függvény a láthatóság váltására
function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}
