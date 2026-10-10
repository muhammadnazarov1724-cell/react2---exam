import { create } from "zustand";

export const useData = create((set) => ({
    data: [
            {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aefbrLfjUQIpFQoMnNqx-PUs9rtsFhyWb53cIR7uWA&s',
        status: true,
        id: 1
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyHm5fa2g04XnYGbVF6mPQijZIQH6GYGIflu-8uQX_HFtZqfB_mGcvZo&s=10',
        status: false,
        id: 2
    },
    ]
}))