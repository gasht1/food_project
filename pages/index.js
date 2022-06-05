import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../component/featured";
import PizzaList from "../component/PizzaList";

export default function Home({ pizzaList }) {
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
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
