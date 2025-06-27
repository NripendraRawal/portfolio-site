"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-indigo-900/20 to-teal-900/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-500"></div>
    </div>
  )
}
