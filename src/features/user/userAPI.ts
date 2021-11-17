import axios from "axios"
import { KilledResponse, UserFeed, UserInfo } from "types/usersTypes"

export class UserAPI {
	static async auth() {
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
	static async getInfo(userId = "dave.xp") {
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
	static async getFeed(userId = "dave.xp") {
		const response = await axios.request({
			method: "GET",
			url: `https://${process.env.REACT_APP_HOST}/user/feed/${userId}`,
			headers: {
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
			},
		})
		if (response.data.code === 1) {
			throw Error("Download Videos Failed! Please retry later")
		}

		return response.data
	}
}
