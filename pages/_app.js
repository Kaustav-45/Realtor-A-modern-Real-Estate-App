
import Head from "next/head"
import { ChakraProvider } from '@chakra-ui/react'
import Nprogress from "nprogress"

import Layout from "../components/Layout"



function MyApp({ Component, pageProps }) {
return (
  <>
  <ChakraProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ChakraProvider>

  </>
)
}

export default MyApp
