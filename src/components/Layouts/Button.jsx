const Button = (props) => {
    const {children, variant = "bg-gray-700" } = props;
    return (
            <button className={`w-full ${variant} hover:bg-gray-900 text-white font-bold mt-10 py-3 px-4 rounded-md`} type="submit">
                {children}
            </button>
    )
}

export default Button;