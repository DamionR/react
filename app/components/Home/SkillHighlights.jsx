import React from 'react';

function SkillHighlights() {
  const skills = [
    {
      name: 'Shopify Support',
      description: 'Possess in-depth knowledge of the Shopify platform, troubleshooting complex technical issues with e-commerce stores. Proven track record of resolving customer inquiries promptly and exceeding expectations with exceptional service.',
    },
    {
      name: 'Technical Problem-Solving',
      description: 'Highly analytical with a knack for dissecting technical problems. Adept at utilizing various methodologies to identify root causes and implement effective solutions. Experienced in working independently and collaboratively with developers to resolve technical challenges.',
    },
    {
      name: 'Communication & Interpersonal Skills',
      description: 'Confident communicator with a talent for translating technical concepts into clear and concise language for both technical and non-technical audiences. Skilled at building rapport and fostering positive client relationships through active listening and open communication.',
    },
    {
      name: 'Data Analysis & SQL',
      description: 'Proficient in data analysis, leveraging SQL to extract valuable insights from e-commerce data. Skilled at creating reports and visualizations to communicate data trends and inform business decisions.',
    },
    {
      name: 'Backend Development Fundamentals',
      description: 'Solid understanding of backend development principles and technologies, including databases, APIs, and server-side scripting. Adept at collaborating with developers and understanding the technical infrastructure behind e-commerce platforms.',
    },
  ];

  return (
    <section className="skill-highlights bg-gray-100 px-4 py-8 rounded shadow-md">
      <h2>Skill Highlights</h2>
      <ul className="skills-list list-none grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item bg-white p-4 rounded shadow-md hover:shadow-lg">
            <h4 className="text-primary font-bold mb-2">{skill.name}</h4>
            <p className="text-gray-700 text-base leading-relaxed">{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillHighlights;
