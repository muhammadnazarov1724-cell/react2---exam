import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string,
    image: string,
    status: boolean,
    phone: number,
    email: string
    id: number
}

interface initialstate {
    data: User[]
    search: string
    select: string
}

let initialState: initialstate = {
    data: [
        {
            id: 1,
            name: 'Tolib',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aefbrLfjUQIpFQoMnNqx-PUs9rtsFhyWb53cIR7uWA&s',
            status: true,
            phone: 123112449,
            email: 'tolibjon@gmail.com'
        },
        {
            id: 2,
            name: 'Muhammad',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyHm5fa2g04XnYGbVF6mPQijZIQH6GYGIflu-8uQX_HFtZqfB_mGcvZo&s=10',
            status: false,
            phone: 175847249,
            email: 'muhammad@gmail.com'
        },
    ],
    search: '',
    select: 'all'
}

export let dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        deleteUser: (state, {payload}) => {
            state.data = state.data.filter((el) => el.id != payload)
        },
        addUser: (state, {payload}) => {
            state.data = [...state.data, payload]
        },
        editUser: (state, {payload}) => {
            state.data = state.data.map((user) => 
            user.id == payload.id ? {...user, ...payload} : user)
        },
        setSearch: (state, {payload}) => {
            state.search = ({ payload })
        },
        setSelet: (state, {payload}) => {
            state.select = ({payload})
        }
    }
})

export let {deleteUser, addUser, editUser, setSearch, setSelet} = dataSlice.actions

export default dataSlice.reducer