
export const BtnDegradedOrange = ({
    children,
    onClick,
    style,
    disabled = false,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    style?: string;
    disabled?: boolean;
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${style + ' !'} text-white text-base font-medium py-2.5 px-5 rounded-3xl focus:outline-none bg-gradient-to-r from-[#FF8A4C] to-[#F05252] hover:cursor-pointer`}
        >
            {children}
        </button>
    );
}