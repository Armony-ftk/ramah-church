"use client";

import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/Button";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel?: string;
  errorLabel?: string;
  className?: string;
};

type CopyStatus = "idle" | "copied" | "error";

export default function CopyButton({
  value,
  label,
  copiedLabel = "Copied",
  errorLabel = "Copy failed",
  className = "",
}: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function handleCopy() {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    resetTimer.current = setTimeout(() => {
      setStatus("idle");
    }, 2200);
  }

  const currentLabel =
    status === "copied"
      ? copiedLabel
      : status === "error"
        ? errorLabel
        : label;

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={handleCopy}
      className={className}
    >
      <span aria-live="polite" aria-atomic="true">
        {currentLabel}
      </span>
    </Button>
  );
}
