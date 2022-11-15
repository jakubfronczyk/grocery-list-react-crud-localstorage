import React from 'react'
import { FaEdit, FaTrash} from "react-icons/fa"

const List = ({items, removeItem, editItem, doneItem}) => {

    return (
        <div className='grocery-list'>
            {items.map((item)=>{
                const {id, title, done} = item
                return (
                    <article key={id} className="grocery-item">
                        <p className={done ?'title done' : 'title'} onClick={()=>doneItem(id)}>{title} </p>
                        <div className='btn-container'>
                            <button type='button' className='edit-btn' onClick={()=>editItem(id)}>
                                <FaEdit />
                            </button>
                            <button 
                                type='button' 
                                className='delete-btn' 
                                onClick={()=>removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    );
}

export default List;
