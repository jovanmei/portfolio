import { motion } from 'motion/react';
import { Brain, Workflow, Database } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl mb-6">
            Data Science & Automation Expert
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Transforming data into insights and automating workflows with RPA solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Brain className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl mb-2">Data Science</h3>
            <p className="text-gray-600">ML models, analytics, and predictive insights</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Database className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl mb-2">Data Engineering</h3>
            <p className="text-gray-600">ETL pipelines, data warehousing, and infrastructure</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Workflow className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl mb-2">RPA Solutions</h3>
            <p className="text-gray-600">Process automation and workflow optimization</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
