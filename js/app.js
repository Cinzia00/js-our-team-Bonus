console.log('ciao');

const person = {
    firstName: 'Wayne',
    lastName: 'Barnett',
    profession: 'Founder & CEO',
    avatar: 'wayne-barnett-founder-ceo.jpg',
};

const team = [
    person,
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        profession: 'Chief Editor',
        avatar: 'angela-caroll-chief-editor.jpg',
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        profession: 'Office Manager',
        avatar: 'walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        profession: 'Social Media Manager',
        avatar: 'angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        profession: 'Developer',
        avatar: 'scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        profession: 'Graphic Designer',
        avatar: 'barbara-ramos-graphic-designer.jpg',
    },
]

for (let chiave in team) {
    console.log('person.firstName:', person.firstName)
    console.log('person.firstName:', person.lastName)
    console.log('person.firstName:', person.profession)
    console.log('person.firstName:', person.avatar)
}
const tableEl = document.getElementById('card-container')

for (let i = 0; i < team.length; i++) {
    const currentPerson = team[i]
    const firstName = currentPerson.firstName
    const lastName = currentPerson.lastName
    const profession = currentPerson.profession
    const avatar = currentPerson.avatar

    console.log(
        `Membro del team: ${firstName} ${lastName} è un ${profession}. Foto: ${avatar}.`
    )

    const table = `
        <div class="card">
            <div class="avatar">
                <img src="./img/${avatar}" alt="">
            </div>
            <div class="info">
                <p class="nome">${firstName} ${lastName}</p>
                <p>${profession}</p>
            </div>
        </div>  
        `
    tableEl.innerHTML += table
}