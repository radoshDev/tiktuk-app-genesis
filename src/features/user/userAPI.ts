import axios from "axios"
import { Trends } from "types/trendsTypes"
import { User, UserInfo } from "types/usersTypes"
export class UserAPI {
	static async auth(): Promise<User> {
		const response = await axios.request({
			method: "GET",
			url: `https://${process.env.REACT_APP_HOST}/user/info/dave.xp`,
			headers: {
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
			},
		})
		if (response.data.code === 1) {
			throw Error("Can not authenticate user! Please retry later")
		}
		return response.data.user
	}
	static async getInfo(userId = "dave.xp"): Promise<UserInfo> {
		const response = await axios.request({
			method: "GET",
			url: `https://${process.env.REACT_APP_HOST}/user/info/${userId}`,
			headers: {
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
			},
		})
		if (response.data.code === 1) {
			throw Error("Can not download user info! Please retry later")
		}
		return response.data
	}
	static async getFeed(): Promise<Trends> {
		const response = await axios.request({
			method: "GET",
			url: `https://${process.env.REACT_APP_HOST}/trending/feed`,
			headers: {
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
			},
		})
		if (response.data.code === 1) {
			throw Error("Download Videos Failed!!! Please retry later")
		}

		return response.data
	}
}
