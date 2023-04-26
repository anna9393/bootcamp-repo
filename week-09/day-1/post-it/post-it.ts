
// create a PostIt class and create few examples post-it objects
class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor = "unknown",
        text = "unknown",
        textColor = "unknown") {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

//let myObject1 = new PostIt('orange', 'Idea1', 'blue');
//let myObject2 = new PostIt('pink', 'Awesome', 'black');
//let myObject3 = new PostIt('yellow', 'Superb!', 'green');

//console.log(myObject1, myObject2);
//myObject1.text = 'Change Text';
//console.log(myObject1);

// create BlogPost class with few blog post objects
// BlogPost class should have authorName, title, text, publicationDate

export class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string

    constructor(author = 'unknown',
        bookTitle = 'unknown',
        text = 'unknown',
        publicationDate = 'unknown') {
        this.authorName = author;
        this.title = bookTitle;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}