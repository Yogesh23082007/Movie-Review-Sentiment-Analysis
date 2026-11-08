
import re
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load trained ML model and TF-IDF vectorizer
model = joblib.load("sentiment_model.pkl")
tfidf = joblib.load("tfidf_vectorizer.pkl")


# Clean movie review text
def clean_text(text):
    text = text.lower()
    text = re.sub(r'<.*?>', '', text)
    text = re.sub(r'[^a-z\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


# Check whether the API is running
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Movie Sentiment Analysis API is running!"
    })


# Predict sentiment
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(silent=True) or {}
    review = data.get("review", "")

    if not isinstance(review, str) or len(review.strip()) < 5:
        return jsonify({
            "error": "Please enter a movie review with at least 5 characters."
        }), 400

    cleaned_review = clean_text(review)
    review_vector = tfidf.transform([cleaned_review])

    prediction = int(model.predict(review_vector)[0])
    probabilities = model.predict_proba(review_vector)[0]

    sentiment = "Positive" if prediction == 1 else "Negative"
    confidence = round(float(probabilities[prediction]) * 100, 2)

    return jsonify({
        "sentiment": sentiment,
        "confidence": confidence
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
