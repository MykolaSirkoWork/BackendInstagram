export interface ProfileInterface {
	profile: string,
	is_verified: boolean,
	account: string,
	posts_count: number,
	followers_count: number,
	following_count: number,
	full_name: string,
	biography: string,
	external_url: string,
	recentPosts: RecentPost[]
}

export interface RecentPost {
	post_type: string,
	post_link: string,
	likes_count: number,
	comments: number,
	image_url: string,
	views_count?: number
}

