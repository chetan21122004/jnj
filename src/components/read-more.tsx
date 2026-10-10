"use client";

import { useId, useState } from "react";
import { Icon } from "./icon";

export function ReadMore({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <p id={id} className="read-more" data-open={open || undefined}>
        {text}
      </p>
      <button
        type="button"
        className="read-more-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Show less" : "Read more"}
        <Icon name="chevron" size={14} />
      </button>
    </>
  );
}
