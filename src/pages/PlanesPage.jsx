import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PlanesPage = () => {
  const desktopRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // =================================================================
  // LÓGICA DEL PDF (INTACTA)
  // =================================================================
  const generateDynamicPDF = async () => {
    if (!desktopRef.current) return;
    setIsGenerating(true);

    try {
      const element = desktopRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, 
        useCORS: true, 
        backgroundColor: '#f9fafb',
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? 'l' : 'p',
        unit: 'px',
        format: [imgWidth, imgHeight]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('propuesta-comercial-riko.pdf');

    } catch (error) {
      console.error("Error generando PDF:", error);
      alert("Hubo un error al generar el PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  // =================================================================
  // CONFIGURACIÓN VISUAL
  // =================================================================
  const colors = {
    orangePrimary: '#ea580c',
    orangeLight: '#fff7ed',
    orangeBorder: '#fed7aa',
    grayBg: '#f9fafb',
    grayText: '#1f2937',
    greenBg: '#f0fdf4',
    greenText: '#166534',
    white: '#ffffff'
  };

  // =================================================================
  // DATOS DE LOS PLANES (AMPLIADOS Y MEJORADOS)
  // =================================================================
  const plans = [
    {
      title: "Aliado Digital",
      price: 35,
      period: "mes",
      commitment: "Sin permanencia", 
      description: "La solución perfecta para organizar tu delivery y digitalizar tu menú sin complicaciones técnicas.",
      features: [ 
        "Presencia garantizada en Riko App", 
        "Recepción de pedidos ilimitada", 
        "Panel de control (Gestión de ventas)", 
        "Menú Digital con Código QR para mesas",
        "Soporte técnico vía WhatsApp",
        "Control de horarios y disponibilidad"
      ],
      notIncluded: [ 
        "GARANTÍA DE VENTAS (Riesgo Cero)", 
        "Fotografía profesional de alimentos", 
        "Estrategias de Marketing Digital",
        "Difusión por WhatsApp a la base de datos"
      ],
      buttonText: "Comenzar Básico",
      highlight: false,
      guarantee: null
    },
    {
      title: "Impulso Riko",
      price: 65,
      period: "mes",
      commitment: "Plan Trimestral", 
      description: "Deja de preocuparte por qué publicar. Nosotros creamos el contenido que hace que tu comida provoque.",
      features: [ 
        "Todo lo incluido en el plan Aliado", 
        "1 Visita mensual de creación de contenido", 
        "Sesión de fotos profesional (5 platos/mes)",
        "Rotación en Estados de WhatsApp (+Vistas)", 
        "Diseño de 1 Flyer promocional digital",
        "Creación de Cupones de Descuento",
        "Posicionamiento Destacado (Nivel Medio)" 
      ],
      notIncluded: [ 
        "Campañas de Difusión Masiva (Broadcast)", 
        "Producción de Video Reels con edición avanzada",
        "Banner Principal (Top de la App)" 
      ],
      buttonText: "Asegurar mis Ventas",
      highlight: true, 
      isQuarterly: true,
      guarantee: { 
        orders: "15 Pedidos/mes", 
        text: "Si no generamos al menos $65 en ventas, te regalamos 15 días de servicio." 
      }
    },
    {
      title: "Franquicia VIP",
      price: 110,
      period: "mes",
      commitment: "Plan Trimestral",
      description: "Dominio total del mercado. Usamos nuestra base de datos para llevar clientes directo a tu perfil.",
      features: [ 
        "Todo lo incluido en el plan Impulso", 
        "Producción Audiovisual (2 Reels/mes)", 
        "1 Campaña de Difusión Masiva (WhatsApp API)", 
        "Banner Rotativo PRINCIPAL (Home de la App)", 
        "Badge de 'Restaurante Verificado'",
        "Reporte mensual de métricas y rendimiento",
        "Soporte Prioritario 24/7 para incidencias"
      ],
      notIncluded: [],
      buttonText: "Dominar el Mercado",
      highlight: false,
      isQuarterly: true,
      guarantee: { 
        orders: "40 Pedidos/mes", 
        text: "Garantizamos flujo de caja constante gracias a la difusión masiva directa." 
      }
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 lg:py-24" style={{ backgroundColor: colors.grayBg }}>
      
      {/* BOTÓN FLOTANTE */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={generateDynamicPDF}
          disabled={isGenerating}
          className="flex items-center gap-2 text-white px-6 py-4 rounded-full shadow-2xl transition-transform hover:scale-105"
          style={{ backgroundColor: isGenerating ? '#9ca3af' : '#111827', cursor: isGenerating ? 'wait' : 'pointer' }}
        >
          {isGenerating ? (
             <span className="font-bold">Generando...</span>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="font-bold">Descargar PDF</span>
            </>
          )}
        </button>
      </div>

      {/* VERSIÓN VISIBLE (RESPONSIVE) */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-sm font-bold uppercase" style={{ color: colors.orangePrimary }}>Garantía Riko App</h2>
          <p className="mt-2 text-3xl font-extrabold text-[#111827]">Planes Comerciales 2026</p>
          <p className="mt-4 text-gray-500">Selecciona el nivel de crecimiento que tu negocio necesita hoy.</p>
        </div>
        
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 items-start">
           {plans.map((plan, index) => (
             <CardPlan key={`mobile-${index}`} plan={plan} colors={colors} isPdf={false} />
           ))}
        </div>
      </div>

      {/* VERSIÓN GHOST PARA PDF (FIXED WIDTH / AUTO HEIGHT) */}
      <div style={{ position: 'fixed', top: 0, left: '-9999px', zIndex: -10 }}>
        <div 
          ref={desktopRef} 
          style={{ 
            width: '1200px', 
            backgroundColor: colors.grayBg, 
            padding: '60px', 
            display: 'block' 
          }}
        >
            {/* Header del PDF */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ color: colors.orangePrimary, fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Propuesta Riko App 2026</h1>
                <p style={{ fontSize: '36px', fontWeight: '900', color: '#111827', margin: '15px 0' }}>Estructura de Inversión y Garantías</p>
                <p style={{ color: '#6b7280', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                  Hemos diseñado tres niveles de alianza para adaptarnos a la etapa actual de tu restaurante.
                  Desde la digitalización básica hasta la aceleración comercial agresiva.
                </p>
            </div>

            {/* Grid forzado a 3 columnas para PDF */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', alignItems: 'start' }}>
                {plans.map((plan, index) => (
                    <CardPlan key={`pdf-${index}`} plan={plan} colors={colors} isPdf={true} />
                ))}
            </div>

            {/* Footer del PDF */}
            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: colors.orangeLight, border: `1px solid ${colors.orangeBorder}`, borderRadius: '12px', textAlign: 'center' }}>
                 <p style={{ fontSize: '14px', color: '#c2410c', lineHeight: '1.6' }}>
                    <strong>CONDICIONES GENERALES:</strong> <br/>
                    1. Los precios están expresados en Dólares ($) pagaderos en Bolívares a tasa BCV del día de la transacción.<br/>
                    2. La "Garantía de Riesgo Cero" aplica exclusivamente para clientes con contrato trimestral activo y operatividad mayor al 90% del horario comercial.<br/>
                    3. El material audiovisual y fotográfico es propiedad del restaurante y puede ser usado en sus propias redes sociales.
                 </p>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '40px', color: '#9ca3af', fontSize: '12px', fontWeight: '500'}}>
              Web Bonding C.A. - Acarigua / Araure
            </div>
        </div>
      </div>

    </div>
  );
};

// COMPONENTE TARJETA (Ligeramente ajustado para más contenido)
const CardPlan = ({ plan, colors, isPdf }) => (
    <div 
      style={{ 
        position: 'relative',
        backgroundColor: colors.white,
        borderRadius: '20px',
        border: `2px solid ${plan.highlight ? colors.orangePrimary : 'transparent'}`,
        outline: plan.highlight ? 'none' : '1px solid #e5e7eb', 
        boxShadow: plan.highlight ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
        transform: (!isPdf && plan.highlight) ? 'scale(1.05)' : 'none',
        zIndex: plan.highlight ? 10 : 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {plan.highlight && (
        <div 
          style={{ 
            position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
            backgroundColor: colors.orangePrimary, color: 'white',
            fontSize: isPdf ? '12px' : '10px', fontWeight: 'bold', textTransform: 'uppercase',
            padding: '8px 20px', borderRadius: '999px', whiteSpace: 'nowrap',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          Mejor Costo / Beneficio
        </div>
      )}

      <div style={{ padding: '32px 24px 10px 24px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827' }}>{plan.title}</h3>
        <p style={{ marginTop: '10px', color: '#6b7280', fontSize: '14px', minHeight: '60px', lineHeight: '1.5' }}>{plan.description}</p>
        
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontSize: '48px', fontWeight: '800', color: '#111827' }}>${plan.price}</span>
          <span style={{ fontSize: '20px', fontWeight: '600', color: '#6b7280', marginLeft: '6px' }}>/mes</span>
        </div>

        {plan.guarantee ? (
          <div style={{ marginTop: '24px', padding: '16px', backgroundColor: colors.greenBg, border: '1px solid #bbf7d0', borderRadius: '12px' }}>
            <p style={{ fontSize: '13px', color: '#15803d', lineHeight: '1.4' }}>
              <strong style={{ display:'block', textTransform:'uppercase', fontSize:'11px', marginBottom: '4px' }}>Garantía Riesgo Cero:</strong>
              Meta: <strong style={{color: '#14532d', fontSize: '14px'}}>{plan.guarantee.orders}</strong><br/>
              <span style={{fontStyle: 'italic', opacity: 0.85}}>"{plan.guarantee.text}"</span>
            </p>
          </div>
        ) : (
          <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: '12px', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center', fontStyle: 'italic' }}>Este plan se enfoca en tecnología operativa.<br/>El marketing corre por tu cuenta.</p>
          </div>
        )}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#f3f4f6', margin: '15px 0' }}></div>

      <div style={{ padding: '10px 24px 32px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
          {plan.features.map((feature, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'start', marginBottom: '14px' }}>
              <span style={{ color: '#22c55e', marginRight: '12px', fontSize: '16px', fontWeight: 'bold' }}>✓</span>
              <span style={{ fontSize: '14px', color: '#374151', lineHeight: '1.4' }}>{feature}</span>
            </li>
          ))}
          {plan.notIncluded.map((feature, i) => (
            <li key={`not-${i}`} style={{ display: 'flex', alignItems: 'start', marginBottom: '14px', opacity: 0.5 }}>
              <span style={{ color: '#f87171', marginRight: '12px', fontSize: '16px', fontWeight: 'bold' }}>✕</span>
              <span style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'line-through', lineHeight: '1.4' }}>{feature}</span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto' }}>
           <div style={{
              width: '100%', textAlign: 'center', padding: '16px', borderRadius: '10px',
              fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px',
              backgroundColor: plan.highlight ? colors.orangePrimary : colors.white,
              color: plan.highlight ? colors.white : colors.orangePrimary,
              border: `1px solid ${plan.highlight ? colors.orangePrimary : colors.orangeBorder}`,
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
            {plan.buttonText}
          </div>
          {plan.isQuarterly && <p style={{ fontSize: '10px', textAlign: 'center', color: '#9ca3af', marginTop: '10px' }}>* Compromiso trimestral para activar garantía</p>}
        </div>
      </div>
    </div>
);

export default PlanesPage;