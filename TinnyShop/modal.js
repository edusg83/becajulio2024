function cargarProducto(id) {
    let producto = {
        1: {
            title: "Burgundy Lipstick",
            description: "Labial de larga duración acabado mate.",
            price: "24.99 €",
            image: "img/redlipstick.png"
        },
        2: {
            title: "Burgundy Lip Linner",
            description: "Perfilador de larga duración acabado mate.",
            price: "19.99 €",
            image: "img/red-lipliner.png"
        },
        3: {
            title: "Nude My Lips",
            description: "Labial de larga duración acabado mate.",
            price: "24.99 €",
            image: "img/nudelipstick.png"
        },
        4: {
            title: "Nude Lip Linner",
            description: "Perfilador de larga duración acabado mate.",
            price: "19.99 €",
            image: "img/redlipstick.png"
        },
        5: {
            title: "Worth The Hype",
            description: "Mascara de pestañas long lasting efecto volumen mate.",
            price: "32.99 €",
            image: "img/mascara.png"
        },
        6: {
            title: "Neon Pink",
            description: "Paleta de sombras tonos rosados, con glitter y satinados.",
            price: "31.99 €",
            image: "img/pink-eyeshadow.png"
        },
        7: {
            title: "Worth The Hype - WP",
            description: "Mascara de pestañas long lasting efecto volumen waterproof.",
            price: "32.99 €",
            image: "img/wp-mascara.png"
        },
        8: {
            title: "Warm neutrals",
            description: "Paleta de sombras en tonos neutrales y rosados, mates.",
            price: "31.99 €",
            image: "img/warm-eyeshadow.png"
        },
        9: {
            title: "Make Me Matt",
            description: "Base cushión de maquillaje acabado mate con SPF50+.",
            price: "39.99 €",
            image: "img/powder-foundation.png"
        },
        10: {
            title: "Easy Bake",
            description: "Loose Beaking & Setting Powder, alisador de poros acabado mate.",
            price: "39.99 €",
            image: "img/baking-powder.png"
        },
        11: {
            title: "Hoola Bronzer",
            description: "Polvo bronceador acabado semi-mate satinado. Aspecto sunkissed.",
            price: "37.99 €",
            image: "img/bronzer.png"
        },
        12: {
            title: "Pro Artist Palette",
            description: "Paleta de coloretes en textura crema acabado mate y satinado.",
            price: "79.99 €",
            image: "img/blush-palette.png"
        },
    };

    let selectedProduct = producto[id];
    if (selectedProduct) {
        document.getElementById('modalProductTitle').innerText = selectedProduct.title;
        document.getElementById('modalProductDescription').innerText = selectedProduct.description;
        document.getElementById('modalProductPrice').innerText = selectedProduct.price;
        document.getElementById('modalProductImage').src = selectedProduct.image;


        let modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();

    
    }
}