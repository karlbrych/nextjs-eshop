import Navbar from "../components/Navbar";
import { routes } from "../utils/navbar-util";
import Catalog from "../components/Catalog";
import { CatalogType } from "../types/catalog-card-type";
import { floorballCatalog } from "../utils/catalog-utils";
export default function CatalogPage(){
    return(<>
        <Navbar title="FlorbalShop.cz" routes={routes} />
        <Catalog catalog ={floorballCatalog}/>
       </>
    )
}