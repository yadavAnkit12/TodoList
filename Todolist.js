//adding items
let form =document.getElementById("addForm")
let itemlist=document.getElementById("items")

form.addEventListener('submit',function(event){
     event.preventDefault()
     let text=document.getElementById("item").value
     let li=document.createElement("li")
     li.appendChild(document.createTextNode(text))
     li.className="list-group-item"
     itemlist.appendChild(li)

     let btn=document.createElement("button")
     btn.appendChild(document.createTextNode("X"))
     btn.className="btn btn-danger btn-sm float-right delete"
     li.appendChild(btn)
     document.getElementById("item").value=''

})

//deleting item
itemlist.addEventListener("click",function(e){
    if(e.target.classList.contains("delete"))
    {
       if(confirm("Are you sure...?"))
       itemlist.removeChild(e.target.parentElement)
    }
    else{
        alert("jaa na Apna kaam kr")
    }
})

//searching items
let filter=document.getElementById("filter")

filter.addEventListener("keyup",function(event){
    let value=event.target.value.toLocaleLowerCase()
    let li=document.getElementsByTagName("li")
    Array.from(li).forEach(function(item){
        if(item.firstChild.textContent.toLocaleLowerCase().indexOf(value)!==-1){
        item.style.display="block"
        }
        else{
            item.style.display="none"
        }

    })

})