"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"Light" | "Dark" | "System">("Light");
  const activeRef = useRef<HTMLDivElement>(null);
  const lightButtonRef = useRef<HTMLButtonElement>(null);
  const darkButtonRef = useRef<HTMLButtonElement>(null);
  const systemButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateActiveIndicator = () => {
      if (!activeRef.current) return;

      let activeButton: HTMLButtonElement | null = null;

      switch (theme) {
        case "Light":
          activeButton = lightButtonRef.current;
          break;
        case "Dark":
          activeButton = darkButtonRef.current;
          break;
        case "System":
          activeButton = systemButtonRef.current;
          break;
      }

      if (activeButton) {
        activeRef.current.style.width = `${activeButton.offsetWidth}px`;
        activeRef.current.style.height = `${activeButton.offsetHeight}px`;
        activeRef.current.style.transform = `translateX(${activeButton.offsetLeft}px)`;
      }
    };

    updateActiveIndicator();
    window.addEventListener("resize", updateActiveIndicator);

    return () => window.removeEventListener("resize", updateActiveIndicator);
  }, [theme]);

  const handleThemeChange = (newTheme: "Light" | "Dark" | "System") => {
    if (newTheme === "Light" || newTheme === "Dark" || newTheme === "System") {
      setTheme(newTheme);

      // Update localStorage
      if (newTheme === "System") {
        localStorage.removeItem("theme");
      } else {
        localStorage.theme = newTheme.toLowerCase();
      }

      // Apply the theme
      if (
        newTheme === "Dark" ||
        (newTheme === "System" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  return (
    <div className="relative flex h-9 items-center justify-between gap-1 rounded-lg bg-grey p-0.5 ">
      <div
        ref={activeRef}
        className="absolute left-0 h-7 rounded-md text-graytext bg-card transition-all duration-300"
      />

      <button
        ref={lightButtonRef}
        className={`relative z-20 h-full rounded-md px-3 ${
          theme === "Light" && "font-semibold"
        }`}
        onClick={() => handleThemeChange("Light")}
      >
        Light
      </button>

      <button
        ref={darkButtonRef}
        className={`relative z-20 h-full rounded-md px-3 ${
          theme === "Dark" && "font-semibold"
        }`}
        onClick={() => handleThemeChange("Dark")}
      >
        Dark
      </button>

      <button
        ref={systemButtonRef}
        className={`relative z-20 h-full rounded-md px-3 ${
          theme === "System" && "font-semibold"
        }`}
        onClick={() => handleThemeChange("System")}
      >
        System
      </button>
    </div>
  );
};

export default ThemeSwitcher;
