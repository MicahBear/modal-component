import { useForm } from "react-hook-form"
import { FormItem, FormWrap } from "../styles/FirstForm"

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   borderRadius: '5%',
//   padding: '50px',
//   zIndex: 1000
// }
// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7)',
//   zIndex: 1000
// }
export default function SeedingForm({closeModal}){
    const {register, handleSubmit, reset} = useForm()
    const onSubmit = (data) =>{
      console.log(data)
        reset()
      closeModal()
    }
    // style ={MODAL_STYLES}
    // style={OVERLAY_STYLES}
    return(
            <FormWrap>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormItem>
                    <input type="text" placeholder="title of task" name="title" id="task--title" {...register('title')}/>
                    </FormItem>
                    <FormItem>
                    <label htmlFor="seed-amount" >Amount of seeds</label>
                    <input id="seed-amount" type="number" placeholder="number of seeds" name="seed amount" {...register('seed amount')}/>
                    <input type="submit" value="submit"/>
                    </FormItem>
                </form>
                </FormWrap>
    )
}