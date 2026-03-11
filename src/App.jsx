const products=[
  {title:'cabbage', isFruit:false,id:1},
  {TITLE:'Garlic',isFruit:false, id:2},
  {title:'Apple', isFruit:true, id:3},
];
 
function ShoppingList(){
  const ListItems =products.map(products=>
    <li 
    key={products.id}
    style={{
      color:products.isFruit ? 'magenta': 'darkgreen'
    }}
    >
      {products.title}

    </li>
  );
  return (
    <>
    <h1> My Shopping List </h1>
    <ul> {ListItems}  </ul>
    </>
  )
}
export default ShoppingList;