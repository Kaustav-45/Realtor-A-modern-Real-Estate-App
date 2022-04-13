import { Box } from "@chakra-ui/react";
import { Title } from "@material-ui/icons";
import Head from "next/head";
import Header from "./NavBar";
import Footer from "./Footer"
const Layout=({children})=>(
<>
<Head>

    Real Estate

</Head>
<Box maxWidth='1280px'm='auto'>
<header>
   <Header/>
</header>
<main>
    {children}
</main>
<footer>
    <Footer/>
</footer>
</Box>
</>
)

export default Layout