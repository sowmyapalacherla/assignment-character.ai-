import './index.css'

const TrySlides = (props) => {
    const {Title,image,wit} = props 

    return(

    <div className='try-container'>
    <img src={image} alt={Title} className='image-sizes'/>
        <div className="discription-containers">
            <h1 className='title'>{Title}</h1>
            <p className="with"> {wit} </p>

        </div>
    </div>
    
    )


}
export default TrySlides