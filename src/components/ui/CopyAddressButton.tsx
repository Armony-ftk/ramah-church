"use client";

import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/Button";

type CopyAddressButtonProps = {
  address: string;
};

type CopyStatus = "idle" | "copied" | "error";

export default function CopyAddressButton({ address }: CopyAddressButtonProps) {
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
      await navigator.clipboard.writeText(address);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    resetTimer.current = setTimeout(() => {
      setStatus("idle");
    }, 2200);
  }

  const label =
    status === "copied"
      ? "Copied!"
      : status === "error"
        ? "Copy Failed"
        : "Copy Address";

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={handleCopy}
      aria-live="polite"
      className="w-full sm:w-auto"
    >
      {label}
    </Button>
  );
}
