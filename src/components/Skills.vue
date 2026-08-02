<template>
  <section id="skills" class="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-brand-600 dark:text-brand-500 font-semibold text-sm tracking-wider uppercase mb-2">My Skills</p>
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Technologies I Work With</h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        <div v-for="skill in config.skills" :key="skill.name"
             class="group bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-lg transition-all text-center cursor-pointer">
          <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
            <component :is="getSkillIcon(skill.icon)" :class="skill.color" class="w-10 h-10" />
          </div>
          <p class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config'
import { FileText, Palette, Braces, Code2, Wind, Server, GitBranch, PenTool } from 'lucide-vue-next'

const iconMap = {
  html: FileText,
  css: Palette,
  js: Braces,
  vue: Code2,
  tailwind: Wind,
  node: Server,
  git: GitBranch,
  figma: PenTool,
}

const getSkillIcon = (icon) => iconMap[icon] || Code2
</script>