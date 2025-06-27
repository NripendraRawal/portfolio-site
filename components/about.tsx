"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, Star, Trophy, Target, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Graphic Era Hill University, Dehradun",
      year: "Expected 2026",
      grade: "CGPA: 7.84",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
    },
    {
      degree: "Class XII",
      institution: "Kendriya Vidyalaya, Banbasa",
      year: "2022",
      grade: "84%",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "Class X",
      institution: "Kendriya Vidyalaya, Banbasa",
      year: "2020",
      grade: "80%",
      icon: BookOpen,
      color: "from-teal-500 to-blue-500",
    },
  ]

  const highlights = [
    { icon: Star, text: "98% Accuracy in ML Projects", color: "text-yellow-500" },
    { icon: Trophy, text: "MERN Stack Learning", color: "text-blue-500" },
    { icon: Target, text: "Problem-Solving Focus", color: "text-green-500" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">About Me</span>
          </h2>
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Academic Journey
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate Computer Science student with an insatiable curiosity for technology and its
                  potential to solve real-world problems. My academic journey has been focused on building a strong
                  foundation in programming, software development, and emerging technologies.
                </p>
                <p>
                  Through my coursework and personal projects, I've been developing skills in full-stack development,
                  machine learning, and software engineering principles. I believe in learning by doing and am always
                  working on projects that challenge me to grow as a developer.
                </p>
                <p>
                  When I'm not studying or coding, you'll find me exploring new technologies, participating in coding
                  challenges, or brainstorming innovative solutions to everyday problems. I'm eager to apply my skills
                  in real-world scenarios and contribute to meaningful projects.
                </p>
              </div>
            </div>
            <div className="mt-8">
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
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Education
            </h3>
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
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">{edu.degree}</h4>
                          <p className="text-gray-600 mb-2 font-medium">{edu.institution}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm">{edu.year}</span>
                            <span className={`font-bold text-transparent bg-gradient-to-r ${edu.color} bg-clip-text`}>
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
