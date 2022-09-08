import type { NextPage } from "next";
import Layout from "../components/Layouts/Layout";
import { useCtx } from "../Contexts/GContext";

const Home: NextPage = () => {
  const { open } = useCtx();
  return (
    <Layout>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        delectus sit ipsam nostrum quis dolores tempore cumque non, accusamus,
        inventore veritatis soluta aliquam, est deserunt voluptatum sint maxime?
        Tempore officia pariatur voluptatem possimus repellendus facere
        excepturi laboriosam illo laborum voluptates dolores itaque architecto
        ipsam molestiae cumque labore eveniet, dolor in accusamus maxime
        consequatur non, neque blanditiis. Itaque mollitia, at quos obcaecati
        vel recusandae soluta et aperiam nisi accusantium labore optio rem
        praesentium fugiat. Perspiciatis, fuga totam minima error inventore odit
        quibusdam suscipit impedit consequatur velit in incidunt tenetur ipsa
        est excepturi unde commodi. Velit ducimus repellendus maxime beatae
        aperiam sapiente?
      </p>
    </Layout>
  );
};

export default Home;
