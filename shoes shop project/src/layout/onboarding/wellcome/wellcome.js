import { El } from "../../../script/createElement";

const backgroundImage = El({
    element: "div",
    className: " absolute inset-0 bg-cover bg-center",
    // restAttrs: { style: "background-image: url('../wallpaper.png');" }
  });
  
  const overlay = El({
    element: "div",
    className: "absolute inset-0 bg-black opacity-60",
  });
  
  const welcomeText = El({
    element: "h1",
    children: ["Welcome to 👋"],
    className: "text-lg font-semibold text-white"
  });
  
  const appName = El({
    element: "h2",
    children: ["Shoea"],
    className: "text-3xl font-bold text-white mt-2"
  });
  
  const description = El({
    element: "p",
    children: [
      "The best sneakers & shoes e-commerce app of the century for your fashion needs!"
    ],
    className: "text-xs text-white mt-3 text-center"
  });
  
  const textContainer = El({
    element: "div",
    children: [welcomeText, appName, description],
    className: "relative z-10 flex flex-col items-center text-center",
  });

   export const containerWellcome = El({
    element: "div",
    children: [backgroundImage, overlay, textContainer],
    className: "relative flex items-center justify-center h-screen",
  });
  
  