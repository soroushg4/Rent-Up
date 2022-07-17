//featured
import coverfe1 from '../images/h1.png'
import coverfe2 from '../images/h2.png'
import coverfe3 from '../images/h3.png'
import coverfe4 from '../images/h4.png'
import coverfe6 from '../images/h6.png'



// list
import coverli1 from '../images/p-1.png'
import coverli2 from '../images/p-2.png'
import coverli3 from '../images/p-7.png'
import coverli4 from '../images/p-4.png'
import coverli5 from '../images/p-5.png'
import coverli6 from '../images/p-6.png'


// location
import coverla1 from '../images/city-1.jpg'
import coverla2 from '../images/city-2.jpg'
import coverla3 from '../images/city-3.png'
import coverla4 from '../images/city-4.png'
import coverla5 from '../images/city-5.png'
import coverla6 from '../images/city-6.png'


// team
import coverte1 from '../images/team-1.jpg'
import coverte2 from '../images/team-2.jpg'
import coverte3 from '../images/team-3.jpg'
import coverte4 from '../images/team-4.jpg'
import coverte5 from '../images/team-5.jpg'
import coverte6 from '../images/team-6.jpg'


export const nav = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "services",
      path: "/services",
    },
    {
      text: "blog",
      path: "/blog",
    },
    {
      text: "pricing",
      path: "/pricing",
    },
    {
      text: "contact",
      path: "/contact",
    },
  ]
  export const featured = [
    {
      cover: [coverfe1],
      name: "Family House",
      total: "122 Property",
    },
    {
      cover: [coverfe2],
      name: "House & Villa",
      total: "155 Property",
    },
    {
      cover: [coverfe3],
      name: "Apartment",
      total: "300 Property",
    },
    {
      cover: [coverfe4],
      name: "Office & Studio",
      total: "80 Property",
    },
    {
      cover:[coverfe6],
      name: "Villa & Condo",
      total: "80 Property",
    },
  ]
  export const list = [
    {
      id: 1,
      cover: [coverli1],
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: [coverli2],
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: [coverli3],
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: [coverli4],
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: [coverli5],
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover: [coverli6],
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ]
  export const awards = [
    {
      icon: <i class="ri-goblet-fill"></i>,
      num: "32 M	",
      name: "Blue Burmin Award",
    },
    {
      icon: <i class="ri-tools-line"></i>,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: <i class="ri-lightbulb-fill"></i>,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: <i class="ri-heart-fill"></i>,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ]
  export const location = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: [coverla1],
    },
    {
      id: 2,
      name: "Jerrsy, United State",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: [coverla2],
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: [coverla3],
    },
    {
      id: 4,
      name: "NewYork, United States",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: [coverla4],
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: [coverla5],
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: [coverla6],
    },
  ]
  export const team = [
    {
      list: "50",
      cover: [coverte1],
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [<i class="ri-facebook-fill"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-twitter-fill"></i>, <i class="ri-instagram-fill"></i>],
    },
    {
      list: "70",
      cover: [coverte2],
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [<i class="ri-facebook-fill"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-twitter-fill"></i>, <i class="ri-instagram-fill"></i>],
    },
    {
      list: "80",
      cover: [coverte3],
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [<i class="ri-facebook-fill"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-twitter-fill"></i>, <i class="ri-instagram-fill"></i>],
    },
    {
      list: "51",
      cover: [coverte4],
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i class="ri-facebook-fill"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-twitter-fill"></i>, <i class="ri-instagram-fill"></i>],
    },
    {
      list: "42",
      cover: [coverte5],
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i class="ri-facebook-fill"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-twitter-fill"></i>, <i class="ri-instagram-fill"></i>],
    },
    {
      list: "38",
      cover:[coverte6],
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [<i class="ri-facebook-fill"></i>, <i class="ri-linkedin-fill"></i>, <i class="ri-twitter-fill"></i>, <i class="ri-instagram-fill"></i>],
    },
  ]
  export const price = [
    {
      plan: "Basic",
      price: "29",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class="ri-check-line"></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "120GB CDN Bandwidth",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "5GB Cloud Storage",
        },
        { change: "color", icon: <i class="ri-close-line"></i>, text: "Personal Help Support" },
        { change: "color", icon: <i class="ri-close-line"></i>, text: "Enterprise SLA" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class="ri-check-line"></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "150GB CDN Bandwidth",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "10GB Cloud Storage",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i class="ri-close-line"></i>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      ptext: "2 user, per month",
      list: [
        {
          icon: <i class="ri-check-line"></i>,
          text: "100% Uptime Guarantee",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "200GB CDN Bandwidth",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "20GB Cloud Storage",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "Personal Help Support",
        },
        {
          icon: <i class="ri-check-line"></i>,
          text: "Enterprise SLA",
        },
      ],
    },
  ]
  export const footer = [
    {
      title: "LAYOUTS",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "ALL SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "COMPANY",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]