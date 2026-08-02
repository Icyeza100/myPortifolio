<template>
  <section class="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between items-end mb-12 gap-4">
        <div>
          <p class="text-brand-600 dark:text-brand-500 font-semibold text-sm tracking-wider uppercase mb-2">Testimonials</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What People Say</h2>
        </div>
      
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(t, index) in config.testimonials" :key="index"
             class="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
          <Quote class="w-8 h-8 text-brand-600 mb-4" />
          <p class="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{{ t.quote }}</p>
          <div class="flex items-center gap-3">
            <img :src="t.image" :alt="t.name" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <p class="font-semibold text-slate-900 dark:text-white">{{ t.name }}</p>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-vue-next'

const prev = () => console.log('prev')
const next = () => console.log('next')
</script>