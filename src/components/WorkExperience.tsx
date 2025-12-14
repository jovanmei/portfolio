import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    role: 'Senior Data Engineer',
    period: 'Jan 2023 - Present',
    location: 'Amsterdam, Netherlands',
    current: true,
    logoUrl: 'https://images.unsplash.com/photo-1637760561008-c7423e2237f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWb2xrc3dhZ2VuJTIwbG9nb3xlbnwxfHx8fDE3NjU2OTIyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    responsibilities: [
      'Led the design and implementation of scalable data pipelines processing 5M+ records daily using Apache Spark and Airflow',
      'Architected cloud-based data warehouse solutions on AWS, reducing query times by 60%',
      'Mentored junior engineers and established best practices for data quality and governance',
      'Collaborated with cross-functional teams to deliver ML-ready datasets for business intelligence',
    ],
  },
  {
    id: 2,
    company: 'Philips',
    role: 'Data Scientist',
    period: 'Mar 2021 - Dec 2022',
    location: 'Amsterdam, Netherlands',
    logoUrl: 'https://images.unsplash.com/photo-1765133860544-03f0f6fd3eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBzJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY1NjkyMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    responsibilities: [
      'Developed predictive models using Python and scikit-learn to optimize customer retention strategies',
      'Built automated reporting dashboards using Tableau and Power BI for stakeholder insights',
      'Implemented A/B testing frameworks that increased conversion rates by 25%',
      'Conducted exploratory data analysis and feature engineering for machine learning projects',
    ],
  },
  {
    id: 3,
    company: 'Automation Pro Systems',
    role: 'RPA Developer',
    period: 'Jun 2020 - Feb 2021',
    location: 'Toronto, Canada',
    responsibilities: [
      'Designed and deployed RPA solutions using UiPath, automating 15+ business processes',
      'Reduced manual processing time by 70% through intelligent document processing automation',
      'Integrated RPA bots with enterprise systems including SAP, Salesforce, and SharePoint',
      'Provided technical training and support to business users on automation tools',
    ],
  },
  {
    id: 4,
    company: 'Engineering Dynamics Ltd.',
    role: 'Junior Software Engineer',
    period: 'Sep 2018 - May 2020',
    location: "St. John's, Canada",
    responsibilities: [
      'Developed full-stack web applications using React, Node.js, and PostgreSQL',
      'Participated in agile development processes and code reviews',
      'Created RESTful APIs and integrated third-party services',
      'Maintained and optimized legacy systems to improve performance',
    ],
  },
];

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

        <div className="max-w-4xl mx-auto">
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
                          <h3 className="text-xl">{exp.role}</h3>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 mb-3">{exp.company}</p>
                      
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
                          <p className="text-sm text-gray-700">{responsibility}</p>
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