
const reviewInput = document.getElementById("reviewInput");
const charCount = document.getElementById("charCount");
const analyzeBtn = document.getElementById("analyzeBtn");

const result = document.getElementById("result");
const sentimentText = document.getElementById("sentimentText");
const sentimentDescription = document.getElementById("sentimentDescription");

const API_URL = "https://movie-review-sentiment-analysis-2-15qw.onrender.com/predict";

// Character counter
reviewInput.addEventListener("input", function () {
    charCount.textContent = `${reviewInput.value.length} characters`;
});

// Actual ML prediction
analyzeBtn.addEventListener("click", async function () {
    const review = reviewInput.value.trim();

    if (review.length < 5) {
        alert("Please enter a movie review with at least 5 characters.");
        return;
    }

    analyzeBtn.disabled = true;
    analyzeBtn.textContent = "Analyzing...";

    result.classList.remove("hidden");
    sentimentText.textContent = "Analyzing your review...";
    sentimentDescription.textContent = "Please wait while our ML model processes your review.";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ review: review })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Prediction failed.");
        }

        sentimentText.textContent =
            data.sentiment === "Positive"
                ? "Positive Sentiment 😊"
                : "Negative Sentiment 😞";

        sentimentDescription.textContent =
            `Model-estimated confidence: ${data.confidence}%`;

    } catch (error) {
        sentimentText.textContent = "Prediction Error";
        sentimentDescription.textContent =
            error.message + " Please try again.";
    } finally {
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = "Analyze Sentiment →";
    }
});

