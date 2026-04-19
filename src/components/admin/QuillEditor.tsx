"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { 
  ssr: false,
  loading: () => (
    <div className="h-48 w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 text-sm">
      Loading editor...
    </div>
  )
});

export default function QuillEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );

  return (
    <div className="quill-wrapper rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        modules={modules}
        className="dark:text-zinc-50"
      />
      <style jsx global>{`
        .quill-wrapper .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid var(--border-color, #e4e4e7) !important;
          background-color: var(--toolbar-bg, #fafafa);
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
        }
        .quill-wrapper .ql-container {
          border: none !important;
          font-family: inherit !important;
          font-size: 1rem;
        }
        .quill-wrapper .ql-editor {
          min-height: 200px;
        }
        
        @media (prefers-color-scheme: dark) {
          .quill-wrapper .ql-toolbar {
            --border-color: #27272a;
            --toolbar-bg: #18181b;
          }
          .quill-wrapper .ql-stroke {
            stroke: #a1a1aa !important;
          }
          .quill-wrapper .ql-fill {
            fill: #a1a1aa !important;
          }
          .quill-wrapper .ql-picker {
            color: #a1a1aa !important;
          }
          .quill-wrapper .ql-picker-options {
            background-color: #18181b !important;
            border-color: #27272a !important;
          }
        }
      `}</style>
    </div>
  );
}
