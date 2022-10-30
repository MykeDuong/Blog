interface TagInterface {
  title: string;
}

export default interface PostInterface {
  title: string;
  tags: TagInterface[];
  slug: {
    current: string;
    _type: string;
  };
  mainImageUrl: string;
  body: any;
  author: {
    name: string;
  };
  _createdAt: Date;
  _updatedAt: Date;
  _id: string;
}