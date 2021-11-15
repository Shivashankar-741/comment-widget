import { handler } from 'handlers';
import { IDropDown } from 'types';

export const Dropdown = ({ users, setUsers }: IDropDown) => {
  return (
    <div className="dropdown">
      <select
        onChange={(e) => handler.selectHandler(e, users, setUsers)}
        className="dropdown__select"
      >
        <option value="date">by recent</option>
        <option value="like">by like</option>
      </select>
    </div>
  );
};
