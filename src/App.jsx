const products= [
  { title:'cabbage', isFRUIT:false, id:1 },
  { title:'garlic', isFRUIT:false, id:2},
  { title:'Apple', isFRUIT:true, id:3 },
];
export default function ShoppingList(){
  const listItems=[];
  for(let i=0; i<products.length;i++){
    const product= products[i];
  listItems.push(
    <li 
    key={product.id} 
    style={{
      color: product.isFRUIT ? 'magenta': 'darkgreen'
    }}
    >
      {product.title}

    </li>
    
  )}
  return(
    <ul>
    {listItems}
    </ul>
  )
}