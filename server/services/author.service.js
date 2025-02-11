const authors = [
  {
    id: 1,
    name: "Amit",
  },
  {
    id: 2,
    name: "Rohit",
  },
];

export class AuthorService {
  getAllAuthors(call, callback) {
    return callback(null, {
      data:authors,
    });
  }

  findAuthorById(call, callback) {
    const id = call.request.author_id;
    let error = null;

    const author = authors.find((a) => a.id == id);

    if (!author) {
      error = new Error("Author not found !");
    }

    return callback(null, {
      author,
    });
  }
}
