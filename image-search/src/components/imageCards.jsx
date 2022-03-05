import Info from './info.jsx'
const imageCards = (props) => {
    const {data, handleLike} = props
    const imgTag = data.tags
    const open = (url) => window.open(url);
    
   
  return (
    <div className='col-sm-6'>
        <div className="card">
            <h5 className="card-title">
                {data.description != null ? <h3>{data.description.charAt(0).toUpperCase() + data.description.slice(1)}</h3> : data.alt_description}
            </h5>
            <div className="card-body">
                <img src={data.urls.regular} alt={data.alt_description} className='card-img-top' onClick={() => open(data.links.html)}/>
                <Info data={data} handleLike={handleLike} />
            </div>
            <div className="card-footer">
                {imgTag.map(tag => (<p>{tag.title}</p>))}
            </div>
        </div>
    </div>
  )
}

export default imageCards