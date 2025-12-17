import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Brain, Database, Workflow } from 'lucide-react';

type ProjectCategory = 'all' | 'data-engineering' | 'data-science' | 'rpa';

interface Project {
  id: number;
  title: string;
  description: string;
  categories: Exclude<ProjectCategory, 'all'>[]; // Changed to array for multiple categories
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Supply Chain ETL & Analytics Dashboard',
    description: 'Engineered automated ETL pipelines using Python and Power Automate to integrate and consolidate supply chain data from multiple sources into a centralized Power BI dashboard. The solution provides real-time visibility and tracking capabilities for 500+ parts, enabling data-driven decision-making and improved supply chain transparency.',
    categories: ['data-engineering', 'rpa'],
    tags: ['Python', 'Power Automate', 'Power BI', 'ETL', 'Pandas'],
    // githubUrl: '#',
  },
  {
    id: 2,
    title: 'RPA-Powered Part Master Data Processing & Demand Forecast Automation',
    description: 'Developed a Python-based RPA solution to automate part master data processing and demand forecast communications. The system streamlines data validation, cleansing, and distribution workflows, reducing manual processing time by 150+ labor hours monthly while improving data accuracy and consistency across departments.',
    categories: ['data-engineering', 'rpa'],
    tags: ['Python', 'RPA', 'Process Automation', 'Data Processing'],
    // githubUrl: '#',
  },
  {
    id: 9,
    title: 'Data Warehouse ETL Dashboard',
    description: 'Developed a Python-based ETL solution to automate master data processing, analytics, and visualization. Interactive dashboard powered by the Gold layer of the PySpark ETL pipeline. Data is aggregated by month, customer segment, and RFM value segment.',
    categories: ['data-engineering'],
    tags: ['Python', 'ETL', 'Spark', 'Visualization'],
    githubUrl: 'https://github.com/jovanmei/dw-dashborad/',
    liveUrl: 'https://dw-dashborad.streamlit.app/',
  },    
  {
    id: 3,
    title: 'Post-processing Diversification in Top-N Recommendation with Side Information',
    description: 'Developed and evaluated a personalized post-processing framework to enhance recommendation diversity and mitigate filter bubbles in Top-N recommender systems. Incorporated side information and optimized user-specific trade-offs between relevance and diversity, achieving improved serendipity without significantly compromising accuracy on MovieLens and Last.fm datasets.',
    categories: ['data-science'],
    tags: ['Python', 'Recommendation Systems', 'GNN', 'Personalization', 'Re-rank', 'Pandas'],
    githubUrl: 'https://github.com/jovanmei/Div-RecSys',
  },
  {
    id: 8,
    title: 'Personal Health Global Retail Dashboard',
    description: 'Designed and implemented automated ETL pipelines using Python and SQL to integrate and transform Philips Personal Health product retail sales data from multiple markets into a comprehensive Qlik dashboard. The solution reduced data processing time by 20% and provides global retail performance visibility, enabling faster analytics delivery and data-driven insights across regional sales teams.',
    categories: ['data-engineering', 'rpa'],
    tags: ['Python', 'PySpark', 'Qlik', 'ETL', 'Retail Analytics'],
    // githubUrl: '#',
  },  
  {
    id: 4,
    title: 'WARC Entity Network Miner',
    description: 'Engineered an end-to-end NLP pipeline to extract and disambiguate named entities from over 10 million web records (WARC files). By integrating NER, Wikipedia-based disambiguation, and cosine similarity, the system reduced entity ambiguity by 50% and increased accuracy by 25%. The solution was containerized with Docker for scalable deployment.',
    categories: ['data-science', 'data-engineering'], // Multiple categories example
    tags: ['Python', 'NLP', 'SpaCy', 'Named Entity Recognition', 'Information Extraction', 'Docker'],
    githubUrl: 'https://github.com/royforlife/Web-Data-Process',
  },

  {
    id: 5,
    title: 'Covid Web: Tracking Covid-19 Through Web Information',
    description: 'Built a large-scale data analytics platform to track COVID-19 information from web sources by processing 1.5TB of Common Crawl dataset. Leveraged PySpark to achieve 20x performance improvement in text processing, implemented BERT-based sentiment analysis with 90% accuracy, and developed an interactive React dashboard for dynamic data visualization and insights exploration.',
    categories: ['data-engineering', 'data-science'], // Multiple categories example
    tags: ['Python', 'PySpark', 'BERT', 'React', 'Sentiment Analysis'],
    githubUrl: 'https://github.com/jovanmei/COVID19-web',
  },
  {
    id: 6,
    title: 'Kaggle: Bristol-Myers Squibb - Molecular Translation',
    description: 'Developed a deep learning solution for the Kaggle Bristol-Myers Squibb Molecular Translation challenge to convert molecule images into InChI chemical structure notation. Implemented Vision Transformer (ViT) and Transformer architectures in TensorFlow to process ~2.5k molecular images, achieving an F1-score of 75.7% through optimized preprocessing and model training workflows.',
    categories: ['data-science'],
    tags: ['Python', 'TensorFlow', 'Image Recognition', 'Transformers'],
    liveUrl: 'https://www.kaggle.com/competitions/bms-molecular-translation',
  },
  {
    id: 7,
    title: 'Tibetan Handwritten Numeral Recognition System Based on Federated Learning',
    description: 'Designed and implemented a privacy-preserving recognition system using a lightweight CNN and Federated Learning framework. The solution addressed the scarcity of research on Tibetan handwritten numerals and data privacy concerns, achieving approximately 96% accuracy and a ~0.017ms inference time per image on the pre-processed TibetanMNIST dataset.',
    categories: ['data-science'],
    tags: ['Python', 'Federated Learning', 'Computer Vision', 'Privacy Protection', 'TensorFlow'],
    githubUrl: 'https://github.com/jovanmei/Federated-Learning',
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all' as ProjectCategory, label: 'All Projects', icon: null },
    { id: 'data-engineering' as ProjectCategory, label: 'Data Engineering', icon: Database },
    { id: 'data-science' as ProjectCategory, label: 'Data Science', icon: Brain },
    { id: 'rpa' as ProjectCategory, label: 'RPA', icon: Workflow },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my work in data science, engineering, and process automation
          </p>
        </motion.div>

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
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {project.categories.map((cat) => {
                  const categoryInfo = categories.find(c => c.id === cat);
                  const Icon = categoryInfo?.icon;
                  return (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-white-100 text-gray-700 text-xs rounded-md flex items-center gap-1"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      {categoryInfo?.label}
                    </span>
                  );
                })}
              </div>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
