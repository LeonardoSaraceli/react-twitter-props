export default function Tweets({ tweets, searchFilter }) {
    const filteredTweets = tweets.filter((tweet) =>
        tweet.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tweet.handle.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tweet.content.toLowerCase().includes(searchFilter.toLowerCase())
    )
    
    return (
        <>
            {filteredTweets.map((tweet, index) => {
                return (
                    <article className='tweet' key={index}>
                        <div className="profile-icon"><img src={tweet.profileImage}/></div>

                        <div className="tweet-content">
                            <h4>{tweet.name} <span>{tweet.handle} · {tweet.date}</span></h4>
                            <p>{tweet.content}</p>

                            {tweet.article &&
                                <div className="tweet-article">
                                    <img src={tweet.article.image} />
                                    <small>{tweet.article.site}</small>
                                    <h5>{tweet.article.title}</h5>
                                    <p>{tweet.article.content}</p>
                                </div>
                            }

                            <div className="tweet-actions">
                                <span>
                                    <i className="fa-regular fa-comment"></i>
                                    <small>{tweet.commentCount}</small>
                                </span>

                                <span>
                                    <i className="fa-solid fa-arrows-rotate"></i>
                                    <small>{tweet.retweetCount}</small>
                                </span>

                                <span>
                                    <i className="fa-regular fa-heart"></i>
                                    <small>{tweet.heartCount}</small>
                                </span>

                                <span>
                                    <i className="fa-solid fa-chart-simple"></i>
                                    <small>{tweet.analyticsCount}</small>
                                </span>

                                <span>
                                    <i className="fa-solid fa-upload"></i>
                                </span>
                            </div>
                        </div>
                    </article>
                )
            })}
        </> 
    )
}