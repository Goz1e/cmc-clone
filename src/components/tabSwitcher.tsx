import { useEffect, useState } from "react";
import { useRef } from "react";

const TabSwitcher = () => {
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
        className="absolute left-0 h-7 rounded-md bg-orange-500/50 transition-all duration-300"
      />

      <button
        ref={lightButtonRef}
        className={`relative z-20 h-full rounded-md px-3 ${
          theme === "Light" ? "text-white" : "text-black"
        }`}
        onClick={() => handleThemeChange("Light")}
      >
        Light
      </button>

      <button
        ref={darkButtonRef}
        className={`relative z-20 h-full rounded-md px-3 ${
          theme === "Dark" ? "text-white" : "text-black"
        }`}
        onClick={() => handleThemeChange("Dark")}
      >
        Dark
      </button>

      <button
        ref={systemButtonRef}
        className={`relative z-20 h-full rounded-md px-3 ${
          theme === "System" ? "text-white" : "text-black"
        }`}
        onClick={() => handleThemeChange("System")}
      >
        System
      </button>
    </div>
  );
};

// <RadioGroup
//   newTheme={theme}
//   onnewThemeChange={handleThemeChange}
//   className="bg-grey inline-flex rounded-md p-1 transition-all"
// >
//   <div
//     className={cn(
//       "flex rounded-md items-center space-x-2 p-2",
//       theme === "Light" && "bg-white"
//     )}
//   >
//     <RadioGroupItem newTheme="Light" id="Light" />
//     <Label htmlFor="Light">Light</Label>
//   </div>
//   <div
//     className={cn(
//       "flex rounded-md items-center space-x-2 p-2",
//       theme === "Dark" && "bg-white"
//     )}
//   >
//     <RadioGroupItem newTheme="Dark" id="Dark" />
//     <Label htmlFor="Dark">Dark</Label>
//   </div>
//   <div
//     className={cn(
//       "flex rounded-md items-center space-x-2 p-2",
//       theme === "System" && "bg-white"
//     )}
//   >
//     <RadioGroupItem newTheme="System" id="System" />
//     <Label htmlFor="System">System</Label>
//   </div>
// </RadioGroup>

export default TabSwitcher;

/**

const btns = document.querySelectorAll("button")

const active = document.querySelector(".active")

onclick => {

let move = (100/btns.length) * i;
active.slyle.left = move + "%"
}


*/

//   };

//   // Initialize theme from localStorage on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.theme;
//     if (savedTheme === "dark" || savedTheme === "light") {
//       setTheme(savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1));
//     }

//     // Apply initial theme
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);
