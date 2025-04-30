from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Get the absolute path to the model file
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
model_path = os.path.join(parent_dir, 'kokborok_translation_model.pkl')

print(f"Loading model from: {model_path}")

# Load the translation dictionary
with open(model_path, 'rb') as f:
    translation_dict = pickle.load(f)

print(f"Model type: {type(translation_dict)}")
print(f"Model keys: {list(translation_dict.keys())[:5]}")  # Print first 5 keys for debugging

@app.route('/api/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        text = data.get('text', '').strip()
        
        # Split the input text into words and translate each word
        words = text.split()
        translated_words = []
        
        for word in words:
            # Try to find the word in the dictionary (case-insensitive)
            word_lower = word.lower()
            if word_lower in translation_dict:
                translated_words.append(translation_dict[word_lower])
            else:
                # If word not found, keep it as is
                translated_words.append(word)
        
        # Join the translated words back together
        translation = ' '.join(translated_words)
        
        return jsonify({
            'success': True,
            'translation': translation,
            'original': text
        })
    except Exception as e:
        print(f"Error during translation: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True) 