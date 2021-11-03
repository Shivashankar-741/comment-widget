// export const obj: IObj = {
//   name: '',
//   comment: '',
//   id: '',
//   like: 0,
//   disLike: 0,
//   date: '',
//   child: [],
// };

export interface IObj {
  name: string | null;
  comment: string;
  id: string;
  like: number;
  disLike: number;
  date: Date;
  child: IObj[];
}
