export enum SelectedPage {
    Home = "home",
    Book = "book",
    stories = "stories",
  }

export interface CardInterface {
  title: string,
  content: string,
} 

export interface PostCardInterface {
  title: string,
  image: string,
  likes: string,
  reactions: string,
  time: string,
  date: string,
  slug: string,
  category: string
} 
