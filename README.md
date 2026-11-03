# Movie Review Sentiment Analysis 🎬

## Project Overview
This project uses Machine Learning and Natural Language Processing (NLP) to classify movie reviews as Positive or Negative based on their text.

The system uses TF-IDF vectorization with unigrams and bigrams, followed by a Logistic Regression classifier to predict the sentiment of a review. A Gradio interface allows users to enter reviews and receive predictions.

## Objectives
- Analyze movie review text.
- Clean and preprocess textual data.
- Convert text into numerical features using TF-IDF.
- Train a Logistic Regression classification model.
- Predict positive and negative sentiments.
- Build an interactive Gradio application.

## Dataset
The project uses the IMDb Movie Reviews dataset provided by TensorFlow Keras.

- Training reviews: 25,000
- Testing reviews: 25,000
- Sentiment classes: Positive and Negative
- Label 0: Negative
- Label 1: Positive

Duplicate reviews were removed from the training data during preprocessing.

## Technologies Used
- Python
- Google Colab
- NumPy
- Pandas
- Matplotlib
- TensorFlow / Keras
- Scikit-learn
- Gradio
- Joblib

## Project Workflow

1. Load the IMDb movie reviews dataset.
2. Decode the integer-encoded reviews into text.
3. Explore and analyze the dataset.
4. Remove duplicate training reviews.
5. Clean the text by converting it to lowercase and removing HTML tags and unwanted characters.
6. Convert text into numerical features using TF-IDF.
7. Train Logistic Regression and Linear SVM models.
8. Evaluate model performance using accuracy, precision, recall, F1-score and a confusion matrix.
9. Select the best-performing model.
10. Create an interactive Gradio interface.

## Model Details

**Final Model:** Logistic Regression with Bigram TF-IDF

- Maximum TF-IDF features: 20,000
- N-gram range: (1, 2)
- Logistic Regression maximum iterations: 1,000
- Final test accuracy: **89.548%**

The Bigram TF-IDF model performed better than the original unigram Logistic Regression and the Bigram Linear SVM experiments.

## Model Performance Comparison

| Model | Accuracy |
|---|---:|
| TF-IDF + Logistic Regression | 88.388% |
| Bigram TF-IDF + Logistic Regression | 89.548% |
| Bigram TF-IDF + Linear SVM | 88.916% |

## Interactive Application

The project includes a Gradio interface where users can:
- Enter a movie review.
- Submit the review for analysis.
- Receive a Positive or Negative sentiment prediction.

## Project Files

| File | Description |
|---|---|
| Movie_Review_Sentiment_Analysis.ipynb | Complete project notebook |
| sentiment_model.pkl | Saved trained Logistic Regression model |
| tfidf_vectorizer.pkl | Saved TF-IDF vectorizer |
| dependencies.txt | Required Python libraries |
| README.md | Project documentation |

## Installation and Execution

### 1. Clone the repository

```bash
git clone https://github.com/Yogesh23082007/Movie-Review-Sentiment-Analysis.git
```

### 2. Open the project folder

```bash
cd Movie-Review-Sentiment-Analysis
```

### 3. Install dependencies

```bash
pip install -r dependencies.txt
```

### 4. Run the notebook

Open `Movie_Review_Sentiment_Analysis.ipynb` in Google Colab or Jupyter Notebook and execute the cells in order.

The notebook trains and evaluates the model and launches the Gradio interface.

## Future Improvements
- Experiment with deep learning models such as LSTM and BiLSTM.
- Explore transformer-based models such as BERT.
- Improve handling of negation, sarcasm and mixed sentiments.
- Extend the system to support neutral sentiment classification.

## Author
**Yogesh Lingutla**

B.Tech - Computer Science and Engineering

GitHub: https://github.com/Yogesh23082007

LinkedIn: https://www.linkedin.com/in/yogesh-lingutla-b0404532b

---

*This project was developed as part of the Machine Learning internship project work.*
