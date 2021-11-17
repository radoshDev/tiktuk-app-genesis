import { FC, useRef } from "react"
import styled from "styled-components"

const videoUrl =
	"https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/ba27881c85e747b1935070d30b1105eb/?a=1988&br=1042&bt=521&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1637002597&ft=wUyFfF5qkag3-I&l=20211115125631010190192020250F0807&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=M2Y5aG5kbzg6NDMzNzczM0ApZ2RpOjtlOWU0N2lpaGQ0O2c1aDFwYWlqYGxgLS1kMTZzczZiYmMwLTQvNTE0YzA2YTM6Yw%3D%3D&signature=e0adf97af3b4aaa828afe7c7973ab3e0&tk=0&vl=&vr="

const Test: FC = () => {
	const width = 200
	const height = 200 * 1.7775
	const ref = useRef<HTMLIFrameElement>(null)
	const iframeEl = ref.current

	const handleClick = () => {
		console.log("Clicked", iframeEl)
		if (iframeEl) {
			console.log("Exist")
		}
	}
	return (
		<S.Test>
			<h1>Test</h1>
			<S.Video onClick={handleClick}>
				<iframe
					ref={ref}
					src={videoUrl}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					title="Embedded youtube"
				/>
			</S.Video>
			<video
				autoPlay
				controls
				src="https://r8---sn-3c27snee.googlevideo.com/videoplayback?expire=1637007922&ei=0W2SYePvO8qB8gOX37iwBw&ip=91.90.123.51&id=o-AAPxjeit9UEpaUgP_opQRdp_SXOvWpggE5oce7P_XLu6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=NLZ0HlUge9nqGZK81oV1PlsG&gir=yes&clen=549483&ratebypass=yes&dur=6.965&lmt=1540614718228620&fexp=24001373,24007246&c=WEB&txp=5431432&n=356N-fvHXs33ppKquS&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgHD1Vfwwt5qK_JFxtQQZqXU1RiPOI_h8w7cdxkIPUUKoCIQCEusm2fY0X5Cc-ZJgOqqUqBYvrPr-mRTv8Uc6Cm_ittg%3D%3D&rm=sn-5hnesk76&req_id=e085b081472da3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-4gxxoxu-3c2l7s&cms_redirect=yes&mh=6T&mip=46.219.207.206&mm=29&mn=sn-3c27snee&ms=rdu&mt=1636986303&mv=m&mvi=8&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKulxqZWS6dVFm4gPQ7YnstH4g7M2VffSYi49eSvR2q-AiEAsnsajMTdMVcIjcMcQsNp4UUqgLvRNGX2qGR7ZzXeUlY%3D"
			></video>
		</S.Test>
	)
}

const S = {
	Test: styled.div``,
	Video: styled.div`
		background-color: palegreen;
		width: 250px;
		height: 400px;
		iframe {
			border: none;
		}
	`,
}
export default Test
