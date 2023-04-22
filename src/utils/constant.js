export const buttons = ["All","Music", "Comedy clubs", "Bollywood music", "Comedy", "Live", "Gaming", "Songs", "Cricket", "Cooking", "Lectures", "Laptops", "Data Structures"]

export const sideBarList = [{title:"", links: ["Home", "Shorts", "Subscriptions", "Originals", "YouTube Music"]},{title:"", links:["Library", "History", "Watch Later", "Downloads", "Linked Videos"]},
{title:"Subscriptions", links: ["Akshay Saini","T-Series","Boomberg Tech","NPTEL"]}, {title: "Explore", links:["Trending","Shopping","Music","Movies & Show","Live","Gaming", "News", "Sports", "Fashion & Beauty","Learning","Cooking","Tech Stacks"]}
]

const YOUTUBE_API_KEY = 'AIzaSyDd2xTpPJxRp8grFcBft-1nBpTG1eD22Lw';

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key="+YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_RESULT = (query)=>"https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q="+query+"&regionCode=IN&key="+YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_RESULT1 = (nextPage, query)=>"https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&pageToken="+nextPage+"&q="+query+"&regionCode=IN&key="+YOUTUBE_API_KEY

export const OFFSET_LIVE_CHAT = 200;