import NavBar from "@/components/Navigation/NavBar";
import Head from "next/head";
import { MobileContextProvider } from "../context/MobileContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Robbie Christmas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MobileContextProvider>
        <NavBar />
      </MobileContextProvider>
    </>
  );
}