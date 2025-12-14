import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="mailto:jovanmei@outlook.com"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <Mail className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl mb-2">Email</h3>
              <p className="text-gray-600">jovanmei@outlook.com</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jovanmei"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <Linkedin className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl mb-2">LinkedIn</h3>
              <p className="text-gray-600">Connect professionally</p>
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/jovanmei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/jovanmei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>&copy; 2025 Jovan's Space Orbit. All rights reserved.</p>
      </footer>
    </section>
  );
}
