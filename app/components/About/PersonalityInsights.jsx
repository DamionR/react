import React from 'react';

function PersonalityInsights() {
  return (
    <section className="personality-insights bg-gray-100 px-4 py-8 rounded shadow-md">
      <h2>Personality Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="personality-trait bg-white p-4 rounded shadow-sm">
          <img
            className="inline-block w-8 h-8 mb-2"
            src="gemini.svg" // Replace with path to your Gemini icon
            alt="Gemini Icon"
          />
          <h4>Gemini</h4>
          <p className="text-gray-700 text-base">Adaptable, communicative, intellectually curious</p>
        </div>
        <div className="personality-trait bg-white p-4 rounded shadow-sm">
          <img
            className="inline-block w-8 h-8 mb-2"
            src="enneagram-type-5.svg" // Replace with path to your Enneagram Type 5 icon
            alt="Enneagram Type 5 Icon"
          />
          <h4>Enneagram Type 5</h4>
          <p className="text-gray-700 text-base">Investigative, insightful, independent</p>
        </div>
        <div className="personality-trait bg-white p-4 rounded shadow-sm">
          <img
            className="inline-block w-8 h-8 mb-2"
            src="intj.svg" // Replace with path to your INTJ icon
            alt="INTJ Icon"
          />
          <h4>INTJ</h4>
          <p className="text-gray-700 text-base">Strategic, analytical, innovative</p>
        </div>
      </div>
    </section>
  );
}

export default PersonalityInsights;
