function SocialLinks() {
    const links = [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/damion-rashford' },
      // Add more social links here.
    ];
    
    return (
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    );
  }
  