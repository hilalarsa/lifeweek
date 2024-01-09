import React, { memo, useState } from "react";
import Popup from './Popup'

const Box = memo((props) => {
    const { idKey, dateRange } = props

    const [selected, setSelected] = useState('');
    const [isModalShow, setModalShow] = useState(false);

    const onSelected = (value) => {
        if (value === selected) {
            setSelected('')
            setModalShow(false)
        } else {
            setSelected(value)
            setModalShow(true)
        }
    };

    const handleModalClose = () => {
        console.log("Closing modal")
        setSelected('')
        setModalShow(false)
    }
    // Only re-render when selected change
    // const memoSelected = useMemo(() => onSelected(selected), [selected]);

    return (
        <div className="transition duration-150 text-primary focus:text-primary-600"
            data-te-toggle="tooltip"
            data-modal-target="crud-modal" data-modal-toggle="crud-modal"
            title={dateRange}>
            <div
                onClick={() => onSelected(idKey)}
                className={`w-4 h-4 m-[2px] min-w-[30px] min-h-[30px] bg-gray-300 hover:bg-gray-400 inset-x-0 border rounded-md cursor-pointer select-none ${selected === idKey
                    && "border border-gray-700"
                    }`}
            ></div>

            <Popup isOpen={isModalShow} handleClose={handleModalClose} dateRange={dateRange}></Popup>

        </div>
    );
});

export default Box;