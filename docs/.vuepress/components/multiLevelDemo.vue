<template>
    <div class="multiWrapper">
    <iframe src="../../prix-components/example.html" frameborder="10"></iframe>
    </div>
</template>
<script>
export default {
    name: 'multiLevelDemo',
    data(){
        return{};
    },
    beforeMount(){
        let menu = document.querySelector('prix-multi-level');
        menu.data = {
            items: [
                {
                    title: "OFERTA EDUCATIVA",
                    levels: [],
                    options: [
                    {
                        title: "PREPA TEC",
                        url: "https://tec.mx/es/prepatec/programas-academicos"
                    },
                    {
                        title: "PROFESIONAL",
                        url: "https://tec.mx/es/oferta-educativa-profesional"
                    },
                    {
                        title: "POSGRADOS",
                        url: "https://maestriasydiplomados.tec.mx/programas/posgrados"
                    },
                    {
                        title: "EDUCACION CONTINUA",
                        url: "https://maestriasydiplomados.tec.mx/programas/educacion_continua"
                    }
                    ]
                },
                {
                    title: "VIDA EN CAMPUS",
                    levels: [],
                    options: [
                    {
                        title: "PASION POR LA LECTURA",
                        url: "https://tec.mx/es/pasion-por-la-lectura"
                    },
                    {
                        title: "SERVICIO SOCIAL",
                        url: "https://tec.mx/es/servicio-social"
                    },
                    {
                        title: "TEC STORE",
                        url: "https://store.tec.mx/"
                    }
                    ]
                },
                {
                    title: "DIFERENCIA TEC",
                    levels: [],
                    options: [
                    {
                        title: "MODELO TEC 21",
                        url: "https://tec.mx/es/modelo-tec21"
                    },
                    {
                        title: "PATRIMONIO CULTURAL",
                        url: "https://tec.mx/es/patrimonio-cultural"
                    },
                    {
                        title: "INTERNACIONALIZACIÓN",
                        url: "https://tec.mx/es/internacionalizacion"
                    },
                    {
                        title: "DIVERSIDAD E INCLUSIÓN",
                        url: "https://tec.mx/es/diversidad-e-inclusion"
                    },
                    {
                        title: "EMPRENDIMIENTO",
                        url: "https://tec.mx/es/emprendimiento"
                    }
                    ]
                },
                {
                    title: "NOTICIAS",
                    levels: [],
                    options: [
                    {
                        title: "POR CATEGORIA",
                        url: "https://tec.mx/es/noticias/nacional"
                    },
                    {
                        title: "ESCUELAS NACIONALES",
                        url: "https://tec.mx/es/noticias/nacional"
                    },
                    {
                        title: "TEC REVIEW",
                        url: "https://tecreview.tec.mx/"
                    }
                    ]
                }
            ]
        }
    }
}
</script>


