export type User = {
	avatarLarger: string
	avatarMedium: string
	avatarThumb: string
	bioLink: {
		link: string
		risk: number
	}
	commentSetting: number
	createTime: number
	duetSetting: number
	ftc: boolean
	id: string
	isADVirtual: boolean
	nickname: string
	openFavorite: boolean
	privateAccount: boolean
	relation: number
	roomId: string
	secUid: string
	secret: boolean
	shortId: string
	signature: string
	stitchSetting: number
	uniqueId: string
	verified: boolean
}
export type Stats = {
	diggCount: number
	followerCount: number
	followingCount: number
	heart: number
	heartCount: number
	videoCount: number
}
type Author = {
	avatarLarger: string
	avatarMedium: string
	avatarThumb: string
	commentSetting: number
	duetSetting: number
	ftc: boolean
	id: string
	nickname: string
	openFavorite: boolean
	privateAccount: boolean
	relation: number
	secUid: string
	secret: boolean
	signature: string
	stitchSetting: number
	uniqueId: string
	verified: boolean
}
type Challenge = {
	coverLarger: string
	coverMedium: string
	coverThumb: string
	desc: string
	id: string
	isCommerce: boolean
	profileLarger: string
	profileMedium: string
	profileThumb: string
	title: string
}
type Music = {
	album: string
	authorName: string
	coverLarge: string
	coverMedium: string
	coverThumb: string
	duration: number
	id: string
	original: boolean
	playUrl: string
	title: string
}
type ExtraText = {
	awemeId: string
	end: number
	hashtagId: string
	hashtagName: string
	isCommerce: false
	secUid: string
	start: number
	subType: number
	type: number
	userId: string
	userUniqueId: string
}
export type Video = {
	bitrate: number
	codecType: string
	cover: string
	definition: string
	downloadAddr: string
	duration: number
	dynamicCover: string
	encodeUserTag: string
	encodedType: string
	format: string
	height: number
	id: string
	originCover: string
	playAddr: string
	ratio: string
	reflowCover: string
	shareCover: string[]
	videoQuality: string
	width: number
}
type Feed = {
	author: Author
	authorStats: Stats
	challenges: Challenge[]
	createTime: number
	desc: string
	digged: boolean
	duetDisplay: number
	duetEnabled: boolean
	duetInfo: {
		duetFromId: string
	}
	forFriend: boolean
	id: string
	isAd: boolean
	itemCommentStatus: number
	itemMute: boolean
	music: Music
	officalItem: boolean
	originalItem: boolean
	privateItem: boolean
	secret: boolean
	shareEnabled: boolean
	showNotPass: boolean
	stats: {
		commentCount: number
		diggCount: number
		playCount: number
		shareCount: number
	}
	stickersOnItem: Array<{ stickerText: string[]; stickerType: number }>
	stitchDisplay: number
	stitchEnabled: boolean
	textExtra: ExtraText[]
	video: Video
	vl1: boolean
}
export type UserInfo = {
	itemList: any[]
	stats: Stats
	user: User
}
export type UserFeed = Array<Feed>
