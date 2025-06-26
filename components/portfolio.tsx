"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Portfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Handwritten Digit Recognizer",
      description:
        "A Convolutional Neural Network built with Python, Keras, and OpenCV that achieves 98% accuracy on the MNIST dataset for handwritten digit recognition.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Keras", "CNN", "OpenCV", "Machine Learning"],
      category: "ml",
      github: "https://github.com/shiviigahtori/digit-recognizer",
      demo: "#",
      highlights: ["98% accuracy on MNIST", "Real-time digit recognition", "Optimized CNN architecture"],
      color: "from-blue-500 to-purple-500",
      featured: true,
    },
    {
      id: 2,
      title: "Cafe Management System",
      description:
        "A comprehensive MERN stack web application for managing cafe operations including order management, menu customization, and billing system.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/shiviigahtori/cafe-management",
      demo: "#",
      highlights: ["Complete order management", "Dynamic menu system", "Automated billing"],
      color: "from-teal-500 to-blue-500",
      featured: false,
    },
    {
      id: 3,
      title: "Virtual Memory Simulator",
      description:
        "An interactive web application built with Next.js, TypeScript, and Tailwind CSS that visualizes various memory management algorithms and their performance.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      category: "frontend",
      github: "https://github.com/shiviigahtori/memory-simulator",
      demo: "#",
      highlights: ["Interactive visualizations", "Multiple algorithms", "Performance metrics"],
      color: "from-purple-500 to-pink-500",
      featured: true,
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", color: "from-gray-600 to-gray-700" },
    { id: "fullstack", label: "Full-Stack", color: "from-blue-500 to-purple-500" },
    { id: "frontend", label: "Frontend", color: "from-purple-500 to-pink-500" },
    { id: "ml", label: "Machine Learning", color: "from-teal-500 to-blue-500" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore my latest projects showcasing full-stack development, machine learning, and innovative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  filter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                    : "border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
                {filter === category.id && <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/70 backdrop-blur-sm border-0 shadow-xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </div>
                )}

                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mr-2 shadow-sm`}
                        ></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
