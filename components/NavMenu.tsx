import Link from "next/link";
import { SignInButton } from "./Buttons";

const NavMenu = () => {
    return(
        <nav>
            <Link href={'/'}>Home</Link>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;