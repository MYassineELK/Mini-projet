
import { createSlice } from "@reduxjs/toolkit";
export const createCount=createSlice({
    name:'something',
    initialState:{
        shopp:[
            {   id:1,
                img: require("./img/product-13.png"),
                catigore:"WATCH",
                prix:"$359.00",
                prixint:359,
                title:"AeroSport",
                desc:"Introducing the AeroSport Sports Watch: Elevate your performance and conquer your fitness goals with unparalleled style and precision. Designed for athletes and adventurers alike, the AeroSport combines cutting-edge technology with a sleek and dynamic design, making it the ultimate companion for your active lifestyle.",
                qountite:1,
                like:false,
                cart:false
            },
            {   id:2,
                img: require("./img/product-04.png"),
                catigore:"WATCH",
                prix:"$399.00",
                prixint:399,
                title:"ApexGuard",
                desc:"Unleash your potential and conquer every challenge with confidence and style. The ApexGuard embodies the spirit of resilience and determination, making it the ultimate companion for athletes who demand nothing but the best.",
                qountite:1,
                like:false,
                cart:false
            },
            {   id:3,
                img: require("./img/damcreativ_Hyper_realistic_image_of_a_mans_stylish_bracelet_per_d325ef69-a75d-4fd6-ac5c-79660aeb0f2a.png"),
                catigore:"BRACELET",
                prix:"$49.00",
                prixint:49,
                title:"Canyon Harmony",
                desc:"Canyon Harmony captures the spirit of the untamed wilderness in a form that can be worn every day.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:4,
                img: require("./img/product-14.png"),
                catigore:"WATCH",
                prix:"$679.00",
                prixint:679,
                title:"ChronoTrigger",
                desc:"Unleash the power of time with this extraordinary timepiece that combines precision and style. The ChronoTrigger is not just a watch; it’s a statement of adventure and unwavering determination.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:5,
                img: require("./img/product-08.png"),
                catigore:"WATCH",
                prix:"$489.00",
                prixint:489,
                title:"DigitalEdge",
                desc:"Where innovation meets style, redefine your everyday with this cutting-edge timepiece. The DigitalEdge is not just a smartwatch; it’s a gateway to a world of possibilities, seamlessly integrating technology into your lifestyle like never before.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:6,
                img: require("./img/product-11.png"),
                catigore:"WATCH",
                prix:"$459.00",
                prixint:459,
                title:"DynaChrono",
                desc:"Introducing the DynaChrono Wrist Watch: Embrace the dynamic spirit of adventure and precision with this exceptional timepiece. The DynaChrono is a perfect fusion of style and functionality, designed for those who seek high-performance and impeccable accuracy in every moment.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:7,
                img: require("./img/product-glasses-01.png"),
                catigore:"SUNGLASSES",
                prix:"$149.00",
                prixint:149,
                title:"Flare Glaciers",
                desc:"Experience the pinnacle of eyewear innovation with Flare Glaciers. These sunglasses are meticulously crafted to elevate your style while providing unmatched visual clarity.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:8,
                img: require("./img/product-13.png"),
                catigore:"WATCH",
                prix:"$359.00",
                prixint:359,
                title:"AeroSport",
                desc:"Introducing the AeroSport Sports Watch: Elevate your performance and conquer your fitness goals with unparalleled style and precision. Designed for athletes and adventurers alike, the AeroSport combines cutting-edge technology with a sleek and dynamic design, making it the ultimate companion for your active lifestyle.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:9,
                img: require("./img/product-glasses-02.png"),
                catigore:"SUNGLASSES",
                prix:"$99.00",
                prixint:99,
                title:"Galactic Gazers",
                desc:"Introducing Galactic Gazers, the sunglasses that transport you to a realm of celestial style and unparalleled vision. Prepare to make a stellar fashion statement with these futuristic eyewear wonders.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:10,
                img: require("./img/product-bracelet-03.png"),
                catigore:"BRACELET",
                prix:"$79.00",
                prixint:79,
                title:"Leather Band",
                desc:"Introducing the Leather Band, a bracelet that combines timeless elegance with rugged sophistication.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:11,
                img: require("./img/product-glasses-04.png"),
                catigore:"SUNGLASSES",
                prix:"$99.00",
                prixint:99,
                title:"Metro Shadows",
                desc:"Introducing Metro Shadows, the sunglasses that exude urban sophistication and urbanite charm.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:12,
                img: require("./img/product-glasses-08-1.png"),
                catigore:"SUNGLASSES",
                prix:"$79.00",
                prixint:79,
                title:"Mirage Dunes",
                desc:"Introducing Mirage Dunes, the sunglasses that transport you to an oasis of style and allure.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:13,
                img: require("./img/damcreativ_Hyper_realistic_image_of_a_mans_stylish_bracelet_per_d325ef69-a75d-4fd6-ac5c-79660aeb0f2a.png"),
                catigore:"BRACELET",
                prix:"$359.00",
                prixint:359,
                title:"Noble Crest",
                desc:"Noble Crest is an embodiment of classic elegance and modern luxury. This gold link bracelet for men is crafted with precision and an eye for detail, resulting in a piece that exudes sophistication and charm. Each link is meticulously shaped and polished, creating a seamless flow of golden shine that wraps luxuriously around the wrist.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:14,
                img: require("./img/product-10.png"),
                catigore:"WATCH",
                prix:"$319.00",
                prixint:319,
                title:"PrestigeHorizons",
                desc:"Immerse yourself in the world of refined elegance and timeless style with this exceptional timepiece. The PrestigeHorizons exudes sophistication and class, designed for the discerning gentleman who appreciates impeccable craftsmanship and impeccable aesthetics.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:15,
                img: require("./img/damcreativ_Hyper_realistic_image_of_a_mans_stylish_bracelet_per_cbbfa1e4-b224-49bf-8bb2-40106b34ca71.png"),
                catigore:"BRACELET",
                prix:"$79.00",
                prixint:79,
                title:"Rustic Rhythm",
                desc:"Rustic Rhythm is a testament to the timeless allure of handcrafted style.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:16,
                img: require("./img/product-08.png"),
                catigore:"WATCH",
                prix:"$289.00",
                prixint:289,
                title:"SmartSync",
                desc:"Stay in perfect sync with your digital life and experience the epitome of convenience and connectivity. The SmartSync is not just a watch; it’s your personal assistant, fitness tracker, and communication hub, all wrapped into one stylish and sleek package.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:17,
                img: require("./img/product-bracelet-01.png"),
                catigore:"BRACELET",
                prix:"$99.00",
                1:99,
                title:"Spartan Chain",
                desc:"Introducing the Spartan Chain, a bracelet that epitomizes strength and resilience.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:18,
                img: require("./img/product-glasses-03.png"),
                catigore:"SUNGLASSES",
                prix:"$39.00",
                prixint:39,
                title:"Sport Luxe",
                desc:"Introducing Sport Luxe sunglasses, where athleticism meets sophistication. These sunglasses are designed for the modern man who values both style and performance.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:19,
                img: require("./img/product-bracelet-03.png"),
                catigore:"BRACELET",
                prix:"$189.00",
                prixint:189,
                title:"Tribal Wristlet",
                desc:"Introducing the Tribal Wristlet, a bracelet that embodies the spirit of ancient cultures and timeless traditions.",
                qountite:1,
                like:false,
                cart:false
            }, {   id:20,
                img: require("./img/product-07.png"),
                catigore:"WATCH",
                prix:"$279.00",
                prixint:279,
                title:"UrbanLuxury",
                desc:"Elevate your style with a touch of sophistication and indulge in the epitome of urban elegance. This timepiece is the perfect embodiment of refined luxury, designed for those who appreciate the finer things in life.",
                qountite:1,
                like:false,
                cart:false
            },
        ],
     
    },
    reducers:{
        //actions
        like:(state,actions)=>{
            state.shopp = state.shopp.map(prodoi => {
                if (prodoi.id === actions.payload) {
                   
                    return { ...prodoi, like: !prodoi.like };
                }
                
                return prodoi;
            });
        },
        cart:(state,actions)=>{
            state.shopp = state.shopp.map(prodoi => {
                if (prodoi.id === actions.payload) {
                    return { ...prodoi, cart:true };
                }
                return prodoi;
            });
        },
        Removecart:(state,actions)=>{
            state.shopp = state.shopp.map(prodoi => {
                if (prodoi.id === actions.payload) {
                    return { ...prodoi, cart:false,qountite:0 };
                }
                return prodoi;
            });
        },
        Addqontite:(state,actions)=>{
            state.shopp = state.shopp.map(prodoi => {
                if (prodoi.id === actions.payload) {
                    return { ...prodoi,qountite:prodoi.qountite+1 };
                }
                return prodoi;
            });
        },
        supqontite:(state,actions
            )=>{
                state.shopp = state.shopp.map(prodoi => {
                    if (prodoi.id === actions.payload) {
                        if (prodoi.qountite>0) {
                            return { ...prodoi,qountite:prodoi.qountite-1 };
                        }else{
                            return { ...prodoi,qountite:0 };
                        }
                    }
                    return prodoi;
                });
            },
    }
})
export const{like,cart,Addqontite,supqontite,Removecart }=createCount.actions
export default createCount.reducer
