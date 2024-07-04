import { Balance } from "./balance"
import { About } from "./about"

import "./header.css"

export function Header() {

    return (
        <header>
            <Balance></Balance>
            <About></About>
        </header>
    )
}