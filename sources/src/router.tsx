import { motion, useAnimation } from "framer-motion";
import { Suspense, lazy, useCallback, useEffect, useState } from "react";

import {
  PAGES,
  PAGE_INDEX_CAREER,
  PAGE_INDEX_CONTACT,
  PAGE_INDEX_HOME,
  PAGE_INDEX_PROJECT,
} from "./components/const";

const TopBar = lazy(() => import("./components/TopBar"));

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));

const TransitionRouter = () => {
  const [selected, setSelected] = useState<number>(PAGE_INDEX_HOME);

  const animation = useAnimation();
  const content = useAnimation();

  const initAnimation = useCallback(async () => {
    await animation.start({
      width: "100%",
      height: "100%",
      opacity: 1,
      borderRadius: "0px",
    });
    await animation.set({
      borderColor: "transparent",
    });
  }, [animation]);

  useEffect(() => {
    initAnimation();
  }, []);

  const onNextHome = useCallback(async () => {
    await Promise.all([
      animation.start({
        left: "-100%",
        width: "60%",
        height: "60%",
        borderColor: "white",
        borderRadius: "20px",
        transition: {
          duration: 1,
        },
      }),
      content.start({
        opacity: 0,
        transition: {
          duration: 1,
        },
      }),
    ]);
    setSelected(PAGE_INDEX_PROJECT);
    await animation.set({
      left: "150%",
      transition: {
        duration: 0,
      },
    });
    await Promise.all([
      content.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      }),
      animation.start({
        left: "50%",
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        transition: {
          duration: 1,
        },
      }),
    ]);
    await animation.set({
      borderColor: "transparent",
    });
  }, [animation, setSelected]);

  const onNext = useCallback(
    async (index: number) => {
      if (index == selected) {
        return;
      }

      await Promise.all([
        animation.start({
          width: "60%",
          height: "60%",
          borderColor: "white",
          borderRadius: "20px",
        }),
        content.start({
          opacity: 0,
        }),
      ]);

      if (typeof index === "number") {
        setSelected(index);
      } else {
        let sel = selected;
        sel++;
        if (sel >= Object.keys(PAGES).length) {
          sel = PAGE_INDEX_PROJECT;
        }
        setSelected(sel);
      }

      await content.start({
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      });
      await animation.start({
        width: "100%",
        height: "100%",
        borderRadius: "0px",
      });
      await animation.set({
        borderColor: "transparent",
      });
    },
    [animation, selected, setSelected]
  );

  return (
    <>
      <TopBar index={selected} onClick={onNext} />
      <motion.div
        initial={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          overflowX: "hidden",
          height: "60%",
          width: "60%",
          borderRadius: "20px",
          border: "1px solid",
          borderColor: "white",
          zIndex: 1,
        }}
        animate={animation}
        transition={{
          duration: 1,
        }}
      >
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={content}
          transition={{
            duration: 0.6,
          }}
        >
          <Suspense>
            {selected === PAGE_INDEX_HOME && <Home onNext={onNextHome} />}
            {selected === PAGE_INDEX_PROJECT && <Project />}
            {selected === PAGE_INDEX_CAREER && <Career />}
            {selected === PAGE_INDEX_CONTACT && <Contact />}
          </Suspense>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TransitionRouter;
