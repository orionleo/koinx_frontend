import Logo from "./svg/Logo"
import Link from "next/link"
import { Button } from "./ui/button"
import HamburgerMenu from "./svg/HamburgerMenu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu"

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Logo />
                </div>
                <div className="flex items-center space-x-4 sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <HamburgerMenu />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right">
                            <DropdownMenuItem>
                                <Link className="text-black text-sm" href="#">
                                    Crypto Taxes
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link className="text-black text-sm" href="#">
                                    Free Tools
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link className="text-black text-sm" href="#">
                                    Resource Center
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Button className="bg-blue-600 text-white py-2 px-4 rounded">Get Started</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                    <Link className="text-black text-sm" href="#">
                        Crypto Taxes
                    </Link>
                    <Link className="text-black text-sm" href="#">
                        Free Tools
                    </Link>
                    <Link className="text-black text-sm" href="#">
                        Resource Center
                    </Link>
                    <Button className="text-[16px] font-semibold bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white py-2 px-4 rounded-[8px]">Get Started</Button>
                </div>
            </div>
        </div>
    )
}
export default Navbar