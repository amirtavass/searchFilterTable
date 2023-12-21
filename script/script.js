let input=document.querySelector(".searchBox input");
input.addEventListener("input",search);
function search(){
    let data;
    let country;
    let searchItem=document.querySelector(".searchBox input").value;
    searchItem=searchItem.toLowerCase();
    let rows=document.querySelectorAll(".myTable tr");
    for(let i=1;i<=rows.length;i++){
     data=rows[i].querySelectorAll("td")[0].innerText;
     country=rows[i].querySelectorAll("td")[1].innerText.toLowerCase();
     data=data.toLowerCase();
     if(!data.includes(searchItem) && !country.includes(searchItem))
     rows[i].style.display="none";
     else
     rows[i].style.display="";
    }
   
}