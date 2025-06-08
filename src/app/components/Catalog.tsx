
'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogType, CatalogCardType } from "../types/catalog-card-type"; 

interface CatalogProps {
  catalog: CatalogType;
}

const CatalogCard: React.FC<{
  card: CatalogCardType;
  onClick?: (card: CatalogCardType) => void;
}> = ({ card, onClick }) => {
  return (
    <div
      className={`border rounded-xl shadow-md p-4 flex flex-col transition duration-200 hover:shadow-lg ${
        !card.available ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={() => card.available && onClick?.(card)}
    >
      {card.imageUrl && (
        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
          <Image
            src={card.imageUrl}
            alt={card.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-1">{card.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{card.description}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-base font-bold">{card.price},- CZK </span>
        {card.available && card.buyUrl ? (
          <Link
            href={card.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Koupit
          </Link>
        ) : (
          <span className="text-red-500 text-sm">Nedostupné</span>
        )}
      </div>
    </div>
  );
};

const Catalog: React.FC<CatalogProps> = ({ catalog }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{catalog.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catalog.cards.map((card, index) => (
          <CatalogCard key={index} card={card} onClick={catalog.onClickCard} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
