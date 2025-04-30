const API_URL = 'http://localhost:5000/api';

export interface TranslationResponse {
  success: boolean;
  translation?: string;
  error?: string;
}

export const translateText = async (text: string): Promise<TranslationResponse> => {
  try {
    const response = await fetch(`${API_URL}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to connect to translation service',
    };
  }
}; 