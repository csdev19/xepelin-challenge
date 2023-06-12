type GenericFields = {
  id: number;
  createdBy?: number | null;
  updatedBy?: number | null;
  deletedBy?: number | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt?: string | null;
};

export type GenericTable<T> = T & GenericFields;
