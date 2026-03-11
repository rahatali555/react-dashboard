const products=[
  {title:'cabbage', isFruit:false, id:1},
  {title:'Garlic', isFruit:false, id:2},
  {title:'Apple', isFruit:false, id:3},
];
 export default function ShoppingList(){

  const listItems=[];

  for( let i=0;i < products.length;i++){
    const product= products[i];
    listItems.push(
      <li 
       key={product.id}
       style={{
         color: product.isFruit ? "magenta" : "darkgreen"
       }}
       >
        {product.title}


      </li>
    )

  }
  return(
    <ul> {listItems} </ul>
  )
}