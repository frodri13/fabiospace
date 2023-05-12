import Link from "next/link";

const NavMenu = () => {
    return(
        <nav>
            <Link href={'/'}>Home</Link>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;