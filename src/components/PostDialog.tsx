import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/dataSlice'

export default function PostDialog({open, setOpen}) {

    let dispatch = useDispatch()

    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            id: Date.now(),
            name: e.target.name.value,
            status: e.target.status == true,
            image: e.target.image.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
        }
        dispatch(addUser(newUser))
        setOpen(!open)
        e.target.reset()
    }


  return (
    <dialog open={open}>
        <form onSubmit={(e)=> addNewUser(e)}>
            <input name="name" placeholder='Name...' required/>
            <input name="image" placeholder='Url...' required/>
            <input name="phone" placeholder='Phone...' required/>
            <input name="email" placeholder='Email...' required/>
            <select name="status">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
                <button type='submit'>Add</button>
                <button type='button' onClick={()=> setOpen(!open)}>Close</button>
        </form>
    </dialog>
  )
}
