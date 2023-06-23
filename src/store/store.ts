import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { filterSlice } from "./features/filterSlice";
import { loadingSlice } from "./features/loadingSlice";

export const store = configureStore({
  reducer: {
    podcastFilter: filterSlice.reducer,
    loading: loadingSlice.reducer
  }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector