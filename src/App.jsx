const products=[
  {title:'cabbage', isFruit:false, id:1},
  {title:'Garlic', isFruit:false, id:2},
  {title:'Apple', isFruit:false, id:3},
];
function ShoppingList(){
  const ListItems = products.map(products=>
    <li
    key={products.id}
    style={{
      color:products.isFruit ? 'magenta':'darkgreen'
    }}
    >
      {products.title}

      


    </li>

  )
}