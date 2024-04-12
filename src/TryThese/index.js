
import Slider from 'react-slick'
import TrySlides from '../TrySlides';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';import './index.css'


const TryThese =() => {
    const tryTheseList =[
        {
            Title: "Practice a new language",
            Id:101,
            wit:"with hypergoat",
            msg:"Wilkommen,bienvenue,welcome-I'm hypergoat and I'm fluent in many languages and help you praactice the one you're learning",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806510/languages-signpost_lmkrbe.jpg"
        },
        {
            Title:"Practice interviewing",
            id:102,
            wit:"with interviewer",
            msg:"I will act as your interviewer. just tell me about the position you want to apply for?",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932787/02664e82-f450-42c8-ab6a-3e969792f6be_zqralr.jpg"
        },
        {
            Title:"Write a story",
            id:103,
            wit:"with Creative Helper",
            msg:"Hey there ,i can help you out with general creative writing things.",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806269/61f2c738db092c001ee28630_m9jkvb.jpg"
        },
        {
            Title:"Plan a trip",
            id:104,
            wit:"with trip planner",
            msg:"What parts of the world do you want to explore",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806207/61zM4Lzq2LL._AC_UF1000_1000_QL80__obrhwx.jpg"

        },
        {
            Title:"Brainstrom ideas",
            id:105,
            wit:"with Brainstormer",
            msg:"ok, what do we need to come up with intresting ideas about today?",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806158/thumb_brainstrom_qfqngb.png"
        },
        {
            Title:"Play a game",
            id:106,
            wit:"with Text Adventure Game",
            msg:"Let's play a text-based adventure game.I'll be your guide.",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806321/gameon_oqpohx.jpg"

        },
        {
            Title:"Get Book recommendations",
            id:107,
            wit:"with Linrarian Linda",
            msg:"Shush! No yelling in the library. I'm a librarian and I love all kinds of books",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806361/librarian-can-do-it-all_129009653-converted_hwrgng.jpg"
        },
        {
            Title:"Help me make a decision",
            id:108,
            wit:"with DecisionHelper",
            msg:"Hello! I'm ready to help you work through any of the difficult choices you face in life,from big to small",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806414/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4_y0r9et.webp"
        }
    ]

    const settings = {
      
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:600,
        rows:2
    };

    return (
        <div className="slider-container">
            <h1 className="for">Try These</h1>
            <Slider {...settings}>
                {tryTheseList.map(each => (
                    
                        <TrySlides
                            Title={each.Title}
                            wit={each.wit}
                            image={each.image}
                        />
                    
                ))}
            </Slider>
        </div>
    );

}

export default TryThese