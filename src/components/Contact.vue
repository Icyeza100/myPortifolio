<template>
  <section id="contact" class="py-20 bg-slate-950 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Left Info -->
        <div class="space-y-6">
          <div>
            <p class="text-brand-500 font-semibold text-sm tracking-wider uppercase mb-2">Let's Connect</p>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p class="text-slate-400 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <div class="flex gap-3">
            <a v-for="(url, platform) in config.socials" :key="platform" :href="url" target="_blank"
               class="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-brand-600 border border-slate-700 rounded-lg transition-all">
              <Github v-if="platform === 'github'" class="w-5 h-5" />
              <Twitter v-else-if="platform === 'twitter'" class="w-5 h-5" />
              <Instagram v-else-if="platform === 'instagram'" class="w-5 h-5" />
              <Facebook v-else-if="platform === 'facebook'" class="w-5 h-5" />
              <Mail v-else class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="sendEmail" class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <input 
                v-model="formData.name" 
                type="text" 
                placeholder="Your Name"
                required
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-brand-500 transition-colors" 
              />
              <input 
                v-model="formData.email" 
                type="email" 
                placeholder="Your Email"
                required
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-brand-500 transition-colors" 
              />
            </div>
            <input 
              v-model="formData.subject" 
              type="text" 
              placeholder="Subject"
              required
              class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-brand-500 transition-colors" 
            />
            <textarea 
              v-model="formData.message" 
              placeholder="Your Message" 
              rows="5"
              required
              class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-brand-500 transition-colors resize-none"
            ></textarea>
            
            <!-- Success/Error Messages -->
            <div v-if="status.success" class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
              {{ status.message }}
            </div>
            <div v-if="status.error" class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
              {{ status.message }}
            </div>

            <button 
              type="submit" 
              :disabled="isSending"
              class="inline-flex items-center gap-2 px-8 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-600/50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all shadow-lg shadow-brand-600/30"
            >
              <span v-if="isSending">Sending...</span>
              <span v-else>Send Message</span>
              <Send v-if="!isSending" class="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Info Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-800">
        <div class="flex  items-center gap-3">
          <Mail class="w-5 h-5 text-brand-500" />
          <div>
            <p class="text-xs text-slate-500">Email</p>
            <p class="text-sm font-medium">{{ config.personal.email }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Phone class="w-5 h-5 text-brand-500" />
          <div>
            <p class="text-xs text-slate-500">Phone</p>
            <p class="text-sm font-medium">+25{{ config.personal.phone }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <MapPin class="w-5 h-5 text-brand-500" />
          <div>
            <p class="text-xs text-slate-500">Location</p>
            <p class="text-sm font-medium">{{ config.personal.location }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div>
            <p class="text-xs text-slate-500">Available</p>
            <p class="text-sm font-medium">For freelance & full-time</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { config } from '../config'
import { Mail, Phone, MapPin, Send, Github, Twitter, Instagram, Facebook } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const status = reactive({
  success: false,
  error: false,
  message: ''
})

const sendEmail = async () => {
  isSending.value = true
  status.success = false
  status.error = false
  status.message = ''

  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: config.personal.email
      }
    )

    status.success = true
    status.message = 'Thank you! Your message has been sent successfully.'
    
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''

  } catch (error) {
    status.error = true
    status.message = 'Oops! Something went wrong. Please try again or email me directly.'
  } finally {
    isSending.value = false
    
    setTimeout(() => {
      status.success = false
      status.error = false
      status.message = ''
    }, 5000)
  }
}
</script>