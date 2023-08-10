const Card = ({image, title, description}) => {
    const imgSize = {
        maxWidth: '100%',
    }
    return(
        <div className="card-div">
            <div>
                <img src={image} alt="" style={imgSize}/>
            </div>
            <div className="description-div">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>  
        </div>        
            
            )
        }
        
export default Card