import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";
import Button from "./ui/Button";
export default function hero() {
  return (
    <div className="relative overflow-hidden py-[51px] md:py-[29px] bg-gradient-to-b from-red-200 to-green-200 ">
      <div className="container mx-auto px-[6px] relative z-10">
        <div className="text-center max-width-3xl mx-auto">
          <div className="text-center text-[31px] md:text-[25px] font-bold text-indigo-600 mb-[6.5px]">
            IPL 2025 <span className="text-green-700">Live Score</span>
          </div>
          <p className="text-[19px] text-black-200 mb-8">
            Stay updated with real-time scores, team standings, and match
            schedules for the Indian Premier League.
          </p>

          <div className="flex flex-wrap justify-center gap-[4px]">
            <Button variant="primary" size="lg">
              Live Score
            </Button>

            <Button variant="outline" size="lg">
              Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Bat */}
      <div className="absolute top-20 right-[10%] w-16 h-16 rounded-full bg-red-700  hidden md:block" />
      <div className="absolute bottom-10 left-[5%] w-8 h-64 bg-gradient-to-b from-amber-800 to-amber-700 rounded-b-lg hidden md:block" />
    </div>
  );
}
