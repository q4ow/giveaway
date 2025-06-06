import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showVideo && <VideoPlayer />}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-32"
        >
          <img
            src="/e-z.svg"
            alt="E-Z Services"
            className="h-20 w-20 md:h-24 md:w-24"
            role="button"
            onClick={() => window.open("https://e-z.gg", "_blank")}
          />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            E-Z Services Giveaway
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <HiOutlineSparkles className="text-purple-400" />
              <span className="text-purple-400 font-semibold">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Get Free Access to E-Z Services
            </h2>

            <p className="text-gray-400 text-lg">
              We're giving away free invites to our platform. Join thousands of
              satisfied users and experience the future of digital services.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/20 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setShowVideo(true)}
            >
              Redeem Yours
              <BsArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded" />
            <div className="relative bg-[#0F0F13] p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <IoGiftOutline className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold">
                    Some features we provide
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Unlimited uploads to e-z.host",
                  "Gorgeous, professional bio page",
                  "URL Shortening with 180+ domains",
                  "Pastes to share your code snippets",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 ml-4"
                  >
                    <div className="w-2 h-2 rounded-full mt-1 bg-purple-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded max-w-xl" />
          <Card className="relative bg-[#0F0F13] border border-gray-800 max-w-xl">
            <CardHeader className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Don't believe us?
              </h2>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img
                src="/testimonial.png"
                alt="Testimonial"
                className="w-full max-w-[452px] h-auto rounded mb-4"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center text-gray-400"
        >
          <p>
            Limited spots available. Don't miss out on this exclusive
            opportunity.
          </p>
          <p className="mt-4 text-zinc-50">
            Made with <span role="img">❤️</span> by{" "}
            <a
              href="https://github.com/keirim"
              className="bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent"
            >
              Keiran
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
