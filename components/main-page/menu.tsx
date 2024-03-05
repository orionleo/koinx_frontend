"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useState } from "react";
import { Separator } from "../ui/separator";


const Menu = () => {
    const menuItems = [
        "Overview",
        "Fundamentals",
        "News Insights",
        "Sentiments",
        "Team",
        "Technicals",
        "Tokenomics",
    ];

    const [active, setActive] = useState("Overview");

    const handleClick = (item: string) => {
        setActive(item);
    }
    return (
        <div className="w-full flex flex-col justify-start overflow-scroll">
            <NavigationMenu className="w-full justify-start">
                <NavigationMenuList className="w-full justify-start ">
                    {menuItems.map((item) => (
                        <NavigationMenuItem
                            key={item}
                            className={`font-medium cursor-pointer text-[16px] py-5 text-[#3E424A] ${active === item ? "border-b-2 border-blue-500" : ""
                                }`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Separator className=" -translate-y-3 md:-translate-y-0"/>
        </div>
    )
}

export default Menu