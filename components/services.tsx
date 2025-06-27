"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Palette, Server, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development Projects",
      description:
        "Creating responsive, user-friendly websites and web applications using modern technologies like React, Node.js, and MongoDB for academic and personal projects.",
      features: [
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Database integration",
        "Performance optimization",
      ],
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces for academic projects and personal learning, focusing on user experience and accessibility.",
      features: [
        "User-centered design approach",
        "Wireframing and prototyping",
        "Visual design systems",
        "Accessibility compliance",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust APIs and backend systems for academic projects, learning server-side technologies and database management.",
      features: [
        "RESTful API development",
        "Database design & optimization",
        "Authentication systems",
        "API documentation",
      ],
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-50",
    },
    {
      icon: Brain,
      title: "Machine Learning Projects",
      description:
        "Developing intelligent systems for image recognition and data analysis using cutting-edge ML techniques as part of academic coursework.",
      features: [
        "Computer vision applications",
        "Neural network implementation",
        "Data preprocessing",
        "Model optimization",
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              What I'm Learning & Building
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Areas of focus in my computer science journey and the types of projects I'm passionate about creating
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                    <CardTitle className="text-xl text-gray-900 font-bold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 shadow-sm`}></div>
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
      </div>
    </section>
  )
}
