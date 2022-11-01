interface TagInterface {
  title: string;
}

interface SectionInterface {
  sectionName: string;
  body: any[]
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
  sections: SectionInterface[];
  _createdAt: Date;
  _updatedAt: Date;
  _id: string;
}