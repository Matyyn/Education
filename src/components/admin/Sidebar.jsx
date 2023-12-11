import React, { useEffect, useState } from "react";
import { SidebarRoutes } from "../../constants/AdminRoutes";
import { Link, useLocation } from "react-router-dom";
import Close from "../../assets/icons/Close.svg";

export default function Sidebar({ closeSidebar }) {
  const location = useLocation();

  const [currLocation, setCurrLocation] = useState("/admin");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [clickedSubRoute, setClickedSubRoute] = useState(false);

  const hasRoute = ({ route }) => {
    const a = route.link.replace("/admin", "");
    const b = currLocation.replace("/admin", "");

    return b.includes(a);
  };

  useEffect(() => {
    setCurrLocation(location.pathname);
    if (clickedSubRoute) {
      setIsSettingsOpen(true);
      setClickedSubRoute(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-[250px] min-h-screen py-10 bg-white">
      <div className="px-5 flex justify-between items-center">
        <p className="ml-10">LOGO here</p>
        <button onClick={closeSidebar}>
          <img src={Close} alt="Close" className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-14">
        {SidebarRoutes.map((route, index) => (
          <div key={index} className="relative">
            {route.name === "Settings" ? (
              <div
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="px-5"
              >
                <Link
                  to={route.link}
                  className={`flex gap-2 items-center p-2 rounded ${
                    hasRoute({ route: route }) ? "text-green" : ""
                  }`}
                >
                  {currLocation === route.link ? route.activeIcon : route.icon}
                  <p className="whitespace-nowrap text-sm text-slate-900 font-medium font-['Inter'] leading-[21px]">
                    {route.name}
                  </p>
                </Link>
                {isSettingsOpen && (
                  <div className="flex flex-col mt-2 pl-5">
                    {route.subRoutes.map((subRoute, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subRoute.link}
                        onClick={() => setClickedSubRoute(true)}
                        className={`flex gap-2 items-center p-2 rounded ${
                          hasRoute({ route: subRoute }) ? "text-green" : ""
                        }`}
                      >
                        {currLocation === subRoute.link
                          ? subRoute.activeIcon
                          : subRoute.icon}
                        <p className="whitespace-nowrap text-sm text-slate-900 font-medium font-['Inter'] leading-[21px]">
                          {subRoute.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="px-5">
                <Link
                  to={route.link}
                  className={`flex gap-2 items-center p-2 rounded ${
                    hasRoute({ route: route }) ? "text-green" : ""
                  }`}
                >
                  {currLocation === route.link ? route.activeIcon : route.icon}
                  <p className="whitespace-nowrap text-sm text-slate-900 font-medium font-['Inter'] leading-[21px]">
                    {route.name}
                  </p>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
