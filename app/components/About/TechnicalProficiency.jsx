function TechnicalProficiency() {
    const proficiencies = [
      { skill: 'SQL and Data Analysis', level: 'Advanced' },
      { skill: 'Backend Development', level: 'Intermediate' },
      // Add more skills and levels here.
    ];
    
    return (
      <ul>
        {proficiencies.map((prof, index) => (
          <li key={index}>{prof.skill} - {prof.level}</li>
        ))}
      </ul>
    );
  }
  