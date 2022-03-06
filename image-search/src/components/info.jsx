
const info = (props) => {
    const {data, handleLike} = props
  return (
    <div className="card-info">
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="like" onClick={() => handleLike(data.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={data.liked_by_user? `#EE6464` : `#474554`} className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </button>
                    {data.likes}
                </div>
                <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <a href={data.user.portfolio_url} target="_blank" rel="noopener noreferrer" className="user-link">{data.user.username}</a>
                </div>   
            </div>    
        </div>
        
       
        

    </div>
  )
}

export default info