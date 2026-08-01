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
        image: 'images/fibra.jpg',
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
        image: 'images/jerry.jpg',
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
        image: 'images/satin.jpg',
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
        image: 'images/clasico.jpg',
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
        image: 'images/triangulo.jpg',
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
        image: 'images/android-manilla.jpg',
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
        image: 'images/dragon-ball.jpg',
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
        image: 'images/lujo-soporte.jpg',
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
        image: 'images/escarcha-soporte.jpg',
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
        image: 'images/ventana-transparente.jpg',
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
        image: 'images/360-tornasol.jpg',
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
        image: 'images/pin-escarcha.jpg',
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
        image: 'images/pantera-rosa.jpg',
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
        image: 'images/relieve.jpg',
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
        image: 'images/piolin.jpg',
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
        image: 'images/disney-tornasol.jpg',
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
        image: 'images/vicky.jpg',
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
        image: 'images/magsafe-escarcha.jpg',
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
        image: 'images/manilla-escarcha.jpg',
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
        image: 'images/agua.jpg',
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
        image: 'images/humo-manilla.jpg',
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
        image: 'images/diamond.jpg',
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
        image: 'images/disney-lentes.jpg',
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
        image: 'images/glass-lu30.jpg',
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
        image: 'images/espejo.jpg',
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
        image: 'images/corazon-perla.jpg',
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
        image: 'images/disney-silicon.jpg',
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
        image: 'images/north-face.jpg',
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
        image: 'images/tornasol-metalizado.jpg',
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
        image: 'images/marmol-disney.jpg',
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
        image: 'images/marmol.jpg',
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
        image: 'images/unicolor.jpg',
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
        image: 'images/diseno-vicky.jpg',
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
        image: 'images/lujo-unicolor.jpg',
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
        image: 'images/arcoiris.jpg',
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
        image: 'images/cases-360.jpg',
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
        image: 'images/android-moschino.jpg',
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
        image: 'images/glitter-tornasol.jpg',
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
        image: 'images/swarovski.jpg',
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
        image: 'images/stitch-lentes.jpg',
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
        image: 'images/barbie.jpg',
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
        image: 'images/escandalosos.jpg',
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
        image: 'images/corazon-swarovski.jpg',
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
        image: 'images/disney-glitter.jpg',
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
        image: 'images/disney-manilla.jpg',
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
        image: 'images/love.jpg',
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
        image: 'images/barrilee.jpg',
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
        image: 'images/neon.jpg',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'Silicone',
        category: 'Diseños'
    },
    // ===== CASES SOPORTE 360 =====
    {
        id: 49,
        name: 'Cases Soporte 360',
        price: 15500,
        originalPrice: null,
        rating: 4,
        reviews: 14,
        image: 'images/soporte-360.jpg',
        model: 'iPhone 11, 12, 13, 14, 15, 16',
        material: 'PC + TPU',
        category: 'Soporte'
    },
    // ===== ACCESORIOS - BORDES DE RELOJ =====
    {
        id: 50,
        name: 'Borde Reloj Piedritas',
        price: 8000,
        originalPrice: null,
        rating: 4,
        reviews: 8,
        image: 'images/borde-reloj-piedritas.jpg',
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
        image: 'images/lentes.jpg',
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
        image: 'images/protector-cargador.jpg',
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
        image: 'images/puntas-completas.jpg',
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
        image: 'images/manilla-barrilete.jpg',
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
        image: 'images/manilla-tela.jpg',
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
        image: 'images/manilla-neon.jpg',
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
        image: 'images/manillas.jpg',
        model: 'Universal',
        material: 'Silicone',
        category: 'Manillas'
    }
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
// 2.1 SEGURIDAD: Sanitizar texto para evitar XSS / inyección DOM
// Escapa caracteres HTML antes de insertar cualquier texto en el DOM.
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

// Paleta de colores por defecto (personalizable por producto con product.colors)
const DEFAULT_COLORS = [
    { name: 'Negro', hex: '#1a1a1a' },
    { name: 'Transparente', hex: '#e8ebef' },
    { name: 'Rosa', hex: '#f4a6c0' },
    { name: 'Azul', hex: '#4a90d9' },
    { name: 'Blanco', hex: '#f5f5f5' },
    { name: 'Morado', hex: '#8a6fc9' }
];

// Devuelve los colores disponibles de un producto (usa product.colors si existe)
function getProductColors(product) {
    if (Array.isArray(product.colors) && product.colors.length) return product.colors;
    return DEFAULT_COLORS;
}

