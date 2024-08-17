"use client";

import React from "react";
import { MotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useState } from "react";

import {
  SiAirtable,
  SiAuth0,
  SiBrevo,
  SiGithub,
  SiMake,
  SiMedium,
  SiNextdotjs,
  SiOpenai,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUpwork,
  SiYoutube,
  SiZapier,
} from "react-icons/si";
import Link from "next/link";
import { BiSolidFolder } from "react-icons/bi";
export const Bento = () => {
  const [webDevTools, setWebDevTools] = useState(
    ToolList.filter((tool) => tool.type.includes("web-dev"))
  );
  const [noCodeTools, setNoCodeTools] = useState(
    ToolList.filter((tool) => tool.type.includes("no-code"))
  );
  return (
    <div className="min-h-screen bg-zinc-900  text-zinc-50">
      <div className="flex items-center min-h-screen px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          /*   transition={{
            staggerChildren: 0.05,
          }} */
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          {<PortfolioBlock />}{" "}
          <ToolsBlock
            initialWebDevTools={webDevTools}
            initialNoCodeTools={noCodeTools}
          />
          <LocationBlock />
          <BottomBlock />
        </motion.div>
      </div>
    </div>
  );
};
interface Tool {
  name: string;
  url: string;
  color: string;
  icon: React.ElementType;
  type: string[];
}
const ToolList: Tool[] = [
  {
    name: "Airtable",
    url: "https://airtable.com",
    color: "red",
    icon: SiAirtable,
    type: ["no-code", "web-dev"],
  },

  {
    name: "Make",
    url: "https://make.com",
    color: "purple",
    icon: SiMake,
    type: ["no-code"],
  },
  {
    name: "Zapier",
    url: "https://zapier.com",
    color: "orange",
    icon: SiZapier,
    type: ["no-code"],
  },
  {
    name: "Brevo",
    url: "https://brevo.com",
    color: "blue",
    icon: SiBrevo,
    type: ["no-code"],
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    color: "cyan",
    icon: SiTailwindcss,
    type: ["web-dev"],
  },
  {
    name: "Next.js",
    url: "https://nextjs.org",
    color: "white",
    icon: SiNextdotjs,
    type: ["web-dev"],
  },
  {
    name: "TypeScript",
    url: "https://typescriptlang.org",
    color: "blue",
    icon: SiTypescript,
    type: ["web-dev"],
  },
  {
    name: "Auth0",
    url: "https://auth0.com",
    color: "green",
    icon: SiAuth0,
    type: ["web-dev"],
  },
  {
    name: "Shadcn UI",
    url: "https://ui.shadcn.com",
    color: "blue",
    icon: SiShadcnui,
    type: ["web-dev"],
  },
  {
    name: "ChatGPT",
    url: "https://openai.com",
    color: "green",
    icon: SiOpenai,
    type: ["no-code"],
  },
].map((tool) => ({
  ...tool,
  color: `text-${tool.color}-300`,
  }));


