<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-md-12.col-sm-12
        p El análisis de oportunidades para emprender constituye un proceso estratégico que permite identificar necesidades insatisfechas del entorno y transformarlas en ideas viables de negocio; este análisis integra variables del mercado, tendencias sociales, capacidades personales y recursos disponibles. 
        .row.bgazulmateclaro.borde-redondo
          p.px-4.py-3 Evaluar correctamente una oportunidad representa el punto de partida para una propuesta de valor diferenciadora; de este modo, el emprendedor pasa de la intuición a la decisión fundamentada, incrementando sus probabilidades de éxito, por ello en este espacio se busca desarrollar esa capacidad analítica como eje del emprendimiento sostenible. Asimismo, se pretende fortalecer la visión crítica del entorno, promoviendo una actitud proactiva frente a los cambios económicos, tecnológicos y sociales que configuran escenarios de innovación. Por consiguiente, se reconoce la importancia de anticiparse a las dinámicas del mercado y de adaptar las ideas de negocio a realidades cambiantes, con el fin de construir propuestas resilientes, pertinentes y con alto impacto social y económico.
      .col-lg-5.col-md-7.col-12
        img(src='@/assets/curso/portada/img-intro.png', alt='')
    
    .row.justify-content-center.align-items-center(data-aos="fade")           
      .col-lg-10.col-md-12.col-sm-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
