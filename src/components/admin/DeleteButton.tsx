"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({ endpoint }: { endpoint: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Confirm deletion? This action is irreversible.")) return;
    setLoading(true);
    try {
      await fetch(endpoint, { method: "DELETE" });
      router.refresh();
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={loading}
      className="text-[#FF0000] hover:bg-[#FF0000] hover:text-white px-3 py-1.5 border border-transparent hover:border-[#FF0000] transition-colors font-mono text-xs uppercase tracking-widest disabled:opacity-50"
    >
      {loading ? "..." : "Delete"}
    </button>
  );
}
