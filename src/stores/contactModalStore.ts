import create from 'zustand'


interface Props {

    activeContactModal: boolean

    openContactModal: () => void
    
    toggleContactModal: () => void

    closeContactModal: () => void

}


const useStore = create<Props>(set => ({

    activeContactModal: false,

    openContactModal: () => set({ activeContactModal: true }),
    
    toggleContactModal: () => set(state => ({ activeContactModal: !state.activeContactModal })),
    
    closeContactModal: () => set({ activeContactModal: false }),

}))


export default useStore
