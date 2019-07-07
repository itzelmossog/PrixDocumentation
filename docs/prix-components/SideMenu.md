# Multi level Menu

This is the file containing the **Multi level Menu**, component by the 
**Prix Team**

## Design Specificaions

The Multi level Menu is a navigation element that helps the user move through the webpage by giving a direct access to different sections presented in an unordered list that contains list elements. These unordered lists may have nested unordered lists that have more options given a broader parent element.

## Demo
<multiLevelDemo/>

### How do I do (HTML Markup)
``` html
<prix-multi-level>
        <img src="../icon/logotec.png" alt="logotec" slot="icon" width="200px" style="margin-left: 25%;">
</prix-multi-level>
```

### JSON data model

```json
{   
    "data" : {
        "items": [
                {
                    "title": "OFERTA EDUCATIVA",
                    "levels": [],
                    "options": [
                    {
                        "title": "PREPA TEC",
                        "url": "https://tec.mx/es/prepatec/programas-academicos"
                    },
                    {
                        "title": "PROFESIONAL",
                        "url": "https://tec.mx/es/oferta-educativa-profesional"
                    },
                    {
                        "title": "POSGRADOS",
                        "url": "https://maestriasydiplomados.tec.mx/programas/posgrados"
                    },
                    {
                        "title": "EDUCACION CONTINUA",
                        "url": "https://maestriasydiplomados.tec.mx/programas/educacion_continua"
                    }
                    ]
                },
                {
                    "title": "VIDA EN CAMPUS",
                    "levels": [],
                    "options": [
                    {
                        "title": "PASION POR LA LECTURA",
                        "url": "https://tec.mx/es/pasion-por-la-lectura"
                    },
                    {
                        "title": "SERVICIO SOCIAL",
                        "url": "https://tec.mx/es/servicio-social"
                    },
                    {
                        "title": "TEC STORE",
                        "url": "https://store.tec.mx/"
                    }
                    ]
                },
                {
                    "title": "DIFERENCIA TEC",
                    "levels": [],
                    "options": [
                    {
                        "title": "MODELO TEC 21",
                        "url": "https://tec.mx/es/modelo-tec21"
                    },
                    {
                        "title": "PATRIMONIO CULTURAL",
                        "url": "https://tec.mx/es/patrimonio-cultural"
                    },
                    {
                        "title": "INTERNACIONALIZACIÓN",
                        "url": "https://tec.mx/es/internacionalizacion"
                    },
                    {
                        "title": "DIVERSIDAD E INCLUSIÓN",
                        "url": "https://tec.mx/es/diversidad-e-inclusion"
                    },
                    {
                        "title": "EMPRENDIMIENTO",
                        "url": "https://tec.mx/es/emprendimiento"
                    }
                    ]
                },
                {
                    "title": "NOTICIAS",
                    "levels": [],
                    "options": [
                    {
                        "title": "POR CATEGORIA",
                        "url": "https://tec.mx/es/noticias/nacional"
                    },
                    {
                        "title": "ESCUELAS NACIONALES",
                        "url": "https://tec.mx/es/noticias/nacional"
                    },
                    {
                        "title": "TEC REVIEW",
                        "url": "https://tecreview.tec.mx/"
                    }
                    ]
                }
            ]
    }
}
```
## Properties
#### Table

| Property  | Attribute | Description                                                                | Type     | Default |
| :-------- | :-------: | :--------------------------------------------------------------------------|---------:|--------:|
|``message``|``String`` |This attribute defines the message displayed in before the options in a menu|``String``|``{ }``  | 
|  ``color``| ``String``|This attribute defines the color theme of the menu                          |``bool``  |``false``|
|  ``data`` | ``any``   | Data related to the options the user will pick up                          |``bool``  |``false``|
|  ``dark`` |``boolean``|This is changed upon a dark menu option                                     |``bool``  |``false``|


## Public API
| Method   	   | Params  |  Description  	   				                                                     |
| ------------ |:-------:| :-------------------------------------------------------------------------------------|
| handleToggle | ()      | This function will toggle classes that will enable transitions                        |
| menuToggle   | ()      | This function will toggle classes that will enable transitions                        |
| setValue     | (Color) | Changes the color of the menu                                                         |	  
| darkTheme    | ()      | Switches the aparience of the menu to a more delightful visual experience in the dark |




