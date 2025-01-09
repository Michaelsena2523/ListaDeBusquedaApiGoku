import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppGoku from "./AppGoku";
import "./styele.css";

createRoot(document.getElementById("root"))
.render(
<StrictMode>
   <AppGoku/>
</StrictMode>);
