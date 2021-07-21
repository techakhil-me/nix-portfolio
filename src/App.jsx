import React, { useState,Suspense } from "react";
import Home from "./pages/Home/Home";
import Loader from "./pages/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import "./styles.css";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function App() {
  const [isLoading, setLoading] = useState(true);

  const HomePage = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Home/Home")), 1000);
    });
  });

  return (
      <AnimateSharedLayout type="crossfade">
      <Suspense maxDuration={3000} fallback={<Loader setLoading={setLoading} />}>
      <Navigation />
            <img
            onClick={()=>setLoading(true)}
              className="person"
              src={require("./assets/person.png")}
              alt="person"
              draggable="false"
            />
            <HomePage />
      </Suspense>
{/* 
        {isLoading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
            <Navigation />
            <img
            onClick={()=>setLoading(true)}
              className="person"
              src={require("./assets/person.png")}
              alt="person"
              draggable="false"
            />
            <Home />
          </>
        )} */}
      </AnimateSharedLayout>
  );
}
