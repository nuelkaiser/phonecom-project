export default interface ProductCardProps
    extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    productimage: any;
    productname: string;
    productprice: string;
}