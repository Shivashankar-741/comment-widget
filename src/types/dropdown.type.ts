import { Dispatch } from 'react';
import { IUser } from 'types';

export interface IDropDown {
  users: IUser[];
  setUsers: Dispatch<React.SetStateAction<IUser[]>>;
}
