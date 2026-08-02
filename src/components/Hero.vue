<template>
 <section
  id="home"
  class="relative min-h-screen flex items-center bg-slate-950 text-white overflow-x-hidden pt-16"
>
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
   <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20
grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm">
          <span class="text-xl">👋</span>
          <span class="text-slate-300">Hello, I'm</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-5xl font-thin  leading-tight">
          {{ config.personal.fullName }}
        </h1>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-500">
          {{ config.personal.role }}
        </h2>
        <p class="text-lg text-slate-400 max-w-lg leading-relaxed">
          {{ config.personal.tagline }}
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <a href="#projects" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-brand-600/30">
            View My Work
            <ArrowRight class="w-4 h-4" />
          </a>
          <a href="#contact" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all">
            Contact Me
            <MessageCircle class="w-4 h-4" />
          </a>
        </div>

        <!-- Social Icons -->
        <div class="flex gap-3 pt-4">
          <a v-for="(url, platform) in config.socials" :key="platform" :href="url" target="_blank"
             class="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-brand-600 border border-slate-700 rounded-lg transition-all">
            <Github v-if="platform === 'github'" class="w-5 h-5" />
            <Linkedin v-else-if="platform === 'linkedin'" class="w-5 h-5" />
            <Twitter v-else-if="platform === 'twitter'" class="w-5 h-5" />
            <Instagram v-else-if="platform === 'instagram'" class="w-5 h-5" />
            <Facebook v-else-if="platform === 'facebook'" class="w-5 h-5" />
            <Mail v-else class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Right: Profile Image with Code Snippet -->
     <div class="relative flex justify-center order-1 lg:order-2">
        <div class="relative">
          <img :src="config.personal.profileImage" :alt="config.personal.fullName"
               class="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-md  mx-auto rounded-2xl shadow-2xl"/>
      <!-- Code Snippet Overlay -->
          <div class="relative lg:absolute lg:-left-8 lg:top-12 mt-5 mr-16 pr-0 lg:mt-0 mx-auto bg-slate-900/95 backdrop-blur border border-slate-700 rounded-xl p-4 shadow-xl max-w-xs">
            <div class="flex gap-1.5  mb-3">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre class="text-xs text-slate-300 font-mono leading-relaxed"><code><span class="text-pink-400">const</span> <span class="text-blue-400">developer</span> = {
  <span class="text-green-400">name</span>: <span class="text-yellow-300">"Robert"</span>,
  <span class="text-green-400">role</span>: <span class="text-yellow-300">"Software Developer"</span>,
  <span class="text-green-400">skills</span>: [<span class="text-yellow-300">"Vue.js"</span>, <span class="text-yellow-300">"Tailwind"</span>,
    <span class="text-yellow-300">"JavaScript"</span>, <span class="text-yellow-300">"Node.js"</span>],
  <span class="text-green-400">passion</span>: <span class="text-yellow-300">"Building solutions
  that make an impact"</span>
}</code></pre>
          </div>

          <!-- Experience Badge -->
          <div class="relative lg:absolute lg:-right-4 lg:bottom-12 mt-5 lg:mt-0 mx-auto w-fit bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
            <div class="text-3xl font-bold text-brand-600">{{ config.personal.experience }}+</div>
            <div class="text-sm text-slate-600 dark:text-slate-400">Years of<br/>Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config'
import { ArrowRight, MessageCircle, Github, Linkedin, Twitter, Instagram, Facebook, Mail } from 'lucide-vue-next'
</script>