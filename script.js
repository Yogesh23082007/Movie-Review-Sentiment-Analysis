
const reviewInput = document.getElementById("reviewInput");
const charCount = document.getElementById("charCount");
const analyzeBtn = document.getElementById("analyzeBtn");

const result = document.getElementById("result");
const sentimentText = document.getElementById("sentimentText");
const sentimentDescription = document.getElementById("sentimentDescription");

// Character counter
reviewInput.addEventListener("input", function () {
    charCount.textContent = `${reviewInput.value.length} characters`;
});

// Analyze button
analyzeBtn.addEventListener("click", function () {
    const review = reviewInput.value.trim();

    if (review.length === 0) {
        alert("Please enter a movie review first!");
        return;
    }

    if (review.length < 5) {
        alert("Please enter a longer movie review.");
        return;
    }

    // Temporary message until the ML model is connected
    result.classList.remove("hidden");
    sentimentText.textContent = "Frontend Ready! 🚀";
    sentimentDescription.textContent =
        "Your review has been received. The machine learning model will be connected in the next step.";
});
