import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserAPI } from "./userAPI"
import { User, UserFeed, UserInfo } from "types/usersTypes"

export const authUser = createAsyncThunk("authUser", async () => {
	const data = await UserAPI.auth()
	return data
})
export const loadUserInfo = createAsyncThunk(
	"loadUserInfo",
	async (userId?: string) => {
		const data = await UserAPI.getInfo(userId)
		return data
	}
)

export const loadUserFeed = createAsyncThunk(
	"loadUserFeed",
	async (userId: string) => {
		const data = await UserAPI.getFeed(userId)
		return data
	}
)

const initialState = {
	auth: {
		data: {} as User,
		isLoading: true,
		error: "",
	},
	info: {
		data: {} as UserInfo,
		isLoading: true,
		error: "",
	},
	feed: {
		data: [] as UserFeed,
		isLoading: true,
		error: "",
	},
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(authUser.pending, state => {
				state.auth.isLoading = true
				state.auth.error = ""
			})
			.addCase(authUser.fulfilled, (state, action: PayloadAction<User>) => {
				if (action.payload) {
					state.auth.data = action.payload
				}
				state.auth.isLoading = false
				state.auth.error = ""
			})
			.addCase(authUser.rejected, (state, action) => {
				state.auth.error = "Can't authenticate user. Please retry later"
				state.auth.isLoading = false
			})
			.addCase(loadUserInfo.pending, state => {
				state.info.isLoading = true
				state.info.error = ""
			})
			.addCase(
				loadUserInfo.fulfilled,
				(state, action: PayloadAction<UserInfo>) => {
					state.info.data = action.payload
					state.info.isLoading = false
					state.info.error = ""
				}
			)
			.addCase(loadUserInfo.rejected, (state, action) => {
				state.info.error = "Can't download user information"
				state.info.isLoading = false
			})
			.addCase(loadUserFeed.pending, state => {
				state.feed.isLoading = true
				state.feed.error = ""
			})
			.addCase(
				loadUserFeed.fulfilled,
				(state, action: PayloadAction<UserFeed>) => {
					state.feed.data = action.payload
					state.feed.isLoading = false
					state.feed.error = "Download Videos Failed! Please retry later"
				}
			)
			.addCase(loadUserFeed.rejected, (state, action) => {
				state.feed.error = "Download Videos Failed! Please retry later"
				state.feed.isLoading = false
			}),
})

export default userSlice.reducer
