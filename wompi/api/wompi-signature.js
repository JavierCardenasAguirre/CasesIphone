// ============================================================
// FUNCIÓN SERVERLESS · FIRMA DE INTEGRIDAD WOMPI (Node.js)
// Compatible con Vercel y Netlify Functions.
// ------------------------------------------------------------
// Genera la firma de integridad SHA256 en el SERVIDOR, para que
// el "secreto de integridad" NUNCA quede expuesto en el frontend.
//
// CONFIGURACIÓN:
//   Define la variable de entorno en tu hosting:
//     WOMPI_INTEGRITY_SECRET = tu_secreto_de_integridad
//
//   Vercel:  Project → Settings → Environment Variables
//   Netlify: Site settings → Environment variables
//
// Luego, en js/wompi-config.js pon:
//   signatureEndpoint: 'https://TU-DOMINIO/api/wompi-signature'
// ============================================================

const crypto = require('crypto');

// Orígenes permitidos (ajusta a tu dominio para mayor seguridad)
const ALLOWED_ORIGINS = ['*'];

function setCors(res, origin) {
    const allow = ALLOWED_ORIGINS.includes('*') ? '*' : (ALLOWED_ORIGINS.includes(origin) ? origin : '');
    if (allow) res.setHeader('Access-Control-Allow-Origin', allow);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async (req, res) => {
    setCors(res, req.headers.origin);

    if (req.method === 'OPTIONS') { res.status(204).end(); return; }
    if (req.method !== 'POST') { res.status(405).json({ error: 'Método no permitido' }); return; }

    const secret = process.env.WOMPI_INTEGRITY_SECRET;
    if (!secret) { res.status(500).json({ error: 'Falta WOMPI_INTEGRITY_SECRET en el servidor' }); return; }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
        const { reference, amountInCents, currency } = body;

        // Validaciones estrictas (evita inyección y datos manipulados)
        if (!reference || !/^[A-Za-z0-9\-_]{6,64}$/.test(String(reference))) {
            res.status(400).json({ error: 'Referencia inválida' }); return;
        }
        if (!Number.isInteger(amountInCents) || amountInCents <= 0) {
            res.status(400).json({ error: 'Monto inválido' }); return;
        }
        if (currency !== 'COP') {
            res.status(400).json({ error: 'Moneda no soportada' }); return;
        }

        const raw = `${reference}${amountInCents}${currency}${secret}`;
        const signature = crypto.createHash('sha256').update(raw).digest('hex');

        res.status(200).json({ signature });
    } catch (e) {
        res.status(400).json({ error: 'Solicitud inválida' });
    }
};
