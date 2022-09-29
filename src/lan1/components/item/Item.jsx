import { useEffect, useState } from 'react';
import { localStorageKey, localStorageNote } from '../../const';
import { v4 as uuidv4 } from "uuid";
import './Item.scss';


function Item(props) {
  const { id } = props;
  const { set, get } = localStorageNote(localStorageKey.noteItem, []);
  const [itemNote, setItemNote] = useState({
    id: uuidv4(),
    title: "",
    date: "",
  });
  useEffect(() => {
const List = JSON.parse(get());
const item = List.find((item) => item.id === id);
setItemNote(item);
  }, [id]);
  const handleDelete = (e) => {
    e.preventDefault();
    const List = JSON.parse(get());
    const index = List.findIndex((item) => item.id === id);
    List.splice(index,1);
    set(List);
  };
  return (
    <div className="item-note">
      <div className="title">Ngày: {props.date}</div>
      <div className="content">{props.title}</div>
      <span className="btn-clear" onClick={handleDelete}>
        x
      </span>
    </div>
  );
}

export default Item;