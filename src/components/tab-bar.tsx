"use client";

import type { KeyboardEvent } from "react";

export function TabBar({
  id,
  labels,
  active,
  onChange,
  label,
  className = "",
}: {
  id: string;
  labels: readonly string[];
  active: number;
  onChange: (index: number) => void;
  label: string;
  className?: string;
}) {
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % labels.length;
    else if (event.key === "ArrowLeft")
      next = (index + labels.length - 1) % labels.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = labels.length - 1;
    else return;
    event.preventDefault();
    onChange(next);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  }
  return (
    <div className={`tab-bar ${className}`} role="tablist" aria-label={label}>
      {labels.map((text, index) => (
        <button
          key={text}
          type="button"
          role="tab"
          id={`${id}-tab-${index}`}
          aria-controls={`${id}-panel`}
          aria-selected={active === index}
          tabIndex={active === index ? 0 : -1}
          className={active === index ? "active" : ""}
          onClick={() => onChange(index)}
          onKeyDown={(event) => handleKey(event, index)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
