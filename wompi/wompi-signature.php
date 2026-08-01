<?php
// ============================================================
// FIRMA DE INTEGRIDAD WOMPI (PHP) — para hosting compartido
// ------------------------------------------------------------
// Genera la firma SHA256 en el servidor. El secreto NUNCA se
// expone en el frontend.
//
// CONFIGURACIÓN:
//   1. Sube este archivo a tu hosting (ej: /api/wompi-signature.php)
//   2. Define tu secreto de integridad abajo o como variable de entorno.
//   3. En js/wompi-config.js pon:
//        signatureEndpoint: 'https://TU-DOMINIO/api/wompi-signature.php'
// ============================================================

// --- Ajusta el origen permitido a tu dominio real ---
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error' => 'Método no permitido']); exit; }

// Opción A: variable de entorno (recomendado)   Opción B: pégalo aquí
$secret = getenv('WOMPI_INTEGRITY_SECRET') ?: 'PEGA_AQUI_TU_SECRETO_DE_INTEGRIDAD';
if (!$secret || $secret === 'PEGA_AQUI_TU_SECRETO_DE_INTEGRIDAD') {
    http_response_code(500); echo json_encode(['error' => 'Falta el secreto de integridad']); exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$reference = $input['reference'] ?? '';
$amount = $input['amountInCents'] ?? 0;
$currency = $input['currency'] ?? '';

// Validaciones estrictas
if (!preg_match('/^[A-Za-z0-9\-_]{6,64}$/', $reference)) { http_response_code(400); echo json_encode(['error' => 'Referencia inválida']); exit; }
if (!is_int($amount) && !ctype_digit(strval($amount))) { http_response_code(400); echo json_encode(['error' => 'Monto inválido']); exit; }
$amount = intval($amount);
if ($amount <= 0) { http_response_code(400); echo json_encode(['error' => 'Monto inválido']); exit; }
if ($currency !== 'COP') { http_response_code(400); echo json_encode(['error' => 'Moneda no soportada']); exit; }

$raw = $reference . $amount . $currency . $secret;
$signature = hash('sha256', $raw);

echo json_encode(['signature' => $signature]);
