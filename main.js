let firstn=document.getElementById("fn")
let secondn=document.getElementById("sn")
let result=document.getElementById("res")

function add()
{
   let res=firstn+secondn
   result.innerText+= " "+res
}
function sub()
{
   let res=firstn-secondn
   result.innerText+= " "+res
}
function mul()
{
   let res=firstn*secondn
   result.innerText+= " "+res
}
function div()
{
   let res=firstn/secondn
   result.innerText+= " "+res
}
