// donate.js - used by donate.html
// The garment slider updates the number of trees and the store credit

const count = document.getElementById('dcount');
const countValue = document.getElementById('countValue');
const treeEstimate = document.getElementById('treeEstimate');
const creditEstimate = document.getElementById('creditEstimate');

function updatePickup() {
    const garments = Number(count.value);
    let credit = garments * 200;      // Rs 200 credit per garment

    if (credit > 3000) {
        credit = 3000;                // capped at Rs 3,000 a year
    }

    countValue.textContent = garments;
    treeEstimate.textContent = garments;            // 1 garment = 1 tree
    creditEstimate.textContent = '\u20B9' + credit.toLocaleString('en-IN');
}

count.addEventListener('input', updatePickup);
updatePickup();      // run once so the page starts with the right numbers
