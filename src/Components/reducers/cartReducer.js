import Item1 from './../../Images/blackWithYellowTrim.jpeg'
import Item2 from './../../Images/BlueBlackLongSleaveGrayTrim.jpg'
import Item3 from './../../Images/grayButtonUpRedSleave.jpg'
import Item4 from './../../Images/TacosAndPeace.jpg'
import Item5 from './../../Images/pinkShortSleaveButtonUp.jpeg'
import Item6 from './../../Images/whiteLongSleaveBlackTrim.jpg'
import { ADD_TO_CART} from '../actions/action-types/cart-actions'



const initState = {
    items: [
        {id:1,title:'', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:73,img:Item1},
        {id:2,title:'', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:35,img: Item2},
        {id:3,title:'', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:55,img: Item3},
        {id:4,title:'', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:40,img:Item4},
        {id:5,title:'', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:65,img: Item5},
        {id:6,title:'', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:80,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer = (state = initState,action) => {
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else
  {
      return state
  }

}
export default cartReducer;