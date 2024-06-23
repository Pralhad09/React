import React from "react"
import { Menu } from "../Menu/Menu"
export const SiteHeader = () => {
    return (<>
        <header id="header"><div class="inner">
            <a href="index.html" class="logo">introspect</a>
            <Menu />
            </div>
        </header><a href="#Menu" class="navPanelToggle"><span class="fa fa-bars"></span></a>
    </>)
}