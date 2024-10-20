
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

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
        { name: 'Rocky', type: 'Dog', breed: 'Labrador', age: '3 years', image: '/images home/6.jpg', 
            info: {
                Owner: "John Doe",
                Contact: "12345",
                Address: "Hover Lane, XYZ",
                Availability: "Yes"
            } },
        { name: 'Whiskers', type: 'Cat', breed: 'Siamese', age: '2 years', image: '/images home/4.jpg', 
            info: {
                Owner: "John Doe",
                Contact: "12345",
                Address: "Hover Lane, XYZ",
                Availability: "Yes"
            }
        },
        { name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', age: '5 years', image: '/images home/3.jpg', 
            info: {
                Owner: "John Doe",
                Contact: "12345",
                Address: "Hover Lane, XYZ",
                Availability: "Yes"
            }
         },
        { name: 'Mittens', type: 'Cat', breed: 'Persian', age: '4 years', image: '/images home/8.jpg', 
            info: {
                Owner: "John Doe",
                Contact: "12345",
                Address: "Hover Lane, XYZ",
                Availability: "Yes"
            }
        },
        { name: 'Rex', type: 'Dog', breed: 'German Shepherd', age: '6 years', image: '/images home/5.jpg', 
            info: {
                Owner: "John Doe",
                Contact: "12345",
                Address: "Hover Lane, XYZ",
                Availability: "Yes"
            }
         },
        { name: 'Fluffy', type: 'Cat', breed: 'Maine Coon', age: '1 year', image: 'images/fluffy.jpg', 
            info: {
                Owner: "John Doe",
                Contact: "12345",
                Address: "Hover Lane, XYZ",
                Availability: "Yes"
            }
         }
    ];

    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h4>${pet.name}</h4>
            <p>${pet.breed}</p>
            <p>${pet.age}</p>
            <div class="info-box">
                <h4>${pet.name}</h4>
                <strong>Owner: </strong>${pet.info.Owner}<br>
                <strong>Address: </strong>${pet.info.Address}<br>
                <strong>Contact: </strong>${pet.info.Contact}<br>
                <strong>Availability: </strong>${pet.info.Availability}<br>
            </div>
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

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.testimonial-gallery');
    const cards = document.querySelectorAll('.testimonial-card');
    
    // Clone the testimonial cards
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        gallery.appendChild(clone);
    });

    // Adjust the animation duration based on the number of cards
    const totalCards = gallery.children.length;
    const cardWidth = 300; // width of each card
    const gapWidth = 20; // gap between cards
    const totalWidth = totalCards * (cardWidth + gapWidth);
    const animationDuration = totalWidth / 50; // Adjust speed as needed

    gallery.style.animationDuration = `${animationDuration}s`;
});