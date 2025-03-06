function flipImage() {
    document.getElementById("flipCard").classList.toggle("flipped");
}
document.addEventListener("DOMContentLoaded", function () {
            const recentTab = document.getElementById("recent-projects");
            const oldTab = document.getElementById("old-projects");
            const recentContent = document.getElementById("recent-projects-content");
            const oldContent = document.getElementById("old-projects-content");

            // Add event listeners for tab switching
            recentTab.addEventListener("click", function () {
                recentTab.classList.add("active");
                oldTab.classList.remove("active");

                recentContent.classList.remove("hidden");
                oldContent.classList.add("hidden");
            });

            oldTab.addEventListener("click", function () {
                oldTab.classList.add("active");
                recentTab.classList.remove("active");

                oldContent.classList.remove("hidden");
                recentContent.classList.add("hidden");
            });
        });
