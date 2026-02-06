export interface Category {
  id?: number;
  name: string;
  parent?: Category;
}

export interface Article {
  id?: number;
  title: string;
  content: string;
  category: Category;
  createdAt?: string;
  updatedAt?: string;
}

export interface Entry {
  id?: number;
  title: string;
  content: string;
  article: Article;
  createdAt?: string;
}