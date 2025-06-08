import { CatalogCardType,CatalogType } from "../types/catalog-card-type";
export const floorballSticks: CatalogCardType[] = [
  {
    name: "OXDOG Fusion Light 27",
    description: "Lehká hokejka s vynikající ovladatelností pro technické hráče. Nejlepší cena/výkon.",
    imageUrl: "/images/oxdog-fusion-light.jpg",
    price: 1699,
    buyUrl: "https://example.com/products/oxdog-fusion",
    available: true,
  },
  {
    name: "OXDOG Ultralight HES 29",
    description: "Profesionální model s technologiemi HES a ultralehkým shaftem.",
    imageUrl: "/images/oxdog-ultralight.jpg",
    price: 3299,
    buyUrl: "https://example.com/products/oxdog-ultralight",
    available: true,
  },
  {
    name: "Fat Pipe K.O. 27 Jab",
    description: "Odolná a silná hokejka s výborným přenosem síly do střely.",
    imageUrl: "/images/fatpipe-ko.jpg",
    price: 2199,
    buyUrl: "https://example.com/products/fatpipe-ko",
    available: true,
  },
  {
    name: "Fat Pipe G-Series Raw Concept",
    description: "Top model od Fat Pipe s minimální hmotností a maximální kontrolou.",
    imageUrl: "/images/fatpipe-gseries.jpg",
    price: 3490,
    buyUrl: "https://example.com/products/fatpipe-gseries",
    available: false,
  },
  {
    name:"Fat Pipe CTRL Slicks Shrimp Pink čepel PP",
    description:"Lehká a odolná čepel pro precizní střely a přihrávky. Mírně předzahnutá se skluznou podložkou pro lepší kontrolu míčku.",
    imageUrl:"/images/fatpipe-slicks.jpg",
    price: 799,
    buyUrl: "https://example.com/products/fatpipe-ctrl-slicks",
    available: true,
  },
  {
    name: "OXDOG Highlight MBC '26",
    description: "Inovativní čepel s MBC technologií pro maximální kontrolu a přesnost střel.Nejlehčí čepel na světě s 62 gramy.",
    imageUrl: "/images/oxdog-highlight-mbc.jpg",
    price: 899,
    buyUrl: "https://example.com/products/oxdog-highlight-mbc",
    available: true,
  },
];
export const floorballCatalog: CatalogType = {
  title: "Florbalové příslušenství značek OXDOG a Fat Pipe",
  cards: floorballSticks,
};

export function getProductBySlug(slug: string): CatalogCardType | undefined {
  return floorballSticks.find((card) =>
    card.buyUrl?.endsWith(slug)
  );
}