import {ProfileInterface} from "./profile.interfaces";

export const mapProfileFields = ({
  profile_image_link,
  is_verified,
  account,
  posts_count,
  followers,
  following,
	profile_name,
	biography,
	external_url
},
 recentPosts
): ProfileInterface => {
	return {
		profile: profile_image_link,
		is_verified,
		account,
		posts_count,
		followers_count: followers,
		following_count: following,
		full_name: profile_name,
		biography,
		external_url,
		recentPosts: recentPosts.map(({
			media_type,
			url,
			likes,
			comments,
			image_url,
			views_count = null
		}) => {
			return {
				post_type: media_type,
				post_link: url,
				likes_count: likes,
				comments,
				image_url,
				...(views_count && {views_count})
			}
		})
	}
}