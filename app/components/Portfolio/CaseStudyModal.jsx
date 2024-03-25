import React, { useState } from 'react';

function CaseStudyModal({ caseStudyData }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="case-study-button bg-primary text-white py-2 px-4 rounded focus:outline-none hover:bg-opacity-75">
        View Case Study
      </button>
      {isOpen && (
        <div className="case-study-modal fixed inset-0 bg-black bg-opacity-50 overflow-y-auto z-50">
          <div className="modal-content mx-auto mt-40 w-full max-w-3xl bg-white rounded shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">{caseStudyData.title}</h2>
            <div className="case-study-content" dangerouslySetInnerHTML={{ __html: caseStudyData.content }} />
            <button onClick={closeModal} className="close-button mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded focus:outline-none hover:bg-gray-300">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CaseStudyModal;
