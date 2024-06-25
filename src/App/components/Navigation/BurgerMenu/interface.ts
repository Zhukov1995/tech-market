
export interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    open: boolean
    setIsOpen: (isOpen: boolean) => void
}