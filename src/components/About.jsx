import { Section } from './Section.jsx'
import { User, Code, Zap, Layers, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import profileImage from '../assets/profile-cosmic.png'


export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="<developer mindset />"
      icon={User}
    >
      <div className="grid grid-cols-3 gap-8">
        {/* Code panel - 1/3 space on left */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-slate-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md relative overflow-hidden"
        >
          {/* Decorative star particles */}
            <div className="absolute top-4 right-4 text-indigo-400/20 text-lg">✦</div>
            <div className="absolute top-8 right-8 text-purple-400/15 text-sm">✧</div>
            <div className="absolute bottom-6 left-6 text-sky-400/20 text-xs">✦</div>
          
          {/* Tech line decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 relative z-10">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs font-mono text-slate-500">profile.ts</div>
          </div>
          
          {/* Code content */}
          <div className="p-4 space-y-3 font-mono text-sm relative z-10">
            <div>
              <span className="text-purple-400">const</span>
              <span className="text-blue-400"> profile</span>
              <span className="text-slate-400"> =</span>
              <span className="text-slate-200"> {'{'}</span>
            </div>
            <div className="ml-6 space-y-2">
              <div>
                <span className="text-indigo-400">name</span>
                <span className="text-slate-400">:</span>
                <span className="text-slate-200"> "Gabriella Gomes"</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="text-indigo-400">role</span>
                <span className="text-slate-400">:</span>
                <span className="text-slate-200"> "Full Stack Developer"</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="text-indigo-400">focus</span>
                <span className="text-slate-400">:</span>
                <span className="text-slate-200"> "Premium Web Experiences"</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="text-indigo-400">approach</span>
                <span className="text-slate-400">:</span>
                <span className="text-slate-200"> "Minimal + Functional"</span>
              </div>
            </div>
            <div className="text-slate-200">{'}'}</div>
          </div>
        </motion.div>

        {/* Information card - 2/3 space on right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border-l border-t border-white/10 bg-slate-900/30 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md relative overflow-hidden col-span-2"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          <div className="absolute top-4 right-4 text-indigo-400/20 text-lg">✦</div>
          <div className="absolute top-8 right-8 text-purple-400/15 text-sm">✧</div>
          <div className="absolute bottom-4 left-5 text-sky-400/20 text-xs">✦</div>
          
          {/* Connection line from code panel */}
          <div className="absolute -top-8 left-40 w-px h-8 bg-gradient-to-b from-indigo-400/30 to-transparent"></div>
          
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 relative z-10">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs font-mono text-slate-500">about.ts</div>
          </div>
          
          {/* Internal split layout */}
          <div className="relative z-10 flex">
            {/* Left column: vertical line and symbol */}
            <div className="w-16 flex flex-col items-center py-8 border-r border-white/10">
              <div className="text-xs font-mono text-slate-400 mb-2">//</div>
              <div className="flex-1 w-px bg-gradient-to-b from-indigo-400/20 via-purple-400/10 to-transparent"></div>
              <div className="text-xs font-mono text-slate-400 mt-2">&gt;</div>
            </div>
            
            {/* Right column: text content */}
            <div className="flex-1 p-8">
              <div className="space-y-3 font-mono text-sm">
                {/* Active line with prefix */}
                <div className="flex items-center gap-2 text-indigo-300">
                  <span className="text-slate-400">&gt;</span>
                  <span>
                    <span className="text-indigo-400">Passionate</span> developer creating 
                    <span className="text-purple-400"> premium</span> web experiences
                  </span>
                </div>
                
                {/* Subtle lines */}
                <div className="flex items-center gap-2 text-slate-400 opacity-70">
                  <span className="text-slate-500">&gt;</span>
                  <span>
                    <span className="text-sky-400">Minimal</span> design meets 
                    <span className="text-purple-400"> functional</span> code
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-400 opacity-70">
                  <span className="text-slate-500">&gt;</span>
                  <span>
                    Building with <span className="text-indigo-400">precision</span> and 
                    <span className="text-sky-400">purpose</span>
                  </span>
                </div>
                
                {/* Blinking cursor */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">&gt;</span>
                  <span className="w-2 h-4 bg-indigo-400 animate-pulse"></span>
                </div>
              </div>
              
              {/* Closing bracket */}
              <div className="mt-6 text-xs font-mono text-slate-400 text-right">{'}'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

