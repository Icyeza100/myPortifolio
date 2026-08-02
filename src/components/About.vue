<template>
  <section id="about" class="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <img :src="config.personal.aboutImage" :alt="config.personal.fullName"
               class="w-full rounded-2xl shadow-xl" />
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-600/10 rounded-2xl -z-10"></div>
          <div class="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-600/30 rounded-2xl -z-10"></div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div>
            <p class="text-brand-600 dark:text-brand-500 font-semibold text-sm tracking-wider uppercase mb-2">About Me</p>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Who I Am</h2>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm a passionate software developer who loves turning ideas into real-world products. I enjoy writing clean, scalable code and creating intuitive user experiences.
          </p>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            When I'm not coding, you'll find me learning new technologies, contributing to open source or sharing knowledge.
          </p>

          <!-- Info Cards -->
          <div class="grid sm:grid-cols-3 gap-4 pt-4">
            <div class="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
              <User class="w-6 h-5 text-brand-600" />
              <div>
                <p class="text-xs text-slate-500 dark:text-slate-400">Name</p>
                <p class="text-sm font-medium text-slate-900 dark:text-white">{{ config.personal.fullName }}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
              <MapPin class="w-5 h-5 text-brand-600" />
              <div>
                <p class="text-xs text-slate-500 dark:text-slate-400">Location</p>
                <p class="text-sm font-medium text-slate-900 dark:text-white">{{ config.personal.location }}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
              <Mail class="w-5 h-5 text-brand-600" />
             <div class="min-w-0 flex-1">
               <p class="text-xs text-slate-500 dark:text-slate-400">Email</p>
               <p class="text-sm font-medium text-slate-900 dark:text-white break-words">{{ config.personal.email }}</p>
            </div>
            </div>
          </div>

          <a href="/Robert_CV.pdf" download="Robert_CV.pdf" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-brand-600/30">
            Download CV
            <Download class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config'
import { User, MapPin, Mail, Download } from 'lucide-vue-next'
import { ref } from 'vue'
const Robert_CV = ref('/Robert_CV.pdf')
</script>