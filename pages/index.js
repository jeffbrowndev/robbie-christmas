import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Robbie Christmas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
    </>
  );
}