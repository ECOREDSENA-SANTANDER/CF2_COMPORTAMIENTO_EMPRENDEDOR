<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodología CANVAS del entorno

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-3.col-sm-5
        img.img-t.img-a(src='@/assets/curso/t3/img1.png', alt='')
      .col-lg-11.col-md-12.col-sm-12
        p.mb-0 Es una herramienta estratégica que permite analizar y visualizar los factores clave del entorno interno y externo, que influyen en un proyecto, idea o emprendimiento, todo esto a través de bloques temáticos organizados visualmente (como en un lienzo), facilita la comprensión del modelo de negocio, identificando actores, oportunidades, amenazas, recursos clave y relaciones. Es útil para la toma de decisiones y para alinear objetivos con el contexto real del entorno. 

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white ¿Qué es el modelo CANVAS?

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-7.col-sm-12
        img(src='@/assets/curso/t3/img2.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p Conocido como Business Model Canvas, fue desarrollado por Alexander Osterwalder en 2011, y se considera una herramienta estratégica que permite diseñar, visualizar, evaluar y reinventar modelos de negocio, tanto en etapas iniciales como en procesos de mejora o cierre, por esta razón representa, de manera simplificada, los elementos clave que definen el funcionamiento de un modelo de negocio, estructurados en bloques interrelacionados.
        .row.bgverdemate2
          p.px-4.mt-3 Cuando se aplica desde la perspectiva del entorno, el modelo se amplía para considerar factores externos que inciden directamente en la viabilidad del negocio; estos factores se agrupan en cuatro áreas fundamentales; cada una de estas áreas permite comprender cómo interactúa el negocio con su contexto externo y facilita la toma de decisiones estratégicas. 

    p.mb-4 A continuación, se describe cada una de ellas:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-12.col-md-12.col-sm-12
        TabsA.color-acento-botones
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerzas del mercado")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Esta dimensión se enfoca en el análisis del comportamiento del consumidor y las dinámicas propias del mercado objetivo. Incluye:
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Segmentos de mercado:] grupos específicos de consumidores con características, necesidades o comportamientos comunes.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Necesidades y demanda:] identifica problemas no resueltos y niveles de demanda insatisfecha.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Problemáticas del mercado:] obstáculos u oportunidades detectadas que afectan la oferta y la demanda.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Costos de cambio:] barreras que enfrentan los clientes para cambiar de proveedor, producto o servicio.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Atractivo de los ingresos:] potencial de rentabilidad que representa cada segmento.
                p.px-4.mt-4 El análisis de estas fuerzas permite comprender a quién está dirigido el producto o servicio, cómo satisface una necesidad específica y qué tan rentable puede ser, considerando factores como la localización geográfica o el alcance digital.
          .tarjeta.bgazulclaro2.p-4(titulo="Fuerzas Macroeconómicas")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Este componente examina las condiciones económicas generales que impactan al entorno empresarial. Abarca:
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Condiciones macroeconómicas:] tasas de crecimiento económico, inflación, desempleo, entre otros indicadores clave.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Mercados de capitales:] acceso a fuentes de financiamiento y condiciones del crédito.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Infraestructura económica:] calidad de las vías de transporte, conectividad digital, logística, etc.
                  li
                    i.fas.fa-check-circle
                    span.mb-0 #[b Disponibilidad de recursos y #[em commodities:]] acceso a materias primas, energía y otros insumos esenciales.
                p.px-4.mt-4 Estos elementos influyen de manera directa en la sostenibilidad y en los costos operativos del negocio. Un entorno macroeconómico estable favorece la inversión y el crecimiento empresarial.
          .tarjeta.bgazulclaro2.p-4(titulo="Actores y dinámicas en la competencia del negocio")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Aquí se identifican los actores y dinámicas que configuran la competencia del negocio.
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Proveedores y actores de la cadena de valor:] influyen en costos, calidad y tiempos de entrega.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b #[em Stakeholders] (grupos de interés):] entidades o personas que pueden impactar o ser impactadas por el negocio (gobierno, ONGs, clientes estratégicos, etc.).
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Competidores actuales:] empresas que ofrecen productos o servicios similares.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Competidores nuevos entrantes:] potenciales competidores que podrían ingresar al mercado.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Productos y servicios sustitutos:] alternativas que podrían reemplazar la oferta actual.
                p.px-4.mt-4 Este análisis permite identificar amenazas, ventajas comparativas y factores clave para diferenciarse y posicionarse en el mercado. El modelo de las cinco fuerzas de Porter, si bien es un referente clásico en el estudio de la competitividad, debe integrarse a una lectura contemporánea que considere los nuevos actores digitales, las plataformas tecnológicas, y los cambios acelerados en los hábitos de consumo.
          .tarjeta.bgazulclaro2.p-4(titulo="Tendencias estructurales y emergentes")
            .row.justify-content-center
              .col-lg-12
                p.px-4 Se refiere a los cambios estructurales o emergentes que pueden transformar el entorno del negocio a corto, mediano o largo plazo. Considera:
                ul.lista-ul--color.marron.fa-al.mb-0.mt-2.px-4
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias tecnológicas:] innovaciones que cambian la forma de producir, comercializar o entregar valor.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias regulatorias:] nuevas normas legales o políticas públicas que afectan la actividad empresarial.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias sociales y culturales:] cambios en valores, estilos de vida, comportamientos de consumo.
                  li
                    i.fas.fa-check-circle
                    span.mb-0
                      | #[b Tendencias socioeconómicas:] transformaciones en la distribución de ingresos, migraciones, envejecimiento poblacional, entre otros.
                p.px-4.mt-4
                  | Detectar y anticiparse a estas tendencias es clave para adaptar el modelo de negocio y mantener su relevancia en un entorno cambiante.


    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis del entorno mediante la metodología CANVAS permite al emprendedor mirar más allá de su producto o servicio, evaluando de forma integral las variables externas que influyen en su modelo de negocio; esta visión estratégica incrementa las probabilidades de éxito, facilitando decisiones fundamentadas, adaptabilidad y sostenibilidad a largo plazo.

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1.	Profundización en las fuerzas macroeconómicas y del entorno competitivo de este modelo CANVAS 


    Separador  
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2. Desarrollo del mapa estratégico



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
