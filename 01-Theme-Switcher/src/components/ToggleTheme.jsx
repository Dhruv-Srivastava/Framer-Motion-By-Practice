import { useState } from "react";
import { PiSunDimFill } from "react-icons/pi";
import { IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  function toggle() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <motion.div
        className={`toggle-theme-container`}
        onClick={toggle}
        animate={{
          backgroundColor: theme === "light" ? "#ffbf71" : "#423966",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="icon-container"
          animate={{
            left: theme === "light" ? "57%" : "7%",
            rotate: theme === "light" ? 360 : 0,
            backgroundColor: theme === "light" ? "#ffbf71" : "#423966",
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? <PiSunDimFill /> : <IoMdMoon />}
        </motion.div>
      </motion.div>
    </>
  );
}
