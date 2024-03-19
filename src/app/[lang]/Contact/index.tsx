import Image from "next/image";

import { LangProps } from "@/@types";
import Title from "@/components/Title";
import { getDictionary } from "@/lib/dictionary";

import ContactForm from "./Form";

export default async function Contact({ lang }: LangProps) {
  const { header, contact } = await getDictionary(lang);

  return (
    <section id="contact">
      <Title>{header.contact}</Title>

      <div className="flex flex-col-reverse lg:flex-row">
        <ContactForm lang={contact} />

        <div className="w-full">
          <div className="text-lg font-bold lg:text-center mb-4">
            {contact.social}
          </div>

          <div className="flex items-center justify-center ">
            <a
              className="mr-4 duration-500 hover:scale-110"
              href="https://www.linkedin.com/in/marcelo-boff/"
              target="_blank"
            >
              <Image
                src="/contact/linkedin.svg"
                alt="LinkedIN"
                width={80}
                height={80}
              />
            </a>

            <a
              className="mr-4 duration-500 hover:scale-110"
              href="https://github.com/MarceloHBoff"
              target="_blank"
            >
              <Image
                src="/contact/github.svg"
                alt="GitHub"
                width={80}
                height={80}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
