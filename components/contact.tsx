"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shiwanigahtori2@gmail.com",
      href: "mailto:shiwanigahtori2@gmail.com",
      color: "from-blue-500 to-purple-500",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7668970040",
      href: "tel:+917668970040",
      color: "from-green-500 to-teal-500",
      description: "Let's have a conversation",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/shiwani-gahtori-211209299/",
      color: "from-blue-600 to-blue-700",
      description: "Professional networking",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check out my code",
      href: "https://github.com/shiviigahtori",
      color: "from-gray-700 to-gray-900",
      description: "Explore my repositories",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, India",
      href: "#",
      color: "from-red-500 to-pink-500",
      description: "Based in the beautiful hills",
    },
  ]

  const stats = [
    { icon: MessageCircle, value: "24h", label: "Response Time" },
    { icon: Clock, value: "15+", label: "Projects Completed" },
    { icon: CheckCircle, value: "400+", label: "DSA Problems Solved" },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating on a project or just want to connect? I'd love to hear from you!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                >
                  <IconComponent className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl bg-white/70 backdrop-blur-sm border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardHeader className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardTitle className="text-2xl text-gray-900 font-bold">Send Me a Message</CardTitle>
              <p className="text-gray-600">I'd love to hear about your ideas or opportunities</p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project idea or how we can collaborate..."
                    rows={6}
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-colors duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat
                about technology and learning. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/70 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
                  >
                    <div className={`h-1 bg-gradient-to-r ${info.color}`}></div>
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center space-x-4 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        <div
                          className={`bg-gradient-to-r ${info.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-lg">{info.label}</p>
                          <p className="text-gray-600 text-sm">{info.value}</p>
                          <p className="text-gray-500 text-xs">{info.description}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Follow My Journey</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/shiwani-gahtori-211209299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://github.com/shiviigahtori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200/50 text-center relative z-10">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
          <p className="text-gray-600 mb-2">© 2024 Shiwani Gahtori. Built with ❤️ using Next.js and Tailwind CSS.</p>
          <p className="text-sm text-gray-500">
            Crafted with passion for learning and creating amazing digital experiences
          </p>
        </div>
      </div>
    </section>
  )
}
