import React, { Suspense } from "react";
import Home from "./pages/Home/Home";
import Loader from "./pages/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import "./styles.css";

import { AnimateSharedLayout } from "framer-motion";

export default function App() {

  const HomePage = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Home/Home")), 1000);
    });
  });

  return (
      <AnimateSharedLayout type="crossfade">
      <Suspense maxDuration={3000} fallback={<Loader />}>
      <Navigation />
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
