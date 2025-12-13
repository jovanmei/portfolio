import { useState } from 'react';
import { ExternalLink, Github, Brain, Database, Workflow } from 'lucide-react';

type ProjectCategory = 'all' | 'data-science' | 'data-engineering' | 'rpa';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction Model',
    description: 'Built a machine learning model using XGBoost to predict customer churn with 92% accuracy. Implemented feature engineering and hyperparameter tuning.',
    category: 'data-science',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/jovanmei/Div-RecSys',
  },
  {
    id: 2,
    title: 'Real-time Data Pipeline',
    description: 'Designed and implemented a scalable ETL pipeline processing 1M+ records daily using Apache Airflow and PostgreSQL.',
    category: 'data-engineering',
    tags: ['Apache Airflow', 'PostgreSQL', 'Docker', 'Python'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Invoice Processing Automation',
    description: 'Developed an RPA solution using UiPath to automate invoice processing, reducing manual work by 85% and saving 20 hours per week.',
    category: 'rpa',
    tags: ['UiPath', 'OCR', 'Excel', 'Email Automation'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Sales Forecasting Dashboard',
    description: 'Created an interactive dashboard with Prophet time series forecasting to predict sales trends and optimize inventory management.',
    category: 'data-science',
    tags: ['Prophet', 'Streamlit', 'Python', 'Plotly'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Data Warehouse Modernization',
    description: 'Migrated legacy data warehouse to Snowflake, optimizing query performance by 60% and reducing infrastructure costs.',
    category: 'data-engineering',
    tags: ['Snowflake', 'SQL', 'dbt', 'AWS'],
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'HR Onboarding Bot',
    description: 'Automated employee onboarding workflow using Power Automate, integrating with multiple systems for seamless data entry and account creation.',
    category: 'rpa',
    tags: ['Power Automate', 'SharePoint', 'API Integration'],
    liveUrl: '#',
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all' as ProjectCategory, label: 'All Projects', icon: null },
    { id: 'data-science' as ProjectCategory, label: 'Data Science', icon: Brain },
    { id: 'data-engineering' as ProjectCategory, label: 'Data Engineering', icon: Database },
    { id: 'rpa' as ProjectCategory, label: 'RPA', icon: Workflow },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects.slice(0, 4)
    : projects.filter(p => p.category === activeCategory).slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my work in data science, engineering, and process automation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
