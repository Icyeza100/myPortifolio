<template>
  <section id="experience" class="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-brand-600 dark:text-brand-500 font-semibold text-sm tracking-wider uppercase mb-2">Experience</p>
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My Journey</h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div class="absolute top-6 left-0 right-0 h-0.5 bg-brand-200 dark:bg-brand-900/50 hidden md:block"></div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(exp, index) in config.experience" :key="index"
               class="relative bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-brand-600 rounded-full border-4 border-white dark:border-slate-900 hidden md:block"></div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-3 py-1 rounded-full">
                {{ exp.period }}
              </span>
              <div class="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-lg flex items-center justify-center">
                <Code2 class="w-5 h-5 text-brand-600" />
              </div>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">{{ exp.title }}</h3>
            <p class="text-sm text-brand-600 dark:text-brand-400 mb-3">{{ exp.company }}</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config'
import { Code2 } from 'lucide-vue-next'
</script>