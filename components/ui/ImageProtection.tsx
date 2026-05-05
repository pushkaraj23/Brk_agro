"use client";

import { useEffect } from "react";

function eventTargetsImage(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest("img") !== null;
}

export function ImageProtection() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      if (eventTargetsImage(event.target)) {
        event.preventDefault();
      }
    };

    const onDragStart = (event: DragEvent) => {
      if (eventTargetsImage(event.target)) {
        event.preventDefault();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const modifierPressed = event.ctrlKey || event.metaKey;

      // Block common "save page/image" shortcuts.
      if (modifierPressed && key === "s") {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
