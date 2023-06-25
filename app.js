import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4Z6Ln3yy6_BXXdVMGJWuyCrilJEL55Jr0Q&usqp=CAU"
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

const resList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "9608",
            "name": "Brahmins' Thatte Idli",
            "uuid": "1864c61b-e34c-4ca2-8b5b-c372a1c75c44",
            "city": "1",
            "area": "Sanjaynagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "azgtwzbi2xzs1qjw0gir",
            "cuisines": [
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "slaString": "20 MINS",
            "lastMileTravel": 2.200000047683716,
            "slugs": {
                "restaurant": "brahmins-thatte-idli-sanjay-nagar-sanjay-nagar-new-bel-road-yeshwanthpur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "106/B, 80 Feet Road, Opposite Canara Bank, Ashwath Nagar, Sanjay Nagar, Next to BHL Courier, Bangalore",
            "locality": "Armane Nagar",
            "parentId": 1312,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7180085~p=16~eid=00000188-f0cf-422b-0ae2-6770003c101d~srvts=1687667294763",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹65",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "9608",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "lastMileTravel": 2.200000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "2415",
            "name": "Veena Stores",
            "uuid": "450ddba7-89d1-4317-91a9-d3e559f56587",
            "city": "1",
            "area": "Malleshwaram",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "vt1mquaxmeugaf9dl5pp",
            "cuisines": [
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 41,
            "minDeliveryTime": 41,
            "maxDeliveryTime": 41,
            "slaString": "41 MINS",
            "lastMileTravel": 3.5999999046325684,
            "slugs": {
                "restaurant": "veena-stores-malleshwaram",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#187, 15th Cross, Margosa Road, Malleshwaram",
            "locality": "Margosa Road",
            "parentId": 20940,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3300,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3300",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "2415",
                "deliveryTime": 41,
                "minDeliveryTime": 41,
                "maxDeliveryTime": 41,
                "lastMileTravel": 3.5999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.6",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "47385",
            "name": "Priyadarshini Grand",
            "uuid": "cbca89ad-df12-4303-a7d2-baadc5700ff8",
            "city": "1",
            "area": "Basaveshwara Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "c9elzh8awx7jcx70cood",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chaat",
                "Chinese",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 6.300000190734863,
            "slugs": {
                "restaurant": "priyadarshini-grand-basaveshwaranagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "315, Siddhaiah Puranik Road, Basaveshwara Nagar, Bangalore - 560020",
            "locality": "Siddhaiah Puranik Road",
            "parentId": 9727,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5100,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "47385",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 6.300000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.5",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "607314",
            "name": "Namaste",
            "uuid": "c1cb37f3-4813-4c5c-8a33-847206fcb47e",
            "city": "1",
            "area": "Vijayanagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "dzacemjl8oskvogrxpyw",
            "cuisines": [
                "South Indian",
                "Thalis",
                "Snacks",
                "Biryani",
                "Indian",
                "Chinese",
                "Desserts",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "slaString": "42 MINS",
            "lastMileTravel": 9.199999809265137,
            "slugs": {
                "restaurant": "namaste-vijayanagar-vijayanagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#80, Marenahalli Main Road, Vijayanagar 560040",
            "locality": "Marenahalli Main Road",
            "parentId": 366271,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 8700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 8700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "8700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "9.1 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "607314",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "lastMileTravel": 9.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "255657",
            "name": "Udupi Ruchi Grand",
            "uuid": "cecdd19c-9dd9-4ae3-9418-12b6603ecd0d",
            "city": "1",
            "area": "Yeshwantpur",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "xqgmbmmhbq1erowdflxl",
            "cuisines": [
                "South Indian",
                "Chinese",
                "North Indian",
                "Chaat",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 5.5,
            "slugs": {
                "restaurant": "udupi-ruchi-grand-yeshwanthpur-yeshwanthpur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "UDUPI RUCHI GRAND- Yeshwanthapura, Kanteerava Studio Main Road, 2nd Stage, Yeshwanthpur Industrial Suburb, Yeswanthpur, Bengaluru, Karnataka, India",
            "locality": "2nd Stage",
            "parentId": 21444,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4500,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4500,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4500",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "255657",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 5.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "12811",
            "name": "A2B - Adyar Ananda Bhavan",
            "uuid": "98beafb7-bcd1-4b47-8a97-b2ecc9fe445b",
            "city": "1",
            "area": "Malleshwaram",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "p83qsieiviigule1hnuf",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Sweets",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 4.199999809265137,
            "slugs": {
                "restaurant": "a2b-veg-malleshwaram-malleshwaram",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#57 Sampige Road, 6th Cross, Malleswaram, Bangalore - 560003",
            "locality": "Sampige Road",
            "parentId": 22,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7173444~p=31~eid=00000188-f0cf-422b-0ae2-6775003c1f2c~srvts=1687667294763",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.1 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "12811",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 4.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "131847",
            "name": "Patil Vegetarian",
            "uuid": "43ab9f34-1ed7-43e7-b4b3-574b43f0d0cb",
            "city": "1",
            "area": "Jalahalli-Peenya",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "be9170bfb7debe777cc8a70f370d04aa",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 6.900000095367432,
            "slugs": {
                "restaurant": "patil-vegetarian-sm-road-jalahalli-peenya",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Near-Imex Telecom, Cauvery Complex, S M Road, Prashanth Nagar, Jalahalli, Bengaluru, Karnataka 560057",
            "locality": "Prashanth Nagar",
            "parentId": 156374,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5100,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "131847",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 6.900000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "556118",
            "name": "The Filter Coffee",
            "uuid": "e29f4071-650c-4c06-b56a-1dbb54306d86",
            "city": "1",
            "area": "Sanjay Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "omptcztnc8roueqnjdhp",
            "cuisines": [
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 40,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 40,
            "slaString": "40 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "the-filter-coffee-sanjay-nagar,-new-bel-road-sanjay-nagar,-new-bel-road",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO. 1, PID No.019-M0021-21, 3rd Floor,KALPANA CHAWLA ROAD, BHOOPASANDRA, HEBBAL, BENGALURU, PIN 560 094",
            "locality": "Bhoopasandra",
            "parentId": 21001,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3300,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3300",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7044111~p=13~eid=00000188-f0cf-422b-0ae2-676f003c0d16~srvts=1687667294763",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "556118",
                "deliveryTime": 40,
                "minDeliveryTime": 40,
                "maxDeliveryTime": 40,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.5",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "72350",
            "name": "Vishnu Garden",
            "uuid": "bfbd0f0e-05cf-4a9a-87af-c946d1c96d62",
            "city": "1",
            "area": "R.T. Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "q1yoajwctcy33cjhregi",
            "cuisines": [
                "Chinese",
                "South Indian",
                "North Indian"
            ],
            "tags": [],
            "costForTwo": 25100,
            "costForTwoString": "₹251 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 4.199999809265137,
            "slugs": {
                "restaurant": "vishnu-garden-rt-nagar-rt-nagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "r.t nagar main road",
            "locality": "Ganganagar",
            "parentId": 21653,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "72350",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 4.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "34298",
            "name": "Shanthi Sagar",
            "uuid": "f94de144-e58a-4e9a-8628-fdf250e08eaf",
            "city": "1",
            "area": "New BEL Road",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cn807cbul0jomdpztpt7",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Thalis",
                "Indian",
                "Home Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0.800000011920929,
            "slugs": {
                "restaurant": "shanthi-sagar-sanjay-nagar-new-bel-rd-yeshwanthpur-sanjay-nagar-new-bel-road",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#34/4,new bel road, devasandra, dollars colony circle. blore-54",
            "locality": "Dollars Colony",
            "parentId": 4260,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "34298",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 0.800000011920929,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "178844",
            "name": "Paakashala",
            "uuid": "e5a85546-3724-4544-885d-6805de4871cd",
            "city": "1",
            "area": "Malleshwaram",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "jyzwtqfafamnkneqbx7q",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 4,
            "slugs": {
                "restaurant": "paakashala-malleshwaram-malleshwaram",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "No. 598, Sampige Road, 15th Cross, Vyalikaval, Kodandarapura, Malleshwaram, Bengaluru - 560003",
            "locality": "Vyalikaval",
            "parentId": 6959,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "178844",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 4,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "210099",
            "name": "Amma Pastries",
            "uuid": "80c7293c-c01f-4c72-8829-d32b2e541715",
            "city": "1",
            "area": "Nagarbhavi",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "vztt7igsrtqvoxcfgwzx",
            "cuisines": [
                "Desserts",
                "Indian",
                "Snacks",
                "Sweets"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 9.5,
            "slugs": {
                "restaurant": "holige-mane-brahmins-bakery-basavanagudi-basavanagudi",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "39 opp reliance fresh moodalapalya circle nagara bhavi main road Bengaluru",
            "locality": "Mudalapalya Circle",
            "parentId": 388842,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 8700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 8700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "8700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "9.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "210099",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 9.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3368",
            "name": "Truffles",
            "uuid": "6cb747e4-bf98-442c-a3c6-004ef92587b8",
            "city": "1",
            "area": "New BEL Road",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "cuisines": [
                "American",
                "Desserts",
                "Italian",
                "Continental"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
                "restaurant": "truffles-ice-spice-sanjay-nagar-new-bel-road-yeshwanthpur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "84, 80 Feet Road, RMV 2nd Stage, New BEL Road, Bangalore",
            "locality": "Ms Ramaiah Nagar",
            "parentId": 218065,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7180191~p=19~eid=00000188-f0cf-422b-0ae2-6771003c131a~srvts=1687667294763",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "3368",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 1.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "173590",
            "name": "Vijayalakshmi Veg",
            "uuid": "fad04005-64af-4024-be09-59ec2fed5c67",
            "city": "1",
            "area": "Malleshwaram",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "jexqhtczrjygqf1qregs",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Fast Food"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 4.300000190734863,
            "slugs": {
                "restaurant": "vijayalakshmi-veg-malleshwaram",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "no 24/2 3rd main 10th cross Margosa road bangalore malleshwaram BBMP north bangalore 560003",
            "locality": "Margosa Road",
            "parentId": 20046,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "173590",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 4.300000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "196047",
            "name": "New Taj Darbar",
            "uuid": "94a6fc19-e819-4450-b52f-a96c5a32d565",
            "city": "1",
            "area": "Shivajinagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
            "cuisines": [
                "Biryani",
                "Indian",
                "Chinese",
                "Tandoor",
                "Seafood"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 55,
            "minDeliveryTime": 55,
            "maxDeliveryTime": 55,
            "slaString": "55 MINS",
            "lastMileTravel": 8.300000190734863,
            "slugs": {
                "restaurant": "new-taj-darbar-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "New Taj Darbar, Shivaji Nagar, Bengaluru, Karnataka, India",
            "locality": "Saint Mary's Church Road",
            "parentId": 148190,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 7200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 7200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "7200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "8.3 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "196047",
                "deliveryTime": 55,
                "minDeliveryTime": 55,
                "maxDeliveryTime": 55,
                "lastMileTravel": 8.300000190734863,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    }
];
 
const RestaurantCard = (props) => { //Destructuring on the Fly

    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.data;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>Rs.{costForTwo /100} FOR TWO.</h4>
      <h5>{cuisines.join(', ')}</h5>
      <h6>{avgRating} ⭐</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((res) => 
            <RestaurantCard key={res.data.id} resData={res}/>    
         )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
