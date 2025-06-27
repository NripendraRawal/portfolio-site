"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Brain, Wrench, Monitor, TrendingUp, Award } from "lucide-react"

interface SkillsPageProps {
  onNavigate?: (tab: string) => void
}

export function SkillsPage({ onNavigate }: SkillsPageProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "JavaScript", level: 85, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 80, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Python", level: 88, color: "bg-gradient-to-r from-green-400 to-blue-500" },
        { name: "Java", level: 82, color: "bg-gradient-to-r from-red-500 to-orange-500" },
        { name: "C++", level: 80, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "C", level: 75, color: "bg-gradient-to-r from-gray-600 to-gray-700" },
        { name: "HTML", level: 95, color: "bg-gradient-to-r from-orange-400 to-red-500" },
        { name: "CSS", level: 90, color: "bg-gradient-to-r from-blue-400 to-purple-500" },
        { name: "SQL", level: 78, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 85, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "Node.js", level: 80, color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "Tailwind CSS", level: 88, color: "bg-gradient-to-r from-teal-400 to-blue-500" },
        { name: "OpenCV", level: 82, color: "bg-gradient-to-r from-blue-600 to-indigo-600" },
        { name: "Tkinter", level: 75, color: "bg-gradient-to-r from-green-400 to-teal-500" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 85, color: "bg-gradient-to-r from-gray-800 to-black" },
        { name: "GitHub", level: 90, color: "bg-gradient-to-r from-gray-700 to-gray-800" },
        { name: "VS Code", level: 95, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "IntelliJ IDEA", level: 80, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "MongoDB", level: 78, color: "bg-gradient-to-r from-green-600 to-green-700" },
      ],
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Windows", level: 95, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Ubuntu (Linux)", level: 75, color: "bg-gradient-to-r from-orange-500 to-red-500" },
      ],
    },
  ]

  const achievements = [
    {
      title: "400+ DSA Problems",
      description: "Solved on LeetCode, CodeChef, and GeeksforGeeks platforms",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "98% ML Accuracy",
      description: "Achieved in handwritten digit recognition using Keras/TensorFlow",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Google Cloud Certified",
      description: "Generative AI for Healthcare certification completed",
      icon: Award,
      color: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/70 backdrop-blur-sm border-0 shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>
                <CardContent className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-r ${achievement.color} p-4 rounded-2xl mx-auto mb-4 w-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Grid */}
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

        {/* Learning Path */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Current Learning Path
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Advanced React Patterns", progress: 75, color: "from-cyan-500 to-blue-500" },
              { skill: "System Design", progress: 60, color: "from-purple-500 to-pink-500" },
              { skill: "DevOps & Cloud", progress: 45, color: "from-green-500 to-teal-500" },
              { skill: "Advanced ML", progress: 70, color: "from-orange-500 to-red-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-4">{item.skill}</h3>
                <div className="relative">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-2">
                    <span className="text-sm font-bold text-gray-600">{item.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
