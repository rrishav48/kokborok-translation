# save_model.py
from translator_model import KokborokTranslator
import pickle

model = KokborokTranslator('kokdata2copy.csv')

with open('kokborok_translator.pkl', 'wb') as f:
    pickle.dump(model, f)

print("✅ Model saved as kokborok_translator.pkl")
