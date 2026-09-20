"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DevModeOverlay } from "./DevModeOverlay";

export function DevModeGate() {
  const searchParams = useSearchParams();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const devParam = searchParams.get("dev");

    // Clear dev mode if ?dev=off
    if (devParam === "off") {
      sessionStorage.removeItem("rag_dev_mode_enabled");
      sessionStorage.removeItem("rag_dev_mode_token");
      setIsEnabled(false);
      setIsVerifying(false);
      return;
    }

    // Check sessionStorage persistence
    const storedEnabled = sessionStorage.getItem("rag_dev_mode_enabled") === "true";
    if (storedEnabled) {
      setIsEnabled(true);
      setIsVerifying(false);
      return;
    }

    // Check ?dev=TOKEN
    if (devParam && devParam !== "off") {
      const ragUrl = process.env.NEXT_PUBLIC_RAG_FEEDBACK_URL || "http://localhost:3000";
      const projectId = process.env.NEXT_PUBLIC_RAG_PROJECT_ID || "tcb-church";

      fetch(`${ragUrl}/api/dev-token/verify?projectId=${encodeURIComponent(projectId)}&token=${encodeURIComponent(devParam)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.valid) {
            sessionStorage.setItem("rag_dev_mode_enabled", "true");
            sessionStorage.setItem("rag_dev_mode_token", devParam);
            setIsEnabled(true);
          } else {
            setIsEnabled(false);
          }
        })
        .catch(() => {
          setIsEnabled(false);
        })
        .finally(() => {
          setIsVerifying(false);
        });
    } else {
      setIsVerifying(false);
    }
  }, [searchParams]);

  if (isVerifying || !isEnabled) {
    return null;
  }

  return <DevModeOverlay />;
}
