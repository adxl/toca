import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const UserSession: React.FC<Props> = ({ children }) => {
  const nameTabs = "toca_tabs_open";
  const timerRef = useRef<NodeJS.Timer | null>(null);

  function getTabsOpen(): number {
    return Number(localStorage.getItem(nameTabs));
  }

  function setTabsOpen(num: number): number {
    localStorage.setItem(nameTabs, String(num));
    return getTabsOpen();
  }

  function setTimerNoInteraction(): void {
    timerRef.current = setTimeout(() => {
      console.log("No interaction, session ended");
      localStorage.setItem("toca_ended_at", String(Date.now()));
    }, 10000);
  }

  function clearTimerNoInteraction(): void {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  useEffect(() => {
    const tabsOpen = getTabsOpen();

    // manage tabs open
    if (tabsOpen < 1) setTabsOpen(1);
    else setTabsOpen(tabsOpen + 1);

    // add start session
    if (localStorage.getItem("toca_start_at") === null) localStorage.setItem("toca_start_at", String(Date.now()));

    // manage reload and close tab
    window.addEventListener("beforeunload", function (e) {
      let countTabsOpen = getTabsOpen();
      setTabsOpen(countTabsOpen - 1);
      countTabsOpen = getTabsOpen();
      console.log("trigger beforeunload");

      if (countTabsOpen < 1 || countTabsOpen === null) {
        localStorage.setItem("toca_ended_at", String(Date.now()));
        e.returnValue = "Are you sure?";
      }
    });

    // manage active tab
    document.onvisibilitychange = () => {
      if (document.visibilityState === "hidden") clearTimerNoInteraction();
      if (document.visibilityState === "visible") setTimerNoInteraction();
    };

    // manage no interaction
    setTimerNoInteraction();
  }, []);

  const handleInteraction = () => {
    clearTimerNoInteraction();
    setTimerNoInteraction();
  };

  return (
    <div onMouseMove={handleInteraction} onClick={handleInteraction} onScroll={handleInteraction}>
      {children}
    </div>
  );
};

export default UserSession;
