import React, { useState } from 'react';
import { 
  Languages, 
  ArrowRight, 
  BookOpen, 
  Users, 
  History,
  Heart,
  Github,
  Twitter,
  MessageSquare
} from 'lucide-react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { translateText } from './services/translationService';
import About from './components/About';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await translateText(inputText);
      if (response.success) {
        setTranslatedText(response.translation || '');
      } else {
        setError(response.error || 'Translation failed');
      }
    } catch (err) {
      setError('Failed to connect to translation service');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Languages className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Kokborok Translator</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <a href="#community" className="text-gray-600 hover:text-gray-900">Community</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Translator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Kokborok to English
            <span className="block text-orange-600">Translation Made Easy</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Bridge the language gap with our accurate translation tool. Preserve and share the beauty of the Kokborok language.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kokborok Text
                </label>
                <textarea
                  className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter Kokborok text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  English Translation
                </label>
                <textarea
                  className="w-full h-40 p-4 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Translation will appear here..."
                  value={translatedText}
                  readOnly
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center">
              {error && (
                <p className="text-red-500 mb-4">{error}</p>
              )}
              <button
                onClick={handleTranslate}
                disabled={isLoading}
                className={`flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Translating...' : 'Translate'}
                {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Translator?</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-orange-600 mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accurate Translations</h3>
              <p className="mt-2 text-gray-600">
                Built with advanced language processing for precise and contextual translations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-orange-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community Driven</h3>
              <p className="mt-2 text-gray-600">
                Developed with input from native speakers and language experts.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-orange-600 mb-4">
                <History className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cultural Context</h3>
              <p className="mt-2 text-gray-600">
                Preserves cultural nuances and traditional meanings in translations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div id="community" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
            <p className="mt-4 text-lg text-gray-600">
              Be part of preserving and promoting the Kokborok language.
            </p>
          </div>
          <div className="mt-10 text-center">
            <a 
              href="https://www.instagram.com/tourism.tripura/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              <Heart className="h-5 w-5 mr-2" />
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center">
                <Languages className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold text-white">Kokborok Translator</span>
              </div>
              <p className="mt-4 text-gray-400">
                Bridging languages, connecting cultures. Making Kokborok accessible to the world.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">API</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Connect</h3>
              <div className="mt-4 flex space-x-6">
                <a 
                  href="https://github.com/rrishav48/kokborok-translation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-orange-500"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/_rrishab" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-orange-500"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/avik_chaukiyal/?locale=hi_IN" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-orange-500"
                >
                  <MessageSquare className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; 2025 Kokborok Translator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Translator />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;