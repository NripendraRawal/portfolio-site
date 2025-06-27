"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Server, Brain, Wrench, Monitor } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Python", level: 88, color: "bg-gradient-to-r from-green-400 to-blue-500" },
        { name: "Java", level: 82, color: "bg-gradient-to-r from-red-500 to-orange-500" },
        { name: "C++", level: 80, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "C", level: 75, color: "bg-gradient-to-r from-gray-600 to-gray-700" },
      ],
    },
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 90, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "HTML/CSS", level: 95, color: "bg-gradient-to-r from-orange-400 to-red-500" },
        { name: "Tailwind CSS", level: 88, color: "bg-gradient-to-r from-teal-400 to-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gradient-to-r from-gray-800 to-gray-900" },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 85, color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "MongoDB", level: 80, color: "bg-gradient-to-r from-green-600 to-green-700" },
        { name: "RESTful APIs", level: 88, color: "bg-gradient-to-r from-blue-500 to-purple-500" },
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Keras", level: 82, color: "bg-gradient-to-r from-red-500 to-pink-500" },
        { name: "OpenCV", level: 78, color: "bg-gradient-to-r from-blue-600 to-indigo-600" },
        { name: "TensorFlow", level: 75, color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gradient-to-r from-gray-800 to-black" },
        { name: "VS Code", level: 95, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Docker", level: 70, color: "bg-gradient-to-r from-blue-400 to-blue-500" },
      ],
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Windows", level: 95, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Linux", level: 80, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-r ${category.color} p-3 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-semibold text-gray-700 group-hover/skill:text-gray-900 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
