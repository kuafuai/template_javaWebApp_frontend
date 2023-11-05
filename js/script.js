// Add event listeners to the navigation links
document.addEventListener("DOMContentLoaded", function() {
    var historyLink = document.querySelector("a[href='#history']");
    var processLink = document.querySelector("a[href='#process']");
    var characteristicsLink = document.querySelector("a[href='#characteristics']");
    var recommendationsLink = document.querySelector("a[href='#recommendations']");

    historyLink.addEventListener("click", function() {
        // Display the history section and hide the other sections
        document.getElementById("history").style.display = "block";
        document.getElementById("process").style.display = "none";
        document.getElementById("characteristics").style.display = "none";
        document.getElementById("recommendations").style.display = "none";
    });

    processLink.addEventListener("click", function() {
        // Display the process section and hide the other sections
        document.getElementById("history").style.display = "none";
        document.getElementById("process").style.display = "block";
        document.getElementById("characteristics").style.display = "none";
        document.getElementById("recommendations").style.display = "none";
    });

    characteristicsLink.addEventListener("click", function() {
        // Display the characteristics section and hide the other sections
        document.getElementById("history").style.display = "none";
        document.getElementById("process").style.display = "none";
        document.getElementById("characteristics").style.display = "block";
        document.getElementById("recommendations").style.display = "none";
    });

    recommendationsLink.addEventListener("click", function() {
        // Display the recommendations section and hide the other sections
        document.getElementById("history").style.display = "none";
        document.getElementById("process").style.display = "none";
        document.getElementById("characteristics").style.display = "none";
        document.getElementById("recommendations").style.display = "block";
    });
});
