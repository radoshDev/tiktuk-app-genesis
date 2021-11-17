import axios from "axios"
import { Trends } from "../../types/trendsTypes"

export class TrendsAPI {
	static async getFeed() {
		const response = await axios.request<Trends>({
			method: "GET",
			url: `https://${process.env.REACT_APP_HOST}/trending/feed`,
			headers: {
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
			},
		})
		return response.data
	}
}
