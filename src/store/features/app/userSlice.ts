import {StateCreator} from 'zustand';

type TUserState = {
  user: {
    isAuthenticated: boolean;
    name: string;
    userId: string;
    phoneNo: number;
    balance: number;
  };
};

type TUserActions = {
  setUser: (user: Omit<TUserState['user'], 'isAuthenticated'>) => void;
  removeUser: () => void;
};

export type TUserSlice = TUserState & TUserActions;

const initialState: TUserState = {
  user: {
    isAuthenticated: false,
    name: '',
    userId: '',
    phoneNo: 0,
    balance: 0,
  },
};

const createUserSlice: StateCreator<
  TUserSlice,
  [['zustand/immer', never]],
  [],
  TUserSlice
> = set => ({
  ...initialState,
  setUser: user =>
    set(state => {
      state.user = {...user, isAuthenticated: true};
    }),
  removeUser: () => set(() => initialState),
});

export default createUserSlice;
