export interface Post {
  _typename: "Post";
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  date: string;
  content: string;
  description: string;
  categories?: Category[];
}

export interface Category {
  _typename: "Category";
  id: string;
  name: string;
}

export interface Snippet {
  _typename: "Snippet";
  id: string;
  slug: string;
  title: string;
  description: string;
}
