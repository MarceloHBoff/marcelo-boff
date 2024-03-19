"use client";

import { useCallback, useState } from "react";

import data from "@/lib/dictionaries/br.json";

type ContactFormProps = {
  lang: typeof data.contact;
};

export default function ContactForm({ lang }: ContactFormProps) {
  const [sender, setSender] = useState("");
  const [text, setText] = useState("");

  const onSend = useCallback(async () => {
    if (!sender || !sender.includes("@")) {
      return alert(lang.emailValidation);
    }

    if (!text) {
      return alert(lang.subjectValidation);
    }

    fetch(`api/contact?email=${sender}&subject=${text}`);

    setSender("");
    setText("");
    return alert(lang.emailSuccess);
  }, [lang, sender, text]);

  return (
    <div className="flex flex-col w-full lg:w-1/2">
      <div className="text-lg font-bold my-4 lg:mt-0">{lang.contact}</div>

      <input
        type="text"
        className="bg-transparent border-2 rounded-xl outline-none px-4 py-2"
        placeholder={lang.emailPlaceholder}
        value={sender}
        onChange={(p) => setSender(p.target.value)}
      />

      <textarea
        className="bg-transparent border-2 rounded-xl outline-none px-4 py-2 my-3 h-40"
        rows={4}
        placeholder={lang.subjectPlaceholder}
        value={text}
        onChange={(p) => setText(p.target.value)}
      />

      <button
        className="bg-orange-500 rounded-xl mt-4 p-2 duration-500 hover:scale-[1.02]"
        onClick={onSend}
      >
        {lang.send}
      </button>
    </div>
  );
}
