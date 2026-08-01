# 💳 Integración de pagos con Wompi — CasesiPhone

La tienda ya tiene **dos formas de pago listas**:

1. **WhatsApp** — funciona sin configurar nada.
2. **Wompi (tarjeta / PSE / Nequi)** — solo debes ingresar tus llaves.

---

## 🚀 Activar Wompi en 3 pasos

### Paso 1 — Consigue tus llaves
1. Crea tu cuenta en <https://comercios.wompi.co> (gratis).
2. Ve a **Desarrolladores** y copia:
   - **Llave pública** → empieza por `pub_test_` (pruebas) o `pub_prod_` (producción).
   - **Secreto de integridad** → para la firma segura.

### Paso 2 — Pega la llave pública
Abre `js/wompi-config.js` y reemplaza:
```js
publicKey: 'PEGA_AQUI_TU_LLAVE_PUBLICA',
```

### Paso 3 — Configura la firma de integridad (elige UNA opción)

#### ✅ Opción A · Producción (SEGURA, recomendada)
El secreto de integridad **nunca** debe estar en el frontend. Sube una de estas funciones a tu hosting:

- **Vercel / Netlify (Node):** usa `wompi/api/wompi-signature.js`
- **Hosting con PHP:** usa `wompi/wompi-signature.php`

Define la variable de entorno del servidor:
```
WOMPI_INTEGRITY_SECRET = tu_secreto_de_integridad
```

Y en `js/wompi-config.js`:
```js
signatureEndpoint: 'https://tudominio.com/api/wompi-signature',
```

#### 🧪 Opción B · Solo pruebas (rápida, NO producción)
Para probar en sandbox sin servidor, pega el secreto de **pruebas** en:
```js
integritySecretTEST: 'tu_secreto_de_PRUEBAS',
```
> ⚠️ **Nunca** pongas el secreto de **producción** aquí: quedaría visible en el navegador.

---

## 🔒 Seguridad de los pagos
- La **firma de integridad** impide que alguien altere el monto de la compra.
- La **referencia** de cada pago es única (evita cobros duplicados).
- El servidor valida que el monto sea un entero positivo y la moneda sea `COP`.
- Toda la comunicación con Wompi usa **HTTPS**.
- Para confirmar pagos de forma 100% confiable, configura además los
  **webhooks/eventos** de Wompi en tu backend (ver docs de Wompi).

## 🧾 Tarjetas de prueba (sandbox)
| Resultado  | Número               | CVV | Fecha |
|------------|----------------------|-----|-------|
| Aprobada   | 4242 4242 4242 4242  | 123 | 12/29 |
| Rechazada  | 4111 1111 1111 1111  | 123 | 12/29 |

Documentación oficial: <https://docs.wompi.co/docs/colombia/widget-checkout-web/>
