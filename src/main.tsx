import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout";
import Buttons from "./components/buttons";
import { Typography } from "./components/ui/Typography";
import TypographyShowcase from "./components/typography";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <div className="bg-amber-400 p-2 flex items-center justify-center fixed top-0 w-full z-50">
        <img src="favicon.svg" className="h-8 w-8 mr-2" alt="Quokka Logo"/>
        <Typography type="p" className="font-monospace font-bold">
          QuokkaUI is still W.I.P - No proper website, just showcase.
        </Typography>
      </div>
      <Buttons />
      <hr className="my-10 border-0 border-b-2"/>
      <TypographyShowcase/>
    </Layout>
  </StrictMode>,
);
