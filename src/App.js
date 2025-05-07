import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  useEffect(() => {
    document.title = "James.Club0 | Video Editor";
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900 via-black to-purple-900 opacity-30 blur-3xl animate-[gradientFloat_40s_ease_in_out_infinite]"></div>
        <style>{`
          @keyframes gradientFloat {
            0% { transform: translate(0, 0); }
            25% { transform: translate(30px, 60px); }
            50% { transform: translate(-20px, 30px); }
            75% { transform: translate(50px, -20px); }
            100% { transform: translate(0, 0); }
          }
        `}</style>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-6"
          >
            <img
              src="https://cdn.discordapp.com/avatars/993842481609330718/593a6a642ceced368387a5fa4e4fb05d?size=1024"
              alt="james.club0 logo"
              className="w-24 h-24 rounded-full shadow-2xl border-4 border-blue-500 animate-[pulseSlow_6s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 blur-2xl animate-[pingSlow_6s_ease-in-out_infinite]"></div>
            <style>{`
              @keyframes pulseSlow {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              @keyframes pingSlow {
                0% { transform: scale(1); opacity: 0.1; }
                50% { transform: scale(1.1); opacity: 0.15; }
                100% { transform: scale(1); opacity: 0.1; }
              }
            `}</style>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hey, I’m <span className="text-blue-500">James</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl"
          >
            @james.club0 — I edit cool stuff.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-2 rounded-2xl shadow-xl">
              View My Edits
            </Button>
            <Button
              variant="outline"
              className="text-black bg-white border border-white hover:text-black hover:bg-white hover:border-white px-6 py-2 rounded-2xl"
            >
              Request an Edit
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <ScrollFadeInSection>
          <section className="px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Started from Kerala, now editing with passion. Love transitions, phonk, and clean storytelling.
            </p>
          </section>
        </ScrollFadeInSection>

        {/* Showcase Section */}
        <ScrollFadeInSection>
          <section className="px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Showcase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  url: "https://i.imgur.com/Y7ZrjNy.jpg",
                  reelLink: "https://www.instagram.com/p/CdLVo_R/",
                },
                {
                  url: "https://i.imgur.com/L8ZlqTc.jpg",
                  reelLink: "https://www.instagram.com/p/B9dHf3Q/",
                },
                {
                  url: "https://i.imgur.com/RnU8ylL.jpg",
                  reelLink: "https://www.instagram.com/p/CzR8dM9/",
                },
                {
                  url: "https://i.imgur.com/kASV9eP.jpg",
                  reelLink: "https://www.instagram.com/p/BwqZ5I5/",
                },
                {
                  url: "https://i.imgur.com/z6lA9hK.jpg",
                  reelLink: "https://www.instagram.com/p/B5cWcTZ/",
                },
                {
                  url: "https://i.imgur.com/jztdzNd.jpg",
                  reelLink: "https://www.instagram.com/p/C4jdw8F/",
                },
              ].map((edit, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-lg group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={edit.reelLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={edit.url}
                      alt={`Edit ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl group-hover:shadow-2xl group-hover:scale-105 transition duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black opacity-30 rounded-xl group-hover:opacity-40 transition duration-300"></div>
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollFadeInSection>


        {/* Paid Edit Request Section */}
        <ScrollFadeInSection>
          <section className="px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Paid Edit Request</h2>
            <p className="text-gray-400 mb-8">Get your dream edit crafted — simply message me for more details!</p>
            <motion.a
              href="https://www.instagram.com/james.club0" // Instagram DM link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-block",
                borderRadius: "2rem",
              }}
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 rounded-2xl animate-ping"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 opacity-20 rounded-2xl animate-ping"></div>
            </motion.a>
          </section>
        </ScrollFadeInSection>
    
    
            <footer className="text-center text-gray-500 py-10">
              © 2025 james.club0 — Made with ❤️ by <a target="_blank" href="https://instagram.com/hek3i">@hek3i</a>
            </footer>
          </div>
        </main>
      );
    }
    
    function ScrollFadeInSection({ children }) {
      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
      return (
        <motion.div
          ref={ref}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      );
    }
