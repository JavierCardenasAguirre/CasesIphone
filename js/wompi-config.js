// ============================================================
// CONFIGURACIÓN DE WOMPI  —  CasesiPhone
// ------------------------------------------------------------
// Para activar los pagos con tarjeta solo debes completar los
// datos de abajo. NO necesitas tocar ningún otro archivo.
//
// ¿Dónde consigo las llaves?
//   1. Entra a https://comercios.wompi.co  (crea tu cuenta gratis)
//   2. Menú "Desarrolladores" → verás:
//        - Llave pública        (empieza por  pub_test_  o  pub_prod_)
//        - Secreto de integridad (para la firma segura)
//
// IMPORTANTE SOBRE SEGURIDAD:
//   • La "llave pública" SÍ puede ir aquí (es pública por diseño).
//   • El "secreto de integridad" NUNCA debe ponerse en el frontend
//     en producción. Se usa en el servidor (ver carpeta /wompi).
// ============================================================

window.WOMPI_CONFIG = {

    // (1) OBLIGATORIO — Pega aquí tu LLAVE PÚBLICA de Wompi
    //     Pruebas:  pub_test_xxxxxxxxxxxxxxxx
    //     Producción: pub_prod_xxxxxxxxxxxxxxxx
    publicKey: 'PEGA_AQUI_TU_LLAVE_PUBLICA',

    // (2) Moneda (Wompi Colombia solo admite COP)
    currency: 'COP',

    // (3) A dónde regresa el cliente después de pagar (opcional).
    //     Déjalo vacío para volver a la misma página.
    redirectUrl: '',

    // ------------------------------------------------------------
    // FIRMA DE INTEGRIDAD (elige UNA de las dos opciones)
    // ------------------------------------------------------------

    // OPCIÓN A · PRODUCCIÓN (recomendada y segura)
    //   Sube la función de la carpeta /wompi a tu hosting (Vercel,
    //   Netlify, o PHP) y pega aquí su URL. El secreto queda en el
    //   servidor, nunca expuesto.
    //   Ejemplo: 'https://tudominio.com/api/wompi-signature'
    signatureEndpoint: '',

    // OPCIÓN B · SOLO PRUEBAS EN SANDBOX (rápida, NO para producción)
    //   Pega tu secreto de integridad de PRUEBAS aquí para probar sin
    //   servidor. ⚠️ Nunca uses el secreto de PRODUCCIÓN en este campo,
    //   quedaría visible para cualquiera. Déjalo vacío si usas Opción A.
    integritySecretTEST: ''
};
