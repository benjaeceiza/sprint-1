const products = [
    {
        id: 1,
        name: "Lata de Coca-Cola",
        price: 1.50,
        image: "/images/products/coca.jfif",
        thumbnails: [
            "/images/products/coca.jfif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TBspWVPFzDWeLge-7w6rvwnrqX3TnWspVw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rIw5PrmAmud_hnQAyJnGVh4xK7UbAw5IfQ&s"

        ],
        description: "El clásico e inconfundible sabor de Coca-Cola Original en su presentación en lata de 354ml. Ideal para acompañar tus comidas, refrescarte en días calurosos o compartir con amigos. Disfrutala bien helada para una mejor experiencia refrescante.",
        categoria: "bebida"
    },
    {
        id: 2,
        name: "Lata de Pepsi",
        price: 1.50,
        image: "/images/products/pepsi.png",
        thumbnails: [
            "/images/products/pepsi.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiX8Mq3xobjBt5rtZLIQM3LG4PzeRJRYaneA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKQDyFG-U-ibG7IV79I8T8UMqFm25IxbNPw&s"

        ],
        description: "Refrescante y con ese toque dulce característico, la lata de Pepsi es la compañera perfecta para tus snacks. Servila con mucho hielo y disfrutá de su sabor vibrante y energizante en cualquier momento del día.",
        categoria: "bebida"
    },
    {
        id: 3,
        name: "Lata de Red Bull",
        price: 2.00,
        image: "/images/products/redbull.avif",
        thumbnails: [
            "/images/products/redbull.avif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Gg-jGQvqjPxSwaj_sSquQRasChuDRoHgvB139cgldA&s",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFa473RchSUa9dJHL2h4XpLm0YZIOaumJd8ra1S48&s"

        ],
        description: "Bebida energética líder mundial. La lata de Red Bull te da alas cuando más lo necesitás: antes de entrenar, durante largas jornadas de estudio o trabajo, o para aguantar toda la noche. Contiene taurina y cafeína de alta calidad.",
        categoria: "bebida"
    },
    {
        id: 4,
        name: "Lata de Monster",
        price: 2.00,
        image: "/images/products/mosnter.webp",
        thumbnails: [
            "/images/products/mosnter.webp",
            "https://coca-colaentucasa.com/media/catalog/product/1/0/101176_-_ih_1.png?optimize=low&fit=bounds&height=550&width=550&canvas=550:550&format=jpeg",
            "https://exitocol.vtexassets.com/arquivos/ids/28911932/Bebida-MONSTER-Energizante-Jugo-Frutas-473-ml-3679579_b.jpg?v=638858785928900000"

        ],
        description: "Desata a la bestia con Monster Energy. Una bebida energética con un sabor intenso y dulce, diseñada para darte el máximo impulso. Su combinación exclusiva de ingredientes te mantendrá alerta y con la energía al máximo nivel.",
        categoria: "bebida"
    },
    {
        id: 5,
        name: "Botella de Jack Daniel's",
        price: 25.00,
        image: "/images/products/jack.jfif",
        thumbnails: [
            "/images/products/jack.jfif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN5kIYHD6mqmQv8e0PhW5kGmAYBrtgF8l9g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFl8FUXndl0dnQKOhi2ZV32sxyVkjA2h8xDA&s"

        ],
        description: "El auténtico Tennessee Whiskey. Jack Daniel's Old No. 7 se suaviza gota a gota a través de tres metros de carbón de arce sacarino y madura en barriles de roble de fabricación propia. Destacan sus inconfundibles notas de caramelo, vainilla y madera tostada.",
        categoria: "alcohol"
    },
    {
        id: 6,
        name: "Botella de Blue Label",
        price: 30.00, /* (Un regalo a este precio jajaja) */
        image: "/images/products/blue-label.webp",
        thumbnails: [
            "/images/products/blue-label.webp",
            "https://jumboargentina.vtexassets.com/arquivos/ids/791034/Whisky-Johnnie-Walker-Blue-Label-Tif-750-Whisky-Johnnie-Walker-Blue-Label-Botella-750ml-3-247761.jpg?v=638283369763370000",
            "https://dcdn-us.mitiendanube.com/stores/001/152/625/products/j-walker-blue1-e86b869f1eeeeed48b15882571117532-480-0.webp"

        ],
        description: "Johnnie Walker Blue Label es una obra maestra inigualable. Una mezcla exquisita elaborada con algunos de los whiskies más raros y excepcionales de Escocia. Ofrece notas de miel, avellanas, jerez y naranjas, culminando en un final ahumado, largo y persistente.",
        categoria: "alcohol"
    },
    {
        id: 7,
        name: "Botella de Smirnoff",
        price: 20.00,
        image: "/images/products/smirnoff.jfif",
        thumbnails: [
            "/images/products/smirnoff.jfif",
            "https://dcdn-us.mitiendanube.com/stores/001/152/625/products/smirnoff1-d2959b430df9b3a29716518794180626-640-0.webp",
            "https://acdn-us.mitiendanube.com/stores/004/673/901/products/smirnoff-caja-429c7ee7a9820050ec17322155183861-1024-1024.webp"

        ],
        description: "El vodka número uno del mundo. Smirnoff No. 21 es filtrado diez veces para lograr una pureza y suavidad extraordinarias. Es el lienzo perfecto para tus cócteles favoritos, desde un simple destornillador hasta el martini más sofisticado.",
        categoria: "alcohol"
    },
    {
        id: 8,
        name: "Botella de Fernet Branca",
        price: 25.00,
        image: "/images/products/fernet.jfif",
        thumbnails: [
            "/images/products/fernet.jfif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCiTd5SFbPrVAyYtdY4wK_JuzlH4FJhi6Yw&s",
            "https://dcdn-us.mitiendanube.com/stores/005/076/729/products/branca-a59ac65aa4b2df746517241870737163-640-0.webp"

        ],
        description: "El clásico digestivo, indispensable en las previas y reuniones. Elaborado a partir de una fórmula secreta con decenas de hierbas y especias maduradas en barricas de roble. Su sabor amargo e inconfundible alcanza la perfección al mezclarse con bebida cola y mucho hielo.",
        categoria: "alcohol"
    },
    {
        id: 9,
        name: "Bolsa de papas fritas Lay's",
        price: 5.00,
        image: "/images/products/lays.jfif",
        thumbnails: [
            "/images/products/lays.jfif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprbk6Jp27AglJSJF0xTkSsFmTo_8VyDipfA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQy7DD--z8iHNEZ3X56qDY_DVLIHLBcu3v7g&s"

        ],
        description: "Las clásicas papas fritas Lay's Clásicas: crujientes, finamente cortadas, doradas a la perfección y con la cantidad exacta de sal. El snack ideal para calmar el antojo, acompañar tus sándwiches o disfrutar compartiendo con amigos.",
        categoria: "comida"
    },
    {
        id: 10,
        name: "Papas fritas Pringles",
        price: 5.00,
        image: "/images/products/pringles.jfif",
        thumbnails: [
            "/images/products/pringles.jfif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENXbT8fLzdhulT_ERARJgsofcpodl_5xxTg&s",
            "https://http2.mlstatic.com/D_NQ_NP_706185-MLA94035451454_102025-O.webp"


        ],
        description: "El inconfundible snack de papa en su icónico tubo. Las Pringles Original ofrecen un crujido perfecto en cada bocado, con una forma parabólica que se adapta a tu paladar. Su envase protege el producto para que lleguen siempre enteras.",
        categoria: "comida"
    },
    {
        id: 11,
        name: "Bolsa de Doritos",
        price: 5.00,
        image: "/images/products/doritos.jfif",
        thumbnails: [
            "/images/products/doritos.jfif",
            "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/000115677-3l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            "https://s.alicdn.com/@sc04/kf/Hacf0836301bb4d9aa51fe704a8fe07e0y/Korean-Doritos-Chips-84g-Nacho-Cheese-Casual-Puffed-Exotic-Snack-Cheese-Flavor-Grilled-Chicken-Flavor-Corn-Chips.jpg_300x300.jpg"

        ],
        description: "Tortillas de maíz súper crujientes con un intenso sabor a queso. Los Doritos Nacho Cheese son el snack atrevido para los que buscan un sabor fuerte y adictivo. Son ideales para dipear con salsas, guacamole o simplemente comerlos solos.",
        categoria: "comida"
    },
    {
        id: 12,
        name: "Bolsa de Cheetos",
        price: 5.00,
        image: "/images/products/cheetos.jpg",
        thumbnails: [
            "/images/products/cheetos.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlUQzOoBoKGw2ejCcTdCaAov3izYSow6p6g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEBVlLKtFT9dwSUob4uAYe4zc809rXbakGg&s"

        ],
        description: "El snack de maíz inflado horneado que literalmente se deshace en tu boca. Los Cheetos ofrecen una experiencia divertida y deliciosa, dejando su clásica y amada huella de polvo naranja sabor a queso. Imposible resistirse a su textura.",
        categoria: "comida"
    }
];

module.exports = products;