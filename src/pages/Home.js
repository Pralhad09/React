import React from "react";
import { SiteHeader } from "../component/SiteHeader";
import { SiteBanner } from "../component/SiteBanner";
import { ServiceRow } from "../component/ServiceRow";
import { ProductRow } from "../component/ProductRow";
import { GetTouch } from "../component/GetTouch";
import { SiteFooter } from "../component/SiteFooter";

export const Home = ()=>{
    return <>
    <SiteHeader />
    <SiteBanner />
    <ServiceRow />
    <ProductRow />
    <GetTouch />
    <SiteFooter />
</>
}