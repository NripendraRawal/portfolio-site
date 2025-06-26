"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Star, TrendingUp, Calendar, GitBranch } from "lucide-react"
import Image from "next/image"

interface ProjectsPageProps {
  onNavigate?: (tab: string) => void
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [filter, setFilter] = useState("all")

  // Projects from resume only
  const projects = [
    {
      id: 1,
      title: "Handwritten Digit Recognizer",
      description:
        "Built a digit recognition model with Keras/TensorFlow and trained it on MNIST dataset, achieving approximately 98% accuracy. Preprocessed 70000+ MNIST images by normalizing pixel values and reshaping inputs reducing image processing time by 40%. Used OpenCV to convert 28x28 pixel images into grey-scale, ensuring compatibility with MNIST trained data.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Keras", "TensorFlow", "CNN", "OpenCV", "MNIST"],
      category: "ml",
      github: "https://github.com/shiviigahtori",
      demo: "#",
      highlights: [
        "98% accuracy on MNIST dataset",
        "Preprocessed 70000+ MNIST images",
        "40% reduction in image processing time",
        "OpenCV grey-scale conversion for compatibility",
      ],
      color: "from-blue-600 to-purple-600",
      featured: true,
      date: "Oct 2024",
      status: "Completed",
      type: "major",
    },
    {
      id: 2,
      title: "Cafe Management System",
      description:
        "Developed a full-stack cafe web application using the MERN stack with a user friendly UI and secure backend. Built and integrated 10+ interactive components in React.js including menu display, order form, bill summary, and dashboard. Implemented RESTful APIs using Node.js and Express for handling menu data and order processing. Utilized MongoDB for persistent data storage of menu items, customer orders and transaction logs.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
      category: "fullstack",
      github: "https://github.com/shiviigahtori",
      demo: "#",
      highlights: [
        "Full-stack MERN application",
        "10+ interactive React components",
        "RESTful APIs with Node.js & Express",
        "MongoDB for persistent data storage",
      ],
      color: "from-teal-600 to-blue-600",
      featured: true,
      date: "Feb 2025",
      status: "Completed",
      type: "major",
    },
    {
      id: 3,
      title: "Virtual Memory Simulator",
      description:
        "Developed a visual simulator for virtual memory management and page replacement algorithms like FIFO and LRU. Built an interactive UI with Next.js and Tailwind CSS to animate page loading, faults and frame status. Designed components to simulate logical memory to physical memory translation.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      category: "frontend",
      github: "https://github.com/shiviigahtori",
      demo: "#",
      highlights: [
        "Visual memory management simulator",
        "FIFO and LRU algorithms implementation",
        "Interactive animations for page loading",
        "Logical to physical memory translation",
      ],
      color: "from-purple-600 to-pink-600",
      featured: true,
      date: "May 2025",
      status: "Completed",
      type: "major",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", color: "from-gray-600 to-gray-500" },
    { id: "fullstack", label: "Full-Stack", color: "from-teal-600 to-blue-600" },
    { id: "frontend", label: "Frontend", color: "from-purple-600 to-pink-600" },
    { id: "ml", label: "Machine Learning", color: "from-indigo-600 to-purple-600" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my complete collection of projects from major academic work to GitHub repositories showcasing my
            learning journey
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">{projects.length}</div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-2xl font-bold text-green-400">
                {projects.filter((p) => p.status === "Completed").length}
              </div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">{projects.filter((p) => p.featured).length}</div>
              <div className="text-sm text-gray-400">Featured</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">98%</div>
              <div className="text-sm text-gray-400">ML Accuracy</div>
            </div>
          </div>

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
                    : "border-2 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800"
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
                {filter === category.id && <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gray-800/70 backdrop-blur-sm border-gray-700 shadow-xl"
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

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg ${
                      project.status === "Completed"
                        ? "bg-gradient-to-r from-green-600 to-green-500 text-white"
                        : project.status === "Active"
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                          : "bg-gradient-to-r from-orange-600 to-orange-500 text-white"
                    }`}
                  >
                    {project.status}
                  </div>
                  {project.type === "major" && (
                    <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Major
                    </div>
                  )}
                  {project.type === "github" && (
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <GitBranch className="h-3 w-3 mr-1" />
                      GitHub
                    </div>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </div>
                )}

                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
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
                    {project.demo !== "#" && (
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
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-200 mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-400" />
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-xs text-gray-300 flex items-center">
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
                      className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-3xl p-8 text-white border border-blue-800/50">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-blue-200 mb-6">
              These projects showcase my journey in computer science and my passion for creating innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <a href="https://github.com/shiviigahtori" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate?.("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
