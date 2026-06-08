import { useEffect, useState } from "react";

const roles = ["Data Analyst", "Machine Learning Engineer", "AI Developer"];

export function TypingTitle() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((i + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return <span className="text-gradient cursor-blink">{text}</span>;
}
