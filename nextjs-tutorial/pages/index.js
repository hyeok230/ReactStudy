import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import ItemList from "../src/component/ItemList";
import { Header, Divider, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoding] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     // console.log(res.data);
  //     setList(res.data);
  //     setIsLoding(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>HOME | JUNO</title>
        <meta name="description" content="홈입니다"></meta>
      </Head>
      {/* {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )} */}
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
