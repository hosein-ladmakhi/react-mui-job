export type TCategory = {
   name: string;
   parent?: TCategory;
   childrens: TCategory[];
   id: number;
};

export type TCategories = TCategory[];
