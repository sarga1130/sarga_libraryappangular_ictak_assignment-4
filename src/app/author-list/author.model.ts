export class AuthorModel{
    constructor(
        public _id: String,
        public authorID: number,
        public authorname: String,
        public genre: String,
        public imageUrl : String
    ){}
}