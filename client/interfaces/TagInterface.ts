export default interface TagInterface {
  title: string;
  posts: {
    title: string;
    slug: {
      current: string;
    }
  }[];
  slug: {
    current: string;
  }
}