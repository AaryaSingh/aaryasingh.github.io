import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company",
      period: "Summer 2024",
      description: "Developed full-stack applications using React and Node.js, contributing to a team of 5 engineers."
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      period: "2023 - Present",
      description: "Conducting research on machine learning applications in healthcare, co-authoring 2 papers."
    },
    {
      title: "EMT Volunteer",
      company: "Local Emergency Services",
      period: "2022 - Present",
      description: "Provide emergency medical care and technical communication in high-stakes situations."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Georgia Institute of Technology",
      period: "2022 - 2026",
      gpa: "3.8/4.0"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "Java", "C++", "TypeScript"] },
    { category: "Frameworks & Libraries", items: ["React", "Node.js", "Express", "TensorFlow", "PyTorch"] },
    { category: "Tools & Technologies", items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"] },
    { category: "Other Skills", items: ["Technical Writing", "Project Management", "Emergency Medical Care"] }
  ];

  return (
    <section id="resume" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600">Download my resume or view it inline below</p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <button className="btn-primary text-lg px-8 py-3">
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </button>
        </motion.div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                      <span className="text-sm text-gray-500">{job.period}</span>
                    </div>
                    <p className="text-primary-600 font-medium mb-2">{job.company}</p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-primary-600 font-medium">{edu.school}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                      <span className="text-gray-600">{edu.period}</span>
                      <span className="text-gray-500">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skillGroup, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
