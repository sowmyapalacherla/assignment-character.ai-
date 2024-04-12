import { useState } from "react";
import Slider from 'react-slick'
import Slides from '../Slides'
import CategorySlide from '../CategorySlide'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

const categoryList = [
    {
        category:"Helpers",
        category_id:1001,
        category_charaters:[
            {
                id:2001,
                Name:"Language learning",
                by: "By @Srakch",
                description: "A language enthusiast.",
                chats:169.0,
                msg:"I am your publicly available language learning bot! I can tech you what i am able to do in any language",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712809972/rising-meditation-silence-reflection-rest-lake-landscape-silence-zen-relaxation-lonely-woman-photo_dluwm3.jpg"

            },
            {
                id:2002,
                Name:"ACT Psychologist",
                by:"By @anpolol",            
                description:"I have huge experience in ACT therapy ",           
                chats:217.8,            
                msg:"Hello! I am an ACT psycologist. what brings you here?",            
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742572/imogencunninghamofficialsite-imogen-cunningham-anna-freud-psycologist-2-1959_xzmqtt.jpg"
    
            },
            {
                id:2003,
                Name:"Ask me anything",
                by:"By @harmlessharvest",
                description:"Ask me anything",
                chats:212.8,
                msg:"Ask me anything I am here to help to you",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712809972/rising-meditation-silence-reflection-rest-lake-landscape-silence-zen-relaxation-lonely-woman-photo_dluwm3.jpg"
            },
            {
                id:2004,
                Name:"Expert Musician",
                by:"By @Sap",
                description:"Music Theory geek and genius",
                chats:500.9,
                msg:"Are you intrested in music? then  Learn music with me",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712810206/musician-job-description-6000x4000-20201118_bbpye9.jpg"
            },
            
            {
                id:2005,
                Name:"Story Maker",
                by : "By @Leapster",
                description:"They are able to write any story they can",
                chats:450.78,
                msg:"write your own story with my help",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712810968/QwfhbHH-oqWJcQOY8A838sm9QIgam7sZfxeTIj7I_wXPm-KA8qlC2lb2hBggOmKoo51a_keripn.png"
            }
        ]
    },
    {
        category:"anime game characters",
        category_id:1002,
        category_charaters:[
            {
                id:3001,
                Name:"Raiden shogun and Ei",
                by: "By @Zap",
                description: "From Genshin Impact",
                chats:327.0,
                msg:"Raiden shogun and Ei is a character from Genshin Impact",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806324/gameon_nw7ybh.jpg"

            },
            {
                id:3002,
                Name:"Yae Miko",
                by:"By @Zap",            
                description:"From Genshin Impact",           
                chats:617.8,            
                msg:"Yae miko is a character from Genshin Impact",            
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806158/thumb_brainstrom_qfqngb.png"
    
            },
            {
                id:3003,
                Name:"Hu Tao",
                by:"By @Zap",
                description:"From Genshin Impact",
                chats:212.8,
                msg:"Hu Tao is a character from Genshin Impact",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806269/61f2c738db092c001ee28630_m9jkvb.jpg"
            },
            {
                id:3004,
                Name:"Diluc",
                by:"By @AuriSkara",
                description:"Owner of dawn Whinery and nobleman of Mondstadt",
                chats:321.9,
                msg:"Diluc is a character from nobleman of Mondstadt .",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741935/cld-sample-3.jpg"
            },
            
            {
                id:3005,
                Name:"Eula Lawrence",
                by : "By @Loltyler1",
                description:"Genshin Impact |Vengeance will be mine!",
                chats:450.78,
                msg:"Eula Lawerence is a character from Genshin Impact.",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741934/cld-sample-2.jpg"
            }
        ]

    },
    {
        category:"games",
        category_id:1003,
        category_charaters:[
            {
                id:4001,
                Name:"Text Adventure Game",
                by: "By @Kayslay",
                description: "Let's play a text-based adventure game.",
                chats:327.0,
                msg:"Let's play a text-based adventure game. I'll be your guide.You are caught upside-down in a sticky web of silk three feet off the ground",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742388/Eo_circle_green_letter-t_cyh4dx.svg"

            },
            {
                id:4002,
                Name:"Isekai narrator",
                by:"By @U-named",            
                description:"You got reincarnated into a fantansy world.",           
                chats:617.8,            
                msg:"An unknown multiverse phenomenon occurred, and you found yourself in a dark space. You looked around and found a source of light in a distance.",            
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741934/cld-sample.jpg"
            },
            {
                id:4003,
                Name:"Cyberpunk adventure",
                by:"By @Tony2012",
                description:"This is a text adeventure based on cyberpunk 2077.",
                chats:212.8,
                msg:"You're strolling through an alley in Night City. You don't have many eddies to your name and very few implants.",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741933/samples/woman-on-a-football-field.jpg"
            },
            {
                id:4004,
                Name:"HighSchool Simulator",
                by:"By @AI-Chatbot-Master",
                description:"Survive as the new kid in a weird school!",
                chats:321.9,
                msg:"I haven't seen you around before! You must be sowmyapalacherla, the new student on the block. Come on in and I'll show you around….",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741929/samples/man-on-a-street.jpg"
            },
            
            {
                id:4005,
                Name:"Who would win",
                by : "By @greg",
                description:"Do you think you can beat me in a battle of wits?",
                chats:450.78,
                msg:"you name literally any two things to fight, real or imaginary.",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741928/samples/look-up.jpg"
            }
        ]

    },
    {
        category:"Books",
        category_id:1004,
        category_charaters:[
            {
                id:5001,
                Name:"Tom Riddle",
                by: "By @RandomThingsForFun",
                description: "The heir of slytherin,the Dark Lord",
                chats:327.0,
                msg:"Oh splendid, another mudblood to make into a horcrux",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741926/samples/balloons.jpg"

            },
            {
                id:5002,
                Name:"Percy Jackson",
                by:"By @dont-be-a-weirdo",            
                description:"Demigod,Halfblood,son of Poseidon,Greek.",           
                chats:617.8,            
                msg:"I am Perseus Jackson, son of Poseidon and sole camper of cabin 3!.",            
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712741925/samples/two-ladies.jpg"
    
            },
            {
                id:5003,
                Name:"Edward Cullen",
                by:"By @Poopqueen",
                description:"student at Forks High school.",
                chats:212.8,
                msg:"Hello…I’m Edward Cullen",
                image:"https://res.cloudinary.com/dv9pez6sa/video/upload/v1712741909/samples/cld-sample-video.mp4"
            },
            {
                id:5004,
                Name:"Hermione",
                by:"By @OZTHEGREATANDPWRF..",
                description:"Graduate of Hogwarts School of Witchcraft/wizardry",
                chats:321.9,
                msg:"I am Hermione, with whom am I speaking?",
                image:"https://res.cloudinary.com/dv9pez6sa/video/upload/v1712741909/samples/cld-sample-video.mp4"
            },
            
            {
                id:5005,
                Name:"nico di angelo",
                by : "By @romann",
                description:"son of hades,dead sister,dating will",
                chats:450.78,
                msg:".... what?",
                image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712810968/QwfhbHH-oqWJcQOY8A838sm9QIgam7sZfxeTIj7I_wXPm-KA8qlC2lb2hBggOmKoo51a_keripn.png"
            }
        ]

    },
    
]
const Category = () => {
    const [activeCategory, setActiveCategory] = useState(categoryList[0].category);
  
    const clickTabItem = (category) => {
      setActiveCategory(category);
    };
  
    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 600,
    };

    const set = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 600,
      };
  
    return (
      <>
        <div className="category-container">
          <Slider {...settings}>
            {categoryList.map((each) => (
              <CategorySlide
                key={each.category}
                category={each.category}
                setActiveTabId={clickTabItem}
                isActive={activeCategory === each.category}
              />
            ))}
          </Slider>
        </div>
  
        {activeCategory && (
          <div className="dishes">
            <Slider {...set}>
              {categoryList.find((item) => item.category === activeCategory).category_charaters.map((each) => (
                  <Slides
                    
                    Name={each.Name}
                    by={each.by}
                    description={each.description}
                    image={each.image}
                    chats={each.chats}
                  />
                ))}
            </Slider>
          </div>
        )}
      </>
    );
  };
  
  export default Category;