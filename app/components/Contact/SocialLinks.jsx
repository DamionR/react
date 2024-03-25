import React from 'react';

function SocialLinks({ links }) {
  return (
    <ul className="social-links list-none flex justify-center items-center">
      {links.map((link) => (
        <li key={link.platform} className="mr-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-opacity-75"
          >
            {link.icon} {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
