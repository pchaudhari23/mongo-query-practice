// CREATE:
// 1. Insert a new listing with the following details:  
// {
//   "name": "Charming Beachfront Studio",
//   "location": "Lisbon, Portugal",
//   "price": { "$numberDecimal": "100.00" },
//   "accommodates": 2,
//   "bedrooms": 1,
//   "review_scores": {
//     "review_scores_cleanliness": 10,
//     "review_scores_communication": 9,
//     "review_scores_location": 9
//   },
//   "listing_url": "https://www.airbnb.com/rooms/newlisting",
//   "summary": "Beautiful beachfront studio with modern amenities in Lisbon.",
//   "property_type": "Apartment",
//   "room_type": "Entire home/apt",
//   "minimum_nights": 2,
//   "maximum_nights": 30,
//   "amenities": [
//     "TV",
//     "Air conditioning",
//     "WiFi"
//   ],
//   "security_deposit": { "$numberDecimal": "150.00" },
//   "cleaning_fee": { "$numberDecimal": "25.00" },
//   "extra_people": { "$numberDecimal": "20.00" },
//   "host": {
//     "host_id": "newhost123",
//     "host_name": "John Doe"
//   },
//   "address": {
//     "street": "Lisbon, Portugal",
//     "country": "Portugal",
//     "location": {
//       "type": "Point",
//       "coordinates": [ -9.1395, 38.7223 ]
//     }
//   },
//   "availability": {
//     "availability_30": 28,
//     "availability_365": 200
//   }
// }

// 2.Add a new review to the listing with `_id` "10006546" from a reviewer named "John Doe". The review should have a rating of 8 for cleanliness, 9 for communication, and the comment should read: "Great stay! Perfect location and very cozy."

// -----------------------------------------------------------------------------------------------------------------------------

// READ:
// 3.Find all listings in the `listingsAndReviews` collection where the property type is "House" and the price is less than 100.
// 4.Retrieve all listings where the host's name is "Ana&Gonçalo" and the listing has more than 50 reviews.
// 5.Find all listings where the `review_scores_rating` is above 85 and display their names, prices, and review scores.

// -----------------------------------------------------------------------------------------------------------------------------

// UPDATE:
// 6.Update the "Ribeira Charming Duplex" listing to set the `maximum_nights` to 60 and the `cleaning_fee` to 40.
// 7.Add a new amenity, "Free WiFi", to the listing with `_id` "10006546".
// 8.Change the `host_is_superhost` field to `true` for the listing with `_id` "10006546" if it currently has less than 100 reviews.

// -----------------------------------------------------------------------------------------------------------------------------

// DELETE:
// 9.Delete the listing with `_id` "10006546" from the `listingsAndReviews` collection.
// 10.Delete all reviews for the listing with `_id` "10006546" that were written before 2017.

// -----------------------------------------------------------------------------------------------------------------------------