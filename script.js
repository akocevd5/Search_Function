var list = [
    { name: "Apple", category: "Fruit" } ,
    { name: "Banana", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Tomato", category: "Vegetable" },
    { name: "Orange", category: "Fruit" }
  ]; // Array of objects
  
  const search = document.getElementById("searchTerm");
  const output = document.getElementById("searchResults");
  window.addEventListener('DOMContentLoaded', loadList);

  search.addEventListener('input', searchItems);


  function loadList() {
    var temp = '<ul class="list-items">';
    list.forEach(item => {
    temp += `<li class="list-item">${item.name} - ${item.category}</li>`;
    });
    temp += '</ul>';
    output.innerHTML = temp;
    }

    function searchItems(e){
        var temp= '';
        const result = list.filter(item=> item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.category.toLowerCase().includes(e.target.value.toLowerCase()) );
        
        if(result.length>0){
            temp = '<ul class="list-items">';
            result.forEach(item => {
            temp += `<li class="list-item">${item.name} - ${item.category}</li>`;
            });
            temp += '</ul>';
        }
        else {
            temp = '<div class="no-item">No item found</div>';
        }
        output.innerHTML=temp;
    }




 