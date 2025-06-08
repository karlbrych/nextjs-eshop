export interface CatalogCardType {
    name:string;
    description:string;
    imageUrl?:string;
    price:number;
    buyUrl?:string;
    available:boolean;
}
export interface CatalogType {
    title:string;
    cards:Array<CatalogCardType>;
    onClickCard?:(card:CatalogCardType) => void;
}