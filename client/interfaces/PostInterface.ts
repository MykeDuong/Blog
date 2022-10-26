export default interface PostInterface {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  author: {
    _ref: string;
    _type: string;
  };
  _createdAt: Date;
  _updatedAt: Date;
  _id: string;
}