
import { BlogPost } from "./post-it";

class Blog {
    readonly listOfBlogPosts: BlogPost[] = [];

    add(BlogPost: BlogPost) {
        this.listOfBlogPosts.push(BlogPost);
    }

    delete(index: number) {
        this.listOfBlogPosts.splice(index, 1);
    }

    update(index: number, BlogPost: BlogPost) {
        this.listOfBlogPosts.splice(index, 1, BlogPost);
    }
}

let myListOfBlogPosts = new Blog();
let firstPost = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04');
let secondPost = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10');
let thirdPost = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump',
    "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.",
    '2017.03.28');

myListOfBlogPosts.add(firstPost);
myListOfBlogPosts.add(secondPost);
console.log(myListOfBlogPosts);

myListOfBlogPosts.update(0, thirdPost);
console.log(myListOfBlogPosts);

myListOfBlogPosts.delete(1);
console.log(myListOfBlogPosts);