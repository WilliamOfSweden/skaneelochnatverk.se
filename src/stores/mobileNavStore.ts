import create from 'zustand'


interface Props {

    activeMobileNav: boolean
    
    toggleActiveMobileNav: () => void

    resetActiveMobileNav: () => void

}


const useStore = create<Props>(set => ({

    activeMobileNav: false,
    
    toggleActiveMobileNav: () => set(state => ({ activeMobileNav: !state.activeMobileNav })),
    
    resetActiveMobileNav: () => set({ activeMobileNav: false }),

}))


export default useStore
