export default function ModalContent({onClose}){
    return(
        <div className="modal">
            <div className="modal--title">
                task form
            </div>
            <button onClick={onClose}>close me</button>
        </div>
    )
}