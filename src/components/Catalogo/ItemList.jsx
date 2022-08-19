import { memo } from 'react'
import Item from './Item'

const ItemList = memo(({itemx}) => {
  return(
    <div>
    {
        itemx.map((producto)=>
             <Item key={producto.id} idItem={producto.idItem} precio={producto.precio} stock={producto.stock} title={producto.title} url={producto.url} />
        )
    }
    </div>  
    )
}
)

export default ItemList
