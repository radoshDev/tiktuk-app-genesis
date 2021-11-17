import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TrendsAPI } from "features/trends/trendsAPI"
import { Trends } from "types/trendsTypes"

export const loadTrends = createAsyncThunk("loadTrends", TrendsAPI.getFeed)

const initialState = {
	data: [] as Trends,
	isLoading: true,
	error: "",
	isMuted: true,
}

const trendsSlice = createSlice({
	name: "trends",
	initialState,
	reducers: {
		setMutedAll: state => {
			state.isMuted = !state.isMuted
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loadTrends.pending, state => {
				state.isLoading = true
				state.error = ""
			})
			.addCase(loadTrends.fulfilled, (state, action: PayloadAction<Trends>) => {
				state.data = action.payload
				state.isLoading = false
				state.error = ""
			})
			.addCase(loadTrends.rejected, (state, action) => {
				state.error = "Download Videos Failed! Please retry later"
				state.isLoading = false
			})
	},
})

export const { setMutedAll } = trendsSlice.actions

export default trendsSlice.reducer
