const menuKopi = [
    { id: 1, nama: "Kopi Susu Gula Aren", desc: "Espresso, susu segar, gula aren organik.", harga: 18000 },
    { id: 2, nama: "Americano", desc: "Double shot espresso dengan air mineral.", harga: 15000 },
    { id: 3, nama: "V60 Manual Brew", desc: "Biji kopi pilihan diseduh manual.", harga: 22000 },
    { id: 4, nama: "Caffe Latte", desc: "Espresso lembut dengan steamed milk.", harga: 20000 }
];

let keranjang = [];

function tampilkanMenu() {
    const menuList = document.getElementById("menu-list");
    menuKopi.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
            <div>
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

function tambahKeKeranjang(id) {
    const produk = menuKopi.find(item => item.id === id);
    const itemAda = keranjang.find(item => item.id === id);

    if (itemAda) {
        itemAda.jumlah += 1;
    } else {
        keranjang.push({ ...produk, jumlah: 1 });
    }
    updateKeranjang();
}

function updateKeranjang() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    
    let total = 0;
    keranjang.forEach((item, index) => {
        total += item.harga * item.jumlah;
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nama} (x${item.jumlah})</span>
            <span>Rp ${(item.harga * item.jumlah).toLocaleString('id-ID')} 
            <button style="background:#c62828; padding:2px 6px; margin-left:8px;" onclick="hapusItem(${index})">x</button></span>
        `;
        cartItems.appendChild(li);
    });

    totalPrice.innerText = total.toLocaleString('id-ID');
}

function hapusItem(index) {
    keranjang.splice(index, 1);
    updateKeranjang();
}

function checkoutWhatsApp() {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    const nama = document.getElementById("customer-name").value.trim();
    const catatan = document.getElementById("customer-note").value.trim();

    if (!nama) {
        alert("Silakan isi nama pemesan terlebih dahulu.");
        return;
    }

    // Ganti dengan nomor WhatsApp kamu (gunakan kode negara 62)
    const nomorWA = "082338655361"; 
    
    let pesan = `Halo Seduh Bareng, saya mau pesan kopi:%0A%0A`;
    let total = 0;

    keranjang.forEach(item => {
        const subtotal = item.harga * item.jumlah;
        total += subtotal;
        pesan += `- ${item.nama} (${item.jumlah}x) : Rp ${subtotal.toLocaleString('id-ID')}%0A`;
    });

    pesan += `%0A*Total: Rp ${total.toLocaleString('id-ID')}*%0A`;
    pesan += `*Nama:* ${nama}%0A`;
    if (catatan) pesan += `*Catatan:* ${catatan}%0A`;

    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(url, "_blank");
}

tampilkanMenu();
