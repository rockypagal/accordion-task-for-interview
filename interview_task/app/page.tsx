"use client";
import Accordion from "@/components/Accordion";
import { accordienData } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  const arr: any = [
    {},
    {},
    {},
    {},
    {},
    {
      faq6id: "esim-benefits",
      faq6title: "What are the advantages of using an eSIM?",
      faq6content: `{ "heading": "Esim FAQ", "faq1id": "esim-what", "faq1title": "What is an eSIM?", "faq1content": "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.", "faq2id": "esim-devices", "faq2title": "Which devices support eSIM?", "faq2content": "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.", "faq3id": "esim-dual", "faq3title": "Can I use both eSIM and physical SIM simultaneously?", "faq3content": "Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.", "faq4id": "esim-activation", "faq4title": "How do I activate an eSIM?", "faq4content": "To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings.", "faq5id": "esim-benefits", "faq5title": "What are the advantages of using an eSIM?", "faq5content": "eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly." }`,
    },
  ];

  for (let key in accordienData) {
    if (key.includes("1")) {
      arr[0][key] = accordienData[key];
    }
    if (key.includes("2")) {
      arr[1][key] = accordienData[key];
    }
    if (key.includes("3")) {
      arr[2][key] = accordienData[key];
    }
    if (key.includes("4")) {
      arr[3][key] = accordienData[key];
    }
    if (key.includes("5")) {
      arr[4][key] = accordienData[key];
    }
  }

  console.log(arr);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 bg- font-sans dark:bg-[#242424]">
      <main className="container mx-auto">
        <div className="flex w-full gap-4 items-center justify-center">
          <hr className="w-full " />
          <h2
            style={{ boxSizing: "border-box" }}
            className="text-3xl font-semibold w-[440px] text-center"
          >
            Time 1.5 Hr
          </h2>
          <hr className="w-full " />
        </div>

        <h2 className="font-semibold text-3xl my-5 text-center">Esim FAQ</h2>

        {/* accordien */}
        <div className="flex flex-col  gap-5">
          {arr.map((item: any, index: number) => {
            const id = `faq${index + 1}`;
            return (
              <Accordion
                key={id}
                item={item}
                index={index}
                id={id}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
