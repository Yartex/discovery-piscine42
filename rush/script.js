// Afficher CV1 au clic du button1
document.getElementById("button1").addEventListener("click", function() {
    var cv1 = document.getElementById("CV1");
    var cv2 = document.getElementById("CV2");
    var header1 = document.getElementById("headerCV1")
    var header2 = document.getElementById("headerCV2")
    if (cv1.style.display === "table") {
        cv1.style.display = "none";  // Cacher CV1
        header1.style.display = "none";
    } else {
        cv1.style.display = "table";  // Afficher CV1
        cv2.style.display = "none";
        header1.style.display = "block";
        header2.style.display = "none";
    }
});

// Afficher CV2 au clic du button1
document.getElementById("button2").addEventListener("click", function() {
    var cv2 = document.getElementById("CV2");
    var cv1 = document.getElementById("CV1");
    var header1 = document.getElementById("headerCV1")
    var header2 = document.getElementById("headerCV2")
    if (cv2.style.display === "table") {
        cv2.style.display = "none";  // Cacher CV2
        header2.style.display = "none";
    } else {
        cv2.style.display = "table";  // Afficher CV2
        cv1.style.display = "none";
        header2.style.display = "block";
        header1.style.display = "none";
    }
});


