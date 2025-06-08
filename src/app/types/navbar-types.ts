export interface NavbarLink {
    title:string;
    url:string;
}
export interface NavBarType{
    title:string;
    routes:Array<NavbarLink>;
    img?:string;
    onClickHeader?:(title:string) => void;
}