type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      /* variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }} */
      className={cn(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=LeoK"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Leo.{" "}
      <span className="text-zinc-400">
        I build Airtable apps with team{" "}
        <Link
          href="https://useefficiently.com"
          className="text-red-400 underline"
        >
          UseEfficiently
        </Link>
        .
      </span>
    </h1>
    <Link
      href="mailto:leo@useefficiently.com"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </Link>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <Link
        href="https://youtube.com/@ahmetkok"
        className="grid h-full place-content-center text-3xl text-zinc-50"
      >
        <SiYoutube />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-dark md:col-span-3"
    >
      <Link
        href="#"
        className="grid h-full place-content-center text-3xl text-zinc-50"
      >
        <SiGithub />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-dark md:col-span-3"
    >
      <Link
        href="#"
        className="grid h-full place-content-center text-3xl text-zinc-50"
      >
        <BiSolidFolder />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <Link
        href="#"
        className="grid h-full place-content-center text-3xl text-zinc-50"
      >
        <SiUpwork />
      </Link>
    </Block>
  </>
);

const PortfolioBlock = () => (
  <Block className="col-span-12 row-span-2">
    <p className="text-4xl font-medium leading-tight mb-4">
      Take a look at my works
    </p>
    <div className="grid gap-2 grid-cols-12 mb-12 text-2xl font-medium leading-tight">
      <div className="col-span-12 bg-dark md:col-span-6 ">
        <Link href="#">
          <ul className="flex flex-wrap gap-2 text-zinc-50 mb-3 mx-auto grid-flow-dense items-center">
            <li
              draggable
              onDragStart={(e) => e.preventDefault()}
              onDragEnd={(e) => e.preventDefault()}
              className="text-red-300 flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <SiAirtable />
              <span className="text-xl">Airtable</span>
            </li>

            <li
              draggable
              className="text-orange-300 flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <SiZapier />
              <span className="text-xl">Zapier</span>
            </li>

            <li
              draggable
              className="text-blue-300 flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <SiBrevo />
              <span className="text-xl">Brevo</span>
            </li>
          </ul>
          <span className="text-zinc-50">Dynamic Email Marketing System</span>
        </Link>
      </div>
      <div className="col-span-12 bg-dark md:col-span-6 ">
        <Link href="#">
          <ul className="flex flex-wrap gap-2 text-zinc-50 mb-3 mx-auto grid-flow-dense items-center">
            <li
              draggable
              className="text-red-300 flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <SiAirtable />
              <span className="text-xl">Airtable</span>
            </li>

            <li
              draggable
              className="text-orange-300 flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <SiZapier />
              <span className="text-xl">Zapier</span>
            </li>

            <li
              draggable
              className="text-blue-300 flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <SiBrevo />
              <span className="text-xl">Brevo</span>
            </li>
          </ul>
          <span className="text-zinc-50">Dynamic Email Marketing System</span>
        </Link>
      </div>
      <Block className="col-span-12 bg-dark md:col-span-6">
        <Link
          href="#"
          className="grid h-full place-content-center text-zinc-50"
        >
          <BiSolidFolder />
        </Link>
      </Block>
      <Block className="col-span-12 bg-dark md:col-span-6">
        <Link
          href="#"
          className="grid h-full place-content-center text-zinc-50"
        >
          <BiSolidFolder />
        </Link>
      </Block>
    </div>
    <Link
      href="mailto:leo@useefficiently.com"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      The other ones <FiArrowRight />
    </Link>
  </Block>
);

const ToolsBlock = ({
  initialWebDevTools,
  initialNoCodeTools,
}: {
  initialWebDevTools: typeof ToolList;
  initialNoCodeTools: typeof ToolList;
}) => {
  const [webDevTools, setWebDevTools] = useState(initialWebDevTools);
  const [noCodeTools, setNoCodeTools] = useState(initialNoCodeTools);

  const onDragStart = <T extends HTMLElement>(
    e: React.DragEvent<T>,
    index: number,
    type: "webDevTools" | "noCodeTools"
  ) => {
    e.dataTransfer.setData("draggedIndex", index.toString());
    e.dataTransfer.setData("type", type);
  };

  const onDrop = <T extends HTMLElement>(
    e: React.DragEvent<T>,
    dropIndex: number,
    type: "webDevTools" | "noCodeTools"
  ) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"), 10);
    const draggedType = e.dataTransfer.getData("type");

    if (type !== draggedType) return;

    if (type === "webDevTools") {
      const updatedTools = [...webDevTools];
      const [draggedItem] = updatedTools.splice(draggedIndex, 1);
      updatedTools.splice(dropIndex, 0, draggedItem);
      setWebDevTools(updatedTools);
    } else if (type === "noCodeTools") {
      const updatedTools = [...noCodeTools];
      const [draggedItem] = updatedTools.splice(draggedIndex, 1);
      updatedTools.splice(dropIndex, 0, draggedItem);
      setNoCodeTools(updatedTools);
    }
  };
  const onDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    // Your drag over logic
  };
  return (
    <Block className="col-span-12 row-span-2 grid grid-cols-2">
      <h2 className="text-4xl font-medium leading-tight mb-4 col-span-12">
        Tools I used so far
      </h2>
      <div className="col-span-12 md:col-span-1 pr-1">
        <h3 className="mb-3 text-3xl font-medium leading-tight text-zinc-400">
          As a web developer
        </h3>
        <ul className="flex flex-wrap gap-2 text-zinc-50 mb-3 mx-auto grid-flow-dense items-center">
          {webDevTools.map((tool, index) => (
            <Link
              href={tool.url}
              target="_blank"
              prefetch={false}
              key={tool.name}
              draggable
              onDragStart={(e) => onDragStart(e, index, "webDevTools")}
              onDrop={(e) => onDrop(e, index, "webDevTools")}
              onDragOver={onDragOver}
              className="flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3"
            >
              <tool.icon className="text-2xl" />
              <span className="text-xl">{tool.name}</span>
            </Link>
          ))}
        </ul>
      </div>
      <div className="col-span-12 md:col-span-1">
        <h3 className="mb-3 text-3xl font-medium leading-tight text-zinc-400">
          As a no code expert
        </h3>
        <ul className="flex flex-wrap gap-2 text-zinc-50 mb-3 mx-auto grid-flow-dense items-center">
          {noCodeTools.map((tool, index) => (
            <Link
              href={tool.url}
              target="_blank"
              prefetch={false}
              key={tool.name}
              draggable
              onDragStart={(e) => onDragStart(e, index, "noCodeTools")}
              onDrop={(e) => onDrop(e, index, "noCodeTools")}
              onDragOver={onDragOver}
              className={cn(
                `${tool.color}`,
                `flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3`
              )}
            >
              <tool.icon className="text-2xl" />
              <span className="text-xl">{tool.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </Block>
  );
};

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is creating efficient and scalable solutions.{" "}
      <span className="text-zinc-400">
        I primarily work with JavaScript,{" "}
        <Link href="https://airtable.com">Airtable</Link>, and tools like{" "}
        <Link href="https://make.com">Make</Link>. I’ve also developed
        comprehensive systems for companies in various sectors, streamlining
        their processes and enhancing productivity.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-2">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Turkiye</p>
  </Block>
);

const BottomBlock = () => (
  <>
    <Block className="col-span-12 md:col-span-5">
      <Link
        href="#"
        className="grid h-full place-content-center text-3xl text-zinc-50"
      >
        <SiMedium />
      </Link>
    </Block>

    <Block className="col-span-12 md:col-span-5">
      <Link
        href="/portfolio"
        className="flex h-full place-content-center items-center text-3xl text-zinc-50 gap-2"
      >
        <BiSolidFolder />
        <span className="text-lg ">My Portfolio</span>
      </Link>
    </Block>
  </>
);

/* const Logo = () => {
  return (
    <Link
      href="https://useefficiently.com"
      className="flex gap-2 mb-12 w-fit mx-auto items-center"
    >
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="UseEfficiently"
        className="rounded-lg"
      />
      <span className="text-3xl leading-snug">UseEfficiently</span>
    </Link>
  );
}; */

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <Link href="#" className="text-red-300 hover:underline">
          @tomisloading
        </Link>
      </p>
    </footer>
  );
};
