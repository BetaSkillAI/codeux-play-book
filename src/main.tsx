import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initRevealAnimations } from "./utils/reveal";

createRoot(document.getElementById("root")!).render(<App />);

// Initialize global scroll/slide/zoom reveal animations
initRevealAnimations();
