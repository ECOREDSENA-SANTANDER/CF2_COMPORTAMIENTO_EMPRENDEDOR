<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El análisis de oportunidades para emprender constituye una etapa esencial en la formulación de proyectos empresariales sostenibles y competitivos. Esta síntesis estructura los componentes clave que permiten al emprendedor identificar, evaluar y aprovechar los factores internos y externos del entorno. A través del liderazgo estratégico, la identificación de oportunidades, el uso de herramientas como el análisis PESTEL y la aplicación de metodologías como el modelo CANVAS, se potencia la toma de decisiones informadas y se facilita la construcción de propuestas de valor diferenciadas. Esta articulación de elementos estratégicos busca fortalecer las capacidades emprendedoras en contextos locales y globales.
    

    .row.justify-content-center
      .col-lg-12.col-md-12.col-12.mb-5.bgs.p-4.brad.bggris.borde-redondo
        figure
          img(src="@/assets/curso/sintesis.png", alt="La síntesis organiza los componentes del análisis de oportunidades para emprender en cuatro ejes temáticos: liderazgo y estrategias, identificación de oportunidades, análisis del entorno mediante CANVAS y evaluación externa con el modelo PESTEL. Cada eje se despliega en niveles sucesivos de profundización que permiten contextualizar herramientas empresariales en Colombia, resaltar la importancia del análisis para emprender, explorar factores macroeconómicos y competitivos, y culminar con el desarrollo de un mapa estratégico que sintetiza la información recolectada para la toma de decisiones. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
