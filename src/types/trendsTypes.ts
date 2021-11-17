type AuthorMeta = {
	avatar: string
	digg: number
	fans: number
	following: number
	heart: number
	id: string
	name: string
	nickName: string
	secUid: string
	signature: string
	verified: boolean
	video: number
}
type Covers = {
	default: string
	dynamic: string
	origin: string
}
type MusicMeta = {
	coverLarge: string
	coverMedium: string
	coverThumb: string
	duration: number
	musicAlbum: string
	musicAuthor: string
	musicId: string
	musicName: string
	musicOriginal: boolean
	playUrl: string
}
type VideoMeta = {
	duration: number
	height: number
	width: number
}
export type Hashtag = {
	id: string
	name: string
	title: string
	cover: string
}
export type TrendItem = {
	authorMeta: AuthorMeta
	commentCount: number
	covers: Covers
	createTime: number
	diggCount: number
	downloaded: boolean
	effectStickers: Array<{ id: string; name: string }>
	hashtags: Hashtag[]
	id: string
	mentions: any[]
	musicMeta: MusicMeta
	playCount: number
	secretID: string
	shareCount: number
	text: string
	videoApiUrlNoWaterMark: string
	videoMeta: VideoMeta
	videoUrl: string
	videoUrlNoWaterMark: string
	webVideoUrl: string
}

export type Trends = TrendItem[]
