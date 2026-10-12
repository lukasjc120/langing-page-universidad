/* ============================================================
   CONFIGURACIÓN EDITABLE — Paola Díaz | Clases de Química
   Editá solo este archivo para cambiar datos, precios y textos.
   Respetá las comillas "" y las comas , al final de cada línea.
   ============================================================ */
window.SITE = {

  nombre: "Paola Díaz",

  /* WhatsApp: 54 + 9 + código de área (sin 0) + número (sin 15).
     Sin +, espacios ni guiones. Ejemplo: "5493811234567" */
  whatsapp: "5493813575649",
  mensajeWhatsapp: "Hola Paola, quisiera consultar por las clases de Química.",

  /* Correo (opcional). Si lo completás, aparece el botón "Enviar por correo". */
  email: "",

  /* Formulario por correo sin servidor (opcional): creá un formulario en
     https://formspree.io y pegá acá su URL (https://formspree.io/f/xxxx). */
  formEndpoint: "",

  /* RESERVAS: horarios que se ofrecen en el formulario.
     dias: días de atención (0 = domingo, 1 = lunes ... 6 = sábado).
     diasAnticipacion: mínimo de días de anticipación para pedir una clase. */
  reservas: {
    horarios: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    dias: [1, 2, 3, 4, 5, 6],
    diasAnticipacion: 1
  },

  /* CORREOS AUTOMÁTICOS (opcional) con EmailJS — ver README, sección "Reservas por correo".
     Al completar los 4 datos, el botón "Solicitar clase por correo" envía:
       - un aviso a Paola con todos los datos de la solicitud
       - un correo al alumno con la fecha, el horario, la modalidad y el tema pedidos. */
  emailjs: {
    publicKey: "",
    serviceId: "",
    templatePaola: "",
    templateAlumno: ""
  },

  /* Materias: n = número atómico, s = símbolo, t = nombre. */
  materias: [
    { n: 1,  s: "H",  t: "Química General" },
    { n: 6,  s: "C",  t: "Química Orgánica" },
    { n: 26, s: "Fe", t: "Química Inorgánica" },
    { n: 49, s: "In", t: "Preparación de ingreso" }
  ],

  /* Niveles (ajustalos a lo que Paola realmente dicta). */
  niveles: [
    { t: "Secundario",            d: "Refuerzo y apoyo en Química." },
    { t: "Ingreso universitario", d: "Preparación de contenidos y ejercicios de ingreso." },
    { t: "Universitario",         d: "Cursadas, parciales y finales." }
  ],

  /* Servicios y precios. Dejá precio:"" para mostrar "Consultar".
     Ejemplo: precio: "$ 15.000", detalle: "por clase de 60 min". */
  servicios: [
    { nombre: "Apoyo en Química",
      desc: "Repaso de contenidos, resolución de dudas y ejercicios para seguir la cursada con más confianza.",
      etiqueta: "Seguimiento continuo", precio: "", detalle: "" },
    { nombre: "Parciales y finales",
      desc: "Organización de contenidos, ejercicios y práctica para llegar mejor preparado a las evaluaciones.",
      etiqueta: "Objetivos concretos", precio: "", detalle: "" },
    { nombre: "Química personalizada",
      desc: "Encuentros pensados para comprender conceptos, practicar problemas y aprender a tu ritmo.",
      etiqueta: "Atención individual", precio: "", detalle: "" }
  ],

  /* Modalidades (borrá las que no se ofrezcan). */
  modalidades: [
    { t: "Presencial", d: "En la zona de atención de Paola. Coordinamos día y horario." },
    { t: "Online",     d: "Por videollamada, con material compartido durante la clase." }
  ],

  /* Texto debajo de los precios (formas de pago, cancelaciones, etc.). */
  notaPrecios: "",

  /* Atención presencial. */
  zona: {
    ciudad: "",   // Ej.: "San Miguel de Tucumán"
    zonas: "",    // Ej.: "Centro, Yerba Buena y alrededores"
    nota: "El lugar exacto se coordina al reservar la clase.",
    mapaUrl: ""   // Opcional: link de Google Maps de la zona
  },

  /* TESTIMONIOS REALES. Mientras esté vacío, la sección no se muestra.
     Agregá solo opiniones auténticas y con autorización de quien las escribió.
     Formato:
     { texto: "Me ayudó a ...", nombre: "María G.", rol: "Estudiante universitaria", autorizado: true }
     Si "autorizado" no es true, el testimonio NO se publica. */
  testimonios: []
};
