<template>
  <div class="ai-assistant-root">
    
    <!-- Chat Window -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="isOpen"
        class="chat-window"
      >
        <!-- Header -->
        <div class="chat-header">
          <div class="flex items-center gap-3">
            <div class="relative">
              <img
                :src="config.aiAssistant.avatar"
                alt="AI Assistant"
                class="w-10 h-10 rounded-full bg-white p-0.5"
              />
              <div class="status-dot"></div>
            </div>
            <div>
              <h3 class="font-semibold text-white text-sm">
                {{ config.aiAssistant.name }}
              </h3>
              <p class="text-xs text-brand-100">Online now</p>
            </div>
          </div>
          <button @click="closeChat" class="text-white/80 hover:text-white transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="chat-messages">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="message-row"
            :class="{ 'flex-row-reverse': message.type === 'user' }"
          >
            <img
              v-if="message.type === 'ai'"
              :src="config.aiAssistant.avatar"
              alt="AI"
              class="w-7 h-7 rounded-full flex-shrink-0"
            />
            <div v-else class="w-7 h-7 flex-shrink-0"></div>

            <div
              class="message-bubble"
              :class="message.type === 'user' 
                ? 'bg-brand-600 text-white rounded-tr-none' 
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'"
            >
              <div v-html="formatMessage(message.text)"></div>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="message-row">
            <img :src="config.aiAssistant.avatar" alt="AI" class="w-7 h-7 rounded-full flex-shrink-0" />
            <div class="typing-bubble">
              <div class="flex gap-1">
                <span class="typing-dot"></span>
                <span class="typing-dot" style="animation-delay:.1s"></span>
                <span class="typing-dot" style="animation-delay:.2s"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="input-area">
          <form @submit.prevent="sendMessage" class="flex items-center gap-2">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask me anything..."
              class="chat-input"
              :disabled="isTyping"
            />
            <button
              type="submit"
              :disabled="!userInput.trim() || isTyping"
              class="send-btn"
            >
              <Send class="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </transition>

    <!-- Floating Button -->
    <div class="button-wrapper">
      <!-- Notification -->
      <span
        v-if="!isOpen && hasNewMessage"
        class="notification-dot"
      ></span>

      <!-- Tooltip (desktop only) -->
      <span class="tooltip">Chat with AI Assistant</span>

      <!-- Button -->
      <button @click="toggleChat" class="ai-button" aria-label="Chat with AI Assistant">
        <MessageCircle v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { config } from '../config'
import { MessageCircle, X, Send } from 'lucide-vue-next'

const isOpen = ref(false)
const messages = ref([])
const isTyping = ref(false)
const hasNewMessage = ref(false)
const messagesContainer = ref(null)
const userInput = ref('')

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && messages.value.length === 0) {
    startConversation()
  }
  hasNewMessage.value = false
}

const closeChat = () => {
  isOpen.value = false
}

const typeMessage = async (text) => {
  isTyping.value = true
  await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400))
  messages.value.push({ type: 'ai', text })
  isTyping.value = false
  scrollToBottom()
}

const startConversation = async () => {
  for (const message of config.aiAssistant.introduction) {
    await typeMessage(message)
  }
}

