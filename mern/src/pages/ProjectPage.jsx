function Projects() {
  const projects = [
    {
      id: 1,
      title: 'MernifyBooks Accounting Software',
      url: 'https://github.com/MeronTeweldebrhan/MernifyBooks',
      description:
        'Developed a full-stack accounting application using the MERN stack, focusing on financial transaction logic, RESTful API design, and schema modeling. Led system architecture planning and built foundational backend structures to support scalable financial operations.',
    },
    {
      id: 2,
      title: 'Mernify Accessible Web Design Co',
      url: 'https://github.com/MeronTeweldebrhan/Mernify-Accessible-Design-Co',
      description:
        'Designed and implemented a responsive, accessibility-first web interface using HTML5 and CSS. Integrated ARIA attributes to enhance usability for screen readers and keyboard navigation, ensuring WCAG-compliant user experiences.',
    },
    {
      id: 3,
      title: 'REST Countries API Project',
      url: 'https://github.com/MeronTeweldebrhan/Rest-countries-api',
      description:
        'A frontend app with dark mode switcher fetching country data via REST API, showcasing clean UI and dynamic data handling.',
    },
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {project.title}
              </a>
            </h3>
            <p className="text-gray-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;