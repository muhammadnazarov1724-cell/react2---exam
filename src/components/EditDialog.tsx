import React from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../store/dataSlice'

export default function EditDialog({open, setOpen, user}) {

    let dispatch = useDispatch()

    const edUser = (e) => {
        e.preventDefault()
        const update = {
            id: Date.now(),
            name: e.target.name.value,
            status: e.target.status == true,
            image: e.target.image.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
        }
        dispatch(editUser(update))
        setOpen(!open)
    }


  return (
    <dialog open={open}>
        <form onSubmit={edUser}>
            <input name="name" placeholder='Name...' defaultValue={user.name} required/>
            <input name="image" placeholder='Url...' defaultValue={user.image} required/>
            <input name="phone" placeholder='Phone...' defaultValue={user.phone} required/>
            <input name="email" placeholder='Email...' defaultValue={user.email} required/>
            <select name="status" defaultValue={user.status}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
                <button type='submit'>Add</button>
                <button type='button' onClick={()=> setOpen(!open)}>Close</button>
        </form>
    </dialog>
  )
}
