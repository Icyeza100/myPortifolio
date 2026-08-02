<template>
  <div>
    <Navbar />
    <main>
      <AIAssistant />   
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AIAssistant from './components/AIAssistant.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

</script>