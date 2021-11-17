import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import userReducer from "../features/user/userSlice"
import trendsReducer from "../features/trends/trendsSlice"

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		trends: trendsReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
