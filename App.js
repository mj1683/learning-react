import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resName, cuisines, imageId, cost, rating, time } = props;
  console.log("hey ", props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{cost}</h4>
      <h4>{time}</h4>
    </div>
  );
};

const restaurantsInfo = [
  {
    info: {
      id: "38925",
      name: "Domino's Pizza",
      cloudinaryImageId: "mdl4tnyc8wbvysqxzhnq",
      locality: "Netaji Subhash Marg",
      areaName: "Daryaganj",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 01:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "128116",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "hgvtyqrxzvpwmbs361er",
      locality: "Kamla Nagar",
      areaName: "Kamla Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "4961",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8614",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-connaught-place-delhi-8614",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "47853",
      name: "The Burger Club",
      cloudinaryImageId: "x7bcibhxfnrupph6bcft",
      locality: "Karol Bagh",
      areaName: "Karol Bagh",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "2285",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-burger-club-karol-bagh-delhi-47853",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "68582",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Shankar Road",
      areaName: "Rajinder Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shankar-road-rajinder-nagar-delhi-68582",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "206300",
      name: "Burgrill - The Win Win Burger",
      cloudinaryImageId: "f596863116da4b4688b48e813e25000d",
      areaName: "Hudson Lane",
      costForTwo: "₹250 for two",
      cuisines: [
        "Burgers",
        "Healthy Food",
        "American",
        "Salads",
        "Beverages",
        "Desserts",
        "Snacks",
      ],
      avgRating: 4.2,
      parentId: "302366",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 05:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-hudson-lane-delhi-206300",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "254131",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      locality: "Gupta Road",
      areaName: "Paharganj",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-gupta-road-paharganj-delhi-254131",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "435678",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Western Extension Area",
      areaName: "Karol Bagh",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-western-extension-area-karol-bagh-delhi-435678",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "185160",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Desh Bandhu Gupta Road",
      areaName: "Paharganj",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-desh-bandhu-gupta-road-paharganj-delhi-185160",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "76225",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Malka Ganj Road",
      areaName: "Kamla Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "2",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 03:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-malka-ganj-road-kamla-nagar-delhi-76225",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "467579",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "N Block",
      areaName: "Connaught Place",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.2,
      parentId: "22485",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/louis-burger-n-block-connaught-place-delhi-467579",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "387312",
      name: "Wat-A-Burger! - India Ka Burger",
      cloudinaryImageId: "bngnkrkz1rxbifxpesfd",
      locality: "Krishna Nagar",
      areaName: "Krishna Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Burgers",
        "Fast Food",
        "Continental",
        "American",
        "Beverages",
        "Desserts",
      ],
      avgRating: 3.8,
      parentId: "471020",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wat-a-burger-india-ka-burger-krishna-nagar-delhi-387312",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "348147",
      name: "Tibb's Frankie - Serving Rolls Since 1969",
      cloudinaryImageId: "z2t92bttwsgx3aiatuui",
      locality: "2nd Phase",
      areaName: "Model Town 2",
      costForTwo: "₹200 for two",
      cuisines: ["Rolls & Wraps", "Fast Food"],
      avgRating: 4.1,
      parentId: "472083",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 06:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/tibbs-frankie-serving-rolls-since-1969-2nd-phase-model-town-2-delhi-348147",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "22702",
      name: "Berco's -If You Love Chinese",
      cloudinaryImageId: "3344b8e498281fdcd461dc1b5f3b44d5",
      locality: "East Patel Nagar",
      areaName: "East Patel Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Chinese", "Thai", "Asian"],
      avgRating: 4.2,
      parentId: "471817",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-east-patel-nagar-delhi-22702",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396100",
      name: "NOTO - Ice Creams & Desserts",
      cloudinaryImageId: "81ac87e5c89c16adc867be38ce5a1ba3",
      locality: "Tagore Park",
      areaName: "Model Town 1",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "468478",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 8.4,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "8.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-tagore-park-model-town-1-delhi-396100",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "424197",
      name: "Juicy Lucy Burgers",
      cloudinaryImageId: "o6dxv5aqg0yndsncubwl",
      locality: "Kirti Nagar",
      areaName: "Kirti Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "American",
        "Fast Food",
        "Continental",
        "Italian",
        "Pizzas",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "289269",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/juicy-lucy-burgers-kirti-nagar-delhi-424197",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "20019",
      name: "Hudson Chopsticks",
      cloudinaryImageId: "l3clh7uogyqu8b4igg9r",
      locality: "Delhi University",
      areaName: "GTB Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "Thai",
        "Asian",
        "Snacks",
        "Tibetan",
        "Nepalese",
        "Seafood",
        "Beverages",
        "Desserts",
        "Barbecue",
        "Grill",
        "Fast Food",
      ],
      avgRating: 4.3,
      parentId: "7129",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 7,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hudson-chopsticks-university-gtb-nagar-delhi-20019",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "317998",
      name: "Khadak Singh Da Dhaba",
      cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
      locality: "Karkardooma",
      areaName: "Karkardooma",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Mughlai", "Tandoor"],
      avgRating: 4.1,
      parentId: "13170",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-karkardooma-delhi-317998",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "85711",
      name: "Nirula's",
      cloudinaryImageId: "a66fa8f5befa65947d9e20f29a863ce0",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹500 for two",
      cuisines: ["Ice Cream", "Pizzas", "Fast Food"],
      avgRating: 4.3,
      parentId: "1738",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 02:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nirulas-connaught-place-delhi-85711",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "44217",
      name: "Giani",
      cloudinaryImageId: "b9f3278aa437785772e368cfe584b342",
      areaName: "Model town 2",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "415",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 9,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "9.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-11 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/giani-model-town-2-delhi-44217",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  console.log("hey i am here");
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantsInfo.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id} // using key inside map is a good practice, it optimizes the rendering, uisng indexes is 
            imageId={restaurant.info.cloudinaryImageId}
            restaurantName={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            cost={restaurant.info.costForTwo}
            rating={restaurant.info.avgRatingString}
            time={restaurant.info.sla.slaString}
          />
        ))}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<Applayout />);

// const reactElement = (
//   <h1> hey i am a react element</h1>
// )

// a function which returning any JSX or reactElement are called fucntional component.
// below all three are same thing
// const component1 = () => <h1> hey i am a component </h1>

// const component2 = () => {
//   return <h1> hey i am a component </h1>
// }

// const component3 = () => { // if you are using curly braces then you need to write a return statement
//   return (
//     <h1> hey i am an another component </h1> // this JSX which is equivalent to react.createElement
//   )
// }

// const component4 = () => ( if you are writting JSX in multiple line then you need parenthesis
//   <h1>
//     hey i am a component
//   </h1>
// )
