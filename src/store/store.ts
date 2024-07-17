import {create} from 'zustand';
import createUserSlice, {TUserSlice} from './features/app/userSlice';
import {immer} from 'zustand/middleware/immer';

type TStore = TUserSlice;

const useStore = create<TStore>()(
  immer((...a) => ({
    ...createUserSlice(...a),
  })),
);

export default useStore;