const sendMessage = async () => {
  const text = userInput.value.trim()
  if (!text || isTyping.value) return
  
  messages.value.push({ type: 'user', text })
  userInput.value = ''
  scrollToBottom()
  
  const response = await generateResponse(text)
  await typeMessage(response.text)
  
  if (response.scrollTo) {
    setTimeout(() => {
      const element = document.getElementById(response.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 1000)
  }
}

const generateResponse = async (userText) => {
  const text = userText.toLowerCase()
  
  // Greeting responses
  if (text.match(/\b(hello|hi|hey|greetings)\b/)) {
    return { text: "Hello! 👋 I'm Robert's AI assistant. How can I help you today? Feel free to ask me anything about Robert's skills, experience, projects, or how to get in touch!" }
  }
  
  // Skills/Technologies
  if (text.match(/\b(skills|technologies|tech stack|programming|languages|expertise|what do you know|what can you do)\b/)) {
    return { 
      text: "Robert is proficient in:\n\n• **Frontend:** Vue.js, React, JavaScript, TypeScript, HTML5, CSS3\n• **Styling:** Tailwind CSS, Sass, Bootstrap\n• **Backend:** Node.js, Express, Python\n• **Databases:** MongoDB, PostgreSQL, MySQL\n• **Tools:** Git, Docker, AWS, CI/CD\n\nWould you like to see his projects?",
      scrollTo: 'skills'
    }
  }
  
  // Projects/Portfolio/Work
  if (text.match(/\b(projects|portfolio|work|applications|what have you built|show me|examples)\b/)) {
    return { 
      text: "Robert has built impressive projects including:\n\n• E-commerce platforms\n• Business management dashboards\n• Real-time web applications\n• Responsive portfolio websites\n• RESTful APIs\n\nCheck out the Projects section below to see them in action!",
      scrollTo: 'projects'
    }
  }
  
  // Contact information
  if (text.match(/\b(contact|email|phone|reach|hire|get in touch|available)\b/)) {
    return { 
      text: `You can reach Robert at:\n\n **Email:** ${config.personal.email}\n📱 **Phone:** ${config.personal.phone}\n\nHe's currently available for freelance projects and full-time positions. Feel free to reach out!`,
      scrollTo: 'contact'
    }
  }
  
  // About/Bio
  if (text.match(/\b(about|bio|who is|tell me about|background)\b/)) {
    return { 
      text: `Robert is a passionate Software Developer with expertise in building responsive, accessible, and performance-driven web applications. He loves solving complex problems and creating elegant user experiences.\n\n${config.personal.bio || 'He has several years of experience working with modern web technologies.'}`
    }
  }
  
  // Experience
  if (text.match(/\b(experience|years|worked|history|career)\b/)) {
    return { text: "Robert has extensive experience in web development, working on diverse projects ranging from small business websites to complex enterprise applications. He's passionate about clean code and best practices." }
  }
  
  // Pricing/Rates
  if (text.match(/\b(price|cost|rate|rates|pricing|how much|budget|fee)\b/)) {
    return { text: "Robert offers competitive rates based on project scope and complexity. For a detailed quote, please contact him directly with your project requirements. He provides flexible engagement models for different needs." }
  }
  
  // Availability
  if (text.match(/\b(available|availability|free|open|taking projects)\b/)) {
    return { text: "Yes, Robert is currently available for new projects! Whether it's a short-term contract or long-term collaboration, feel free to reach out to discuss your needs." }
  }
  
  // Education
  if (text.match(/\b(education|degree|university|school|studied|learning)\b/)) {
    return { text: "Robert has a strong educational background in Computer Science or related field, combined with continuous learning and certifications in modern web technologies." }
  }
  
  // Services
  if (text.match(/\b(services|what do you offer|what can you do for me)\b/)) {
    return { text: "Robert offers:\n\n• Custom web application development\n• Frontend development (Vue.js, React)\n• Backend API development\n• UI/UX implementation\n• Website optimization\n• Technical consulting\n\nWhat kind of project do you have in mind?" }
  }
  
  // Resume/CV
  if (text.match(/\b(resume|cv|curriculum|download)\b/)) {
    return { text: "You can download Robert's resume from the About section, or contact him directly to request an updated copy tailored to your needs." }
  }
  
  // Social media
  if (text.match(/\b(social|github|linkedin|twitter|facebook|instagram)\b/)) {
    return { text: "Connect with Robert on:\n\n• GitHub: github.com/icyezarobert\n• LinkedIn: linkedin.com/in/icyezarobert\n\nHe regularly shares projects and technical insights!" }
  }
  
  // Location
  if (text.match(/\b(location|where|based|country|city|remote)\b/)) {
    return { text: `Robert is based in ${config.personal.location || 'Rwanda'} and is available for remote work worldwide. He's experienced in collaborating with international clients across different time zones.` }
  }
  
  // Thank you
  if (text.match(/\b(thanks|thank you|appreciate)\b/)) {
    return { text: "You're welcome! 😊 If you have any more questions, feel free to ask. Otherwise, I'd love to help you get in touch with Robert!" }
  }
  
  // Goodbye
  if (text.match(/\b(bye|goodbye|see you|later)\b/)) {
    return { text: "Goodbye! Have a great day! Don't hesitate to come back if you have more questions. " }
  }
  
  // Default responses for unrecognized questions
  const defaultResponses = [
    { text: "That's a great question! For specific details, I'd recommend reaching out to Robert directly. Is there anything else about his skills or projects I can help you with?", scrollTo: 'contact' },
    { text: "I'd love to help with that! Could you tell me more about what you're looking for? Or feel free to contact Robert directly for a detailed discussion.", scrollTo: 'contact' },
    { text: "Thanks for asking! Robert would be happy to discuss this with you. Would you like me to show you his contact information?", scrollTo: 'contact' }
  ]
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

const formatMessage = (text) => {
  // Convert markdown-like formatting to HTML
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
}

onMounted(() => {
  setTimeout(() => {
    if (!isOpen.value) hasNewMessage.value = true
  }, 3000)
})
</script>

<style scoped>
/* Root container - MUST be at app root level */
.ai-assistant-root {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
}

@media (max-width: 640px) {
  .ai-assistant-root {
    bottom: 20px;
    right: 20px;
    left: auto;
  }
}

/* Chat Window */
.chat-window {
  width: calc(100vw - 40px);
  max-width: 24rem;
  height: 70vh;
  max-height: 500px;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  margin-bottom: 16px;
}

@media (min-width: 640px) {
  .chat-window {
    width: 24rem;
    height: 28rem;
    max-height: none;
  }
}

.dark .chat-window {
  background: #1e293b;
  border-color: #334155;
}

/* Header */
.chat-header {
  background: linear-gradient(to right, var(--brand-600, #2563eb), var(--brand-700, #1d4ed8));
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  background: #4ade80;
  border: 2px solid var(--brand-600, #2563eb);
  border-radius: 9999px;
}

/* Messages */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #f8fafc;
}

.dark .chat-messages {
  background: rgba(15, 23, 42, 0.5);
}

.message-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  animation: fade-in 0.35s ease forwards;
}

.message-bubble {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  line-height: 1.6;
  max-width: 80%;
  word-break: break-word;
}

.message-bubble strong {
  font-weight: 600;
  color: inherit;
}

.typing-bubble {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-top-left-radius: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

.dark .typing-bubble {
  background: #1e293b;
  border-color: #334155;
}

.typing-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: var(--brand-500, #3b82f6);
  border-radius: 9999px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* Input Area */
.input-area {
  padding: 0.75rem;
  border-top: 1px solid #e2e8f0;
  background: white;
  flex-shrink: 0;
}

.dark .input-area {
  border-color: #334155;
  background: #1e293b;
}

.chat-input {
  flex: 1;
  padding: 0.625rem 1rem;
  background: #f1f5f9;
  color: #1e293b;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: none;
  outline: none;
  width: 100%;
}

.chat-input:focus {
  box-shadow: 0 0 0 2px var(--brand-500, #3b82f6);
}

.dark .chat-input {
  background: #334155;
  color: #e2e8f0;
}

.chat-input::placeholder {
  color: #94a3b8;
}

.send-btn {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-600, #2563eb);
  color: white;
  border-radius: 9999px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.send-btn:hover:not(:disabled) {
  background: var(--brand-700, #1d4ed8);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Button Wrapper */
.button-wrapper {
  position: relative;
  pointer-events: auto;
}

.notification-dot {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  z-index: 10;
  width: 1rem;
  height: 1rem;
  background: #ef4444;
  border: 2px solid white;
  border-radius: 9999px;
  animation: pulse 2s infinite;
}

.dark .notification-dot {
  border-color: #0f172a;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.tooltip {
  display: none;
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: #0f172a;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}

@media (min-width: 640px) {
  .button-wrapper:hover .tooltip {
    opacity: 1;
  }
}

.ai-button {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(to right, var(--brand-600, #2563eb), var(--brand-700, #1d4ed8));
  border-radius: 9999px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  -webkit-tap-highlight-color: transparent;
}

.ai-button:hover {
  transform: scale(1.1);
  background: linear-gradient(to right, var(--brand-700, #1d4ed8), var(--brand-800, #1e40af));
}

.ai-button:active {
  transform: scale(0.95);
}

/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom Scrollbar */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.5);
  border-radius: 9999px;
}

.dark .chat-messages::-webkit-scrollbar-thumb {
  background: rgba(71, 85, 105, 0.7);
}
</style>