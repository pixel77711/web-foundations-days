
# Library Books REST API

## Base URL

`https://api.example.com`

## Endpoints

### 1. List All Books
- **Method:** GET
- **Path:** `/books`
- **Description:** Returns a list of all books in the library.
- **Success status:** `200 OK`

### 2. Get One Book
- **Method:** GET
- **Path:** `/books/{id}`
- **Description:** Returns the details of a book with the specified ID.
- **Success status:** `200 OK`

### 3. Create a Book
- **Method:** POST
- **Path:** `/books`
- **Description:** Adds a new book to the library.
- **Example request body:**
  ```json
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "year": 1958
  }
  ```
- **Success status:** `201 Created`

### 4. Update a Book
- **Method:** PUT
- **Path:** `/books/{id}`
- **Description:** Replaces the details of an existing book.
- **Example request body:**
  ```json
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "year": 1958
  }
  ```
- **Success status:** `200 OK`

### 5. Delete a Book
- **Method:** DELETE
- **Path:** `/books/{id}`
- **Description:** Deletes a book with the specified ID.
- **Success status:** `204 No Content`

### 6. List Books by Author
- **Method:** GET
- **Path:** `/books?author=Chinua%20Achebe`
- **Description:** Returns books written by the specified author.
- **Success status:** `200 OK`

## Error Codes

### 400 Bad Request
- **Description:** The request contains invalid or missing data.
- **Example:** Creating a book without a required title.

### 404 Not Found
- **Description:** The requested resource does not exist.
- **Example:** Requesting `/books/999` when book 999 does not exist.
