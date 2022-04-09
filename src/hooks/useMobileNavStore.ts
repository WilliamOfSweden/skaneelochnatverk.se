import create from 'zustand'

interface Props {
  activeMobileNav: boolean

  toggleActiveMobileNav: () => void

  resetActiveMobileNav: () => void
}

export const useMobileNavStore = create<Props>(set => ({
  activeMobileNav: false,

  toggleActiveMobileNav: () =>
    set(state => ({ activeMobileNav: !state.activeMobileNav })),

  resetActiveMobileNav: () => set({ activeMobileNav: false }),
}))
