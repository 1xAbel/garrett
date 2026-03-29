/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, MapPin, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#fdfcfb] font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-[#f0edea] rounded-[2rem] overflow-hidden"
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop" 
            alt="Rio de Janeiro" 
            className="w-full h-full object-cover opacity-90 grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-black/60 mb-2"
            >
              <Sparkles className="w-3 h-3" />
              A Distinguished Pursuit
            </motion.div>
            <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-[#1a1a1a]">
              Garret <span className="italic">Hedgepath</span>
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <div className="space-y-6">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#2a2a2a] first-letter:text-5xl first-letter:font-light first-letter:mr-3 first-letter:float-left">
              With a heart as vast as the Atlantic and a spirit that resonates with the vibrant rhythms of Brazil, Garret is seeking a connection that transcends borders.
            </p>
            
            <p className="text-sm md:text-base leading-loose text-[#5a5a5a] font-light">
              He is drawn to the warmth, the grace, and the undeniable charm of a Brazilian soul—someone who shares his appreciation for life's finer moments and the beauty of cultural harmony. A gentleman of character and ambition, Garret invites a journey of shared laughter, deep conversation, and the discovery of a love that feels like home, yet sparkles with the magic of Rio.
            </p>
          </div>

          <div className="pt-8 border-t border-[#f0edea] flex flex-wrap gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fdfcfb] border border-[#f0edea] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-black/40">Status</div>
                <div className="text-sm font-medium">Seeking Connection</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fdfcfb] border border-[#f0edea] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-black/40">Interest</div>
                <div className="text-sm font-medium">Brazilian Heritage</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#1a1a1a] text-white rounded-full text-xs uppercase tracking-[0.15em] font-semibold hover:bg-black transition-colors"
            >
              Inquire Within
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="fixed bottom-8 text-[10px] uppercase tracking-[0.3em] text-black/20 font-bold pointer-events-none">
        Est. 2026 • Private Invitation
      </div>
    </div>
  );
}
