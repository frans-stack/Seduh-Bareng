const menuKopi = [
    { 
        id: 1, 
        nama: "Kopi Susu Gula Aren", 
        desc: "Espresso, susu segar, gula aren organik.", 
        harga: 18000,
        gambar: "gula-aren.jpg" // Sesuaikan dengan nama file atau URL foto
    },
    { 
        id: 2, 
        nama: "Americano", 
        desc: "Double shot espresso dengan air mineral.", 
        harga: 15000,
        gambar: "americano.jpg"
    },
    { 
        id: 3, 
        nama: "V60 Manual Brew", 
        desc: "Biji kopi pilihan diseduh manual.", 
        harga: 22000,
        gambar: "v60.jpg"
    },
    { 
        id: 4, 
        nama: "Caffe Latte", 
        desc: "Espresso lembut dengan steamed milk.", 
        harga: 20000,
        gambar: "latte.jpg"
    }
];

let keranjang = [];

function tampilkanMenu() {
    const menuList = document.getElementById("menu-list");
    menuKopi.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
            <div>
                <img src="${item.gambar}" alt="${item.nama}" class="menu-img">
                <h3>${item.nama}</h3>
                <p>${item.desc}</p>
            </div>
            <div>
                <div class="price">Rp ${item.harga.toLocaleString('id-ID')}</div>
                <button onclick="tambahKeKeranjang(${item.id})">+ Tambah</button>
            </div>
        `;
        menuList.appendChild(card);
    });
}

// ... (Biarkan kode fungsi tambahKeKeranjang, updateKeranjang, hapusItem, dan checkoutWhatsApp tetap sama seperti sebelumnya) ...
