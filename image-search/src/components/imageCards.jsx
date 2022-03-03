import Info from './info.jsx'
const imageCards = ({props}) => {
   const data = props.tags
   const open = (url) => window.open(url);
  return (
    <div className='col-sm-6'>
        <div className="card">
            <h5 className="card-title">
                {props.description != null ? <h3>{props.description.charAt(0).toUpperCase() + props.description.slice(1)}</h3> : props.alt_description}
            </h5>
            <div className="card-body">
                <img src={props.urls.regular} alt={props.alt_description} className='card-img-top' onClick={() => open(props.links.html)}/>
                <Info props={props}/>
            </div>
            <div className="card-footer">
                {data.map(tag => (<p>{tag.title}</p>))}
            </div>
        </div>
    </div>
  )
}

export default imageCards