// Initialize scroll reveal animations across the app
export function initRevealAnimations(): void {
  const addRevealAttr = () => {
    // Auto-tag all sections that don't already opt-out/opt-in
    document.querySelectorAll<HTMLElement>("section:not([data-reveal])").forEach((el) => {
      el.setAttribute("data-reveal", "slide-up");
    });
  };

  addRevealAttr();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("reveal-in");
        } else {
          el.classList.remove("reveal-in");
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  const observeAll = () => {
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => observer.observe(el));
  };

  observeAll();

  // Watch for DOM changes (route changes etc.)
  const mo = new MutationObserver(() => {
    addRevealAttr();
    observeAll();
  });
  mo.observe(document.body, { childList: true, subtree: true });

  // React-router navigation: listen for history changes
  const wrapHistory = (type: "pushState" | "replaceState") => {
    const orig = history[type];
    return function (this: History, ...args: any[]) {
      const ret = orig.apply(this, args as any);
      const navEvent = new Event("reveal:navigate");
      window.dispatchEvent(navEvent);
      return ret;
    };
  };
  history.pushState = wrapHistory("pushState");
  history.replaceState = wrapHistory("replaceState");
  window.addEventListener("popstate", () => window.dispatchEvent(new Event("reveal:navigate")));
  window.addEventListener("reveal:navigate", () => {
    addRevealAttr();
    observeAll();
  });
}


