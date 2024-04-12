
import Slider from 'react-slick'
import SayingSlide from '../SayingSlide'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css'



const TrySaying = () => {
    const trySayingList = [
        {
            name:"WhoWouldWin",
            id:301,
            by:"@greg ||25.5m chats||6,941 likes",
            matches:[
                "Batman Vs. Superman","Knight Vs. Samurai","Lebron James Vs. Michael Jordan"
            ],
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712819951/276083AA00000578-0-image-a-6_1428540157037_by3fei.jpg"
    
        },
        {
            name:"Elon Musk",
            id:302,
            by:"@elonwhisperer || 34.9m chats || 3,312 likes",
            matches:["Why did you buy twitter?","what do you think about jeff bezos'Blue Origin?","if You could time travel, when /where would you go?"],
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712820027/DFKYM6R6GNNIHLPDXF2HU5G2MA_lqtga9.jpg"
        },
        {
            name:"Altenate Timeline",
            id:303,
            by:"@irwan || 48.0m chats || 3,312 likes",
            matches:["what if I invented a portal gun?","Access to my own personal time machine","Make me the negotiator for the first alien encounter"],
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712820095/types-of-butterfly-bush-2132429-hero-d32fa22379054a8ca6080843d674a970_dk7deo.jpg"
        },
        {
            name:"Debate Champion",
            id:304,
            by:"@Adeptusmechanicus|| 34.9m chats || 3,312 likes",
            matches:["Star Wars is overrated","pepsi is better than coco-cola","Cats are better than dogs"],
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932858/Debate-Team_h2kev8.jpg"
        },
        {
            name:"Character Assistant",
            id:305,
            by:"@landon|| 45.9m chats || 3,312 likes",
            matches:["What type of fish is dorny from Finding nemo","create an ad campaign for a new video game","Decide between the MAcbook Air and Macbook pro"],
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932907/Hire-an-Executive-Assistant-Blog-Post-Pic-C-Suite-Assistants-scaled_d3lxez.jpg"
        },
        {
            name:"Are-you-feeling-okay",
            id:306,
            by:"@summeriscoming|| 34.9m chats || 3,312 likes",
            matches:["i had a hard time at work today","How can I be more succesful in my profession","What is a good way to make a big change in life"],
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932952/medicalofficeadminassisthd_zmhlep.jpg"
        }
    
    ]
   
    

    const settings = {
      
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:1000
    };
    const mobileSettings = {
      
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:1000
    };

    return (
        <>
        <div className="slider-container">
            <h1 className="for">TrySaying</h1>
            <Slider {...settings}>
            {trySayingList.map((each, index) => (
                    <SayingSlide
                        key={index}
                        name={each.name}
                        by={each.by}
                        image={each.image}
                        matches={each.matches}
                    />
                ))}
            </Slider>
        </div>

<div className="slider-container-mobile">
<h1 className="for">TrySaying</h1>
<Slider {...mobileSettings}>
{trySayingList.map((each, index) => (
        <SayingSlide
            key={index}
            name={each.name}
            by={each.by}
            image={each.image}
            matches={each.matches}
        />
    ))}
</Slider>
</div>
</>
    );
}

export default TrySaying