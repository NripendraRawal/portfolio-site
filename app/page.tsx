"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { HomePage } from "@/components/pages/home-page"
import { AboutPage } from "@/components/pages/about-page"
import { SkillsPage } from "@/components/pages/skills-page"
import { ProjectsPage } from "@/components/pages/projects-page"
import { ResumePage } from "@/components/pages/resume-page"
import { ServicesPage } from "@/components/pages/services-page"
import { ContactPage } from "@/components/pages/contact-page"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onNavigate={setActiveTab} />
      case "about":
        return <AboutPage onNavigate={setActiveTab} />
      case "skills":
        return <SkillsPage onNavigate={setActiveTab} />
      case "projects":
        return <ProjectsPage onNavigate={setActiveTab} />
      case "resume":
        return <ResumePage onNavigate={setActiveTab} />
      case "services":
        return <ServicesPage onNavigate={setActiveTab} />
      case "contact":
        return <ContactPage onNavigate={setActiveTab} />
      default:
        return <HomePage onNavigate={setActiveTab} />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      <FloatingElements />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="pt-16">
        <div className="transition-all duration-500 ease-in-out">{renderActiveTab()}</div>
      </div>
    </main>
  )
}
