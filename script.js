function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
}

// Previous JavaScript functions remain unchanged

function addPetCards() {
    const petsList = document.getElementById('pets-list');
    const pets = [
        { name: 'Rocky', type: 'Dog', breed: 'Labrador', age: '3 years', image: 'images/rocky.jpg', info: 'Playful and friendly dog!' },
        { name: 'Whiskers', type: 'Cat', breed: 'Siamese', age: '2 years', image: 'images/whiskers.jpg', info: 'Loves cuddles and quiet places!' },
        { name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', age: '5 years', image: 'images/buddy.jpg', info: 'Great with kids and friendly!' },
        { name: 'Mittens', type: 'Cat', breed: 'Persian', age: '4 years', image: 'images/mittens.jpg', info: 'Charming and curious!' },
        { name: 'Rex', type: 'Dog', breed: 'German Shepherd', age: '6 years', image: 'images/rex.jpg', info: 'Loyal and protective!' },
        { name: 'Fluffy', type: 'Cat', breed: 'Maine Coon', age: '1 year', image: 'images/fluffy.jpg', info: 'Loves playtime and attention!' }
    ];

    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h4>${pet.name}</h4>
            <p>${pet.breed}</p>
            <p>${pet.age}</p>
            <button onclick="adoptPet('${pet.name}')">Adopt Me</button>
            <div class="info-box">${pet.info}</div>
        `;
        petsList.appendChild(petCard);
    });
}

function adoptPet(petName) {
    alert(`Thank you for your interest in adopting ${petName}! Please contact us to proceed with the adoption process.`);
}

function adoptPet(petName) {
    alert(`Thank you for your interest in adopting ${petName}! Please contact us to proceed with the adoption process.`);
}

// Call the function to add pet cards when the page loads
window.onload = addPetCards;

function donate(amount) {
    alert(`Thank you for your donation of ₹${amount}! Your support makes a huge difference.`);
    // Here you would typically integrate with a payment gateway
}

function donateCustom() {
    const amount = document.getElementById('custom-amount').value;
    if (amount && !isNaN(amount)) {
        alert(`Thank you for your custom donation of ₹${amount}! Your generosity is appreciated.`);
        // Here you would typically integrate with a payment gateway
    } else {
        alert('Please enter a valid amount.');
    }
}