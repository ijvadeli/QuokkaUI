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
      <div className="bg-amber-400 p-2 flex items-center">
        <img src="favicon.svg" className="h-25"/>
        <Typography type="h1">
          QuokkaUI is still W.I.P<br/>No proper website just showcase.
        </Typography>
      </div>
      <Buttons />
      <hr className="my-10 border-0 border-b-2"/>
      <TypographyShowcase/>
    </Layout>
  </StrictMode>,
);
