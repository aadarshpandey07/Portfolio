// Suppress React DevTools semver errors without hiding real app errors.
// This targets a known issue in some React DevTools builds that throw:
// "Invalid argument not valid semver ('')" when used with React 19.
if (typeof window !== "undefined") {
  // Filter noisy console.error messages specifically from the DevTools bug.
  const originalError = console.error;
  console.error = (...args) => {
    try {
      const msg = typeof args[0] === "string" ? args[0] : "";
      if (msg.includes("Invalid argument not valid semver")) return;
  } catch { /* ignore parse errors */ }
    return originalError.apply(console, args);
  };

  // Prevent the DevTools exception from bubbling as an "Uncaught Error" in the page.
  const shouldSuppress = (event) => {
    try {
      const message = event?.message || event?.reason?.message || "";
      const filename = event?.filename || "";
      // Match only the specific semver error or files clearly from the DevTools backend bundle.
      const isSemverError = message.includes("Invalid argument not valid semver");
      const isDevToolsFile = /react_devtools_backend/i.test(filename) || /backend\.js$/i.test(filename);
      return isSemverError || isDevToolsFile;
    } catch (_) {
      return false;
    }
  };

  // Capture phase to catch as early as possible and avoid noisy logs.
  window.addEventListener(
    "error",
    (e) => {
      if (shouldSuppress(e)) {
        e.preventDefault?.();
        // Some browsers respect returning true on window.onerror style handlers,
        // but with addEventListener we rely on preventDefault.
      }
    },
    true
  );

  window.addEventListener(
    "unhandledrejection",
    (e) => {
      if (shouldSuppress(e)) {
        e.preventDefault?.();
      }
    },
    true
  );
}
