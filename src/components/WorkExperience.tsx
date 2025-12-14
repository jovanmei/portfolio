import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  current?: boolean;
  logoUrl?: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    company: 'Volkswagen',
    role: 'Supply Chain Data Analyst',
    period: 'Oct 2024 - Present',
    location: 'Hefei, China',
    current: true,
    logoUrl: 'https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    responsibilities: [
      'Led the design and implementation of scalable data pipelines processing 5M+ records daily using Apache Spark and Airflow',
      'Architected cloud-based data warehouse solutions on AWS, reducing query times by 60%',
      'Built automated ETL framework with Python and Power Automate, integrating multi-system data into Power BI dashboards, ensuring data accuracy and establishing visual tracking system for 500+ parts.',
      'Implemented Kanban agile methodology for digital transformation projects, coordinating cross-functional teams to deliver system upgrades 30% faster than scheduled.'
    ],
  },
  {
    id: 2,
    company: 'Royal Philips',
    role: 'Data Analytic Intern',
    period: 'Jan 2024 - Jul 2024',
    location: 'Amsterdam, Netherlands',
    logoUrl: 'https://images.unsplash.com/photo-1660792713815-390b17a48a1c?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    responsibilities: [
      'Developed automated programs and ETL data pipelines using Python and SQL to integrate multi-source data into Qlik dashboards, reducing data processing time by 20% and improving overall data analysis efficiency by 15%.',
      'Standardized the data integration processes, ensuring knowledge sharing and establishing best practices for real-settings',
      'Conducted exploratory data analysis and feature engineering for machine learning projects',
    ],
  },
  // {
  //   id: 3,
  //   company: 'Automation Pro Systems',
  //   role: 'RPA Developer',
  //   period: 'Jun 2020 - Feb 2021',
  //   location: 'Toronto, Canada',
  //   responsibilities: [
  //     'Designed and deployed RPA solutions using UiPath, automating 15+ business processes',
  //     'Reduced manual processing time by 70% through intelligent document processing automation',
  //     'Integrated RPA bots with enterprise systems including SAP, Salesforce, and SharePoint',
  //     'Provided technical training and support to business users on automation tools',
  //   ],
  // },
  // {
  //   id: 4,
  //   company: 'Engineering Dynamics Ltd.',
  //   role: 'Junior Software Engineer',
  //   period: 'Sep 2018 - May 2020',
  //   location: "St. John's, Canada",
  //   responsibilities: [
  //     'Developed full-stack web applications using React, Node.js, and PostgreSQL',
  //     'Participated in agile development processes and code reviews',
  //     'Created RESTful APIs and integrated third-party services',
  //     'Maintained and optimized legacy systems to improve performance',
  //   ],
  // },
];

// Function to format technical terms with code styling
const formatTechnicalTerms = (text: string): React.ReactNode => {
  const technicalTerms = [
    'Python', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'MongoDB',
    'Apache Spark', 'Airflow', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git',
    'Tableau', 'Power BI', 'Qlik', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas',
    'NumPy', 'REST', 'API', 'GraphQL', 'Redis', 'Elasticsearch', 'Jenkins', 'CI/CD',
    'Spark', 'Hadoop', 'Kafka', 'ETL', 'ML', 'AI', 'UiPath', 'RPA', 'SAP', 'Salesforce',
    'SharePoint', 'A/B testing', 'machine learning', 'data pipelines', 'data warehouse', 'Kanban'
  ];

  let formattedText: React.ReactNode[] = [];
  let lastIndex = 0;

  // Create a regex pattern that matches any of the technical terms (case insensitive)
  const pattern = new RegExp(`\\b(${technicalTerms.join('|')})\\b`, 'gi');
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      formattedText.push(text.slice(lastIndex, match.index));
    }
    
    // Add the technical term with code styling
    formattedText.push(
      <code key={`${match.index}-${match[0]}`} className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-base font-mono">
        {match[0]}
      </code>
    );
    
    lastIndex = pattern.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    formattedText.push(text.slice(lastIndex));
  }

  return formattedText.length > 0 ? formattedText : text;
};

export function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in data science, engineering, and automation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    exp.current ? 'bg-blue-600 border-blue-200' : 'bg-white border-blue-400'
                  } shadow-md`}></div>
                </div>

                {/* Content Card */}
                <div className={`md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                }`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {exp.logoUrl && (
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                              <ImageWithFallback
                                src={exp.logoUrl}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 mb-3 font-bold">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700">{formatTechnicalTerms(responsibility)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}