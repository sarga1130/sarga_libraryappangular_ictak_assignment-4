export class ProductModel{
    constructor(
        public _id: String,
        public bookID: number,
        public book: String,
        public author: String,
        public genre: String,
        public imageUrl : String
    ){}
}