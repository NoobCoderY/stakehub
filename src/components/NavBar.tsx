'use client';

import React, { useState } from "react";
import {  Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(" mt-[2rem] inset-x-0 max-w-2xl mx-auto md:w-[40%]", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Quotes">

                    </MenuItem>
                </Link>

                <Link href={"/proverbs"}>
                    <MenuItem setActive={setActive} active={active} item="Proverbs">

                    </MenuItem>

                </Link>
                <Link href={"/dialogues"}>
                    <MenuItem setActive={setActive} active={active} item="Dailogues">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar