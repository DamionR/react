function SkillHighlights() {
    const skills = ['React', 'Node.js', 'GraphQL', 'Shopify Hydrogen'];
    
    return (
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    );
  }
  