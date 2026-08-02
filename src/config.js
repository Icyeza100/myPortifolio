
import profileImage from '@/assets/images/M.png'
import aboutImage from '@/assets/images/R.png'
export const config = {
  personal: {
    firstName: "Robert",
    fullName: "ICYEZA MUTABAZI Robert",
    role: "Software Developer",
    tagline: "I build responsive, accessible and performance-driven web applications with modern technologies.",
    location: "Kigali, Rwanda",
    email: "icyezamutabazirobert72@gmail.com",
    phone: "0732323138",
    experience: "2+",
    profileImage: profileImage,
    aboutImage: aboutImage,
    
  },
  socials: {
    github: "https://github.com/icyeza100",
    linkedin: "https://linkedin.com/in/Icyeza-Mutabazi-Robert",
    twitter: "https://twitter.com/icyeza100",
    instagram: "https://instagram.com/icyeza100",
    facebook: "https://facebook.com/Mutabazi-Robert",
  },
  aiAssistant: {
    name: "Robert's AI Assistant",
    avatar: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    greeting: "Hello! I'm Robert's AI Assistant 👋",
    introduction: [
      "Welcome to Robert's portfolio!",
      "I'm here to tell you about ICYEZA MUTABAZI Robert, a talented Software Developer based in Kigali, Rwanda.",
      "Robert specializes in building modern web applications using Vue.js, Tailwind CSS, and JavaScript.",
      "He has 2+ years of experience creating responsive, accessible, and performance-driven solutions.",
      "Robert is passionate about clean code, continuous learning, and making a positive impact through technology.",
      "He's currently available for freelance projects and full-time opportunities!",
      "Feel free to explore his work or get in touch. Would you like to know more about his skills or projects?"
    ],
    quickActions: [
      { label: "View Skills", action: "skills" },
      { label: "See Projects", action: "projects" },
      { label: "Contact Robert", action: "contact" },
    ]
  },
  skills: [
    { name: "HTML", icon: "html", color: "text-orange-500" },
    { name: "CSS", icon: "css", color: "text-blue-500" },
    { name:"JavaScript", icon: "js", color: "text-yellow-500" },
    { name: "Vue.js", icon: "vue", color: "text-emerald-500" },
    { name: "Tailwind CSS", icon: "tailwind", color: "text-cyan-500" },
    { name: "Node.js", icon: "node", color: "text-green-600" },
    { name: "Git & GitHub", icon: "git", color: "text-red-500" },
    { name: "Figma", icon: "figma", color: "text-pink-500" },
  ],
  projects: [
    {
      title: "TaskFlow",
      description: "A productivity app to manage tasks, projects and team collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Tailwind CSS", "Firebase"],
      
    },
    {
      title: "ShopEase",
      description: "A modern e-commerce website with cart, checkout and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      
    },
    {
      title: "DevBlog",
      description: "A blog platform for developers to share knowledge and ideas.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Tailwind CSS", "Markdown"],
      
    },
  ],
  experience: [
    {
      period: "2026 - Present",
      title: "Senior Developer",
      company: "Tech Solutions Ltd.",
      description: "Building modern web applications using Vue.js, Tailwind CSS,Node.js and MongoDB.",
      icon: "code",
    },
    {
      period: "2025 - 2026",
      title: "Junior Developer",
      company: "CodeLab",
      description: "Worked on UI components and collaborated in Agile teams.",
      icon: "laptop",
    },
    {
      period: "2024 - 2025",
      title: "Freelance Developer",
      company: "Self-employed",
      description: "Built websites and web apps for clients worldwide.",
      icon: "user",
    },
  ],
  testimonials: [
    {
      quote: "Robert is a talented developer who delivers high-quality work on time. Highly recommended!",
      name: "Elliance Claude",
      role: "CEO, Tech Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "Great collaborator and always eager to learn. It was a pleasure working with Robert.",
      name: "Loren Claudette",
      role: "Project Manager, CodeLab",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "Professional, creative and reliable. Robert brings ideas to life!",
      name: " Eric Wilton",
      role: "Client",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  ],
}