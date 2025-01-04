// CREATE:
// 1.Insert a new customer document with the following information:  
// {
//   "username": "jdoe",
//   "name": "John Doe",
//   "address": "1234 Elm St, Springfield, IL 62701",
//   "birthdate": { "$date": "1985-12-15T00:00:00.000Z" },
//   "email": "johndoe@example.com",
//   "active": true,
//   "accounts": [ 371138, 324287 ],
//   "tier_and_details": {
//     "abc123": {
//       "tier": "Silver",
//       "id": "abc123",
//       "active": true,
//       "benefits": ["priority support"]
//     }
//   }
// }

// 2.Insert a new transaction in the `transactions` collection for account `371138` with the following data:  
// {
//   "account_id": 371138,
//   "transaction_count": 1,
//   "bucket_start_date": { "$date": "2023-01-01T00:00:00.000Z" },
//   "bucket_end_date": { "$date": "2023-01-02T00:00:00.000Z" },
//   "transactions": [
//     {
//       "date": { "$date": "2023-01-01T12:00:00.000Z" },
//       "amount": 1000,
//       "transaction_code": "buy",
//       "symbol": "aapl",
//       "price": "150.00",
//       "total": "150000"
//     }
//   ]
// }

// -----------------------------------------------------------------------------------------------------------------------------

// READ:
// 3.Find all customers who are active and have an account with ID `371138`.
// 4.Retrieve all transactions from the `transactions` collection where the `symbol` is "ibm" and the `transaction_code` is "sell".
// 5.Find all customers who are associated with accounts that have "Derivatives" as a product.
// 6.Retrieve the names and email addresses of all customers who have a `tier_and_details` object with a tier of "Bronze".

// -----------------------------------------------------------------------------------------------------------------------------

// UPDATE:
// 7.Update the account with ID `371138` in the `accounts` collection to add a new product `"RealEstate"`. 
// 8.Update the customer document with `username: "fmiller"`, adding a new account ID `111111` to the `accounts` array.
// 9.Update the transaction with `account_id: 316726` where the `symbol` is "znga" to change the `transaction_code` to "buy" and the `amount` to 5000.

// -----------------------------------------------------------------------------------------------------------------------------

// DELETE:
// 10.Delete all transactions from the `transactions` collection where the `bucket_end_date` is before "2000-01-01T00:00:00.000Z".

// -----------------------------------------------------------------------------------------------------------------------------