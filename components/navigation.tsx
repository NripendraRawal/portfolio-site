"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles, Home, User, Code, Briefcase, FileText, Settings, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "services", label: "Services", icon: Settings },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setIsOpen(false)
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-xl border-b border-gray-800 shadow-lg shadow-blue-900/10"
          : "bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-30 animate-ping"></div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Shiwani Gahtori
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center space-x-2 ${
                    activeTab === item.id
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-900/25"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                  {activeTab === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="relative">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl ${
                      activeTab === item.id
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                        : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
