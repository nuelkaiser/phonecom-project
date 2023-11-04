export default interface NavProps
    extends React.HtmlHTMLAttributes<HTMLElement> {
    notify:boolean;
    cart: boolean;
    handleNotify: any;
    handleCart: any
}