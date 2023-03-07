import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContext";


export default function Portal(){
    const [showModal, setShowModal] = useState(false)
    const handleClick = ()=>{
        setShowModal(true)
    }
    const handleClose = ()=>{
        setShowModal(false)
    }
    return(
        <>
        <button onClick={handleClick}>show me your portal</button>
        {showModal && createPortal(
        <ModalContent onClose={handleClose}/>,document.getElementById('app--modal'),
        )}
        </>
    )
}
