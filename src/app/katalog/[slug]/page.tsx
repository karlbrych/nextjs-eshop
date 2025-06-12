// /app/catalog/[slug]/page.tsx

import { floorballCatalog } from "../../utils/catalog-utils";
import {slugify} from "../../utils/slugify";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = floorballCatalog.cards.find(
    (item) => slugify(item.name) === params.slug
  );

  if (!product) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>9

      {product.imageUrl && (
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={400}
          className="rounded mb-6"
        />
      )}

      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">
        Cena: {product.price.toLocaleString("cs-CZ")} Kč
      </p>
      <p className={`mb-6 ${product.available ? "text-green-600" : "text-red-600"}`}>
        {product.available ? "Skladem" : "Momentálně nedostupné"}
      </p>

      {product.buyUrl && product.available && (
        <Link
          href={product.buyUrl}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Koupit
        </Link>
      )}

      <div className="mt-8">
        <Link href="/catalog" className="text-blue-500 hover:underline">
          ← Zpět do katalogu
        </Link>
      </div>
    </main>
  );
}
