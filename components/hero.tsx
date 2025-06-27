"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Sparkles, Code, Palette, Zap } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Floating icons */}
          <div className="absolute top-20 left-20 hidden lg:block animate-bounce delay-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute top-32 right-20 hidden lg:block animate-bounce delay-700">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-2xl shadow-lg">
              <Palette className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 hidden lg:block animate-bounce delay-1000">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Profile Picture with enhanced styling */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/images/shiwani-profile.jpg"
                  alt="Shiwani Gahtori"
                  width={220}
                  height={220}
                  className="rounded-full border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500 object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-500"></div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 shadow-lg animate-bounce">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced name and title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Shiwani
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Gahtori
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg">
                CS Student
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-lg">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-lg">
                Tech Enthusiast
              </span>
            </div>
          </div>

          {/* Enhanced introduction */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              Passionate Computer Science student with a drive to create{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                real-world impact
              </span>{" "}
              through innovative software solutions. I love turning complex problems into elegant, user-friendly
              applications and am eager to contribute to meaningful projects.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center">
                View My Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </span>
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="group text-gray-600 hover:text-gray-900 px-8 py-4 rounded-2xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href="/resume/Shiwani_Gahtori_Resume.pdf" download="Shiwani_Gahtori_Resume.pdf">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
