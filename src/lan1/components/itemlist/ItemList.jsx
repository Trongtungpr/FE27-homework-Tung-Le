import { useEffect, useState } from "react";
import { localStorageKey, localStorageNote } from "../../const";
import Item from "../item/Item";



function ItemList(props) {
  const {id} = props;
  const {get} = localStorageNote(localStorageKey.noteItem, []);
  const [listData, setListData] = useState([]);
useEffect(() => {
  const List = JSON.parse(get());
  setListData(List);
}, [id]);
    return (
        <div className="note-list">
          {listData.map((item, key) => {
            return (
              <Item
                key={key}
                id={item.id}
                title={item.title}
                date={item.date}
              />
            );
          })}
        </div>
      );
}

export default ItemList;