<template>
  <nav class="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
<a href="#home" class="flex items-center gap-3">
  <img
    :src="profileImage"
    alt="Robert"
    class="w-10 h-10 rounded-full object-cover border-2 border-brand-600"
  />

  <span class="text-2xl font-bold text-brand-600 dark:text-brand-500">
    {{ config.personal.firstName }}<span class="text-slate-900 dark:text-white">.</span>
  </span>
</a>
<!--Desktop Nav-->
  <div class="hidden md:flex items-center gap-8">
  <a
    v-for="item in navItems"
    :key="item"
    :href="`#${item.toLowerCase()}`"
    class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-500 transition-colors relative group"
  >
    {{ item }}
    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
  </a>
</div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <a href="/Robert_CV.pdf" download="Robert_CV.pdf" class="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200  bg-brand-600 hover:bg-brand-700 rounded-lg  dark:hover:bg-slate-700 transition-colors">
            <Download class="w-4 h-4" />
            Download CV
          </a>
          <button @click="toggleTheme"
                  class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
          <button
                @click="mobileMenuOpen = !mobileMenuOpen"
                class="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
               <X v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div
  v-if="mobileMenuOpen"
  class="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
  <div class="flex flex-col p-4 space-y-4">
    <a
      v-for="item in navItems"
      :key="item"
      :href="`#${item.toLowerCase()}`"
      @click="mobileMenuOpen = false"
      class="text-slate-700 dark:text-slate-200 hover:text-brand-600"
    >
      {{ item }}
    </a>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { config } from '../config'
import { Sun, Moon, Download, Menu, X } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'
import profileImage from '../assets/images/I.png'
const { isDark, toggleTheme } = useTheme()
const Robert_CV = ref('/Robert_CV.pdf')
const navItems = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Contact'
]
const mobileMenuOpen = ref(false)
</script>