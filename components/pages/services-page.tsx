"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Server, Brain, ArrowRight, CheckCircle, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServicesPageProps {
  onNavigate?: (tab: string) => void
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description:
        "Creating responsive, user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with modern UI/UX design principles.",
      features: [
        "MERN stack development",
        "Responsive design implementation",
        "RESTful API development",
        "Database integration with MongoDB",
      ],
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
      price: "Academic & Personal Projects",
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description:
        "Developing intelligent systems for computer vision and data analysis using Python, Keras, TensorFlow, and OpenCV for academic and research projects.",
      features: [
        "Computer vision applications",
        "Neural network implementation with Keras",
        "Image processing with OpenCV",
        "High-accuracy model development (98%+)",
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      price: "Research & Learning",
    },
    {
      icon: Code,
      title: "Algorithm Implementation",
      description:
        "Solving complex problems using Data Structures and Algorithms. Experienced in competitive programming with 400+ problems solved across multiple platforms.",
      features: [
        "Data structures implementation",
        "Algorithm optimization",
        "Competitive programming solutions",
        "Problem-solving methodology",
      ],
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      price: "Skill Development",
    },
    {
      icon: Server,
      title: "System Design & Simulation",
      description:
        "Building interactive simulators and system visualizations like virtual memory management, helping understand complex computer science concepts.",
      features: [
        "Interactive system simulators",
        "Algorithm visualization",
        "Educational tools development",
        "Performance analysis tools",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      price: "Educational Projects",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding project requirements and planning the technical approach",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating wireframes, system design, and choosing the right technology stack",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building the solution with clean code and thorough testing",
    },
    {
      step: "04",
      title: "Deployment & Documentation",
      description: "Deploying the project and creating comprehensive documentation",
    },
  ]

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              What I'm Learning & Building
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Areas of focus in my computer science journey and the types of projects I'm passionate about creating
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/70 backdrop-blur-sm border-0 shadow-xl overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className={`bg-gradient-to-br ${service.bgColor} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <div
                      className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 font-bold">{service.title}</CardTitle>
                      <div
                        className={`text-sm font-semibold text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}
                      >
                        {service.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className={`group/btn w-full justify-between text-transparent bg-gradient-to-r ${service.color} bg-clip-text hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always excited to work on new projects and learn from experienced developers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate?.("projects")}
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
            </Button>
            <Button
              onClick={() => onNavigate?.("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
