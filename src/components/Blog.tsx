import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable ETL Pipelines with Apache Airflow',
    excerpt: 'Learn how to design and implement production-ready data pipelines that can handle millions of records with ease.',
    date: 'Nov 15, 2024',
    readTime: '8 min read',
    category: 'Data Engineering',
  },
  {
    id: 2,
    title: 'Feature Engineering Techniques for Better ML Models',
    excerpt: 'Discover advanced feature engineering methods that can significantly improve your machine learning model performance.',
    date: 'Oct 28, 2024',
    readTime: '12 min read',
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'RPA Best Practices: When to Automate and When Not To',
    excerpt: 'A comprehensive guide on identifying the right processes for automation and avoiding common pitfalls in RPA implementation.',
    date: 'Oct 10, 2024',
    readTime: '6 min read',
    category: 'RPA',
  },
  {
    id: 4,
    title: 'Optimizing SQL Queries for Large Datasets',
    excerpt: 'Practical tips and techniques for writing efficient SQL queries that perform well even with massive datasets.',
    date: 'Sep 22, 2024',
    readTime: '10 min read',
    category: 'Data Engineering',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and tutorials on data science, engineering, and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="mb-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
