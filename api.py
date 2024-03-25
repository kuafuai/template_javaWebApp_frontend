from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample book data
books = [
    {
        "title": "Book 1",
        "author": "Author 1",
        "publisher": "Publisher 1",
        "callNumber": "123456",
        "isbn": "978-1-2345-6789-0",
        "views": 100
    },
    {
        "title": "Book 2",
        "author": "Author 2",
        "publisher": "Publisher 2",
        "callNumber": "654321",
        "isbn": "978-0-9876-5432-1",
        "views": 200
    }
]

@app.route("/api/bookData", methods=["GET"])
def get_book_data():
    return jsonify(books)

@app.route("/api/bookData", methods=["POST"])
def add_book_data():
    new_book = request.get_json()
    books.append(new_book)
    return jsonify({"message": "Book added successfully"})

if __name__ == "__main__":
    app.run()
