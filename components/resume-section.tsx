"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, GraduationCap, Briefcase, Award, Code, Mail, Phone, Github, Linkedin } from "lucide-react"

export function ResumeSection() {
  const education = [
    {
      institution: "Graphic Era Hill University",
      degree: "B.Tech in Computer Science Engineering",
      duration: "Aug 2022 - Jul 2026",
      grade: "CGPA: 7.84",
      location: "Dehradun, India",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "XII, CBSE Board",
      duration: "Completed in 2022",
      grade: "Percentage: 84%",
      location: "Banbasa, India",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "X, CBSE Board",
      duration: "Completed in 2020",
      grade: "Percentage: 80%",
      location: "Banbasa, India",
    },
  ]

  const projects = [
    {
      title: "Handwritten Digit Recognizer",
      date: "Oct 2024",
      technologies: ["Python", "Keras", "CNN", "OpenCV"],
      highlights: [
        "Built a digit recognition model with Keras/TensorFlow and trained it on MNIST dataset, achieving approximately 98% accuracy",
        "Preprocessed 70000+ MNIST images by normalizing pixel values and reshaping inputs reducing image processing time by 40%",
        "Used OpenCV to convert 28x28 pixel images into grey-scale, ensuring compatibility with MNIST trained data",
      ],
    },
    {
      title: "Cafe Management System",
      date: "Feb 2025",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
      highlights: [
        "Developed a full-stack cafe web application using the MERN stack with a user friendly UI and secure backend",
        "Built and integrated 10+ interactive components in React.js including menu display, order form, bill summary, and dashboard",
        "Implemented RESTful APIs using Node.js and Express for handling menu data and order processing",
        "Utilized MongoDB for persistent data storage of menu items, customer orders and transaction logs",
      ],
    },
    {
      title: "Virtual Memory Simulator",
      date: "May 2025",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Developed a visual simulator for virtual memory management and page replacement algorithms like FIFO and LRU",
        "Built an interactive UI with Next.js and Tailwind CSS to animate page loading, faults and frame status",
        "Designed components to simulate logical memory to physical memory translation",
      ],
    },
  ]

  const skills = {
    "Languages & Technologies": ["C", "C++", "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
    "Libraries & Frameworks": ["React.js", "Node.js", "Tkinter", "Tailwind CSS", "OpenCV"],
    "Tools & Platforms": ["Git", "Github", "VS Code", "IntelliJ IDEA", "MongoDB", "SQL"],
    "Operating Systems": ["Windows", "Ubuntu (Linux)"],
  }

  const coursework = [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Operating System",
    "Database Management Systems",
    "Web Development",
    "Computer Networks",
  ]

  const achievements = [
    "Generative AI for healthcare - Google Cloud",
    "400+ DSA Questions Solved: completed challenges on platforms like LeetCode, CodeChef and GFG",
  ]

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive overview of my education, experience, and technical expertise
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            asChild
          >
            <a href="/resume/Shiwani_Gahtori_Resume.pdf" download="Shiwani_Gahtori_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shiwani Gahtori
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                +91-7668970040
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                shiwanigahtori2@gmail.com
              </div>
              <div className="flex items-center">
                <Github className="h-4 w-4 mr-2 text-blue-600" />
                <a
                  href="https://github.com/shiviigahtori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  github.com/shiviigahtori
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/shiwani-gahtori-211209299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/shiwani-gahtori-211209299
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              A passionate and motivated B.Tech Computer Science student with hands-on experience in full-stack web
              development and problem-solving. Proficient in HTML, CSS, JavaScript, PHP, React.js, and Data Structures.
              Eager to apply technical skills to real-world projects and gain practical experience in the software
              industry.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900">{edu.institution}</h4>
                    <p className="text-gray-700 font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.duration}</p>
                    <p className="text-sm text-blue-600 font-semibold">{edu.grade}</p>
                    <p className="text-sm text-gray-500">{edu.location}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Code className="h-6 w-6 mr-2 text-blue-600" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-900 mb-2">{category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects */}
        <Card className="mt-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-bold text-lg text-gray-900">{project.title}</h4>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Coursework */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
                Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Award className="h-6 w-6 mr-2 text-blue-600" />
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
