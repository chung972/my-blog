import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.scss"
// NOTE: just because you're IMPORTing a style sheet in a PARTICULAR component, 
// that DOES NOT mean that those styles are SCOPED to that component

// Also, BECAUSE these styles are GLOBALLY available (after compiling), even if we
// were to give classNames to a specific component, if another component used the same
// className, then we end up with styles from multiple files overriding each other;
// before css modules, you could have long, complex class names, but that solution is 
// not ideal; CSS MODULES make all of the CLASS SELECTORS in the module stylesheet
// LOCALLY SCOPED, which means that we'll have to MANUALLY import and use them

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Albert Chung
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    {/* remember, css classes are camel cased in js */}
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;