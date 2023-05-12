import Link from "next/link";
import SignOutButton, { SignInButton } from "./Buttons";
import AuthCheck from "./AuthCheck";

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
                <li>
                    <AuthCheck>
                        <SignOutButton />
                    </AuthCheck>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;