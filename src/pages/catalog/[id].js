import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllCategory, getDataCatalog } from '@/lib/shop';
import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';

export default function Catalog({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mt-5 pt-4 container">
      <Head>
        <title>{id} | Austria-next</title>
      </Head>
<<<<<<< HEAD
      <Link href="/wishlist">Wishlist</Link>
      <h1>category : {product.category}</h1>
      <div className='row'>
        {product.products.map((product) => (
          <Card
            key={product.id}
            thumb={product.img}
            title={product.name}
            price={product.price}
          />
        ))}
=======
      <Breadcrumb name={id} />
      <div className="row">
        {product
          ? product.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                thumb={product.img}
                title={product.name}
                price={product.price}
              />
            ))
          : null}
>>>>>>> f9a51c6... feat: add detail catalog page & change shop.json
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllCategory();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getDataCatalog(params.id);
  return {
    props: {
      product,
    },
  };
}
