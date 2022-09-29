import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { localStorageNote } from '../../const';
import './AddForm.scss';



function AddForm() {
    const { set, get } = localStorageNote("NOTE_ITEM")
    const [titleWarning, setTitleWarning] = useState();
    const [dateWarning, setDateWarning] = useState();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const checkValiDate = () => {
        if (!title) {
            setTitleWarning("Bạn chưa nhập nội dung");
            return false;
        }
        if (!date) {
            setDateWarning("Bạn chưa nhập ngày nhắc");
            return false;
        }
        return true;
    };
    const submitForm = (e) => {
        e.preventDefault();
        const isValid = checkValiDate();
        if (isValid) {
            const newTask = {
                title,
                date,
                id: uuidv4(),
            };
            const List = JSON.parse(get());
            set([newTask, ...List]);
        }
    };
    return (
        <div className="add">
            <div className="add-form">
                <div className="form-title">
                    <label htmlFor="" className="form-label">
                        Nội Dung
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Nhập nội dung của ngày"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }} />
                </div>
                <br />
                <div className="form-date">
                    <label htmlFor="" className="form-label">Ngày nhắc</label>
                    <input type="date"
                        className="form-input" 
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}/>
                    <button type="btn" className="btn" onClick={submitForm}>Lưu Ngày</button>
                </div>
                <div className="form-danger">
                    <span>{!title ? titleWarning : ""}</span>
                    <span>{!date ? dateWarning : ""}</span>
                </div>
            </div>
        </div>
    )
}

export default AddForm;