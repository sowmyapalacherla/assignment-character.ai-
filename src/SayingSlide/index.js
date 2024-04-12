import './index.css'

const SayingSlide =(props) =>{

    const {name,matches,by,image}= props 

    return(
        <div className="saying-container">
            <div className="top-container">
                <div>
                <img src={image} alt={name} className='saying-image'/>
                </div>
                <div className="name-container">
                    <h1 className="heading">{name}</h1>
                    <p className='about'>{by}</p>

                </div>
            </div>
            <div>
                {matches.map(each => (
                    <div className="each-section" >{each}</div>
                ))}
            </div>
        </div>
    )

}

export default SayingSlide