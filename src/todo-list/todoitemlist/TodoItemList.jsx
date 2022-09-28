import './TodoItemList.scss'
import naraka_1 from '../assets/Naraka_ (2).jpg';
import naraka_2 from '../assets/Naraka_ (3).jpg';
import naraka_3 from '../assets/Naraka_ (4).jpg';
import naraka_4 from '../assets/Naraka_ (5).jpg';
import TodoItem from '../todoitem/TodoItem';

const TodoList = [
  {
    img: naraka_1,
    title: 'Family safari vacation to the home of the gods',
    creator: 'Norman Clark',
    description:
      'The Emerald Buddha is a figurine of a sitting Budha, that is the palladium of Thailand. The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the.',
  },
  {
    img: naraka_2,
    title: 'Travelagent India',
    creator: 'Florence Keller',
    description:
      'For many women, visiting the skin care aisle at the drugstore can be as intimidating as ordering from all the complicated hot beverages an offer at the trendy local coffee shop...',
  },
  {
    img: naraka_3,
    title: 'Perfect scrambled eggs',
    creator: 'Florence Keller',
    description:
      'Using the simple tips to demystify your most common skin care problems, your perfect skin solution should become clear. That is the palladium of the Kingdom of Thailand...',
  },
  {
    img: naraka_4,
    title: 'Famous names in barbecue',
    creator: 'Florence Keller',
    description:
      'The Emerald Buddha is a figurine of a sitting Budha, that is the palladium of Thailand. The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the.',
  },
]

const TodoItemList = function () {
  return (
    <div className="todo-item-list">
      {TodoList.map((item, index) => {
        return (
          <TodoItem
            key={index}
            id={index + 1}
            img={item.img}
            title={item.title}
            creator={item.creator}
            description={item.description}
          />
        )
      })}
    </div>
  )
}

export default TodoItemList;