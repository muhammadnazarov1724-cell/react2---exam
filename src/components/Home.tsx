import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, setSearch, setSelet } from '../store/dataSlice'
import PostDialog from './PostDialog'
import EditDialog from './EditDialog'

export default function Home() {

  let {data, search, select} = useSelector((state) => state.data)
  let dispatch = useDispatch()
  let [open, setOpen] = useState(false)
  let [editOpen, setEditOpen] = useState(false)

   data.filter((elem) => {

    const matchSearch = elem.name.toLowerCase().includes(search.value)

    const matchSelect = select == 'all' ||
    (select == 'active' && elem.status == true)||
    (select == 'inactive' && elem.status == false)

    return matchSearch && matchSelect

  })
 
  return (
    <>
    <input placeholder='search by name...' onChange={(e)=> dispatch(setSearch(e.target.value))} />
    <select onChange={(e)=> setSelet(e.target.value)}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
    <button onClick={()=> setOpen(true)}>+ Add User</button>
    <div className='flex justify-center gap-[30px] mt-[50px]'>

      {data && data.map((el) => {
        return <div key={el.id} className='w-[300px] border border-[#ccc] p-[45px_35px] rounded-[20px] flex flex-col gap-[20px] items-center'>
          <h2 className='text-[21px] font-bold'>{el.name}</h2>
          <img className='w-[150px] h-[150px] rounded-[50%]' src={el.image} alt="" />
          <p className='text-[12px] text-[gray]'>{el.status ? 'Active' : 'Inactive'}</p>
          <h4><span className='font-[600]'>PHONE:</span>{el.phone}</h4>
          <h4><span className='font-[600]'>EMAIl:</span>{el.email}</h4>
          <button onClick={()=> dispatch(deleteUser(el.id))} className='bg-[#ccc] border'>Delete</button>
          <button onClick={()=> setEditOpen(el)} className='bg-[#ccc] border'>Edit</button>
        </div>
      })}
      </div>

      <PostDialog open={open} setOpen={setOpen}/>
      <EditDialog open={editOpen} setOpen={setEditOpen} user={editOpen}/>

    </>
  )
}
