import React, { useEffect, useState } from "react";
import { SidebarRoutes } from "../../constants/TeacherRoutes";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const [currLocation, setcurrLocation] = useState("/teacher");

  const hasRoute = ({ route }) => {
    const a = route.link.replace("/teacher", "");
    const b = currLocation.replace("/teacher", "");

    return b.includes(a);
  };

  useEffect(() => {
    setcurrLocation(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-[300px] min-h-screen py-10 bg-white">
      <div className="text-center px-5">
        <p>LOGO here</p>
      </div>
      <div className="flex flex-col gap-5 mt-14">
        {SidebarRoutes.map((route, index) => (
          <div className="relative" key={index}>
            {hasRoute({ route: route }) && (
              <div className="absolute left-[-3px] top-3 w-2 bg-green h-5 rounded-xl" />
            )}
            <div className="px-5">
              <Link
                to={route.link}
                className={`flex gap-2 items-center p-2 rounded ${
                  hasRoute({ route: route }) ? "text-green" : ""
                }`}
              >
                {currLocation == route.link ? route.activeIcon : route.icon}
                <p className="whitespace-nowrap text-sm text-slate-900 font-medium font-['Inter'] leading-[21px]">
                  {route.name}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
