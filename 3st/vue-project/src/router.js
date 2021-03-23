import About from "@/components/About.vue"
import Photo from "@/components/Photo.vue"
import Welcome from "@/components/Welcome.vue"

const router={
	'/':Welcome,
	'/about':About,
	'/photo':Photo,
}

export default router

//주소 : 컴포넌트 연결