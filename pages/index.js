import Head from "next/head";
import Header from "../layouts/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>مؤثر</title>
        <meta name='description' content='الصفحة التعريفية لشركة مؤثر ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </>
  );
}
