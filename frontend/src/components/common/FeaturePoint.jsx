import { motion } from "framer-motion";
import { Check } from "lucide-react";

function FeaturePoint({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex gap-4"
    >
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#E8C27A]/30 bg-[#E8C27A]/10">
        <Check size={18} color="#E8C27A" />
      </div>

      <div>
        <h3 className="mb-2 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="leading-7 text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeaturePoint;