
async function generateStaticParams() {
  let res=await fetch('http://localhost:3000/cv2');
  let ret=await res.json();
  
  var ads=ret.map((k)=>(
   {slug:k.id.toString()}
    
    ))
  
    return ads
 
}
export default async function Silver({params}) {
 

  const {slug}=params;
  
  const g=await fetch(`http://localhost:3000/cv2/${slug}`);
  const g1=await g.json();

  return (
    <div>
      <h1>{g1.city}</h1><br />
      <h2>{g1.contry}</h2>
    </div>
  )
}
