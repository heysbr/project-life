"use client";   
import { useEffect, useRef } from "react";

export default function ModalDemo({ open, onClose, title, children }) {
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (previouslyFocused.current) previouslyFocused.current.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape and handle focus trap (Tab)
  useEffect(() => {
    if (!open) return;

    const node = modalRef.current;
    if (!node) return;

    // Focus first focusable element or the modal container
    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(", ");
    const focusable = node.querySelectorAll(focusableSelector);
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    const prevFocus = document.activeElement;
    (firstFocusable || node).focus();

    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        // Focus trap
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // restore focus
      try {
        prevFocus?.focus?.();
      } catch (err) {}
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-hidden="false"
    >
      {/* Semi-opaque backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex={-1}
        className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/10 transition-transform
                   transform-gpu sm:mx-6"
        onClick={(e) => e.stopPropagation()} // prevent backdrop click when clicking inside
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-lg font-semibold leading-6">
            {title}
          </h2>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 011.06 0L10 7.88l2.66-2.66a.75.75 0 111.06 1.06L11.06 9l2.66 2.66a.75.75 0 11-1.06 1.06L10 10.06l-2.66 2.66a.75.75 0 11-1.06-1.06L8.94 9 6.28 6.34a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4">{children}</div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>

          <button
            onClick={() => {
              // Example action — replace with real handler
              alert("Primary action (replace me)");
            }}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
