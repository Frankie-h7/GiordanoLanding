// script.js

// Seleziona tutti i pulsanti con la classe .cta-btn
const buttons = document.querySelectorAll('.cta-btn');

// Funzione per effetto pop-up al click
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Applica la classe 'pop' per attivare l'animazione
    button.classList.add('pop');

    // Rimuove la classe dopo l'animazione (200ms) per poterla riutilizzare
    setTimeout(() => {
      button.classList.remove('pop');
    }, 200);
  });
});

// Seleziona tutti i pulsanti con la classe 'cta-btn'

// Aggiungi un event listener per ciascun pulsante
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const caratteristiche = document.getElementById('caratteristiche');
    caratteristiche.scrollIntoView({ behavior: 'smooth' });
  });
});

// Seleziona il pulsante 'Acquista Ora'
const acquistaButton = document.getElementById('btn-acquista');

// Aggiungi un event listener per il clic
acquistaButton.addEventListener('click', () => {
  // Reindirizza alla pagina specificata
   window.open('https://francescopiogiordano.altervista.org/prodotto/negozio/', '_blank');
});