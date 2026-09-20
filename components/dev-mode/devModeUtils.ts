export interface ConsoleErrorItem {
  message: string;
  source?: string;
  lineno?: number;
  colno?: number;
  timestamp: string;
}

// Ring buffer storing last 5 console errors
const consoleErrorBuffer: ConsoleErrorItem[] = [];

if (typeof window !== "undefined") {
  const pushError = (item: ConsoleErrorItem) => {
    if (consoleErrorBuffer.length >= 5) {
      consoleErrorBuffer.shift();
    }
    consoleErrorBuffer.push(item);
  };

  window.addEventListener("error", (event) => {
    pushError({
      message: event.message || "Unknown Window Error",
      source: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      timestamp: new Date().toISOString(),
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    pushError({
      message: event.reason?.message || String(event.reason || "Unhandled Promise Rejection"),
      timestamp: new Date().toISOString(),
    });
  });
}

export function getConsoleErrors(): ConsoleErrorItem[] {
  return [...consoleErrorBuffer];
}

export function generateCssSelector(el: HTMLElement): string {
  if (el.getAttribute("data-testid")) {
    return `[data-testid="${el.getAttribute("data-testid")}"]`;
  }
  if (el.id) {
    return `#${el.id}`;
  }

  const path: string[] = [];
  let current: HTMLElement | null = el;

  while (current && current.nodeType === Node.ELEMENT_NODE && current.tagName !== "BODY" && current.tagName !== "HTML") {
    let selector = current.tagName.toLowerCase();
    if (current.id) {
      selector = `#${current.id}`;
      path.unshift(selector);
      break;
    }

    const parentElement: HTMLElement | null = current.parentElement;
    if (parentElement) {
      const currentTargetName = current.tagName;
      const siblings = Array.from(parentElement.children).filter((child) => child.tagName === currentTargetName);
      if (siblings.length > 1) {
        const index = siblings.indexOf(current) + 1;
        selector += `:nth-of-type(${index})`;
      }
    }

    path.unshift(selector);
    current = parentElement;
  }

  return path.join(" > ") || "body";
}
