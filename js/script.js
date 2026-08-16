// ============================================================
// CATÁLOGO COMPLETO - PINK CASES
// Basado en el catálogo de junio 2026
// ============================================================
const products = [
    // ===== CASES FIBRA =====
    {
        id: 1,
        name: 'Cases Fibra',
        price: 13500,
        originalPrice: null,
        rating: 4,
        reviews: 12,
        image: 'images/fibra.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Fibra de carbono',
        category: 'Clásicos'
    },
    // ===== CASES JERRY =====
    {
        id: 2,
        name: 'Cases Jerry',
        price: 13500,
        originalPrice: null,
        rating: 4,
        reviews: 8,
        image: 'images/jerry.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES SATIN =====
    {
        id: 3,
        name: 'Cases Satin',
        price: 15500,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/satin.webp',
        model: 'iPhone 14, 15, 16, 17 Pro Max',
        material: 'Satinado',
        category: 'Clásicos'
    },
    // ===== CASES CLASICO =====
    {
        id: 4,
        name: 'Cases Clásico',
        price: 12500,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/clasico.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Clásicos'
    },
    // ===== CASES TRIANGULO =====
    {
        id: 5,
        name: 'Cases Triángulo',
        price: 9500,
        originalPrice: null,
        rating: 3,
        reviews: 6,
        image: 'images/triangulo.webp',
        model: 'iPhone 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES ANDROID MANILLA =====
    {
        id: 6,
        name: 'Cases Android Manilla',
        price: 11000,
        originalPrice: null,
        rating: 4,
        reviews: 10,
        image: 'images/android-manilla.webp',
        model: 'Android (varios modelos)',
        material: 'Silicone + manilla',
        category: 'Android'
    },
    // ===== CASES DRAGON BALL =====
    {
        id: 7,
        name: 'Cases Dragon Ball',
        price: 14500,
        originalPrice: null,
        rating: 5,
        reviews: 25,
        image: 'images/dragon-ball.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES LUJO SOPORTE =====
    {
        id: 8,
        name: 'Cases Lujo con Soporte',
        price: 15500,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/lujo-soporte.webp',
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max, 16 Pro Max, 17 Pro Max',
        material: 'PC + TPU',
        category: 'Soporte'
    },
    // ===== CASES ESCARCHA SOPORTE =====
    {
        id: 9,
        name: 'Cases Escarcha con Soporte',
        price: 16500,
        originalPrice: null,
        rating: 4,
        reviews: 14,
        image: 'images/escarcha-soporte.webp',
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max, 16 Pro Max, 17 Pro Max',
        material: 'PC + TPU',
        category: 'Soporte'
    },
    // ===== CASES VENTANA TRANSPARENTE =====
    {
        id: 10,
        name: 'Cases Ventana Transparente',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 22,
        image: 'images/ventana-transparente.webp',
        model: 'iPhone 13, 14, 15, 16 / Pro Max',
        material: 'TPU transparente',
        category: 'Transparentes'
    },
    // ===== CASES 360 TORNASOL =====
    {
        id: 11,
        name: 'Cases 360 Tornasol',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 9,
        image: 'images/360-tornasol.webp',
        model: 'iPhone 11, 14 Pro Max, 15 Pro Max',
        material: 'PC + TPU',
        category: 'Diseños'
    },
    // ===== CASES PIN ESCARCHA =====
    {
        id: 12,
        name: 'Cases Pin Escarcha',
        price: 7500,
        originalPrice: null,
        rating: 3,
        reviews: 5,
        image: 'images/pin-escarcha.webp',
        model: 'iPhone 12 Pro, 13 Pro Max, 14 Pro, 15 Pro Max',
        material: 'Silicone',
        category: 'Económicos'
    },
    // ===== CASES PANTERA ROSA =====
    {
        id: 13,
        name: 'Cases Pantera Rosa',
        price: 13500,
        originalPrice: null,
        rating: 4,
        reviews: 16,
        image: 'images/pantera-rosa.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES RELIEVE =====
    {
        id: 14,
        name: 'Cases Relieve',
        price: 13500,
        originalPrice: null,
        rating: 4,
        reviews: 11,
        image: 'images/relieve.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Clásicos'
    },
    // ===== CASES PIOLIN =====
    {
        id: 15,
        name: 'Cases Piolín',
        price: 13500,
        originalPrice: null,
        rating: 4,
        reviews: 13,
        image: 'images/piolin.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== DISNEY TORNASOL =====
    {
        id: 16,
        name: 'Disney Tornasol',
        price: 9500,
        originalPrice: null,
        rating: 5,
        reviews: 30,
        image: 'images/disney-tornasol.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Disney'
    },
    // ===== CASES VICKY =====
    {
        id: 17,
        name: 'Cases Vicky',
        price: 12000,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/vicky.webp',
        model: 'iPhone 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES MAGSAFE ESCARCHA =====
    {
        id: 18,
        name: 'Cases MagSafe Escarcha',
        price: 8500,
        originalPrice: null,
        rating: 4,
        reviews: 21,
        image: 'images/magsafe-escarcha.webp',
        model: 'iPhone 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'TPU + imanes',
        category: 'MagSafe'
    },
    // ===== CASES MANILLA ESCARCHA =====
    {
        id: 19,
        name: 'Cases Manilla Escarcha',
        price: 12000,
        originalPrice: null,
        rating: 4,
        reviews: 8,
        image: 'images/manilla-escarcha.webp',
        model: 'iPhone 14 Pro Max, 15 Pro Max, 16 Pro',
        material: 'Silicone + manilla',
        category: 'Manillas'
    },
    // ===== CASES AGUA =====
    {
        id: 20,
        name: 'Cases Agua',
        price: 9500,
        originalPrice: null,
        rating: 4,
        reviews: 14,
        image: 'images/agua.webp',
        model: 'iPhone 12 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone líquido',
        category: 'Clásicos'
    },
    // ===== CASES HUMO MANILLA =====
    {
        id: 21,
        name: 'Cases Humo con Manilla',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 7,
        image: 'images/humo-manilla.webp',
        model: 'iPhone 11',
        material: 'Silicone + manilla',
        category: 'Manillas'
    },
    // ===== CASES DIAMOND =====
    {
        id: 22,
        name: 'Cases Diamond',
        price: 13000,
        originalPrice: null,
        rating: 5,
        reviews: 27,
        image: 'images/diamond.webp',
        model: 'iPhone 12 Pro Max, 14 Pro, 15 Pro Max, 16',
        material: 'Silicone con diamantina',
        category: 'Diseños'
    },
    // ===== CASES DISNEY LENTES =====
    {
        id: 23,
        name: 'Cases Disney Lentes',
        price: 11500,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/disney-lentes.webp',
        model: 'iPhone 13 Pro, 14 Pro Max, 15 Pro Max, 16 Pro',
        material: 'Silicone',
        category: 'Disney'
    },
    // ===== CASES GLASS LU30 =====
    {
        id: 24,
        name: 'Cases Glass LU30',
        price: 12500,
        originalPrice: null,
        rating: 4,
        reviews: 16,
        image: 'images/glass-lu30.webp',
        model: 'iPhone 11, 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max, 16 Pro Max',
        material: 'Vidrio templado',
        category: 'Protección'
    },
    // ===== CASES ESPEJO =====
    {
        id: 25,
        name: 'Cases Espejo',
        price: 9500,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/espejo.webp',
        model: 'iPhone 13, 14 Pro Max, 15 Pro Max, 16 Pro Max',
        material: 'Acrílico espejo',
        category: 'Diseños'
    },
    // ===== CASES CORAZON PERLA =====
    {
        id: 26,
        name: 'Cases Corazón Perla',
        price: 7000,
        originalPrice: null,
        rating: 4,
        reviews: 12,
        image: 'images/corazon-perla.webp',
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone con perlas',
        category: 'Económicos'
    },
    // ===== DISNEY SILICON =====
    {
        id: 27,
        name: 'Disney Silicon',
        price: 7000,
        originalPrice: null,
        rating: 4,
        reviews: 25,
        image: 'images/disney-silicon.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Disney'
    },
    // ===== CASES NORTH FACE =====
    {
        id: 28,
        name: 'Cases North Face',
        price: 8000,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/north-face.webp',
        model: 'iPhone 12 Pro, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES TORNASOL METALIZADO =====
    {
        id: 29,
        name: 'Cases Tornasol Metalizado',
        price: 16500,
        originalPrice: null,
        rating: 4,
        reviews: 11,
        image: 'images/tornasol-metalizado.webp',
        model: 'iPhone 14, 15, 16 Pro Max, 17, 17 Pro, 17 Pro Max',
        material: 'PC metalizado',
        category: 'Diseños'
    },
    // ===== CASES MARMOL DISNEY =====
    {
        id: 30,
        name: 'Cases Mármol Disney',
        price: 7000,
        originalPrice: null,
        rating: 4,
        reviews: 22,
        image: 'images/marmol-disney.webp',
        model: 'iPhone 12 Pro, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone',
        category: 'Disney'
    },
    // ===== CASES MARMOL =====
    {
        id: 31,
        name: 'Cases Mármol',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 17,
        image: 'images/marmol.webp',
        model: 'iPhone 13, 14 Pro Max, 15 Pro Max, 16 Pro Max, 17 Pro Max',
        material: 'PC efecto mármol',
        category: 'Clásicos'
    },
    // ===== CASES UNICOLOR =====
    {
        id: 32,
        name: 'Cases Unicolor',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 30,
        image: 'images/unicolor.webp',
        model: 'iPhone 13, 14 Pro Max, 15 Pro Max, 16 Pro Max, 17 Pro Max',
        material: 'Silicone',
        category: 'Clásicos'
    },
    // ===== CASES DISEÑO VICKY =====
    {
        id: 33,
        name: 'Cases Diseño Vicky',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 14,
        image: 'images/diseno-vicky.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES LUJO UNICOLOR =====
    {
        id: 34,
        name: 'Cases Lujo Unicolor',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 9,
        image: 'images/lujo-unicolor.webp',
        model: 'iPhone 17 Pro Max',
        material: 'PC + TPU',
        category: 'Clásicos'
    },
    // ===== CASES ARCOIRIS =====
    {
        id: 35,
        name: 'Cases Arcoíris',
        price: 14500,
        originalPrice: null,
        rating: 5,
        reviews: 21,
        image: 'images/arcoiris.webp',
        model: 'iPhone 17 Pro, 17 Pro Max',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES 360 =====
    {
        id: 36,
        name: 'Cases 360',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 13,
        image: 'images/cases-360.webp',
        model: 'iPhone 15 Pro Max',
        material: 'PC + TPU',
        category: 'Protección'
    },
    // ===== CASES ANDROID MOSCHINO =====
    {
        id: 37,
        name: 'Cases Android Moschino',
        price: 7500,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/android-moschino.webp',
        model: 'Varios modelos Android',
        material: 'Silicone',
        category: 'Android'
    },
    // ===== CASES GLITTER TORNASOL =====
    {
        id: 38,
        name: 'Cases Glitter Tornasol',
        price: 12500,
        originalPrice: null,
        rating: 4,
        reviews: 16,
        image: 'images/glitter-tornasol.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone con glitter',
        category: 'Diseños'
    },
    // ===== CASES SWAROVSKI =====
    {
        id: 39,
        name: 'Cases Swarovski',
        price: null,
        originalPrice: null,
        rating: 5,
        reviews: 28,
        image: 'images/swarovski.webp',
        model: 'iPhone 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone con cristales',
        category: 'Lujo'
    },
    // ===== CASES STITCH LENTES =====
    {
        id: 40,
        name: 'Cases Stitch Lentes',
        price: 13500,
        originalPrice: null,
        rating: 5,
        reviews: 35,
        image: 'images/stitch-lentes.webp',
        model: 'iPhone 13, 14 Pro Max, 15 Pro Max, 16 Pro Max',
        material: 'Silicone',
        category: 'Disney'
    },
    // ===== CASES BARBIE =====
    {
        id: 41,
        name: 'Cases Barbie',
        price: 9500,
        originalPrice: null,
        rating: 5,
        reviews: 42,
        image: 'images/barbie.webp',
        model: 'iPhone 11, 13, 14 Pro Max, 15 Pro Max, 16 Pro Max',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES ESCANDALOSOS =====
    {
        id: 42,
        name: 'Cases Escandalosos',
        price: 11500,
        originalPrice: null,
        rating: 4,
        reviews: 19,
        image: 'images/escandalosos.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES CORAZON SWAROVSKI =====
    {
        id: 43,
        name: 'Cases Corazón Swarovski',
        price: 7500,
        originalPrice: null,
        rating: 4,
        reviews: 24,
        image: 'images/corazon-swarovski.webp',
        model: 'iPhone 11, 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone con cristales',
        category: 'Lujo'
    },
    // ===== CASES DISNEY GLITTER =====
    {
        id: 44,
        name: 'Cases Disney Glitter',
        price: 10500,
        originalPrice: null,
        rating: 4,
        reviews: 31,
        image: 'images/disney-glitter.webp',
        model: 'iPhone 12 Pro Max, 13 Pro Max, 14 Pro Max, 15 Pro Max',
        material: 'Silicone con glitter',
        category: 'Disney'
    },
    // ===== CASES DISNEY MANILLA =====
    {
        id: 45,
        name: 'Cases Disney con Manilla',
        price: 12500,
        originalPrice: null,
        rating: 4,
        reviews: 17,
        image: 'images/disney-manilla.webp',
        model: 'iPhone 14 Pro Max, 15 Pro Max, 16 Pro',
        material: 'Silicone + manilla',
        category: 'Manillas'
    },
    // ===== CASES LOVE =====
    {
        id: 46,
        name: 'Cases Love',
        price: 12500,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/love.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES BARRILEE =====
    {
        id: 47,
        name: 'Cases Barrilee',
        price: 15500,
        originalPrice: null,
        rating: 4,
        reviews: 12,
        image: 'images/barrilee.webp',
        model: 'iPhone 11, 13, 14, 15, 16 Pro Max',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES NEON =====
    {
        id: 48,
        name: 'Cases Neon',
        price: 14500,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/neon.webp',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES SOPORTE 360 =====
    {
        id: 49,
        name: 'Cases Soporte 360',
        price: 45000,
        originalPrice: null,
        rating: 4,
        reviews: 44,
        image: 'images/soporte-360.webp',
        images: [
            'images/cases-mickey.webp',
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
        { name: 'Hello Kitty', hex: '#ff6b8a' },
        { name: 'Dumbo', hex: '#8b8b8b' },
        { name: 'My Melody', hex: '#ff8a9e' },
        { name: 'Sulley (Monsters, Inc.)', hex: '#6ab04c' },
        { name: 'Mickey Mouse & Friends', hex: '#f5a623' },
        { name: 'Chip & Dale', hex: '#d4a373' },
        { name: 'Stitch', hex: '#4a90d9' },
        { name: 'Winnie the Pooh', hex: '#f9ca24' },
        { name: 'Marie (Los Aristogatos)', hex: '#f8e8e0' },
        { name: 'Chip & Dale / Personajes Disney', hex: '#a68a5c' }
    ]
},

    // ===== ACCESORIOS - BORDES DE RELOJ =====
    {
        id: 51,
        name: 'Borde Reloj Piedritas',
        price: 8000,
        originalPrice: null,
        rating: 4,
        reviews: 8,
        image: 'images/borde-reloj-piedritas.webp',
        model: '38mm, 40mm',
        material: 'Piedritas',
        category: 'Accesorios'
    },
    // ===== ACCESORIOS - LENTES =====
    {
        id: 52,
        name: 'Lentes',
        price: 800,
        originalPrice: null,
        rating: 4,
        reviews: 15,
        image: 'images/lentes.webp',
        model: 'Modelos 01, 02, 03, 04, 05',
        material: 'Plástico',
        category: 'Accesorios'
    },
    // ===== ACCESORIOS - PROTECTORES =====
    {
        id: 53,
        name: 'Protector Cargador 20W',
        price: 6000,
        originalPrice: null,
        rating: 4,
        reviews: 20,
        image: 'images/protector-cargador.webp',
        model: '20W',
        material: 'Transparente',
        category: 'Accesorios'
    },
    // ===== ACCESORIOS - PUNTAS =====
    {
        id: 54,
        name: 'Puntas Completas',
        price: 5000,
        originalPrice: null,
        rating: 4,
        reviews: 10,
        image: 'images/puntas-completas.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Accesorios'
    },
    // ===== ACCESORIOS - MANILLAS =====
    {
        id: 55,
        name: 'Manilla Barrilete',
        price: 6000,
        originalPrice: null,
        rating: 4,
        reviews: 14,
        image: 'images/manilla-barrilete.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas'
    },
    {
        id: 56,
        name: 'Manilla Tela',
        price: 6000,
        originalPrice: null,
        rating: 4,
        reviews: 11,
        image: 'images/manilla-tela.webp',
        model: 'Universal',
        material: 'Tela',
        category: 'Manillas'
    },
    {
        id: 57,
        name: 'Manilla Neon',
        price: 5000,
        originalPrice: null,
        rating: 4,
        reviews: 9,
        image: 'images/manilla-neon.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas'
    },
    {
        id: 58,
        name: 'Manillas',
        price: 5000,
        originalPrice: null,
        rating: 4,
        reviews: 18,
        image: 'images/manillas.webp',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas'
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
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    if (currentSearch.trim()) {
        const q = currentSearch.trim().toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            (p.category && p.category.toLowerCase().includes(q)) ||
            (p.model && p.model.toLowerCase().includes(q)) ||
            (p.material && p.material.toLowerCase().includes(q))
        );
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
                    <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Añadir ${safeName} al carrito">
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
            addToCart(productId);
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
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
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
    cta.href = 'https://wa.me/573008949156';
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i> Escríbenos';
    drawer.appendChild(cta);
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    function open() {
        drawer.classList.add('open');
        overlay.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    toggle.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ============================================================
// 12. BUSCADOR
// ============================================================
function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (!searchBtn) return;
    if (!document.getElementById('productsGrid')) {
        searchBtn.addEventListener('click', () => { window.location.href = 'index.html#coleccion'; });
        return;
    }
    const bar = document.createElement('div');
    bar.className = 'search-bar';
    bar.innerHTML = `
        <div class="container">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input type="search" id="productSearch" placeholder="Buscar fundas, Disney, MagSafe, modelo..." aria-label="Buscar productos">
            <button class="search-clear" aria-label="Limpiar búsqueda"><i class="fas fa-times" aria-hidden="true"></i></button>
        </div>`;
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(bar, header.nextSibling);
    const input = bar.querySelector('#productSearch');
    const clearBtn = bar.querySelector('.search-clear');
    searchBtn.setAttribute('aria-expanded', 'false');
    searchBtn.addEventListener('click', () => {
        const isOpen = bar.classList.toggle('open');
        searchBtn.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) setTimeout(() => input.focus(), 250);
    });
    let t;
    input.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { currentSearch = input.value; renderProducts(); }, 180);
    });
    clearBtn.addEventListener('click', () => {
        input.value = '';
        currentSearch = '';
        renderProducts();
        input.focus();
    });
    input.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            input.value = '';
            currentSearch = '';
            renderProducts();
            bar.classList.remove('open');
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
// 14. MODAL CON CARRUSEL Y ZOOM (CON SOPORTE TÁCTIL)
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

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    setupProductModal();

    const colors = getProductColors(product);
    const models = getCompatibleModels(product);
    const images = (Array.isArray(product.images) && product.images.length > 0) ? product.images : [product.image];

    modalState = {
        productId: product.id,
        color: colors.length ? colors[0].name : null,
        iphoneModel: models.length ? models[0] : null,
        quantity: 1,
        currentSlide: 0,
        images: images
    };

    const webp = product.image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const isOnSale = product.originalPrice && product.originalPrice > product.price;
    const priceDisplay = product.price ? formatCOP(product.price) : 'Consultar precio';
    const fullStars = Math.floor(product.rating);
    const ratingStars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);

    const safeName = escapeHTML(product.name);
    const safeCategory = escapeHTML(product.category);
    const safeMaterial = escapeHTML(product.material || '');

    const colorsHTML = colors.map((c, i) => `
        <button class="pm-color-swatch ${i === 0 ? 'active' : ''}"
                data-color="${escapeHTML(c.name)}"
                title="${escapeHTML(c.name)}" aria-label="Color ${escapeHTML(c.name)}">
            <span class="pm-swatch-dot" style="background:${escapeHTML(c.hex)}"></span>
            <span class="pm-swatch-name">${escapeHTML(c.name)}</span>
        </button>
    `).join('');

    const modelsHTML = models.length
        ? models.map((m, i) => `
            <button class="pm-model-chip ${i === 0 ? 'active' : ''}" data-model="${escapeHTML(m)}">
                ${escapeHTML(m)}
            </button>
        `).join('')
        : '<span class="pm-muted">Consultar disponibilidad</span>';

    const slidesHTML = images.map((img, index) => {
        const webpImg = img.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        return `
            <div class="pm-carousel-slide" data-index="${index}">
                <picture>
                    <source type="image/webp" srcset="${webpImg}">
                    <img src="${img}" alt="${safeName} - Imagen ${index + 1}" 
                         loading="lazy" decoding="async" 
                         onerror="handleImgError(this);"
                         class="pm-slide-image"
                         data-full="${img}"
                         data-index="${index}">
                </picture>
                <span class="zoom-hint"><i class="fas fa-search-plus"></i> Click para ampliar</span>
            </div>
        `;
    }).join('');

    const hasMultiple = images.length > 1;
    const navButtons = hasMultiple ? `
        <button class="pm-carousel-btn prev" id="pmCarouselPrev" aria-label="Imagen anterior">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button class="pm-carousel-btn next" id="pmCarouselNext" aria-label="Imagen siguiente">
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
    ` : '';

    const dotsHTML = hasMultiple ? images.map((_, i) => `
        <button class="pm-carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Ir a imagen ${i + 1}"></button>
    `).join('') : '';

    const counterHTML = hasMultiple ? `
        <span class="pm-carousel-counter">
            <span id="pmCurrentSlide">1</span> / ${images.length}
        </span>
    ` : '';

    const body = document.getElementById('productModalBody');
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
                ${isOnSale ? '<span class="pm-sale">Oferta</span>' : ''}
            </div>
            ${safeMaterial ? `<p class="pm-material"><i class="fas fa-layer-group"></i> Material: <strong>${safeMaterial}</strong></p>` : ''}

            <div class="pm-section">
                <h4 class="pm-label">Personajes disponibles</h4>
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

    // ============================================================
    // CONFIGURAR CARRUSEL
    // ============================================================
    const track = document.getElementById('pmCarouselTrack');
    const dots = document.querySelectorAll('.pm-carousel-dot');
    const prevBtn = document.getElementById('pmCarouselPrev');
    const nextBtn = document.getElementById('pmCarouselNext');
    const currentSlideEl = document.getElementById('pmCurrentSlide');
    let totalSlides = images.length;
    let currentSlide = 0;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentSlide = index;
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        if (currentSlideEl) {
            currentSlideEl.textContent = index + 1;
        }
        modalState.currentSlide = index;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentSlide - 1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentSlide + 1);
        });
    }
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(index);
        });
    });

    // ===== SWIPE PARA MÓVILES =====
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;
    const carouselEl = document.getElementById('pmCarousel');
    if (carouselEl) {
        carouselEl.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            isSwiping = true;
        }, { passive: true });
        carouselEl.addEventListener('touchmove', (e) => {
            if (isSwiping) {
                const deltaX = e.changedTouches[0].screenX - touchStartX;
                if (Math.abs(deltaX) > 10) {
                    e.preventDefault();
                }
            }
        }, { passive: false });
        carouselEl.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 30) {
                if (diff > 0) {
                    goToSlide(currentSlide + 1);
                } else {
                    goToSlide(currentSlide - 1);
                }
            }
            isSwiping = false;
        }, { passive: true });
    }

    // ===== KEYBOARD =====
    const modal = document.getElementById('productModal');
    const keyHandler = (e) => {
        if (!modal.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToSlide(currentSlide + 1);
        }
    };
    document.removeEventListener('keydown', keyHandler);
    document.addEventListener('keydown', keyHandler);

    // ===== ZOOM - CON SOPORTE TÁCTIL PARA MÓVIL =====
    function setupZoomEvents() {
        const slides = document.querySelectorAll('.pm-carousel-slide');

        slides.forEach((slide, index) => {
            const img = slide.querySelector('.pm-slide-image');
            if (!img) return;

            // Eliminar eventos anteriores
            const newSlide = slide.cloneNode(true);
            slide.parentNode.replaceChild(newSlide, slide);

            const newImg = newSlide.querySelector('.pm-slide-image');

            // ===== FUNCIÓN PARA ABRIR ZOOM =====
            function abrirZoom(e) {
                if (e) {
                    e.stopPropagation();
                    if (e.target.closest('.pm-carousel-btn')) return;
                    if (e.target.closest('.pm-carousel-dot')) return;
                }

                const slideIndex = parseInt(newSlide.dataset.index) || index;
                const fullSrc = newImg.dataset.full || newImg.src;

                const productId = modalState.productId;
                const product = products.find(p => p.id === productId);
                if (product) {
                    const images = (Array.isArray(product.images) && product.images.length > 0)
                        ? product.images
                        : [product.image];
                    modalState.images = images;

                    const realIndex = slideIndex;
                    const realSrc = images[realIndex] || fullSrc;

                    openZoom(realSrc, product.name, realIndex, images.length);
                } else {
                    openZoom(fullSrc, product.name, slideIndex, images.length);
                }
            }

            // ===== EVENTOS PARA PC (click) =====
            newSlide.addEventListener('click', abrirZoom);

            // ===== EVENTOS PARA MÓVIL (touch) =====
            let touchTimeout = null;
            let touchStartX = 0;
            let touchStartY = 0;
            let isSwipingTouch = false;

            newSlide.addEventListener('touchstart', function (e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                isSwipingTouch = false;

                if (touchTimeout) {
                    clearTimeout(touchTimeout);
                    touchTimeout = null;
                }
            }, { passive: true });

            newSlide.addEventListener('touchmove', function (e) {
                const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
                const deltaY = Math.abs(e.touches[0].clientY - touchStartY);

                if (deltaX > 10 || deltaY > 10) {
                    isSwipingTouch = true;
                }
            }, { passive: true });

            newSlide.addEventListener('touchend', function (e) {
                if (isSwipingTouch) {
                    isSwipingTouch = false;
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                if (touchTimeout) {
                    clearTimeout(touchTimeout);
                    touchTimeout = null;
                }

                touchTimeout = setTimeout(function () {
                    const target = e.target;
                    if (target.closest('.pm-carousel-btn')) return;
                    if (target.closest('.pm-carousel-dot')) return;

                    abrirZoom(e);
                    touchTimeout = null;
                }, 150);
            }, { passive: false });

            newSlide.style.cursor = 'pointer';
        });
    }

    // ===== OTROS EVENTOS =====
    body.querySelectorAll('.pm-color-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
            body.querySelectorAll('.pm-color-swatch').forEach(s => s.classList.remove('active'));
            sw.classList.add('active');
            modalState.color = sw.dataset.color;
        });
    });

    body.querySelectorAll('.pm-model-chip').forEach(ch => {
        ch.addEventListener('click', () => {
            body.querySelectorAll('.pm-model-chip').forEach(c => c.classList.remove('active'));
            ch.classList.add('active');
            modalState.iphoneModel = ch.dataset.model;
        });
    });

    const qtyEl = body.querySelector('#pmQty');
    body.querySelectorAll('.pm-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.qty === '+') modalState.quantity++;
            else modalState.quantity = Math.max(1, modalState.quantity - 1);
            qtyEl.textContent = modalState.quantity;
        });
    });

    body.querySelector('#pmAddCart').addEventListener('click', () => {
        addToCart(product.id, {
            color: modalState.color,
            iphoneModel: modalState.iphoneModel,
            quantity: modalState.quantity
        });
    });

    body.querySelector('#pmBuyWhatsapp').addEventListener('click', () => {
        buyNowWhatsApp(product);
    });

    body.querySelector('#pmBuyWompi').addEventListener('click', () => {
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
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    goToSlide(0);
    setTimeout(setupZoomEvents, 50);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (zoomState && zoomState.isOpen) {
        closeZoom();
    }
}

function buyNowWhatsApp(product) {
    const phone = '573008949156';
    const parts = [];
    parts.push('¡Hola! Quiero comprar esta funda:');
    parts.push('');
    parts.push('• Producto: ' + product.name);
    if (modalState.color) parts.push('• Personaje: ' + modalState.color);  // ← CAMBIADO
    if (modalState.iphoneModel) parts.push('• Modelo: ' + modalState.iphoneModel);
    parts.push('• Cantidad: ' + modalState.quantity);
    if (product.price) parts.push('• Precio unitario: ' + formatCOP(product.price));
    const msg = encodeURIComponent(parts.join('\n'));
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener');
}

// ============================================================
// 15. ZOOM DE IMAGEN (Lightbox con lupa)
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

    // ===== CERRAR ZOOM =====
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
        if (zoomState.isOpen) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigateZoom(-1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigateZoom(1);
            }
        }
    });

    // ===== SCROLL PARA ZOOM =====
    zoomContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        const newScale = Math.min(4, Math.max(1, zoomState.scale + delta));
        applyZoom(newScale);
    }, { passive: false });

    // ===== ARRASTRAR CON MOUSE =====
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

    // ===== FUNCIÓN PARA ACTUALIZAR LUPA (compartida entre mouse y touch) =====
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

    // ===== LUPA CON MOUSE =====
    zoomContainer.addEventListener('mousemove', (e) => {
        updateLens(e.clientX, e.clientY);
    });
    zoomContainer.addEventListener('mouseleave', () => {
        zoomLens.classList.remove('active');
    });

    // ===== LUPA CON TOUCH (MÓVIL) =====
    zoomContainer.addEventListener('touchmove', (e) => {
        if (zoomState.scale === 1) {
            // Prevenir scroll mientras se mueve el dedo sobre la imagen
            e.preventDefault();
            const touch = e.touches[0];
            updateLens(touch.clientX, touch.clientY);
        }
    }, { passive: false });

    zoomContainer.addEventListener('touchstart', (e) => {
        // Iniciar la lupa al tocar la imagen
        if (zoomState.scale === 1) {
            const touch = e.touches[0];
            updateLens(touch.clientX, touch.clientY);
        }
    }, { passive: true });

    zoomContainer.addEventListener('touchend', () => {
        // Ocultar lupa al levantar el dedo
        zoomLens.classList.remove('active');
    }, { passive: true });

    // ===== ARRASTRAR CON TOUCH (MÓVIL) =====
    let touchStartX = 0, touchStartY = 0;
    let touchLastX = 0, touchLastY = 0;
    let isTouchDragging = false;

    zoomContainer.addEventListener('touchstart', (e) => {
        if (zoomState.scale > 1 && e.touches.length === 1) {
            isTouchDragging = true;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchLastX = zoomState.translateX;
            touchLastY = zoomState.translateY;
        }
    }, { passive: true });

    zoomContainer.addEventListener('touchmove', (e) => {
        if (isTouchDragging && e.touches.length === 1) {
            e.preventDefault();
            const dx = e.touches[0].clientX - touchStartX;
            const dy = e.touches[0].clientY - touchStartY;
            zoomState.translateX = touchLastX + dx;
            zoomState.translateY = touchLastY + dy;
            applyZoom(zoomState.scale);
        }
    }, { passive: false });

    zoomContainer.addEventListener('touchend', () => {
        isTouchDragging = false;
    }, { passive: true });

    // ===== DOBLE CLICK PARA ZOOM MÁXIMO =====
    zoomImage.addEventListener('dblclick', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (zoomState.scale === 1) {
            applyZoom(4);
        } else {
            applyZoom(1);
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

    // Obtener las imágenes reales del producto
    const productId = modalState.productId;
    const product = products.find(p => p.id === productId);
    let images = [];

    if (product) {
        images = (Array.isArray(product.images) && product.images.length > 0)
            ? product.images
            : [product.image];
        modalState.images = images;
    }

    let realIndex = currentIndex || 0;
    let realSrc = imageSrc;

    if (images.length > 0 && realIndex < images.length) {
        realSrc = images[realIndex];
    }

    zoomState.isOpen = true;
    zoomState.currentImage = realSrc;
    zoomState.currentIndex = realIndex;
    zoomState.scale = 1;
    zoomState.translateX = 0;
    zoomState.translateY = 0;
    zoomState.isDragging = false;

    image.src = realSrc;
    image.alt = `${productName} - Ampliación ${realIndex + 1}`;

    counter.textContent = `${realIndex + 1} / ${images.length || totalImages || 1}`;
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

function navigateZoom(direction) {
    const images = modalState.images || [];
    if (images.length === 0) {
        const productId = modalState.productId;
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const imgs = (Array.isArray(product.images) && product.images.length > 0) ? product.images : [product.image];
        modalState.images = imgs;
    }

    const currentImages = modalState.images || [];
    if (currentImages.length === 0) return;

    let newIndex = zoomState.currentIndex + direction;
    if (newIndex < 0) newIndex = currentImages.length - 1;
    if (newIndex >= currentImages.length) newIndex = 0;

    zoomState.currentIndex = newIndex;
    zoomState.currentImage = currentImages[newIndex];
    zoomState.scale = 1;
    zoomState.translateX = 0;
    zoomState.translateY = 0;

    const image = document.getElementById('zoomImage');
    if (image) {
        image.src = currentImages[newIndex];
    }

    const counter = document.getElementById('zoomCounter');
    if (counter) {
        counter.textContent = `${newIndex + 1} / ${currentImages.length}`;
    }

    applyZoom(1);
}

function applyZoom(scale) {
    zoomState.scale = Math.min(4, Math.max(1, scale));
    const container = document.getElementById('zoomContainer');
    const image = document.getElementById('zoomImage');
    const lens = document.getElementById('zoomLens');
    if (zoomState.scale > 1) {
        container.classList.add('zoomed');
        lens.classList.remove('active');
    } else {
        container.classList.remove('zoomed');
        zoomState.translateX = 0;
        zoomState.translateY = 0;
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
    const reference = 'CASESIPHONE-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
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