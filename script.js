const names= ['Ayushman', 'Tanishka', 'Sahil', 'Lokesh', 'Raman', 'Sumit', 'CC-Club',"Pokemon", "Tanmay"];

const displayNames= ()=>{
    const namesList= document.getElementById('names-list');
    namesList.innerHTML='';

    names.forEach(name => {
        const listItem= document.createElement('li');
        listItem.textContent= name;
        namesList.appendChild(listItem);
    });
};

displayNames();