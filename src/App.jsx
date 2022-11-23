import { useDb } from "./contextt/Appprovider"

const App = () => {
const {apiloading,apidata,apierror} = useDb();
if(apiloading){
  return <h6> ....data loading</h6>
} 
return(<>

 <div className="main">

{
  apidata.map((value, index)=>{
    const {title,body} = value;
    return  (<>
   
<div key={index} className="cart">
  <h3>{title}</h3>
  <p>{body}</p>
</div>
   
    
    
    </>)
  })
}
</div>
</>)
}

export default App