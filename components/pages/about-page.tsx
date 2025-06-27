"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, Star, Trophy, Target, Download, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AboutPageProps {
  onNavigate?: (tab: string) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Graphic Era Hill University, Dehradun",
      year: "Expected 2026",
      grade: "CGPA: 7.84",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
      description: "Focusing on software engineering, data structures, algorithms, and emerging technologies.",
    },
    {
      degree: "Class XII",
      institution: "Kendriya Vidyalaya, Banbasa",
      year: "2022",
      grade: "84%",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      description: "Completed with distinction in Mathematics, Physics, and Computer Science.",
    },
    {
      degree: "Class X",
      institution: "Kendriya Vidyalaya, Banbasa",
      year: "2020",
      grade: "80%",
      icon: BookOpen,
      color: "from-teal-500 to-blue-500",
      description: "Strong foundation in mathematics and science subjects.",
    },
  ]

  const highlights = [
    { icon: Star, text: "98% Accuracy in ML Projects", color: "text-yellow-500" },
    { icon: Trophy, text: "MERN Stack Learning", color: "text-blue-500" },
    { icon: Target, text: "Problem-Solving Focus", color: "text-green-500" },
  ]

  const interests = [
    "Full-Stack Web Development",
    "Machine Learning & Computer Vision",
    "Data Structures & Algorithms",
    "MERN Stack Development",
    "Database Management",
    "Problem Solving & Competitive Programming",
  ]

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">About Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my academic journey, passion for technology, and commitment to learning and creating innovative
            solutions
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <IconComponent className={`h-5 w-5 ${highlight.color}`} />
                  <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate and motivated B.Tech Computer Science student with hands-on experience in full-stack
                  web development and problem-solving. Currently pursuing my degree at Graphic Era Hill University,
                  Dehradun, with a CGPA of 7.84.
                </p>
                <p>
                  I'm proficient in HTML, CSS, JavaScript, React.js, and Data Structures & Algorithms. Through my
                  academic projects, I've developed expertise in the MERN stack, machine learning with Python and Keras,
                  and have successfully built applications that solve real-world problems.
                </p>
                <p>
                  My notable achievements include creating a handwritten digit recognizer with 98% accuracy, developing
                  a comprehensive cafe management system, and solving over 400 DSA problems on platforms like LeetCode,
                  CodeChef, and GeeksforGeeks. I'm eager to apply my technical skills to real-world projects and gain
                  practical experience in the software industry.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Areas of Interest
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="/resume/Shiwani_Gahtori_Resume.pdf" download="Shiwani_Gahtori_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download My Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/60 backdrop-blur-sm border-0 shadow-xl"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`bg-gradient-to-r ${edu.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{edu.degree}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <p className="text-gray-600 font-medium">{edu.institution}</p>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-500 text-sm">{edu.year}</span>
                            </div>
                            <span className={`font-bold text-transparent bg-gradient-to-r ${edu.color} bg-clip-text`}>
                              {edu.grade}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Learning Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2020",
                  title: "Completed Class X",
                  description: "Achieved 80% in CBSE Board from Kendriya Vidyalaya, Banbasa",
                  side: "left",
                },
                {
                  year: "2022",
                  title: "Completed Class XII & Started B.Tech",
                  description:
                    "Scored 84% in CBSE and began Computer Science Engineering at Graphic Era Hill University",
                  side: "right",
                },
                {
                  year: "2024",
                  title: "Machine Learning Project",
                  description: "Built handwritten digit recognizer achieving 98% accuracy using Keras and OpenCV",
                  side: "left",
                },
                {
                  year: "2025",
                  title: "Full-Stack Development",
                  description: "Developed cafe management system and virtual memory simulator using MERN stack",
                  side: "right",
                },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-1/2 ${item.side === "right" ? "pl-8" : "pr-8"}`}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
