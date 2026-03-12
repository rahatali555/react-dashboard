const products=[
  { title:'cabbage', isFruit:false, id:1},
  { title:'carrot', isFruit:false, id:2},
  { title:'Apple', isFruit:true, id:3},
];
 export default  function BusinessList(){
const listItem= [];
for(let i=0;i<products.length; i++){
 const  product=products[i];
  listItem.push(
  <li 
  key={
  product.id
  }
  style={{
    color:product.isFruit ? "magenta" : 'darkgreen'
  }}
  >
    {product.title}

  </li>
)
}
return(
  <ul>
    {listItem}
  </ul>
)

}