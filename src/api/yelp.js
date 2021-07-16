import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vp7JbwVbVJYbsxLhE60o1zjA2xonOpUbZRFnopzudfD5wljnhjPJp77D_MTJPr86tqOxGQkV_FIIpsBbss05ZC7QUyAdTbovd6QthXFymKb6TpOxA_kUkCE5a63wYHYx'
    }
})