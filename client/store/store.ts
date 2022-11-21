import create from 'zustand';
import { persist } from 'zustand/middleware';

interface StateInterface {
  theme: boolean;
  changeTheme: () => void;
}

const useStore = create<StateInterface>()(
  persist(
    (set) => ({
      theme: true, // true == white, false == black
      changeTheme: () => {set(( state ) => ({ theme: !state.theme }))}
    }),
    {
      name: 'minh duong blog',
    }
  )
)

export default useStore;