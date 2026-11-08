
const reviewInput = document.getElementById("reviewInput");
const charCount = document.getElementById("charCount");
const analyzeBtn = document.getElementById("analyzeBtn");

const result = document.getElementById("result");
const sentimentText = document.getElementById("sentimentText");
const sentimentDescription = document.getElementById("sentimentDescription");

// Your live Render API
const API_URL =
    "https://movie-review-sentiment-analysis-2-15qw.onrender.com/predict";

// Character counter
reviewInput.addEventListener("input", function () {
    charCount.textContent =
        `${reviewInput.value.length} characters`;

    result.classList.add("hidden");
});

// Analyze movie review
analyzeBtn.addEventListener("click", async function () {

    const review = reviewInput.value.trim();

    // Validate input
    if (review.length < 5) {
        alert("Please enter a movie review with at least 5 characters.");
        return;
    }

    // Show loading state
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = "Analyzing...";

    result.classList.remove("hidden");
    sentimentText.textContent = "Analyzing your review...";
    sentimentDescription.textContent =
        "Our machine learning model is processing your review.";

    try {

        // Send review to Render API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                review: review
            })
        });

        const data = await response.json();

        // Check API response
        if (!response.ok) {
            throw new Error(
                data.error || "Unable to analyze the review."
            );
        }

        // Display prediction
        if (data.sentiment === "Positive") {

            sentimentText.textContent =
                "Positive Sentiment 😊";

            sentimentText.style.color = "#4ade80";

        } else {

            sentimentText.textContent =
                "Negative Sentiment 😞";

            sentimentText.style.color = "#f87171";
        }

        // Display model-estimated confidence
        sentimentDescription.textContent =
            `Model-estimated confidence: ${data.confidence}%`;

    } catch (error) {

        console.error("Prediction error:", error);

        sentimentText.textContent = "Prediction Failed";

        sentimentDescription.textContent =
            error.message ||
            "Could not connect to the prediction server. Please try again.";

    } finally {

        // Restore button
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = "Analyze Sentiment →";
    }
});

