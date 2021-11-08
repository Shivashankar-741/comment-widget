export interface IUser {
  name: string | null;
  comment: string;
  id: string;
  like: number;
  disLike: number;
  date: Date;
  child: IUser[];
  isEdit: boolean;
}
