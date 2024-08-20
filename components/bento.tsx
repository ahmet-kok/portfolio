"use client";

import { MotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { useRef } from "react";
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
import Image from "next/image";
export const Bento = () => {
  return (
    <div className="min-h-screen bg-zinc-900  text-zinc-50">
      <div className="flex items-center min-h-screen px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          <ToolsBlock
            initialWebDevTools={ToolList.filter((tool) =>
              tool.type.includes("web-dev")
            )}
            initialNoCodeTools={ToolList.filter((tool) =>
              tool.type.includes("no-code")
            )}
          />
          <LocationBlock />
          <EmailListBlock />
          <YouTubeBlock />
        </motion.div>
      </div>
    </div>
  );
};
type ToolType = "web-dev" | "no-code";

interface Tool {
  name: string;
  url: string;
  color: string;
  icon: React.ElementType;
  type: ToolType[];
}

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
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
      }}
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
    <Image
      src="https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=LeoK"
      alt="avatar"
      width={200}
      height={200}
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I&apos;m Leo.{" "}
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

/* const PortfolioBlock = () => (
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
 */

type DragEndParams = {
  event: MouseEvent | TouchEvent | PointerEvent;
  info: { point: { x: number; y: number } };
  index: number;
  type: ToolType;
};

const ToolsBlock = ({
  initialWebDevTools,
  initialNoCodeTools,
}: {
  initialWebDevTools: typeof ToolList;
  initialNoCodeTools: typeof ToolList;
}) => {
  const [webDevTools, setWebDevTools] = useState(initialWebDevTools);
  const [noCodeTools, setNoCodeTools] = useState(initialNoCodeTools);
  const webDevContainer = useRef(null);
  const noCodeContainer = useRef(null);
  let previousHighlightedElement = null;

  const onDragOver = (e, idx, type) => {
    e.preventDefault(); // Allow dropping
  
    const element = document.getElementById(`${type}-${idx}`);
    if (element && previousHighlightedElement !== element) {
      // Remove highlight from the previous element
      if (previousHighlightedElement) {
        previousHighlightedElement.classList.remove("bg-zinc-600", "scale-105", "z-10");
      }
      
      // Highlight the current element
      element.classList.add("bg-zinc-600", "scale-105", "z-10");
      previousHighlightedElement = element;
    }
  };
  
  const onDragLeave = () => {
    // Remove the highlight when the drag leaves the element
    if (previousHighlightedElement) {
      previousHighlightedElement.classList.remove("bg-zinc-600", "scale-105", "z-10");
      previousHighlightedElement = null;
    }
  };
  
  const onDrop = (e, idx, type) => {
    e.preventDefault();
    // Remove highlight on drop
    if (previousHighlightedElement) {
      previousHighlightedElement.classList.remove("bg-zinc-600", "scale-105", "z-10");
      previousHighlightedElement = null;
    }
    // Your drop logic here
  };
  const onDragEnd = ({ event, info, index, type }: DragEndParams) => {
    let updatedList: Tool[];
    let setListFunction: React.Dispatch<React.SetStateAction<Tool[]>>;

    if (type === "web-dev") {
      updatedList = [...webDevTools];
      setListFunction = setWebDevTools;
    } else {
      updatedList = [...noCodeTools];
      setListFunction = setNoCodeTools;
    }

    // Remove the dragged item from its original position
    const [draggedItem] = updatedList.splice(index, 1);

    // Find the closest item to where the item was dropped and get its index
    let closestIndex = 0;
    let closestDistance = Infinity;

    updatedList.forEach((item, idx) => {
      const element = document.getElementById(`${type}-${idx}`);
      if (element) {
        const rect = element.getBoundingClientRect();
    
        // Calculate the center of the current element
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
    
        // Calculate the Manhattan distance from the drag point to the center of the element
        const distance = Math.abs(info.point.x - elementCenterX) + Math.abs(info.point.y - elementCenterY);
    
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      }
    });
    // Insert the dragged item at the closest position
    updatedList.splice(closestIndex, 0, draggedItem);

    // Update the state with the new list order
    setListFunction(updatedList);
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
        <ul
          className="flex flex-wrap gap-2 text-zinc-50 mb-3 mx-auto items-center"
          ref={webDevContainer}
        >
          {webDevTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              id={`web-dev-${index}`} // Give each item a unique id
              drag
              /* dragElastic={0.2} */

              dragConstraints={webDevContainer}
              dragMomentum={false}
              dragElastic={0}
              dragSnapToOrigin={true}
              onDragEnd={(event, info) =>
                onDragEnd({ event, info, index, type: "web-dev" })
              }
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="flex gap-1 items-center bg-zinc-700 p-2 rounded-full px-3 cursor-pointer"
            >
              <tool.icon className="text-2xl" />
              <span className="text-xl">{tool.name}</span>
            </motion.div>
          ))}
        </ul>
        {webDevTools.map((tool, index) => (
          <li>{`web-dev-${tool.name}`}</li>
        ))}
      </div>
      {/* <div className="col-span-12 md:col-span-1">
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
      </div> */}
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
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Turkiye</p>
  </Block>
);

/* const BottomBlock = () => (
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
 */

const EmailListBlock = () => (
  <>
    {" "}
    <Block className="col-span-12 md:col-span-4 grid place-content-between">
      <p className="mb-3 text-lg">Join my mailing list</p>
      <Link
        href="https://medium.com/subscribe/@ahmetkok"
        className="flex items-center w-fit gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <SiMedium /> Join the list
      </Link>
    </Block>
    <Block className="col-span-12 md:col-span-5 grid place-content-between">
      <p className="mb-3 text-lg">Watch my latest videos</p>
      <Link
        href="https://youtube.com/@ahmetkok?sub_confirmation=1"
        className="flex items-center w-fit gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <SiYoutube />
        Watch on YouTube
      </Link>
    </Block>
  </>
);
const YouTubeBlock = () => <></>;
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
