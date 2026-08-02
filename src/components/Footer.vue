<template>
  <footer class="bg-slate-950 border-t border-slate-800 py-8 text-slate-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm">&copy; 2026 {{ config.personal.fullName }}. All rights reserved.</p>
        <div class="flex gap-6 text-sm">
          <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`"
             class="hover:text-brand-500 transition-colors">{{ item }}</a>
        </div>
        <button @click="scrollToTop" class="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-brand-600 rounded-lg transition-all">
          <ArrowUp class="w-5 h-5" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { config } from '../config'
import { ArrowUp } from 'lucide-vue-next'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>