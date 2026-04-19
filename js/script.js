const hamburgerButton   = document.getElementById('hamburgerButton');
const sidebar        = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    sidebarOverlay.style.display = 'block';
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            sidebar.classList.add('open');
            sidebarOverlay.classList.add('visible');
        });
    });
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');

    sidebar.addEventListener('transitionend', function handler() {
        sidebarOverlay.style.display = 'none';
        sidebar.removeEventListener('transitionend', handler);
    });
}

hamburgerButton.addEventListener('click', openSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);


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