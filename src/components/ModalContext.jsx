import { useForm } from "react-hook-form"

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  borderRadius: '5%',
  padding: '50px',
  zIndex: 1000
}
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function ModalContent({onClose}){
    const {register, handleSubmit, reset} = useForm()
    const onSubmit = (data) =>{
      console.log(data)
        reset()
      onClose()
    }
    return(
        <div style={OVERLAY_STYLES} className="modal">
        <div  style ={MODAL_STYLES} className="modal-container">
            <div className="modal--form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="title" id="task--title" {...register('title')}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
        </div>
    )
}