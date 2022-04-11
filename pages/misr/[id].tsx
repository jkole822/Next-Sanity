// React
import { useEffect, useState } from "react";

// Packages
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import { Product } from "../../components/Product";

// Lib
import { client, allProducts, product } from "../../lib/sanity";

// Types
import { GetStaticProps, GetStaticPaths } from "next";

interface Data {
  _id: string;
  title: string;
  text: string[];
  imageUrls: string[];
}

interface Path {
  params: {
    id: string;
  };
}

const MISRDetailPage = ({ data }: { data: Data }) => {
  const {
    isFallback,
    query: { id },
  } = useRouter();

  const [clientData, setClientData] = useState<Data>();

  useEffect(() => {
    console.log(isFallback);

    if (isFallback) {
      client.fetch(product, { id: id }).then(data => {
        setClientData(data);
      });
    }
  }, [isFallback]);

  if (!data || !clientData) {
    return <main className="loading-text">Loading...</main>;
  }

  return (
    <main>
      <Link href="/misr">
        <a>Return to Products</a>
      </Link>
      <Product item={isFallback || !data ? clientData : data} />
    </main>
  );
};

export default MISRDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataArr = await client.fetch(product, { id: params?.id });
  const data = dataArr[0];

  return {
    props: { data },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.fetch(allProducts);

  const allPaths: Path[] = data.map((item: Data) => ({
    params: { id: item._id },
  }));

  const paths = allPaths.slice(0, 100);

  return { paths, fallback: true };
};
