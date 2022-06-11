let teamMembers = [
    {
        name:"Aladesuru Oriyomi",
        image:"img/image-2.jpeg",
        bestFood: "Pounded yam and okro soup",
        bestMovie: "Charmed",
        complexion: "Dark-skinned",
        thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
        age: '23years',
    },
        {
            name:"Austin Tonayam",
            image:"img/image-1.jpeg",
            bestFood: "Spaghetti",
            bestMovie: "Inglorious Basterds",
            complexion: "Dark-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
            age: '22years',
        },
        {
            name:"Igah Abiye",
            image:"img/image-3.jpeg",
            bestFood: "Ewa Ago and Bread",
            bestMovie: "Halo",
            complexion: "Dark-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
            age: '21years',
        },
        {
            name:"Amos thibault BIKARI",
            image:"img/image-7.jpeg",
            bestFood: "Uburobe and ndagara",
            bestMovie: "Suits",
            complexion: "Dark-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
            age: '23years',
        },
        {
            name:"Susan Chepkosgel",
            image:"img/image-4.jpeg",
            bestFood: "Pilau and Chicken",
            bestMovie: "The Darkest Mind",
            complexion: "Dark-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
            age: '22years',
        },
        {
            name:"Susan Mwende",
            image:"img/image-5.jpeg",
            bestFood: "Chips and Chicken",
            bestMovie: "The Legend",
            complexion: "Dark-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT' ],
            age: '21years',
        },
        {
            name:"Izima Obisike",
            image:"img/image-6.jpeg",
            bestFood: "Chips and Chicken",
            bestMovie: "House MD",
            complexion: "Light-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
            age: '22years',
        },
        {
            name:"Oyiwumi",
            image:"img/image-8.jpeg",
            bestFood: "Yam and Egg",
            bestMovie: "Spider-man",
            complexion: "Light-skinned",
            thingsLearnt: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
            age: "25years",
        },
];

let row = document.querySelector(".row");
for(let i = 0; i < teamMembers.length; i++){
    const members = teamMembers[i];
    let card = `<div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card">
  <img src="${members.image}" class="card-img-top" alt="${members.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${members.name}</h5>
        <ul class="list-group>
        <li class="list-group-item">${members.bestMovie}</li>
        <li class="list-group-item">${members.complexion}</li>
        <li class="list-group-item">${members.thingsLearnt}</li>
        <li class="list-group-item">${members.age}</li>

        </ul>
    <button class="btn btn-outline-primary" onclick="clickMe(${i})">More Info</button>
  </div>
</div>
    </div>`
    row.innerHTML += card;
}
function clickMe(i){
    alert(`${teamMembers[i].name}`);
}

