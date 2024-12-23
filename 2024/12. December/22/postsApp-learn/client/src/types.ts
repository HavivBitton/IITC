export interface Comment {
  content: string;
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  comments: Comment[];
}

export interface PostResponse {
  post: Post;
}
