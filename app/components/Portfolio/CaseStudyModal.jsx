import { useState } from 'react';

function CaseStudyModal({ project, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={() => { setIsOpen(false); onClose(); }}>Close</button>
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} />
        <p>{project.detail}</p>
        {/* More detailed content */}
      </div>
    </div>
  );
}

export default CaseStudyModal;
