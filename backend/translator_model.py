import pandas as pd
import re
import pickle

class KokborokTranslator:
    def __init__(self, csv_path):
        # Load dataset safely
        data = pd.read_csv(csv_path, on_bad_lines='skip')
        data['English'] = data['English'].astype(str).str.lower().str.strip()
        data['Kokborok'] = data['Kokborok'].astype(str).str.strip()
        self.translation_dict = dict(zip(data['English'], data['Kokborok']))

    def clean_text(self, text):
        return re.sub(r'[^\w\s]', '', text).lower().strip()

    def clean_token(self, token):
        return re.sub(r'[^\w\s]', '', token).lower()

    def predict(self, sentence):
        cleaned_sentence = self.clean_text(sentence)

        # Step 1: Full sentence match
        if cleaned_sentence in self.translation_dict:
            return self.translation_dict[cleaned_sentence]

        # Step 2: Fallback word/phrase match
        tokens = re.findall(r'\w+|[^\w\s]', sentence, re.UNICODE)
        translated_sentence = []
        i = 0

        while i < len(tokens):
            current_token = self.clean_token(tokens[i])
            next_token = self.clean_token(tokens[i + 1]) if i + 1 < len(tokens) else ""

            # Try 2-word phrase
            if next_token:
                phrase = f"{current_token} {next_token}"
                if phrase in self.translation_dict:
                    translated_sentence.append(self.translation_dict[phrase])
                    i += 2
                    continue

            # Single word
            if current_token in self.translation_dict:
                translated = self.translation_dict[current_token]
            elif tokens[i].isdigit():
                translated = tokens[i]
            elif re.match(r'[^\w\s]', tokens[i]):
                translated = tokens[i]
            else:
                translated = f"[{tokens[i]}]"

            translated_sentence.append(translated)
            i += 1

        return ' '.join(translated_sentence)
