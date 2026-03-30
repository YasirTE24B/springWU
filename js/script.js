const navButtons = document.querySelectorAll('#bottomNav button.navBtn');

navButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        navButtons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
    });
});


// tagit lite från
// https://www.w3schools.com/js/
// https://www.w3schools.com/js/js_htmldom_elements.asp
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// https://www.w3schools.com/js/js_htmldom_nodelist.asp
const overlay    = document.getElementById('purchase');
const sheet      = document.getElementById('purchaseWindow');
const closeButton   = document.getElementById('purchaseCloseButton');
const itemNameElement = document.getElementById('purchaseItemName');
const purchaseItemPriceElement = document.getElementById('purchaseItemPrice')

function openSheet(itemName, itemPris) {
    itemNameElement.textContent = itemName;
    purchaseItemPriceElement.textContent = itemPris;

    overlay.style.display = 'block';

    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            overlay.classList.add('visible');
            sheet.classList.add('visible');
        });
    });
}

function closeSheet() {
    overlay.classList.remove('visible');
    sheet.classList.remove('visible');

    sheet.addEventListener('transitionend', function handler() {
        overlay.style.display = 'none';
        sheet.removeEventListener('transitionend', handler);
    });
}

document.querySelectorAll('button.buybutton').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const annons   = btn.closest('.annons');
        const itemName = annons.querySelector('.annonsTitel').textContent.trim();
        const itemPris = annons.querySelector('.annonsPris p').textContent.trim();
        openSheet(itemName, itemPris);
    });
});

closeButton.addEventListener('click', closeSheet);
overlay.addEventListener('click', closeSheet);