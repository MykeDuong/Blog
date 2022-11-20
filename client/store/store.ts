import create from 'zustand';

interface StateInterface {
  theme: boolean;
  changeTheme: () => void;
}

const useStore = create<StateInterface>((set) => ({
  theme: true, // true == white, false == black
  changeTheme: () => {set(( state ) => ({ theme: !state.theme }))}
}))

export default useStore;