// Convierte el string de modelos en una lista de chips (ej: "iPhone 11, 12, 13")
function getCompatibleModels(product) {
    if (!product.model) return [];
    const raw = product.model.trim();
    // Casos tipo "Android (varios modelos)" se muestran completos
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
        // Fuente WebP (más ligera) con respaldo JPG
        const webp = product.image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        // Animación escalonada (sólo para las primeras tarjetas)
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

    // Abrir el modal de detalle al hacer clic en la imagen o la tarjeta
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
        // También al hacer clic en el nombre del producto
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

    // Se considera el mismo ítem si coinciden id + color + modelo elegido
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
// 9. MAPA CON LEAFLET
// ============================================================
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

    // ===== CONFIGURACIÓN DEL MAPA DARK =====
    const map = L.map(mapElement, {
        center: [4.6010, -74.0840],
        zoom: 15,
        zoomControl: false,
        attributionControl: false
    });

    // ===== CAPA OSCURA PERSONALIZADA =====
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 19,
        minZoom: 3
    }).addTo(map);

    // ===== EFECTO DE RADAR EN EL MAPA (círculo pulsante) =====
    const radarCircle = L.circle([4.6010, -74.0840], {
        radius: 500,
        color: '#007aff',
        weight: 1,
        opacity: 0.3,
        fillColor: '#007aff',
        fillOpacity: 0.02,
        className: 'radar-circle'
    }).addTo(map);

    // ===== MARCADORES CON ANILLO LUMINOSO =====
    stores.forEach((store, index) => {
        // Anillo pulsante
        const pulseRing = L.circle([store.lat, store.lng], {
            radius: 30,
            color: '#007aff',
            weight: 2,
            opacity: 0.6,
            fillColor: '#007aff',
            fillOpacity: 0.05,
            className: 'pulse-ring'
        }).addTo(map);

        // Animar anillo
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

        // Icono personalizado con glow
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

        // Marcador principal
        const marker = L.marker([store.lat, store.lng], {
            icon: customIcon,
            title: store.name
        }).addTo(map);

        // Popup con estilo cyber
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

    // ===== LÍNEAS DE CONEXIÓN (RED DE SEGURIDAD) =====
    const connections = [
        [0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4], [0, 4]
    ];

    connections.forEach(([i, j]) => {
        const latlngs = [
            [stores[i].lat, stores[i].lng],
            [stores[j].lat, stores[j].lng]
        ];

        // Línea con efecto de "línea de seguridad"
        const line = L.polyline(latlngs, {
            color: '#007aff',
            weight: 1,
            opacity: 0.15,
            dashArray: '8, 8',
            className: 'cyber-line'
        }).addTo(map);

        // Animación de la línea (cambio de opacidad)
        let lineOpacity = 0.15;
        setInterval(() => {
            lineOpacity = lineOpacity === 0.15 ? 0.35 : 0.15;
            line.setStyle({ opacity: lineOpacity });
        }, 2000 + ((i + j) * 200));
    });

    // ===== CONTROL DE ZOOM PERSONALIZADO =====
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // ===== RESPONSIVE DEL MAPA =====
    setTimeout(() => {
        map.invalidateSize();
    }, 500);

    // ===== EFECTO DE ENCENDIDO DEL MAPA =====
    setTimeout(() => {
        mapElement.style.opacity = '1';
        mapElement.style.transition = 'opacity 1.5s ease';
    }, 200);
}

// ============================================================
// 10. RESPALDO DE IMAGEN (placeholder accesible)
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
// 11. NAVEGACIÓN MÓVIL (hamburguesa) — compartida en todas las páginas
// ============================================================
function setupMobileNav() {
    const headerActions = document.querySelector('.header-actions');
    const nav = document.querySelector('.nav');
    if (!headerActions || !nav) return;

    // Botón hamburguesa
    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span>';
    headerActions.appendChild(toggle);

    // Drawer + overlay
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
// 12. BUSCADOR DE PRODUCTOS (página de catálogo)
// ============================================================
function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (!searchBtn) return;

    // Si no hay catálogo en esta página, el botón lleva al catálogo
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
        input.value = ''; currentSearch = ''; renderProducts(); input.focus();
    });
    input.addEventListener('keydown', e => {
        if (e.key === 'Escape') { input.value = ''; currentSearch = ''; renderProducts(); bar.classList.remove('open'); }
    });
}

