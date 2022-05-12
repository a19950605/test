step to run

1.npm install
2.npm start

**
All of these Api without error handling because of time limit, sorry for the mistake.
**

api endpoint:

create category: http://localhost:3001/api/category
method: post

sample input

```json
{
  "title": "pasta"
}
```

create item:http://localhost:3001/api/category
method: post

the item will take ref on category, so item cant be created without correct category,
but there is no error handling because of insufficient time

for the image, not sure need to handle the image upload or not, so just put the string as image input

sample input

```json
{
  "title": "Carbonara",
  "price": 35.0,
  "category": "pasta",
  "image": "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612"
}
```

to obtain the category call http://localhost:3001/api/category with get method
sample result

```json
[
  {
    "_id": "627c05b423fb46b05388900c",
    "title": "burger",
    "__v": 0
  },
  {
    "_id": "627c0d01d241ba3db8077a46",
    "title": "pasta",
    "__v": 0
  },
  {
    "_id": "627c0d1cd241ba3db8077a50",
    "title": "drink",
    "__v": 0
  },
  {
    "_id": "627c0d1cd241ba3db8077a4e",
    "title": "soup",
    "__v": 0
  },
  {
    "_id": "627c0d1cd241ba3db8077a4c",
    "title": "snacks",
    "__v": 0
  }
]
```

to get the items by specific category call http://localhost:3001/api/items with req body
{
"category":"burger"
}
then obtain the result with specific category

```json
[
  {
    "_id": "627c0ab1f2542bc9e926b442",
    "title": "CHEESE BURGER",
    "price": 35,
    "image": "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612",
    "category": "627c05b423fb46b05388900c",
    "__v": 0
  },
  {
    "_id": "627c0ec2a0e30bd38f4eaf05",
    "title": "burger1",
    "price": 35,
    "image": "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612",
    "category": "627c05b423fb46b05388900c",
    "__v": 0
  },
  {
    "_id": "627c0ec2a0e30bd38f4eaf07",
    "title": "burger1",
    "price": 35,
    "image": "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612",
    "category": "627c05b423fb46b05388900c",
    "__v": 0
  }
]
```

to get the single item call http://localhost:3001/api/item/:id
to obtain the specific item

```json
{
  "title": "CHEESE BURGER",
  "price": 35.0,
  "category": "burger",
  "image": "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612"
}
```
