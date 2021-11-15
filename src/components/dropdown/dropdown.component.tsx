import { handler } from 'handlers';
import { IDropDown } from 'types';

export const Dropdown = ({ users, setUsers }: IDropDown) => {
  return (
    <div className="dropdown">
      <select
        onChange={(e) => handler.selectHandler(e, users, setUsers)}
        className="dropdown__select"
      >
        <option value="head">sort</option>
        <option value="date">by date</option>
        <option value="like">by likes</option>
        <option value="tail">none</option>
      </select>
    </div>
  );
};
