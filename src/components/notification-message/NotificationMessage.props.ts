export default interface NotificationMessageProps
    extends React.HtmlHTMLAttributes<HTMLElement> {
    title: string;
    message: string;
    date: string;
    time: string;
    image?: any;
}