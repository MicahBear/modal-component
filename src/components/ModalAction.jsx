import { useState } from "react";
import Modal from "react-modal";
import { Button, CloseButton } from "../styles/FirstForm";
import SeedingForm from "./ModalSeed";


export default function ModalAction(){
  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {zIndex: 1000}
  };

    //!states
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedModal, setSelectedModal] = useState('')
    // const handleClick = ()=>{
    //     openModal()
    // }
    const openForm = ()=>{
        setSelectedModal('SeedingForm')
        openModal()
    }

    const openModal = ()=>{
        setModalOpen(true)
    }
    const closeModal = ()=>{
        setModalOpen(false)
    }
    return(
        <>
        <Button onClick={openForm}>Click to show Modal</Button>
       {modalOpen &&(<Modal
       isOpen={true}
       onRequestClose={closeModal}
       ariaHideApp={false}
       style={customModalStyles}
       >
        <CloseButton onClick={closeModal}>X</CloseButton>
        {selectedModal === 'SeedingForm'?
        <SeedingForm closeModal={closeModal}/>:null
        }
       </Modal>
       )}
        </>
    )
}
