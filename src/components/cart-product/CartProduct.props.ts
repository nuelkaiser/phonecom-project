export default interface CartProductProps
    extends React.HtmlHTMLAttributes<HTMLElement> {
    productImg: any;
    productBrand: string;
    productName: string;
    favorite: boolean;
    bin: boolean;
}