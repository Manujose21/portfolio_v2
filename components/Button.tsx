
interface Props {
    children: React.ReactNode,
    className?: string,
    icon?: JSX.Element
}

export const Button = ({ children, className, icon }: Props) => {
    return (
        <button 
            className={`p-2 border-2 border-zinc-900 rounded-full bg-background-tertiary hover:bg-background-secondary transition duration-150 flex items-center gap-2 ${className}`}
        >   
            {
                icon && (icon)
            }
            {children}
        </button>
    )
}