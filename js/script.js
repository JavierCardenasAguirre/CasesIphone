// ============================================================
// CATÁLOGO COMPLETO - PINK CASES
// Basado en el catálogo de junio 2026
// ============================================================
const products = [
    // ===== CASES FIBRA =====
    {
        id: 1,
        name: 'Cases Fibra',
        price: 17500,
        originalPrice: 25000,
        rating: 4,
        reviews: 19,
        image: 'images/fibra.webp',
        images: [
            'images/fibra1.webp',
            'images/fibra2.webp',
            'images/fibra3.webp',
            'images/fibra4.webp',

        ],
        model: 'iPhone 14, 15, 16, 16 Pro Max, 17, 17 Pro, 17 Pro Max',
        material: 'Fibra de carbono',
        category: 'Clásicos',
        colors: [
            { name: 'blanco', image: 'images/fibra4.webp' },
            { name: 'hueso', image: 'images/fibra2.webp' },
            { name: 'beige', image: 'images/fibra3.webp' },
            { name: 'negro', image: 'images/fibra1.webp' },

        ]
    },
    // ===== CASES JERRY =====
    {
        id: 2,
        name: 'Cases Jerry',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 23,
        image: 'images/jerry.webp',
        images: [
            'images/cases-jerry1.webp',

        ],
        model: 'iPhone 14, 14 ProMax, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro, 17 Pro Max',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'jerry' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES SATIN =====
    {
        id: 3,
        name: 'Cases Satin',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/satin.webp',
        model: 'iPhone 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro, 17 Pro Max',
        material: 'Satinado',
        category: 'Clásicos',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES CLASICO =====
    {
        id: 4,
        name: 'Cases Clásico',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/clasico.webp',
        images: [
            'images/clasico1.webp',
            'images/clasico2.webp',
            'images/clasico3.webp',
            'images/clasico4.webp',
            'images/clasico5.webp',

        ],
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Clásicos',
        colors: [
            { name: 'azul', image: 'images/clasico3.webp' },
            { name: 'blanco', image: 'images/clasico4.webp' },
            { name: 'purpura', image: 'images/clasico2.webp' },
            { name: 'negro', image: 'images/clasico1.webp' },
            { name: 'rosado', image: 'images/clasico5.webp' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES TRIANGULO =====
    {
        id: 5,
        name: 'Cases Triángulo',
        price: 25000,
        originalPrice: null,
        rating: 3,
        reviews: 15,
        image: 'images/triangulo.webp',
        model: 'iPhone 13, 14, 14 Pro Max, 15, 15 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES ANDROID MANILLA =====
    {
        id: 6,
        name: 'Cases Android Manilla',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/android-manilla.webp',
        model: 'Android (varios modelos)',
        material: 'Silicone + manilla',
        category: 'Android',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES DRAGON BALL =====
    {
        id: 7,
        name: 'Cases Dragon Ball',
        price: 25000,
        originalPrice: null,
        rating: 5,
        reviews: 25,
        image: 'images/dragon-ball.webp',
        images: [
            'images/dragon1.webp',
            'images/dragon2.webp',
            'images/dragon3.webp',
            'images/dragon4.webp',
            'images/dragon5.webp',
            'images/dragon6.webp',
            'images/dragon7.webp',
            'images/dragon8.webp',
            'images/dragon9.webp',
            'images/dragon10.webp',
            'images/dragon11.webp',
            'images/dragon12.webp',
        ],
        model: 'iPhone 13, 13 pro Max, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'goku', image: 'images/dragon1.webp' },
            { name: 'mario', image: 'images/dragon3.webp' },
            { name: 'snoopy', image: 'images/dragon2.webp' },
            { name: 'hello kitty', image: 'images/dragon6.webp' },
            { name: 'tom y jerry', image: 'images/dragon10.webp' },
            { name: 'chip y dale', image: 'images/dragon7.webp' },
            { name: 'oso', image: 'images/dragon11.webp' },
            { name: 'my melody', image: 'images/dragon9.webp' },
            { name: 'doraemon', image: 'images/dragon12.webp' },
            { name: 'zootopia', image: 'images/dragon8.webp' },
            { name: 'mickey-minnie', image: 'images/dragon5.webp' },
        ]
    },
    // ===== CASES LUJO SOPORTE =====
    {
        id: 8,
        name: 'Cases Lujo con Soporte',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/lujo-soporte.webp',
        images: [
            'images/lujos1.webp',
            'images/lujos2.webp',
            'images/lujos3.webp',
            'images/lujos4.webp',
            'images/lujos5.webp',
            'images/lujos6.webp',
            'images/lujos7.webp',
            'images/lujos8.webp',
            'images/lujos9.webp'
        ],
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max, 16 Pro Max, 17 Pro Max',
        material: 'PC + TPU',
        category: 'Soporte',
        colors: [
            { name: 'negro', image: 'images/lujos4.webp' },
            { name: 'naranja', image: 'images/lujos8.webp' },
            { name: 'beige', image: 'images/lujos5.webp' },
            { name: 'crema', image: 'images/lujos2.webp' },
            { name: 'gris azulado', image: 'images/lujos1.webp' },
            { name: 'celeste', image: 'images/lujos6.webp' },
            { name: 'blanco', image: 'images/lujos7.webp' },
            { name: 'melocoton', image: 'images/lujos3.webp' },
            { name: 'azul grisaceo', image: 'images/lujos9.webp' },
            { name: 'gris', image: 'images/lujos6.webp' }
        ]
    },
    // ===== CASES ESCARCHA SOPORTE =====
    {
        id: 9,
        name: 'Cases Escarcha con Soporte',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 24,
        image: 'images/escarcha-soporte.webp',
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max, 16 Pro Max, 17 Pro Max',
        material: 'PC + TPU',
        category: 'Soporte',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES VENTANA TRANSPARENTE =====
    {
        id: 10,
        name: 'Cases Ventana Transparente',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 22,
        image: 'images/ventana-transparente.webp',
        images: [
            'images/ventana1.webp',
            'images/ventana2.webp',
            'images/ventana3.webp',
            'images/ventana4.webp',
            'images/ventana5.webp',
            'images/ventana6.webp',
            'images/ventana7.webp',
        ],
        model: 'iPhone 11, 13, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max',
        material: 'TPU transparente',
        category: 'Transparentes',
        colors: [
            { name: 'naranja melocotón', image: 'images/ventana1.webp' },
            { name: 'azul cielo', image: 'images/ventana3.webp' },
            { name: 'gris antracita', image: 'images/ventana2.webp' },
            { name: 'beige calido', image: 'images/ventana4.webp' },
            { name: 'lila lavanda', image: 'images/ventana5.webp' },
            { name: 'azul celeste', image: 'images/ventana6.webp' },
            { name: 'rosa palo', image: 'images/ventana7.webp' },

        ]
    },
    // ===== CASES 360 TORNASOL =====
    {
        id: 11,
        name: 'Cases 360 Tornasol',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 9,
        image: 'images/360-tornasol.webp',
        images: [
            'images/360tornasol1.webp',
            'images/360tornasol2.webp',
            'images/360tornasol3.webp',
            'images/360tornasol4.webp',
        ],
        model: 'iPhone 13, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max',
        material: 'PC + TPU',
        category: 'Diseños',
        colors: [
            { name: 'verde menta', image: 'images/360tornasol1.webp' },
            { name: 'rosa pálido', image: 'images/360tornasol2.webp' },
            { name: 'azul cielo', image: 'images/360tornasol3.webp' },
            { name: 'incoloro', image: 'images/360tornasol4.webp' },

        ]
    },
    // ===== CASES PIN ESCARCHA =====
    {
        id: 12,
        name: 'Cases Pin Escarcha',
        price: 20000,
        originalPrice: null,
        rating: 3,
        reviews: 5,
        image: 'images/pin-escarcha.webp',
        model: 'iPhone 12, 12 Pro, 13, 13 Pro Max, 14, 14 Pro, 15, 15 Pro Max',
        material: 'Silicone',
        category: 'Económicos',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES PANTERA ROSA =====
    {
        id: 13,
        name: 'Cases Pantera Rosa',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 16,
        image: 'images/pantera-rosa.webp',
        images: [
            'images/pantera1.webp',
            'images/pantera2.webp',
            'images/pantera3.webp',
            'images/pantera4.webp',
            'images/pantera5.webp',
            'images/pantera6.webp',
            'images/pantera7.webp',
            'images/pantera8.webp',
            'images/pantera9.webp',

        ],
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'pantera rosa', image: 'images/pantera9.webp' },
            { name: 'tinker bell', image: 'images/pantera6.webp' },
            { name: 'mickey', image: 'images/pantera4.webp' },
            { name: 'snoopy', image: 'images/pantera1.webp' },
            { name: 'disney tsum tsum', image: 'images/pantera8.webp' },
            { name: 'escandalosos', image: 'images/pantera7.webp' },
            { name: 'stitch', image: 'images/pantera3.webp' },
            { name: 'igor burro triste', image: 'images/pantera5.webp' },
            { name: 'sanrio', image: 'images/pantera2.webp' },

        ]
    },
    // ===== CASES RELIEVE =====
    {
        id: 14,
        name: 'Cases Relieve',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 32,
        image: 'images/relieve.webp',
        images: [
            'images/relieve1.webp',
            'images/relieve2.webp',
            'images/relieve3.webp',
            'images/relieve4.webp',
            'images/relieve5.webp',
            'images/relieve6.webp',
            'images/relieve7.webp',
        ],
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Clásicos',
        colors: [
            { name: 'chip y dale', image: 'images/relieve3.webp' },
            { name: 'winnie the pooh', image: 'images/relieve7.webp' },
            { name: 'sanrio y doraemon', image: 'images/relieve6.webp' },
            { name: 'collage disney', image: 'images/relieve1.webp' },
            { name: 'sanrio', image: 'images/relieve2.webp' },
            { name: 'collage sanrio', image: 'images/relieve5.webp' },
            { name: 'mickey mouse', image: 'images/relieve4.webp' },

        ]
    },
    // ===== CASES PIOLIN =====
    {
        id: 15,
        name: 'Cases Piolín',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 23,
        image: 'images/piolin.webp',
        images: [
            'images/piolin1.webp',
            'images/piolin2.webp',
            'images/piolin3.webp',
            'images/piolin4.webp',
            'images/piolin5.webp',
            'images/piolin6.webp',
            'images/piolin7.webp',
            'images/piolin8.webp',
            'images/piolin9.webp'
        ],
        model: 'iPhone 13, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'piolin', image: 'images/piolin7.webp' },
            { name: 'stitch', image: 'images/piolin1.webp' },
            { name: 'hello kitty', image: 'images/piolin2.webp' },
            { name: 'sticker vintage', image: 'images/piolin5.webp' },
            { name: 'sanrio mix', image: 'images/piolin8.webp' },
            { name: 'my melody', image: 'images/piolin9.webp' },
            { name: 'collage disney', image: 'images/piolin3.webp' },
            { name: 'mickey && minnie', image: 'images/piolin6.webp' }

        ]
    },
    // ===== DISNEY TORNASOL =====
    {
        id: 16,
        name: 'Disney Tornasol',
        price: 20000,
        originalPrice: null,
        rating: 5,
        reviews: 30,
        image: 'images/disney-tornasol.webp',
        images: [
            'images/disneytor1.webp',
            'images/disneytor2.webp',
            'images/disneytor3.webp',
            'images/disneytor4.webp',
            'images/disneytor5.webp',
            'images/disneytor6.webp',
            'images/disneytor7.webp',
            'images/disneytor8.webp',
            'images/disneytor9.webp',
        ],
        model: 'iPhone 11, 12, 12 Pro Max, 13, 13 Pro Max, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max',
        material: 'Silicone',
        category: 'Disney',
        colors: [
            { name: 'sanrio mymelody', image: 'images/disneytor1.webp' },
            { name: 'sanrio tornasol', image: 'images/disneytor2.webp' },
            { name: 'mickey mouse', image: 'images/disneytor3.webp' },
            { name: 'sanrio hello kitty', image: 'images/disneytor4.webp' },
            { name: 'sanrio picnic', image: 'images/disneytor5.webp' },
            { name: 'disney minnie', image: 'images/disneytor6.webp' },
            { name: 'tom y jerry', image: 'images/disneytor7.webp' },
            { name: 'disney toy story', image: 'images/disneytor8.webp' },
            { name: 'disney lotso', image: 'images/disneytor9.webp' },

        ]
    },
    // ===== CASES VICKY =====
    {
        id: 17,
        name: 'Cases Vicky',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/vicky.webp',
        images: [
            'images/vicky2.webp',
            'images/vicky3.webp',
            'images/vicky4.webp',
            'images/vicky5.webp',
            'images/vicky6.webp',
            'images/vicky7.webp',
            'images/vicky8.webp',
            'images/vicky9.webp',
            'images/vicky10.webp',
            'images/vicky11.webp',

        ],
        model: 'iPhone 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'dorado', image: 'images/vicky2.webp' },
            { name: 'negro', image: 'images/vicky5.webp' },
            { name: 'sanrio hello kitty', image: 'images/vicky8.webp' },
            { name: 'amarillo dorado', image: 'images/vicky4.webp' },
            { name: 'morado/lila', image: 'images/vicky3.webp' },
            { name: 'melody & kuromi', image: 'images/vicky6.webp' },
            { name: 'chip dale', image: 'images/vicky7.webp' },
            { name: 'mickey mouse', image: 'images/vicky9.webp' },
            { name: 'puppy', image: 'images/vicky10.webp' },
            { name: 'bunny stickers', image: 'images/vicky11.webp' },

        ]
    },
    // ===== CASES MAGSAFE ESCARCHA =====
    {
        id: 18,
        name: 'Cases MagSafe Escarcha',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 21,
        image: 'images/magsafe-escarcha.webp',
        images: [
            'images/mag1.webp',
            'images/mag2.webp',
            'images/mag3.webp',
            'images/mag4.webp',

        ],
        model: 'iPhone 12, 12 Pro Max, 13, 13 Pro Max, 14, 14 Pro Max, 15, 15 Pro Max',
        material: 'TPU + imanes',
        category: 'MagSafe',
        colors: [
            { name: 'azul', image: 'images/mag2.webp' },
            { name: 'palo rosa', image: 'images/mag1.webp' },
            { name: 'rosa pastel', image: 'images/mag4.webp' },
            { name: 'morado pastel', image: 'images/mag3.webp' },

        ]
    },
    // ===== CASES MANILLA ESCARCHA =====
    {
        id: 19,
        name: 'Cases Manilla Escarcha',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 16,
        image: 'images/manilla-escarcha.webp',
        images: [
            'images/manillaes1.webp',
            'images/manillaes2.webp',
            'images/manillaes3.webp',
            'images/manillaes4.webp',
        ],
        model: 'iPhone 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro',
        material: 'Silicone + manilla',
        category: 'Manillas',
        _colors: [
            { name: 'dorado', image: 'images/manillaes4.webp' },
            { name: 'lila', image: 'images/manillaes1.webp' },
            { name: 'verde esmeralda', image: 'images/manillaes2.webp' },
            { name: 'glitter', image: 'images/manillaes3.webp' },

        ],
        get colors() {
            return this._colors;
        },
        set colors(value) {
            this._colors = value;
        },
    },
    // ===== CASES AGUA =====
    {
        id: 20,
        name: 'Cases Agua',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 24,
        image: 'images/agua.webp',
        images: [
            'images/agua1.webp',
            'images/agua2.webp',
            'images/agua3.webp',
            'images/agua4.webp',
        ],
        model: 'iPhone 12 Pro Max, 14 Pro, 14 Pro Max, 15, 15 Pro, 15 Pro Max',
        material: 'Silicone líquido',
        category: 'Clásicos',
        colors: [
            { name: 'azul', image: 'images/agua1.webp' },
            { name: 'negro', image: 'images/agua2.webp' },
            { name: 'plateado', image: 'images/agua4.webp' },
            { name: 'dorado', image: 'images/agua3.webp' },

        ]
    },
    // ===== CASES HUMO MANILLA =====
    {
        id: 21,
        name: 'Cases Humo con Manilla',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 23,
        image: 'images/humo-manilla.webp',
        model: 'iPhone 11',
        material: 'Silicone + manilla',
        category: 'Manillas',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES DIAMOND =====
    {
        id: 22,
        name: 'Cases Diamond',
        price: 20000,
        originalPrice: null,
        rating: 5,
        reviews: 27,
        image: 'images/diamond.webp',
        model: 'iPhone 12 Pro Max, 14 Pro, 15 Pro, 15 Pro Max, 16',
        material: 'Silicone con diamantina',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES DISNEY LENTES =====
    {
        id: 23,
        name: 'Cases Disney Lentes',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/disney-lentes.webp',
        model: 'iPhone 13 Pro, 14, 14 Pro Max, 15 Pro, 15 pro Max, 16 Pro',
        material: 'Silicone',
        category: 'Disney',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES GLASS LU30 =====
    {
        id: 24,
        name: 'Cases Glass LU30',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/glass-lu30.webp',
        model: 'iPhone 11, 12 Pro Max, 13 Pro Max, 14 Pro, 14 Pro Max, 15 Pro, 15 Pro Max, 16 Pro, 16 Pro Max',
        material: 'Vidrio templado',
        category: 'Protección'
    },
    // ===== CASES ESPEJO =====
    {
        id: 25,
        name: 'Cases Espejo',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/espejo.webp',
        images: [
            'images/espejo1.webp',
            'images/espejo2.webp',
            'images/espejo3.webp',
            'images/espejo4.webp',
            'images/espejo5.webp',
            'images/espejo6.webp',
            'images/espejo7.webp',
            'images/espejo8.webp',
        ],
        model: 'iPhone 13, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max',
        material: 'Acrílico espejo',
        category: 'Diseños',
        colors: [
            { name: 'pinguino', image: 'images/espejo1.webp' },
            { name: 'gato negro', image: 'images/espejo2.webp' },
            { name: 'puppy', image: 'images/espejo3.webp' },
            { name: 'tulips', image: 'images/espejo4.webp' },
            { name: 'gummy bears', image: 'images/espejo5.webp' },
            { name: 'tuffy', image: 'images/espejo6.webp' },
            { name: 'bear stickers', image: 'images/espejo7.webp' },
            { name: 'luck cat', image: 'images/espejo8.webp' },

        ]
    },
    // ===== CASES CORAZON PERLA =====
    {
        id: 26,
        name: 'Cases Corazón Perla',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 17,
        image: 'images/corazon-perla.webp',
        images: [
            'images/perla1.webp',
            'images/perla2.webp',
        ],
        model: 'iPhone 12, 12 Pro, 13, 13 Pro, 13 Pro Max, 14 Pro Max, 15 Pro, 15 Pro Max',
        material: 'Silicone con perlas',
        category: 'Económicos',
        colors: [
            { name: 'azul perla palido', image: 'images/perla1.webp' },
            { name: 'azul con verde menta', image: 'images/perla2.webp' },

        ]
    },
    // ===== DISNEY SILICON =====
    {
        id: 27,
        name: 'Disney Silicon',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 25,
        image: 'images/disney-silicon.webp',
        model: 'iPhone 12 Pro, 13, 13 Pro Max, 14 Pro, 14 Pro Max, 15 Pro, 15 Pro Max',
        material: 'Silicone',
        category: 'Disney',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES NORTH FACE =====
    {
        id: 28,
        name: 'Cases North Face',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/north-face.webp',
        model: 'iPhone 12 Pro, 13 Pro, 13 Pro Max, 14 Pro, 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES TORNASOL METALIZADO =====
    {
        id: 29,
        name: 'Cases Tornasol Metalizado',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 39,
        image: 'images/tornasol-metalizado.webp',
        model: 'iPhone 14, 14 Pro Max, 15, 16 Pro Max, 17, 17 Pro, 17 Pro Max',
        material: 'PC metalizado',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES MARMOL DISNEY =====
    {
        id: 30,
        name: 'Cases Mármol Disney',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 28,
        image: 'images/marmol-disney.webp',
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Disney',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES MARMOL =====
    {
        id: 31,
        name: 'Cases Mármol',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 17,
        image: 'images/marmol.webp',
        model: 'iPhone 13, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro Max',
        material: 'PC efecto mármol',
        category: 'Clásicos',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES UNICOLOR =====
    {
        id: 32,
        name: 'Cases Unicolor',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 30,
        image: 'images/unicolor.webp',
        model: 'iPhone 13, 14, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro Max',
        material: 'Silicone',
        category: 'Clásicos',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES DISEÑO VICKY =====
    {
        id: 33,
        name: 'Cases Diseño Vicky',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 22,
        image: 'images/diseno-vicky.webp',
        model: 'iPhone 14, 15, 16, 14 Pro Max, 16 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES LUJO UNICOLOR =====
    {
        id: 34,
        name: 'Cases Lujo Unicolor',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 29,
        image: 'images/lujo-unicolor.webp',
        model: 'iPhone 17 Pro Max',
        material: 'PC + TPU',
        category: 'Clásicos',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES ARCOIRIS =====
    {
        id: 35,
        name: 'Cases Arcoíris',
        price: 25000,
        originalPrice: null,
        rating: 5,
        reviews: 21,
        image: 'images/arcoiris.webp',
        images: [
            'images/arco1.webp',
            'images/arco2.webp',
            'images/arco3.webp',
            'images/arco4.webp',
            'images/arco5.webp',
            'images/arco6.webp',

        ],
        model: 'iPhone 17 Pro, 17 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'rosa fuerte', image: 'images/arco1.webp' },
            { name: 'verde agua', image: 'images/arco2.webp' },
            { name: 'rosa lavanda', image: 'images/arco3.webp' },
            { name: 'verde menta', image: 'images/arco4.webp' },
            { name: 'rosa magenta', image: 'images/arco5.webp' },
            { name: 'azul purpura', image: 'images/arco6.webp' },

        ]
    },
    // ===== CASES 360 =====
    {
        id: 36,
        name: 'Cases 360',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 33,
        image: 'images/cases-360.webp',
        model: 'iPhone 13 Pro, 13 Pro Max, 15 Pro, 15 Pro Max',
        material: 'PC + TPU',
        category: 'Protección',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES ANDROID MOSCHINO =====
    {
        id: 37,
        name: 'Cases Android Moschino',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/android-moschino.webp',
        model: 'Redmi Note 14, Hot50Pro Plus, Spark Go 2025, Motorola G45, Canon A40 Pro, Moto E60 Fusion, Moto G75, Oppo A40, Oppo A60, Samsung S25 Ultra, Samsung A16, Samsung A35, Samsung A56, Samsung A36, Samsung A17, Samsung A07, Honor X8c, Honor X9c',
        material: 'Silicone',
        category: 'Android',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES GLITTER TORNASOL =====
    {
        id: 38,
        name: 'Cases Glitter Tornasol',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 16,
        image: 'images/glitter-tornasol.webp',
        images: [
            'images/glitert1.webp',
            'images/glitert2.webp',
            'images/glitert3.webp',
            'images/glitert4.webp',
            'images/glitert5.webp',
        ],
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone con glitter',
        category: 'Diseños',
        colors: [
            { name: 'purpura magenta', image: 'images/glitert1.webp' },
            { name: 'rojo matiz coral', image: 'images/glitert2.webp' },
            { name: 'azul aqua/menta', image: 'images/glitert3.webp' },
            { name: 'azul petroleo', image: 'images/glitert4.webp' },
            { name: 'amarillo dorado', image: 'images/glitert5.webp' },

        ]
    },
    // ===== CASES SWAROVSKI =====
    {
        id: 39,
        name: 'Cases Swarovski',
        price: 20000,
        originalPrice: null,
        rating: 5,
        reviews: 28,
        image: 'images/swarovski.webp',
        model: 'iPhone 12, 12 Pro Max, 13, 13 Pro Max, 14, 14 Pro Max, 15, 15 Pro Max',
        material: 'Silicone con cristales',
        category: 'Lujo',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES STITCH LENTES =====
    {
        id: 40,
        name: 'Cases Stitch Lentes',
        price: 25000,
        originalPrice: null,
        rating: 5,
        reviews: 35,
        image: 'images/stitch-lentes.webp',
        model: 'iPhone 11, 13, 14, 14 Pro Max, 15 Pro Max, 16 Pro Max',
        material: 'Silicone',
        category: 'Disney',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES BARBIE =====
    {
        id: 41,
        name: 'Cases Barbie',
        price: 25000,
        originalPrice: null,
        rating: 5,
        reviews: 42,
        image: 'images/barbie.webp',
        model: 'iPhone 11, 13, 14 Pro Max, 15 Pro Max, 16 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES ESCANDALOSOS =====
    {
        id: 42,
        name: 'Cases Escandalosos',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/escandalosos.webp',
        model: 'iPhone 11, 13, 14, 14 Pro, 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES CORAZON SWAROVSKI =====
    {
        id: 43,
        name: 'Cases Corazón Swarovski',
        price: 20000,
        originalPrice: null,
        rating: 4,
        reviews: 24,
        image: 'images/corazon-swarovski.webp',
        images: [
            'images/corazonsw1.webp',
            'images/corazonsw2.webp',
            'images/corazonsw3.webp',
            'images/corazonsw4.webp',
            'images/corazonsw5.webp',
        ],
        model: 'iPhone 11, 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone con cristales',
        category: 'Lujo',
        colors: [
            { name: 'lila', image: 'images/corazonsw1.webp' },
            { name: 'amarillo limon', image: 'images/corazonsw2.webp' },
            { name: 'plateado brillante', image: 'images/corazonsw3.webp' },
            { name: 'plata brillante', image: 'images/corazonsw4.webp' },
            { name: 'rosa champan', image: 'images/corazonsw5.webp' },

        ]
    },
    // ===== CASES DISNEY GLITTER =====
    {
        id: 44,
        name: 'Cases Disney Glitter',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 31,
        image: 'images/disney-glitter.webp',
        model: 'iPhone 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone con glitter',
        category: 'Disney',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES DISNEY MANILLA =====
    {
        id: 45,
        name: 'Cases Disney con Manilla',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 17,
        image: 'images/disney-manilla.webp',
        model: 'iPhone 14 Pro Max, 15 Pro Max, 16 Pro',
        material: 'Silicone + manilla',
        category: 'Manillas',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES LOVE =====
    {
        id: 46,
        name: 'Cases Love',
        price: 25000,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/love.webp',
        images: [
            'images/love1.webp',
            'images/love2.webp',
            'images/love3.webp'
        ],
        model: 'iPhone 14 Pro, 14 Pro Max, 15 Pro max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: 'rosa cuarzo', image: 'images/love1.webp' },
            { name: 'azul hielo', image: 'images/love2.webp' },
            { name: 'gris metal', image: 'images/love3.webp' },

        ]
    },
    // ===== CASES BARRILETE =====
    {
        id: 47,
        name: 'Cases Barrilete',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 32,
        image: 'images/barrilee.webp',
        model: 'iPhone 11, 13, 13 Pro Max, 14, 14 Pro Max, 15, 15 Pro Max, 16 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES NEON =====
    {
        id: 48,
        name: 'Cases Neón',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/neon.webp',
        model: 'iPhone 13, 14. 14 Pro Max, 15, 15 Pro Max, 16, 16 Pro Max, 17, 17 Pro Max',
        material: 'Silicone',
        category: 'Diseños',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' }
        ]
    },
    // ===== CASES SOPORTE 360 =====
    {
        id: 49,
        name: 'Cases Soporte 360',
        price: 30000,
        originalPrice: null,
        rating: 4,
        reviews: 44,
        image: 'images/soporte-360.webp',
        images: [

            'images/cases-mickey2.webp',
            'images/cases-mickey3.webp',
            'images/cases-mickey4.webp',
            'images/cases-mickey5.webp',
            'images/cases-mickey6.webp',
            'images/cases-mickey7.webp',
            'images/cases-mickey8.webp',
            'images/cases-mickey9.webp'
        ],
        model: 'iPhone 13, 14, 15, 14 Pro Max, 15 Pro Max, 16, 16 Pro Max 17, 17 Pro Max',
        material: 'TPU (goma termoplástica) y Policarbonato (PC) ',
        category: 'Soporte',
        colors: [
            { name: 'winnie pooh', image: 'images/cases-mickey2.webp' },
            { name: 'chesire cat', image: 'images/cases-mickey3.webp' },
            { name: 'monster', image: 'images/cases-mickey4.webp' },
            { name: 'chip y dale', image: 'images/cases-mickey5.webp' },
            { name: 'stitch', image: 'images/cases-mickey6.webp' },
            { name: 'my melody', image: 'images/cases-mickey7.webp' },
            { name: 'garfield', image: 'images/cases-mickey8.webp' },
            { name: 'dumbo', image: 'images/cases-mickey9.webp' },

        ]
    },

    // ===== ACCESORIOS - BORDES DE RELOJ =====
    {
        id: 51,
        name: 'Borde Reloj Piedritas',
        price: 15000,
        originalPrice: null,
        rating: 4,
        reviews: 25,
        image: 'images/borde-reloj-piedritas.webp',
        model: '38mm, 40mm',
        material: 'Piedritas',
        category: 'Accesorios',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    // ===== ACCESORIOS - LENTES =====
    {
        id: 52,
        name: 'Lentes',
        price: 3000,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/lentes.webp',
        model: 'Modelos 01, 02, 03, 04, 05',
        material: 'Plástico',
        category: 'Accesorios',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    // ===== ACCESORIOS - PROTECTORES =====
    {
        id: 53,
        name: 'Protector Cargador 20W',
        price: 15000,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/protector-cargador.webp',
        model: '20W',
        material: 'Transparente',
        category: 'Accesorios',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    // ===== ACCESORIOS - PUNTAS =====
    {
        id: 54,
        name: 'Puntas Completas',
        price: 10000,
        originalPrice: null,
        rating: 4,
        reviews: 10,
        image: 'images/puntas-completas.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Accesorios',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    // ===== ACCESORIOS - MANILLAS =====
    {
        id: 55,
        name: 'Manilla Barrilete',
        price: 10000,
        originalPrice: null,
        rating: 4,
        reviews: 14,
        image: 'images/manilla-barrilete.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    {
        id: 56,
        name: 'Manilla Tela',
        price: 15000,
        originalPrice: null,
        rating: 4,
        reviews: 11,
        image: 'images/manilla-tela.webp',
        model: 'Universal',
        material: 'Tela',
        category: 'Manillas',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    {
        id: 57,
        name: 'Manilla Neón',
        price: 10000,
        originalPrice: null,
        rating: 4,
        reviews: 9,
        image: 'images/manilla-neon.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
    {
        id: 58,
        name: 'Manillas',
        price: 10000,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/manillas.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas',
        colors: [
            { name: '' },
            { name: '' },
            { name: '' },
            { name: '' },

        ]
    },
];

// ============================================================
// 2. FORMATEAR PRECIO EN COP
// ============================================================
function formatCOP(amount) {
    if (amount === null || amount === undefined) {
        return 'Consultar precio';
    }
    return '$' + amount.toLocaleString('es-CO');
}

// ============================================================
// 2.1 SEGURIDAD: Sanitizar texto
// ============================================================
function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const DEFAULT_COLORS = [
    { name: 'Negro', hex: '#1a1a1a' },
    { name: 'Transparente', hex: '#e8ebef' },
    { name: 'Rosa', hex: '#f4a6c0' },
    { name: 'Azul', hex: '#4a90d9' },
    { name: 'Blanco', hex: '#f5f5f5' },
    { name: 'Morado', hex: '#8a6fc9' }
];

function getProductColors(product) {
    if (Array.isArray(product.colors) && product.colors.length) return product.colors;
    return DEFAULT_COLORS;
}

function getCompatibleModels(product) {
    if (!product.model) return [];
    const raw = product.model.trim();
    if (/\(/.test(raw) && !/iphone/i.test(raw)) return [raw];
    const prefixMatch = raw.match(/^iphone/i);
    const prefix = prefixMatch ? 'iPhone ' : '';
    return raw
        .replace(/^iphone/i, '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => (prefix && !/iphone/i.test(s) ? prefix + s : s));
}

// ============================================================
// 3. FILTROS POR CATEGORÍA
// ============================================================
let currentCategory = 'all';
let currentSort = 'default';
let currentSearch = '';

function getFilteredProducts() {
    let filtered = [...products];

    if (currentCategory === 'ofertas') {
        filtered = filtered.filter(p => p.originalPrice && p.originalPrice > p.price);
    } else if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (currentSearch.trim()) {
        const q = currentSearch.trim().toLowerCase();
        filtered = filtered.filter(p => {
            const searchableString = JSON.stringify(p).toLowerCase();
            return searchableString.includes(q);
        });
    }

    switch (currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
            break;
        case 'price-desc':
            filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
            break;
        case 'popular':
            filtered.sort((a, b) => b.reviews - a.reviews);
            break;
        default:
            break;
    }
    return filtered;
}

// ============================================================
// 4. RENDERIZAR PRODUCTOS
// ============================================================
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const sortSelect = document.getElementById('sortSelect');

function renderProducts() {
    if (!productsGrid) return;
    const filtered = getFilteredProducts();
    if (resultsCount) {
        resultsCount.textContent = `Mostrando ${filtered.length} productos`;
    }
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size:2rem;color:#ccc;"></i>
                <p>No hay productos en esta categoría</p>
            </div>
        `;
        return;
    }
    productsGrid.innerHTML = filtered.map((product, i) => {
        const isOnSale = product.originalPrice && product.originalPrice > product.price;
        const priceDisplay = product.price ? formatCOP(product.price) : 'Consultar precio';
        const originalPriceHTML = product.originalPrice
            ? `<span class="original">${formatCOP(product.originalPrice)}</span>`
            : '';
        const fullStars = Math.floor(product.rating);
        const ratingStars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
        const webp = product.image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const delay = i < 12 ? `style="animation-delay:${i * 0.04}s"` : '';
        const safeName = escapeHTML(product.name);
        const safeCategory = escapeHTML(product.category);
        const safeModel = escapeHTML(product.model);
        return `
            <article class="product-card" data-id="${product.id}" ${delay}>
                <div class="product-image-wrapper loading" role="button" tabindex="0"
                     aria-label="Ver detalles de ${safeName}">
                    <span class="product-badge">${safeCategory}</span>
                    <span class="quick-view-hint"><i class="fas fa-expand" aria-hidden="true"></i> Ver detalles</span>
                    <picture>
                        <source type="image/webp" srcset="${webp}">
                        <img src="${product.image}" alt="${safeName} — funda para ${safeModel}"
                             class="product-image" loading="lazy" decoding="async" width="900" height="900"
                             onload="this.classList.add('loaded');this.closest('.product-image-wrapper').classList.remove('loading');"
                             onerror="handleImgError(this);">
                    </picture>
                </div>
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-name">${safeName}</h3>
                        <div class="product-rating" aria-label="Calificación ${product.rating} de 5">
                            ${ratingStars} <span>(${product.reviews})</span>
                        </div>
                    </div>
                    <div class="product-price">
                        ${priceDisplay}
                        ${originalPriceHTML}
                        ${isOnSale ? '<span class="sale">Oferta</span>' : ''}
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Seleccionar ${safeName}">
                        <i class="fas fa-plus" aria-hidden="true"></i> Añadir al carrito
                    </button>
                </div>
            </article>
        `;
    }).join('');

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            const productId = parseInt(this.dataset.id);
            openProductModal(productId);
        });
    });

    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.dataset.id);
        const wrapper = card.querySelector('.product-image-wrapper');
        const open = (e) => {
            e.preventDefault();
            openProductModal(id);
        };
        if (wrapper) {
            wrapper.addEventListener('click', open);
            wrapper.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') open(e);
            });
        }
        const name = card.querySelector('.product-name');
        if (name) name.addEventListener('click', open);
    });
}

// ============================================================
// 5. FILTROS POR CATEGORÍA
// ============================================================
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.filter;
            renderProducts();
        });
    });
}

// ============================================================
// 6. ORDENAR
// ============================================================
if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
}

// ============================================================
// 7. CARRITO
// ============================================================
function addToCart(productId, options = {}) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Producto no encontrado:', productId);
        return;
    }
    if (!product.price) {
        showToast('⚠️ Este producto requiere consultar precio por WhatsApp');
        return;
    }
    const qty = Math.max(1, parseInt(options.quantity) || 1);
    const color = options.color || null;
    const iphoneModel = options.iphoneModel || null;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item =>
        item.id === productId &&
        (item.color || null) === color &&
        (item.iphoneModel || null) === iphoneModel
    );
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: color,
            iphoneModel: iphoneModel,
            quantity: qty
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    const extra = [color, iphoneModel].filter(Boolean).join(' · ');
    showToast(`✓ ${product.name}${extra ? ' (' + extra + ')' : ''} añadido al carrito`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartCountFloat = document.getElementById('cartCountFloat');

    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        if (cartCountFloat) {
            cartCountFloat.textContent = totalItems;
        }
    }
}

function loadCart() {
    updateCartUI();
}

// ============================================================
// 8. TOAST
// ============================================================
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#1a1a1a',
        color: '#fff',
        padding: '14px 30px',
        borderRadius: '12px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.95rem',
        fontWeight: '500',
        zIndex: '9999',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        opacity: '0',
        transition: 'opacity 0.4s ease'
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
    });
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ============================================================
// 9. MAPA DARK - ESTILO CYBER KASPERSKY
// ============================================================
function initMap() {
    const mapElement = document.getElementById('storesMap');
    if (!mapElement) return;
    const stores = [
        { name: 'NODO Centro', lat: 4.6017, lng: -74.0842, phone: '+57 311 528 3030' },
        { name: 'CAPITAL', lat: 4.6020, lng: -74.0830, phone: '+57 322 882 6037' },
        { name: 'MANHATTAN San Andresito', lat: 4.6060, lng: -74.0865, phone: '+57 313 297 6060' },
        { name: 'NODO Móvil', lat: 4.6015, lng: -74.0845, phone: '+57 322 881 8335' },
        { name: 'AV COLON', lat: 4.6012, lng: -74.0838, phone: '+57 312 365 0213' }
    ];
    const map = L.map(mapElement, {
        center: [4.6010, -74.0840],
        zoom: 15,
        zoomControl: false,
        attributionControl: false
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 19,
        minZoom: 3
    }).addTo(map);
    L.circle([4.6010, -74.0840], {
        radius: 500,
        color: '#007aff',
        weight: 1,
        opacity: 0.3,
        fillColor: '#007aff',
        fillOpacity: 0.02,
        className: 'radar-circle'
    }).addTo(map);
    stores.forEach((store, index) => {
        const pulseRing = L.circle([store.lat, store.lng], {
            radius: 30,
            color: '#007aff',
            weight: 2,
            opacity: 0.6,
            fillColor: '#007aff',
            fillOpacity: 0.05,
            className: 'pulse-ring'
        }).addTo(map);
        let scale = 1;
        setInterval(() => {
            scale = scale === 1 ? 2 : 1;
            const radius = scale === 1 ? 30 : 60;
            pulseRing.setRadius(radius);
            pulseRing.setStyle({
                opacity: scale === 1 ? 0.6 : 0.2,
                weight: scale === 1 ? 2 : 1
            });
        }, 1500 + (index * 300));
        const customIcon = L.divIcon({
            className: 'custom-marker-cyber',
            html: `
                <div class="marker-cyber">
                    <div class="marker-glow"></div>
                    <i class="fas fa-shield-alt"></i>
                </div>
            `,
            iconSize: [50, 50],
            iconAnchor: [25, 50]
        });
        const marker = L.marker([store.lat, store.lng], {
            icon: customIcon,
            title: store.name
        }).addTo(map);
        marker.bindPopup(`
            <div class="popup-cyber">
                <div class="popup-header">
                    <i class="fas fa-shield-alt"></i>
                    <strong>${store.name}</strong>
                </div>
                <div class="popup-body">
                    <p><i class="fas fa-phone"></i> ${store.phone}</p>
                    <a href="https://wa.me/${store.phone.replace(/[^0-9]/g, '')}" target="_blank" class="popup-whatsapp">
                        <i class="fab fa-whatsapp"></i> Contactar
                    </a>
                </div>
                <div class="popup-footer">
                    <span class="status-online">● Activo</span>
                </div>
            </div>
        `, {
            className: 'popup-cyber-container',
            maxWidth: 280
        });
    });
    const connections = [
        [0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4], [0, 4]
    ];
    connections.forEach(([i, j]) => {
        const latlngs = [
            [stores[i].lat, stores[i].lng],
            [stores[j].lat, stores[j].lng]
        ];
        const line = L.polyline(latlngs, {
            color: '#007aff',
            weight: 1,
            opacity: 0.15,
            dashArray: '8, 8',
            className: 'cyber-line'
        }).addTo(map);
        let lineOpacity = 0.15;
        setInterval(() => {
            lineOpacity = lineOpacity === 0.15 ? 0.35 : 0.15;
            line.setStyle({ opacity: lineOpacity });
        }, 2000 + ((i + j) * 200));
    });
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
    setTimeout(() => {
        map.invalidateSize();
    }, 500);
    setTimeout(() => {
        mapElement.style.opacity = '1';
        mapElement.style.transition = 'opacity 1.5s ease';
    }, 200);
}

// ============================================================
// 10. RESPALDO DE IMAGEN
// ============================================================
function handleImgError(img) {
    img.onerror = null;
    img.style.display = 'none';
    const wrap = img.closest('.product-image-wrapper');
    if (wrap) {
        wrap.classList.remove('loading');
        wrap.classList.add('img-fallback');
    }
}

// ============================================================
// 11. NAVEGACIÓN MÓVIL
// ============================================================
// 11. NAVEGACIÓN MÓVIL (CORREGIDA)
// ============================================================
function setupMobileNav() {
    const headerActions = document.querySelector('.header-actions');
    const nav = document.querySelector('.nav');
    if (!headerActions || !nav) return;
    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span>';
    headerActions.appendChild(toggle);
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    const drawer = document.createElement('nav');
    drawer.className = 'mobile-nav';
    drawer.setAttribute('aria-label', 'Navegación móvil');
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-nav-close';
    closeBtn.setAttribute('aria-label', 'Cerrar menú');
    closeBtn.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
    drawer.appendChild(closeBtn);
    const icons = ['fa-house', 'fa-grip', 'fa-circle-info', 'fa-store', 'fa-envelope'];
    Array.from(nav.querySelectorAll('a')).forEach((a, idx) => {
        const link = document.createElement('a');
        link.href = a.getAttribute('href');
        link.innerHTML = `<i class="fas ${icons[idx] || 'fa-angle-right'}" aria-hidden="true"></i> ${a.textContent.trim()}`;
        drawer.appendChild(link);
    });
    const cta = document.createElement('a');
    cta.className = 'mobile-nav-cta';
    cta.href = 'https://wa.me/573138608795';
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i> Escríbenos';
    drawer.appendChild(cta);
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    // ===== CORRECCIÓN: Usar function declarations o variables separadas =====
    function openMenu() {
        drawer.classList.add('open');
        overlay.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => drawer.classList.contains('open') ? closeMenu() : openMenu());
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

// ============================================================
// 12. BUSCADOR
// ============================================================
function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (!searchBtn) return;

    if (!document.getElementById('productsGrid')) {
        searchBtn.addEventListener('click', () => {
            window.location.href = '/#coleccion';
        });
        return;
    }

    const bar = document.createElement('div');
    bar.className = 'search-bar';
    bar.innerHTML = `
        <div class="container">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input type="search" id="productSearch" placeholder="Buscar fundas, Disney, MagSafe, modelo..." aria-label="Buscar productos" autocomplete="off">
            <button class="search-clear" id="searchClearBtn" aria-label="Limpiar búsqueda"><i class="fas fa-times" aria-hidden="true"></i></button>
        </div>
    `;
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(bar, header.nextSibling);

    const input = bar.querySelector('#productSearch');
    const clearBtn = bar.querySelector('#searchClearBtn');

    searchBtn.setAttribute('aria-expanded', 'false');
    searchBtn.addEventListener('click', () => {
        const isOpen = bar.classList.toggle('open');
        searchBtn.setAttribute('aria-expanded', String(isOpen));

        if (isOpen) {
            setTimeout(() => {
                input.focus();
                if (input.value.trim()) {
                    clearBtn.classList.add('visible');
                }
                const section = document.getElementById('coleccion');
                if (section) {
                    const headerHeight = document.querySelector('.header-main') ? document.querySelector('.header-main').offsetHeight : 90;
                    const topPos = section.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 20);
                    window.scrollTo({ top: topPos, behavior: 'smooth' });
                }
            }, 300);
        } else {
            clearBtn.classList.remove('visible');
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            input.value = '';
            currentSearch = '';
            renderProducts();
            bar.classList.remove('open');
            clearBtn.classList.remove('visible');
            searchBtn.setAttribute('aria-expanded', 'false');
            input.blur();
        }
    });

    let searchTimeout;
    input.addEventListener('input', () => {
        clearTimeout(searchTimeout);

        if (input.value.trim()) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }

        searchTimeout = setTimeout(() => {
            currentSearch = input.value;
            renderProducts();

            if (currentSearch.trim()) {
                const section = document.getElementById('coleccion');
                if (section) {
                    const headerHeight = document.querySelector('.header-main') ? document.querySelector('.header-main').offsetHeight : 90;
                    const topPos = section.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 20);
                    window.scrollTo({ top: topPos, behavior: 'smooth' });
                }
            }
        }, 350);
    });

    clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        input.value = '';
        currentSearch = '';
        renderProducts();
        input.focus();
        clearBtn.classList.remove('visible');
        bar.classList.remove('open');
        searchBtn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', (e) => {
        if (bar.classList.contains('open')) {
            const isClickInside = bar.contains(e.target) || searchBtn.contains(e.target);
            if (!isClickInside) {
                bar.classList.remove('open');
                searchBtn.setAttribute('aria-expanded', 'false');
                clearBtn.classList.remove('visible');
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !input.value.trim()) {
            bar.classList.remove('open');
            searchBtn.setAttribute('aria-expanded', 'false');
            clearBtn.classList.remove('visible');
        }
    });
}

// ============================================================
// 13. EFECTOS DE SCROLL
// ============================================================
function setupScrollEffects() {
    const headerMain = document.querySelector('.header-main');
    if (headerMain) {
        const onScroll = () => headerMain.classList.toggle('scrolled', window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }
}

// ============================================================
// 14. MODAL CON CARRUSEL Y ZOOM
// ============================================================
// 14. MODAL CON CARRUSEL Y ZOOM (VERSIÓN SIMPLE - SIN cloneNode)
// ============================================================
let modalState = { productId: null, color: null, iphoneModel: null, quantity: 1, currentSlide: 0, images: [] };
let zoomState = {
    isOpen: false,
    currentImage: null,
    currentIndex: 0,
    scale: 1,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
};

function setupProductModal() {
    if (document.getElementById('productModal')) return;
    const modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'product-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="product-modal-overlay" data-close></div>
        <div class="product-modal-dialog" role="document">
            <button class="product-modal-close" data-close aria-label="Cerrar">
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
            <div class="product-modal-body" id="productModalBody"></div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.querySelectorAll('[data-close]').forEach(el =>
        el.addEventListener('click', closeProductModal));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeProductModal();
    });
}

// ===== Función goToSlide - IR A UNA SLIDE ESPECÍFICA =====
function goToSlide(index) {
    const track = document.getElementById('pmCarouselTrack');
    const dots = document.querySelectorAll('.pm-carousel-dot');
    const counterEl = document.getElementById('pmCurrentSlide');

    if (!track) return;
    const totalSlides = dots.length;
    if (totalSlides === 0) return;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    modalState.currentSlide = index;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';

    dots.forEach(function (dot, i) {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    if (counterEl) {
        counterEl.textContent = (index + 1) + ' / ' + totalSlides;
    }
}

// ===== Configurar eventos de flechas y dots =====
function setupCarouselEvents() {
    var prevBtn = document.getElementById('pmCarouselPrev');
    var nextBtn = document.getElementById('pmCarouselNext');
    var dots = document.querySelectorAll('.pm-carousel-dot');

    // Botón anterior
    if (prevBtn) {
        // Remover eventos anteriores
        var newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', function (e) {
            e.stopPropagation();
            var activeDots = document.querySelectorAll('.pm-carousel-dot');
            var activeIndex = 0;
            activeDots.forEach(function (d, i) {
                if (d.classList.contains('active')) activeIndex = i;
            });
            goToSlide(activeIndex - 1);
        });
    }

    // Botón siguiente
    if (nextBtn) {
        var newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', function (e) {
            e.stopPropagation();
            var activeDots = document.querySelectorAll('.pm-carousel-dot');
            var activeIndex = 0;
            activeDots.forEach(function (d, i) {
                if (d.classList.contains('active')) activeIndex = i;
            });
            goToSlide(activeIndex + 1);
        });
    }

    // Dots
    dots.forEach(function (dot, i) {
        var newDot = dot.cloneNode(true);
        dot.parentNode.replaceChild(newDot, dot);
        newDot.addEventListener('click', function (e) {
            e.stopPropagation();
            goToSlide(i);
        });
    });
}

// ===== FUNCIÓN ZOOM =====
function setupZoomEvents() {
    var slides = document.querySelectorAll('.pm-carousel-slide');
    slides.forEach(function (slide, index) {
        var img = slide.querySelector('.pm-slide-image');
        if (!img) return;

        var newSlide = slide.cloneNode(true);
        slide.parentNode.replaceChild(newSlide, slide);
        var newImg = newSlide.querySelector('.pm-slide-image');

        function abrirZoom(e) {
            if (e) {
                e.stopPropagation();
                if (e.target.closest('.pm-carousel-btn')) return;
                if (e.target.closest('.pm-carousel-dot')) return;
            }
            var srcToShow = newImg.dataset.full || newImg.src;
            var product = products.find(function (p) { return p.id === modalState.productId; });
            var productName = product ? product.name : 'Producto';
            openZoom(srcToShow, productName, 0, 1);
        }

        newSlide.addEventListener('click', abrirZoom);
        newSlide.style.cursor = 'pointer';
    });
}

// ===== ACTUALIZAR CARRUSEL CON NUEVAS IMÁGENES =====
function updateCarouselImages(newImages, productName) {
    var track = document.getElementById('pmCarouselTrack');
    var dotsContainer = document.getElementById('pmCarouselDots');
    var counterEl = document.getElementById('pmCurrentSlide');
    var prevBtn = document.getElementById('pmCarouselPrev');
    var nextBtn = document.getElementById('pmCarouselNext');

    var totalSlides = newImages.length;
    modalState.images = newImages;
    modalState.currentSlide = 0;

    // Actualizar track
    if (track) {
        var html = '';
        for (var i = 0; i < newImages.length; i++) {
            var img = newImages[i];
            var webpImg = img.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            html += `
                <div class="pm-carousel-slide" data-index="${i}">
                    <picture>
                        <source type="image/webp" srcset="${webpImg}">
                        <img src="${img}" alt="${escapeHTML(productName)} - Imagen ${i + 1}"
                             loading="lazy" decoding="async"
                             onerror="handleImgError(this);"
                             class="pm-slide-image"
                             data-full="${img}"
                             data-index="${i}">
                    </picture>
                    <span class="zoom-hint"><i class="fas fa-search-plus"></i> Click para ampliar</span>
                </div>
            `;
        }
        track.innerHTML = html;
        track.style.transform = 'translateX(0%)';
    }

    // Actualizar dots
    if (dotsContainer) {
        if (totalSlides <= 1) {
            dotsContainer.innerHTML = '';
        } else {
            var dotsHtml = '';
            for (var j = 0; j < newImages.length; j++) {
                var activeClass = (j === 0) ? 'active' : '';
                dotsHtml += '<button class="pm-carousel-dot ' + activeClass + '" data-slide="' + j + '" aria-label="Ir a imagen ' + (j + 1) + '"></button>';
            }
            dotsContainer.innerHTML = dotsHtml;
        }
    }

    // Actualizar contador
    if (counterEl) {
        counterEl.textContent = '1 / ' + totalSlides;
    }

    // Mostrar/ocultar botones
    if (prevBtn) {
        prevBtn.style.display = (totalSlides <= 1) ? 'none' : 'flex';
    }
    if (nextBtn) {
        nextBtn.style.display = (totalSlides <= 1) ? 'none' : 'flex';
    }

    // Reconfigurar eventos
    setTimeout(function () {
        setupCarouselEvents();
        setupZoomEvents();
    }, 50);
}

// ============================================================
// ABRIR MODAL DE PRODUCTO
// ============================================================
function openProductModal(productId) {
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }
    if (!product) return;
    setupProductModal();

    var colors = getProductColors(product);
    var models = getCompatibleModels(product);
    var images = (Array.isArray(product.images) && product.images.length > 0) ? product.images : [product.image];

    modalState = {
        productId: product.id,
        color: colors.length ? colors[0].name : null,
        iphoneModel: models.length ? models[0] : null,
        quantity: 1,
        currentSlide: 0,
        images: images
    };

    var webp = product.image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    var isOnSale = product.originalPrice && product.originalPrice > product.price;
    var priceDisplay = product.price ? formatCOP(product.price) : 'Consultar precio';
    var fullStars = Math.floor(product.rating);
    var ratingStars = '';
    for (var s = 0; s < fullStars; s++) ratingStars += '★';
    for (var es = fullStars; es < 5; es++) ratingStars += '☆';

    var safeName = escapeHTML(product.name);
    var safeCategory = escapeHTML(product.category);
    var safeMaterial = escapeHTML(product.material || '');

    // Generar HTML de colores
    var colorsHTML = '';
    for (var c = 0; c < colors.length; c++) {
        var colorName = colors[c].name || 'Sin nombre';
        var activeClass = (c === 0) ? 'active' : '';
        var hexColor = colors[c].hex || '#ccc';
        colorsHTML += `
            <button class="pm-color-swatch ${activeClass}"
                    data-color="${escapeHTML(colorName)}"
                    title="${escapeHTML(colorName)}" aria-label="Color ${escapeHTML(colorName)}">
                <span class="pm-swatch-dot" style="background:${escapeHTML(hexColor)}"></span>
                <span class="pm-swatch-name">${escapeHTML(colorName)}</span>
            </button>
        `;
    }

    var modelsHTML = '';
    if (models.length) {
        for (var m = 0; m < models.length; m++) {
            var activeModel = (m === 0) ? 'active' : '';
            modelsHTML += '<button class="pm-model-chip ' + activeModel + '" data-model="' + escapeHTML(models[m]) + '">' + escapeHTML(models[m]) + '</button>';
        }
    } else {
        modelsHTML = '<span class="pm-muted">Consultar disponibilidad</span>';
    }

    var slidesHTML = '';
    for (var im = 0; im < images.length; im++) {
        var img = images[im];
        var webpImg = img.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        slidesHTML += `
            <div class="pm-carousel-slide" data-index="${im}">
                <picture>
                    <source type="image/webp" srcset="${webpImg}">
                    <img src="${img}" alt="${safeName} - Imagen ${im + 1}" 
                         loading="lazy" decoding="async" 
                         onerror="handleImgError(this);"
                         class="pm-slide-image"
                         data-full="${img}"
                         data-index="${im}">
                </picture>
                <span class="zoom-hint"><i class="fas fa-search-plus"></i> Click para ampliar</span>
            </div>
        `;
    }

    var hasMultiple = images.length > 1;
    var navButtons = '';
    if (hasMultiple) {
        navButtons = `
            <button class="pm-carousel-btn prev" id="pmCarouselPrev" aria-label="Imagen anterior">
                <i class="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button class="pm-carousel-btn next" id="pmCarouselNext" aria-label="Imagen siguiente">
                <i class="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
        `;
    }

    var dotsHTML = '';
    if (hasMultiple) {
        for (var d = 0; d < images.length; d++) {
            var activeDot = (d === 0) ? 'active' : '';
            dotsHTML += '<button class="pm-carousel-dot ' + activeDot + '" data-slide="' + d + '" aria-label="Ir a imagen ' + (d + 1) + '"></button>';
        }
    }

    var counterHTML = hasMultiple ? '<span class="pm-carousel-counter"><span id="pmCurrentSlide">1</span> / ' + images.length + '</span>' : '';

    var body = document.getElementById('productModalBody');
    body.innerHTML = `
        <div class="pm-gallery">
            <div class="pm-carousel" id="pmCarousel">
                ${counterHTML}
                <div class="pm-carousel-track" id="pmCarouselTrack">
                    ${slidesHTML}
                </div>
                ${navButtons}
                <div class="pm-carousel-dots" id="pmCarouselDots">
                    ${dotsHTML}
                </div>
            </div>
        </div>
        <div class="pm-details">
            <h2 class="pm-title">${safeName}</h2>
            <div class="pm-rating" aria-label="Calificación ${product.rating} de 5">
                <span class="pm-stars">${ratingStars}</span>
                <span class="pm-reviews">(${product.reviews} reseñas)</span>
            </div>
            <div class="pm-price">
                ${priceDisplay}
                ${isOnSale ? `<span class="pm-original">${formatCOP(product.originalPrice)}</span>` : ''}
                ${isOnSale ? '<span class="pm-sale">Oferta 30% descuento</span>' : ''}
            </div>
            ${safeMaterial ? `<p class="pm-material"><i class="fas fa-layer-group"></i> Material: <strong>${safeMaterial}</strong></p>` : ''}

            <div class="pm-section">
                <h4 class="pm-label">Motivos disponibles</h4>
                <div class="pm-colors">${colorsHTML}</div>
            </div>

            <div class="pm-section">
                <h4 class="pm-label">Modelos compatibles</h4>
                <div class="pm-models">${modelsHTML}</div>
            </div>

            <div class="pm-section pm-qty-row">
                <h4 class="pm-label">Cantidad</h4>
                <div class="pm-qty">
                    <button class="pm-qty-btn" data-qty="-" aria-label="Disminuir">−</button>
                    <span class="pm-qty-value" id="pmQty">1</span>
                    <button class="pm-qty-btn" data-qty="+" aria-label="Aumentar">+</button>
                </div>
            </div>

            <div class="pm-actions">
                <button class="pm-btn pm-btn-cart" id="pmAddCart">
                    <i class="fas fa-cart-plus"></i> Añadir al carrito
                </button>
                <button class="pm-btn pm-btn-whatsapp" id="pmBuyWhatsapp">
                    <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
                </button>
                <button class="pm-btn pm-btn-wompi" id="pmBuyWompi">
                    <i class="fas fa-credit-card"></i> Pagar con tarjeta (Wompi)
                </button>
            </div>
            <p class="pm-secure-note"><i class="fas fa-lock"></i> Pago 100% seguro · Envíos a todo Colombia</p>
        </div>
    `;

    // ===== EVENTO PARA SELECCIONAR COLOR =====
    var colorSwatches = body.querySelectorAll('.pm-color-swatch');
    for (var swIdx = 0; swIdx < colorSwatches.length; swIdx++) {
        (function (sw) {
            sw.addEventListener('click', function (e) {
                e.stopPropagation();
                var allSwatches = body.querySelectorAll('.pm-color-swatch');
                for (var a = 0; a < allSwatches.length; a++) {
                    allSwatches[a].classList.remove('active');
                }
                this.classList.add('active');
                modalState.color = this.dataset.color;

                var prod = products.find(function (p) { return p.id === modalState.productId; });
                if (!prod) return;

                var colorName = (this.dataset.color || '').trim().toLowerCase();
                var colorList = getProductColors(prod) || [];
                var colorObj = null;
                for (var co = 0; co < colorList.length; co++) {
                    if ((colorList[co].name || '').trim().toLowerCase() === colorName) {
                        colorObj = colorList[co];
                        break;
                    }
                }

                var newMainImage = (colorObj && colorObj.image) ? colorObj.image : prod.image;
                var baseImages = (Array.isArray(prod.images) && prod.images.length) ? prod.images.slice() : (prod.image ? [prod.image] : []);
                var newImages = [newMainImage];
                for (var bi = 0; bi < baseImages.length; bi++) {
                    if (baseImages[bi] !== newMainImage) {
                        newImages.push(baseImages[bi]);
                    }
                }

                updateCarouselImages(newImages, prod.name);
            });
        })(colorSwatches[swIdx]);
    }

    // ===== EVENTOS DE MODELOS =====
    var modelChips = body.querySelectorAll('.pm-model-chip');
    for (var mc = 0; mc < modelChips.length; mc++) {
        (function (chip) {
            chip.addEventListener('click', function () {
                var allChips = body.querySelectorAll('.pm-model-chip');
                for (var ac = 0; ac < allChips.length; ac++) {
                    allChips[ac].classList.remove('active');
                }
                this.classList.add('active');
                modalState.iphoneModel = this.dataset.model;
            });
        })(modelChips[mc]);
    }

    // ===== EVENTOS DE CANTIDAD =====
    var qtyEl = body.querySelector('#pmQty');
    var qtyBtns = body.querySelectorAll('.pm-qty-btn');
    for (var qb = 0; qb < qtyBtns.length; qb++) {
        (function (btn) {
            btn.addEventListener('click', function () {
                if (this.dataset.qty === '+') {
                    modalState.quantity++;
                } else {
                    modalState.quantity = Math.max(1, modalState.quantity - 1);
                }
                qtyEl.textContent = modalState.quantity;
            });
        })(qtyBtns[qb]);
    }

    // ===== EVENTOS DE BOTONES =====
    body.querySelector('#pmAddCart').addEventListener('click', function () {
        addToCart(product.id, {
            color: modalState.color,
            iphoneModel: modalState.iphoneModel,
            quantity: modalState.quantity
        });
    });

    body.querySelector('#pmBuyWhatsapp').addEventListener('click', function () {
        buyNowWhatsApp(product);
    });

    body.querySelector('#pmBuyWompi').addEventListener('click', function () {
        payWithWompi([{
            id: product.id,
            name: product.name,
            price: product.price,
            color: modalState.color,
            iphoneModel: modalState.iphoneModel,
            quantity: modalState.quantity
        }]);
    });

    // ===== ABRIR MODAL =====
    var modal = document.getElementById('productModal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Inicializar carrusel
    setupCarouselEvents();
    setTimeout(setupZoomEvents, 100);
}

function closeProductModal() {
    var modal = document.getElementById('productModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (zoomState && zoomState.isOpen) {
        closeZoom();
    }
}

function buyNowWhatsApp(product) {
    var phone = '573138608795';
    var parts = [];
    parts.push('¡Hola! Quiero comprar esta funda:');
    parts.push('');
    parts.push('• Producto: ' + product.name);
    if (modalState.color) parts.push('• Personaje: ' + modalState.color);
    if (modalState.iphoneModel) parts.push('• Modelo: ' + modalState.iphoneModel);
    parts.push('• Cantidad: ' + modalState.quantity);
    if (product.price) parts.push('• Precio unitario: ' + formatCOP(product.price));
    var msg = encodeURIComponent(parts.join('\n'));
    window.open('https://wa.me/' + phone + '?text=' + msg, '_blank', 'noopener');
}

// ============================================================
// 15. ZOOM DE IMAGEN (Lightbox)
// ============================================================
function createZoomOverlay() {
    if (document.getElementById('zoomOverlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'zoomOverlay';
    overlay.className = 'zoom-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <button class="zoom-close" id="zoomClose" aria-label="Cerrar zoom">
            <i class="fas fa-times" aria-hidden="true"></i>
        </button>
        <div class="zoom-container" id="zoomContainer">
            <img class="zoom-image" id="zoomImage" src="" alt="Ampliación de imagen" draggable="false">
            <div class="zoom-lens" id="zoomLens"></div>
        </div>
        <div class="zoom-info" id="zoomInfo">
            <i class="fas fa-search-plus" aria-hidden="true"></i> 
            <span id="zoomCounter">1 / 1</span> · 
            <span id="zoomName">Producto</span>
            <span style="opacity:0.5;margin-left:8px;">· Scroll para ampliar · Arrastra para mover</span>
        </div>
    `;
    document.body.appendChild(overlay);

    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomClose = document.getElementById('zoomClose');
    const zoomContainer = document.getElementById('zoomContainer');
    const zoomImage = document.getElementById('zoomImage');
    const zoomLens = document.getElementById('zoomLens');

    zoomClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeZoom();
    });
    zoomOverlay.addEventListener('click', (e) => {
        if (e.target === zoomOverlay) {
            closeZoom();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && zoomState.isOpen) {
            closeZoom();
        }
    });

    zoomContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        const newScale = Math.min(4, Math.max(1, zoomState.scale + delta));
        applyZoom(newScale);
    }, { passive: false });

    zoomContainer.addEventListener('mousedown', (e) => {
        if (zoomState.scale > 1) {
            zoomState.isDragging = true;
            zoomState.startX = e.clientX;
            zoomState.startY = e.clientY;
            zoomState.lastX = zoomState.translateX;
            zoomState.lastY = zoomState.translateY;
            zoomImage.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });
    document.addEventListener('mousemove', (e) => {
        if (!zoomState.isDragging) return;
        const dx = e.clientX - zoomState.startX;
        const dy = e.clientY - zoomState.startY;
        zoomState.translateX = zoomState.lastX + dx;
        zoomState.translateY = zoomState.lastY + dy;
        applyZoom(zoomState.scale);
    });
    document.addEventListener('mouseup', () => {
        if (zoomState.isDragging) {
            zoomState.isDragging = false;
            zoomImage.style.cursor = 'grab';
        }
    });

    function updateLens(clientX, clientY) {
        if (zoomState.scale !== 1) {
            zoomLens.classList.remove('active');
            return;
        }
        const rect = zoomContainer.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
            zoomLens.classList.add('active');
            zoomLens.style.left = (clientX - rect.left - 60) + 'px';
            zoomLens.style.top = (clientY - rect.top - 60) + 'px';
            const img = document.getElementById('zoomImage');
            const bgX = Math.max(0, Math.min(100, x * 100));
            const bgY = Math.max(0, Math.min(100, y * 100));
            zoomLens.style.backgroundImage = `url(${img.src})`;
            zoomLens.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
            zoomLens.style.backgroundPosition = `${bgX}% ${bgY}%`;
        } else {
            zoomLens.classList.remove('active');
        }
    }

    zoomContainer.addEventListener('mousemove', (e) => {
        updateLens(e.clientX, e.clientY);
    });
    zoomContainer.addEventListener('mouseleave', () => {
        zoomLens.classList.remove('active');
    });

    zoomContainer.addEventListener('touchmove', (e) => {
        if (zoomState.scale === 1) {
            e.preventDefault();
            const touch = e.touches[0];
            updateLens(touch.clientX, touch.clientY);
        }
    }, { passive: false });

    zoomImage.addEventListener('dblclick', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (zoomState.scale > 1) {
            applyZoom(1);
        } else {
            applyZoom(3);
        }
    });
}

function openZoom(imageSrc, productName, currentIndex, totalImages) {
    createZoomOverlay();

    const overlay = document.getElementById('zoomOverlay');
    const image = document.getElementById('zoomImage');
    const counter = document.getElementById('zoomCounter');
    const nameEl = document.getElementById('zoomName');
    const lens = document.getElementById('zoomLens');

    zoomState.isOpen = true;
    zoomState.currentImage = imageSrc;
    zoomState.currentIndex = 0;
    zoomState.scale = 1;
    zoomState.translateX = 0;
    zoomState.translateY = 0;
    zoomState.isDragging = false;

    image.src = imageSrc;
    image.alt = `${productName} - Ampliación`;

    counter.textContent = `1 / 1`;
    nameEl.textContent = productName;

    applyZoom(1);

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    lens.classList.remove('active');
}

function closeZoom() {
    const overlay = document.getElementById('zoomOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
        zoomState.isOpen = false;
        zoomState.scale = 1;
        zoomState.translateX = 0;
        zoomState.translateY = 0;
        const container = document.getElementById('zoomContainer');
        if (container) {
            container.classList.remove('zoomed');
        }
        const lens = document.getElementById('zoomLens');
        if (lens) {
            lens.classList.remove('active');
        }
    }, 400);
}

function applyZoom(scale) {
    zoomState.scale = Math.min(4, Math.max(1, scale));
    const container = document.getElementById('zoomContainer');
    const image = document.getElementById('zoomImage');
    const lens = document.getElementById('zoomLens');

    if (zoomState.scale > 1) {
        container.classList.add('zoomed');
        lens.classList.remove('active');
        image.style.cursor = 'grab';
    } else {
        container.classList.remove('zoomed');
        zoomState.translateX = 0;
        zoomState.translateY = 0;
        image.style.cursor = 'zoom-in';
        image.style.transform = 'scale(1) translate(0, 0)';
        return;
    }

    image.style.transform = `scale(${zoomState.scale}) translate(${zoomState.translateX}px, ${zoomState.translateY}px)`;
    image.style.transition = zoomState.isDragging ? 'none' : 'transform 0.3s ease';

    if (zoomState.scale > 1) {
        const rect = container.getBoundingClientRect();
        const imgRect = image.getBoundingClientRect();
        const maxX = (imgRect.width * zoomState.scale - rect.width) / 2;
        const maxY = (imgRect.height * zoomState.scale - rect.height) / 2;
        zoomState.translateX = Math.min(maxX, Math.max(-maxX, zoomState.translateX));
        zoomState.translateY = Math.min(maxY, Math.max(-maxY, zoomState.translateY));
    }
}

// ============================================================
// 16. PASARELA DE PAGOS WOMPI
// ============================================================
async function generateWompiSignature(reference, amountInCents, currency) {
    const cfg = window.WOMPI_CONFIG || {};
    if (cfg.signatureEndpoint) {
        const res = await fetch(cfg.signatureEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference, amountInCents, currency })
        });
        if (!res.ok) throw new Error('No se pudo obtener la firma de integridad del servidor.');
        const data = await res.json();
        return data.signature;
    }
    if (cfg.integritySecretTEST) {
        const raw = `${reference}${amountInCents}${currency}${cfg.integritySecretTEST}`;
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return null;
}

async function payWithWompi(items) {
    const cfg = window.WOMPI_CONFIG || {};
    if (!cfg.publicKey || cfg.publicKey.indexOf('AQUI') !== -1) {
        showToast('⚠️ Wompi aún no está configurado. Agrega tu llave pública en js/wompi-config.js');
        return;
    }
    const validItems = items.filter(it => it.price && it.price > 0);
    if (!validItems.length) {
        showToast('⚠️ Este producto requiere consultar precio por WhatsApp');
        return;
    }
    const totalCOP = validItems.reduce((sum, it) => sum + it.price * (it.quantity || 1), 0);
    const amountInCents = Math.round(totalCOP * 100);
    const currency = cfg.currency || 'COP';
    const reference = 'PINKCASES-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    let signature = null;
    try {
        signature = await generateWompiSignature(reference, amountInCents, currency);
    } catch (err) {
        console.error(err);
        showToast('⚠️ Error al generar la firma segura. Intenta de nuevo.');
        return;
    }
    if (!signature) {
        showToast('⚠️ Falta configurar la firma de integridad de Wompi.');
        return;
    }
    const openWidget = () => {
        const checkout = new WidgetCheckout({
            currency: currency,
            amountInCents: amountInCents,
            reference: reference,
            publicKey: cfg.publicKey,
            signature: { integrity: signature },
            redirectUrl: cfg.redirectUrl || window.location.href
        });
        checkout.open(function (result) {
            const tx = result.transaction;
            if (tx && tx.status === 'APPROVED') {
                localStorage.removeItem('cart');
                updateCartUI();
                showToast('✅ ¡Pago aprobado! Gracias por tu compra.');
                closeProductModal();
            } else {
                showToast('ℹ️ Transacción ' + (tx ? tx.status : 'no completada'));
            }
        });
    };
    if (typeof WidgetCheckout === 'undefined') {
        const s = document.createElement('script');
        s.src = 'https://checkout.wompi.co/widget.js';
        s.onload = openWidget;
        s.onerror = () => showToast('⚠️ No se pudo cargar Wompi. Revisa tu conexión.');
        document.body.appendChild(s);
    } else {
        openWidget();
    }
}

// ============================================================
// 17. INICIALIZAR
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    renderProducts();
    setupCategoryFilters();
    setupMobileNav();
    setupSearch();
    setupScrollEffects();
    setupProductModal();
    initMap();

    window.formatCOP = formatCOP;
    window.showToast = showToast;
    window.handleImgError = handleImgError;
    window.openProductModal = openProductModal;
    window.payWithWompi = payWithWompi;
    window.openZoom = openZoom;
    window.closeZoom = closeZoom;
});