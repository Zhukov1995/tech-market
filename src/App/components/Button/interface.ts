
export interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode
    size?: 's' | 'm'
    width?: boolean
    color?: 'primary' | 'cancel'
    type?: 'button' | 'submit' | 'reset'
}