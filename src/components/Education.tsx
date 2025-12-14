import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Education {
  id: number;
  university: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  logoUrl: string;
  grade?: string;
  courses?: string[];
  thesis?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    university: 'University of Amsterdam',
    degree: 'Master of Science (MSc)',
    major: 'Computer Science',
    period: '2022 - 2024',
    location: 'Amsterdam, Netherlands',
    logoUrl: 'https://d189tumsugqfi4.cloudfront.net/_1680x1050_crop_center-center_75_none/HvA_2021-11-23-082948_uops.jpg',
    grade: 'Cum Laude - 7.8/10',
    courses: [
      'Machine Learning',
      'Data Mining',
      'Advanced Algorithms',
      'Big Data Engineering',
      'Natural Language Processing',
    ],
    thesis: 'Post-processing Diversification Approach in Top-N Recommendation with Side Information',
  },
  {
    id: 2,
    university: 'Memorial University of Newfoundland',
    degree: 'Bachelor of Science (BSc)',
    major: 'Computer Engineering',
    period: '2018 - 2022',
    location: "China & Canada",
    logoUrl: 'https://images.unsplash.com/photo-1665277929148-518d01092657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZW1vcmlhbCUyMFVuaXZlcnNpdHklMjBOZXdmb3VuZGxhbmQlMjBsb2dvfGVufDF8fHx8MTc2NTY3NDM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    grade: 'First Class Honours - 3.9/4',
    courses: [
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Operating Systems',
      'Engineering Mathematics',
    ],
    thesis: 'IoT-Based Environmental Monitoring System for Industrial Applications',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation in computer science and engineering
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                {/* University Logo */}
                <div className="md:w-1/4 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                    <ImageWithFallback
                      src={edu.logoUrl}
                      alt={`${edu.university} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Education Details */}
                <div className="md:w-3/4 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{edu.university}</h3>
                      <p className="text-gray-600 mb-2">
                        {edu.degree} in {edu.major}
                      </p>
                      <p className="text-sm text-gray-500">
                        {edu.period} • {edu.location}
                      </p>
                    </div>
                  </div>

                  {/* Grade */}
                  {edu.grade && (
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-600">{edu.grade}</span>
                    </div>
                  )}

                  {/* Selected Courses */}
                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-gray-700" />
                        <h4 className="text-gray-700">Selected Courses</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Thesis */}
                  {edu.thesis && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-gray-700 mb-1">Thesis</h4>
                          <p className="text-gray-600 text-sm italic">
                            "{edu.thesis}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
