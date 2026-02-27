import { motion as Motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center py-10">
      <Motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loader;