// ============================================================
// 13. EFECTOS DE SCROLL (sombra del header + revelado)
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
// 14. MODAL DE DETALLE DE PRODUCTO (Vista rápida)
// ============================================================
let modalState = { productId: null, color: null, iphoneModel: null, quantity: 1 };

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

    modalState = {
        productId: product.id,
        color: colors.length ? colors[0].name : null,
        iphoneModel: models.length ? models[0] : null,
        quantity: 1
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

    const body = document.getElementById('productModalBody');
    body.innerHTML = `
        <div class="pm-gallery">
            <div class="pm-main-image">
                <picture>
                    <source type="image/webp" srcset="${webp}">
                    <img src="${product.image}" alt="${safeName}" onerror="handleImgError(this);">
                </picture>
                <span class="pm-badge">${safeCategory}</span>
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
                <h4 class="pm-label">Colores disponibles</h4>
                <div class="pm-colors">${colorsHTML}</div>
            </div>

            <div class="pm-section">
                <h4 class="pm-label">Compatible con</h4>
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

    // Selección de color
    body.querySelectorAll('.pm-color-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
            body.querySelectorAll('.pm-color-swatch').forEach(s => s.classList.remove('active'));
            sw.classList.add('active');
            modalState.color = sw.dataset.color;
        });
    });
    // Selección de modelo
    body.querySelectorAll('.pm-model-chip').forEach(ch => {
        ch.addEventListener('click', () => {
            body.querySelectorAll('.pm-model-chip').forEach(c => c.classList.remove('active'));
            ch.classList.add('active');
            modalState.iphoneModel = ch.dataset.model;
        });
    });
    // Cantidad
    const qtyEl = body.querySelector('#pmQty');
    body.querySelectorAll('.pm-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.qty === '+') modalState.quantity++;
            else modalState.quantity = Math.max(1, modalState.quantity - 1);
            qtyEl.textContent = modalState.quantity;
        });
    });
    // Acciones
    body.querySelector('#pmAddCart').addEventListener('click', () => {
        addToCart(product.id, { color: modalState.color, iphoneModel: modalState.iphoneModel, quantity: modalState.quantity });
    });
    body.querySelector('#pmBuyWhatsapp').addEventListener('click', () => {
        buyNowWhatsApp(product);
    });
    body.querySelector('#pmBuyWompi').addEventListener('click', () => {
        payWithWompi([{
            id: product.id, name: product.name, price: product.price,
            color: modalState.color, iphoneModel: modalState.iphoneModel, quantity: modalState.quantity
        }]);
    });

    const modal = document.getElementById('productModal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Comprar un producto individual por WhatsApp (desde el modal)
function buyNowWhatsApp(product) {
    const phone = '573008949156';
    const parts = [];
    parts.push('¡Hola! Quiero comprar esta funda:');
    parts.push('');
    parts.push('• Producto: ' + product.name);
    if (modalState.color) parts.push('• Color: ' + modalState.color);
    if (modalState.iphoneModel) parts.push('• Modelo: ' + modalState.iphoneModel);
    parts.push('• Cantidad: ' + modalState.quantity);
    if (product.price) parts.push('• Precio unitario: ' + formatCOP(product.price));
    const msg = encodeURIComponent(parts.join('\n'));
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener');
}

// ============================================================
// 15. PASARELA DE PAGOS WOMPI
// (Configuración en js/wompi-config.js — solo ingresar las llaves)
// ============================================================
async function generateWompiSignature(reference, amountInCents, currency) {
    const cfg = window.WOMPI_CONFIG || {};
    // OPCIÓN SEGURA (recomendada en producción): firma generada en el servidor.
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
    // OPCIÓN SOLO PARA PRUEBAS (sandbox): firma en el navegador con SubtleCrypto.
    // ⚠️ No uses el secreto de producción aquí: quedaría expuesto en el frontend.
    if (cfg.integritySecretTEST) {
        const raw = `${reference}${amountInCents}${currency}${cfg.integritySecretTEST}`;
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return null; // Sin firma configurada
}

async function payWithWompi(items) {
    const cfg = window.WOMPI_CONFIG || {};

    if (!cfg.publicKey || cfg.publicKey.indexOf('AQUI') !== -1) {
        showToast('⚠️ Wompi aún no está configurado. Agrega tu llave pública en js/wompi-config.js');
        return;
    }

    // Validar montos (enteros positivos) — evita manipulación de precios
    const validItems = items.filter(it => it.price && it.price > 0);
    if (!validItems.length) {
        showToast('⚠️ Este producto requiere consultar precio por WhatsApp');
        return;
    }
    const totalCOP = validItems.reduce((sum, it) => sum + it.price * (it.quantity || 1), 0);
    const amountInCents = Math.round(totalCOP * 100);
    const currency = cfg.currency || 'COP';
    // Referencia única (no reutilizable) para evitar transacciones duplicadas
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
        showToast('⚠️ Falta configurar la firma de integridad de Wompi (ver wompi/README).');
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

    // Cargar el widget de Wompi si aún no está en la página
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
// 16. INICIALIZAR
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
});