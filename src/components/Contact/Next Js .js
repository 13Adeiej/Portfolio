// import  { userouter} from './Next Js/route '
// function    DynamicRoute() {
//             const router = userouter()
//             const  productId1 = router.query.productId1 
//             return  <h1 > details of product  {productId1} </h1>

// }
// export default  DynamicRoute


///      static genration with  get static props 
 
function   userlist( ){
     return <h1> list of users</h1>
}
export default userlist
export async  function getstaticprops() {
     const response = await fetch( " link ")   // link is passed as argument 
     const data = response.json( )
     console.log(data)
}











