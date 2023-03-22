const inputBtn=document.getElementById("input-btn")
let myLeads=[]
let oldleads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage=JSON.parse( localStorage.getItem("myLeads"))
const deletebtn= document.getElementById("delete-btn")

if(leadsFromLocalStorage) {
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listitems=""
    for(let i=0;i<leads.length;i++)
    {
       //listitems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a>" + "</li>"
       listitems += `
       <li>
            <a target='_blank' href='${leads[i]}'> ${leads[i]}</a> 
      </li>`
       //const li=document.createElement("li")
       //li.textContent=myLeads[i]
       //ulEl.append(li)
       console.log(listitems)
    }
    ulEl.innerHTML=listitems
}

deletebtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads=[]
    render(myLeads) 
})
inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
    
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(myLeads)
    render(myLeads)
})
