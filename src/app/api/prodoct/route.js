let lists=[
    {name:"kermanshah",contry:"iran"},
     {name:"landen",contry:"england"},
      {name:"dobay",contry:"emarat"},
       {name:"vian",contry:"otrish"},
]

export async function GET(request) {
    try{
        return new Response(
            JSON.stringify(lists),
            {status:200,headers:{"Content-type":"applocation/json"}}
        )

    }catch(e){
     return new Response(
        JSON.stringify({"error":e}),
         {status:200,headers:{"Content-type":"applocation/json"}}
     )
    }
}


export async function POST(p) {
    try{
        let newprodoct=await p.json();
         lists.push(newprodoct);
         return new Response(
            JSON.stringify({list:lists}),
            {status:201,headers:{"content-Type":"application/json"}}
         )

    }catch(p){
      return new Response(
        JSON.stringify({"alert":"invalid data"}),
         {status:400,headers:{"content-Type":"application/json"}}
      )
    }
    
}

export async function PUT(g){
try{
    let x1=await g.json();
    let indext=lists.findIndex(
        (j)=>j.contry==x1.contry
    )

if(indext==-1){
    return new Response(
        JSON.stringify({"alert":"not fount"}),
        {status:404}
    )
}
else{
lists[indext]=x1
return new Response(
    JSON.stringify(lists),
    {status:200}
)

}  


}catch(m){
return new Response(
    JSON.stringify({"alert":"invalid data"}),{status:400}
)
}


}

export async function DELETE(c){
    let  x2=await c.json();
    let lists=lists.filter(
        (j)=>j.name !==x2.name
    )
    return new Response(
        JSON.stringify(lists),
            {status:200}
        
    )
}