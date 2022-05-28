import Head from "next/head";
import Image from "next/image";
import Featured from "../component/featured";
import PizzaList from "../component/PizzaList";




export default function Home() {
  return (
    <div>
      
      <Head>
        <title>ethio_ pizza resturant</title>
        <meta
          name="description"
          content="best piza shop resturant in ethiopia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
      
    </div>
  );
}
