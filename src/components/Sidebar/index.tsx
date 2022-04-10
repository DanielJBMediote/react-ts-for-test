import { useBeforeMount } from "hooks/useMountEffect";
import React from "react";

enum ESidebarState {
  WIDE = "w-64",
  FIT = "w-20",
}

enum EDropDownState {
  OPEN = "h-full",
  CLOSE = "h-0",
}

const Sidebar: React.FunctionComponent = () => {
  const [sidebarState, setSidebarState] = React.useState<ESidebarState>();

  useBeforeMount(() => {
    if (localStorage.getItem("state")) {
      let localSidebarState = localStorage.getItem("state");
      if (localSidebarState == ESidebarState.WIDE) {
        setSidebarState(ESidebarState.WIDE);
        return;
      } else if (localSidebarState == ESidebarState.FIT) {
        setSidebarState(ESidebarState.FIT);
        return;
      }
    } else setSidebarState(ESidebarState.WIDE);
  });

  return <div className=""></div>;
};

export default Sidebar;
