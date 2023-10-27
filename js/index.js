function indexToLogin(){
    window.location.href='login.html';
};
const people = [
    {name : 'Lucknow'},
    {name : 'Gorakhpur'},
    {name : 'Delhi'},
    {name : 'Agra'},
    {name : 'Kanpur'},
    {name : 'Banarsh'},
    {name : 'Prayagraj'},
];
// function searchBar() {
//     var searchResult = document.getElementById('searchName').value;
//     window.alert(searchResult);
// };
const sebtn = document.querySelector(".searchbtn");
sebtn.addEventListener("click", () => {
    var searchResult = document.getElementById('searchName').value;
    // window.alert(searchResult);
    if(sebtn){
    window.location.href='second.html';
    }
   

});

// whaheverElement.addEventListner( "event type", () => {

// })
// const searchInput = document.querySelector('.form-control');
// window.alert("searchInput");
// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value
//     if (value && value.trim().length > 0){
//         value = value.trim().toLowerCase()
//     } else {

//     }
// }
// )
// function setList(results){

//     for (const person of results){
//         // creating a li element for each result item
//         const resultItem = document.createElement('li')

//         // adding a class to each item of the results
//         resultItem.classList.add('result-item')

//         // grabbing the name of the current point of the loop and adding the name as the list item's text
//         const text = document.createTextNode(person.name)

//         // appending the text to the result item
//         resultItem.appendChild(text)

//         // appending the result item to the list
//         list.appendChild(resultItem)
//     }
// }