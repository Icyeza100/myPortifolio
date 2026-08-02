<template>
  <section id="projects" class="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between items-end mb-12 gap-4">
        <div>
          <p class="text-brand-600 dark:text-brand-500 font-semibold text-sm tracking-wider uppercase mb-2">Featured Projects</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Some Things I've Built</h2>
        </div>
      
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in config.projects" :key="project.title"
             class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.title"
                 class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag"
                    class="px-3 py-1 text-xs font-medium bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full">
                {{ tag }}
              </span>
            </div>
            <div class="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config'
import { ArrowRight, ExternalLink, Github } from 'lucide-vue-next'
</script>