export interface Reading {
  tagId: number;
  title: string;
  path: string;
  description: string;
  notes: string;
  type: string;
  date: Date;
  decimalValue: number;
  stringValue?: any;
  booleanValue?: any;
  kindName: string;
  kindNotes: string;
}
