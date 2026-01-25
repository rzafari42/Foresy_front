
const Selector = ({ options, onSelect, selected } : { options: { label: string; value: string }[], onSelect: (value: string) => void, selected: string }) => {
    return (
        <div className="flex items-center gap-2 text-gray-500">
            Voir :
            <div className="flex gap-2">
            {
                options.map((option, index) => (
                    <button key={index} className={`font-medium px-2.5 py-0.5 rounded-md hover:cursor-pointer ${selected === option.value ? "text-blue-800 bg-blue-100" : "text-gray-900 bg-gray-100 hover:bg-blue-100 hover:text-blue-800"}`} onClick={() => onSelect(option.value)}>
                        {option.label}
                    </button>
                ))
            }
            </div>
        </div>
    )
}

export default Selector;