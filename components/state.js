import create from 'zustand'

const useStore = create((set) => ({

name:[],
setName: (v) => set(state => ({ name:v })),
call:false,
setCall: (v) => set(state => ({ call:v })),
}));

export   {useStore};