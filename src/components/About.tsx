import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-6 w-6 mr-2" />
                Back to Translator
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Kokborok Language</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Kokborok is the native language of the Tripuri people, primarily spoken in the Indian state of Tripura and parts of Bangladesh. It belongs to the Tibeto-Burman language family and is one of the official languages of Tripura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">History and Culture</h2>
            <p className="text-gray-700 leading-relaxed">
              The language has a rich cultural heritage dating back centuries. It has been traditionally passed down through oral traditions and is deeply intertwined with the cultural practices, festivals, and daily life of the Tripuri people.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Language Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Uses its own script called "Koloma"</li>
              <li>Has a unique phonetic system</li>
              <li>Rich in oral literature and folk tales</li>
              <li>Contains distinct grammatical structures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Preservation Efforts</h2>
            <p className="text-gray-700 leading-relaxed">
              In recent years, there have been significant efforts to preserve and promote the Kokborok language through education, literature, and digital initiatives. Our translation tool is part of these efforts to make the language more accessible to a wider audience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Interesting Facts</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Recognized as one of the official languages of Tripura since 1979</li>
              <li>Has its own literary tradition with numerous folk tales and songs</li>
              <li>Used in various cultural performances and traditional ceremonies</li>
              <li>Has different dialects across different regions</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 