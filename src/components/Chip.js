const Chip = ({ text }) => {
    return (
        <div
            class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
            <span class="">{text}</span>
        </div>
    )
}

export default Chip