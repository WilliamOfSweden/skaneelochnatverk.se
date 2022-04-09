import create from 'zustand'

interface Props {
  activeContactModal: boolean

  openContactModal: () => void

  toggleContactModal: () => void

  closeContactModal: () => void
}

export const useContactModalStore = create<Props>(set => ({
  activeContactModal: false,

  openContactModal: () => set({ activeContactModal: true }),

  toggleContactModal: () =>
    set(state => ({ activeContactModal: !state.activeContactModal })),

  closeContactModal: () => set({ activeContactModal: false }),
}))
