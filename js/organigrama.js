const bigOrgChartData = [
    {
        "id": "1",
        "text": "DIRECCIÓN",
        "title": "MDU. ALONDRA MARÍA MARTÍNEZ AYÓN",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/37-Alondra.png",
        "type": "img-card",
        "width": 352,
        "height": 90,
        "headerColor": "#FF9800",
        "fixed": false,
        "editable": true,
        "x": 1030,
        "y": 0,
        "stroke": "#FF9800",
        "open": true,
        "dx": 1,
        "dy": 0
    },
    {
        "id": "1.3",
        "text": "RECEPCIONISTA",
        "title": "GLORIA LÓPEZ MUÑOZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/18-Gloria.png",
        "assistant": true,
        "parent": "1",
        "type": "img-card",
        "width": 248,
        "height": 90,
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "y": 130,
        "x": 938,
        "stroke": "#03A9F4",
        "dx": 462,
        "dy": -30
    },
    {
        "id": "2",
        "text": "COORDINACIÓN ADMINISTRATIVA",
        "title": "LSCA MARTHA VERÓNICA LUGO ALARCÓN",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/16-Vero.png",
        "parent": 1,
        "dir": "vertical",
        "type": "img-card",
        "width": 380,
        "height": 90,
        "headerColor": "#607D8B",
        "fixed": false,
        "editable": true,
        "x": 0,
        "y": 260,
        "stroke": "#607D8B",
        "open": true,
        "dx": 10,
        "dy": 130
    },
    {
        "id": "2.1",
        "text": "DEPARTAMENTO DE CONTABILIDAD Y RECURSOS ADMINISTRATIVOS",
        "title": "C.P. MARTHA GRICEL ROBLES HDEZ.",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/26-Gris.png",
        "parent": 2,
        "type": "img-card",
        "width": 336,
        "height": 90,
        "headerColor": "#00C7B5",
        "fixed": false,
        "editable": true,
        "x": 20,
        "y": 390,
        "stroke": "#00C7B5",
        "open": true,
        "dir": "vertical",
        "dx": 10,
        "dy": 120
    },
    {
        "id": "3",
        "text": "COORDINACIÓN DE NORMATIVIDAD, TRANSPARENCIA Y ARCHIVOS",
        "title": "LIC. DAVID HOLGUIN BACA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/33-David.png",
        "parent": 1,
        "type": "img-card",
        "width": 519,
        "height": 90,
        "headerColor": "#607D8B",
        "fixed": false,
        "editable": true,
        "x": 504,
        "y": 260,
        "stroke": "#607D8B",
        "dx": -34,
        "dy": 130,
        "open": true
    },
    {
        "id": "3.1",
        "text": "DEPARTAMENTO DE ARCHIVO",
        "title": "vacante",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/Sin+t%C3%ADtulo-1-02.png",
        "parent": 3,
        "type": "img-card",
        "width": 279,
        "height": 90,
        "headerColor": "#00C7B5",
        "fixed": false,
        "editable": true,
        "x": 434,
        "y": 390,
        "stroke": "#00C7B5",
        "dx": -34,
        "dy": 130,
        "dir": "horizontal",
        "open": true
    },
    {
        "id": "3.1.1",
        "text": "AUXILIAR JURÍDICO",
        "title": "LIC. REMIGIO CÓRDOVA ÁLVAREZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/8-Remi.png",
        "parent": 3.1,
        "open": true,
        "type": "img-card",
        "width": 305,
        "height": 90,
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "x": 414,
        "y": 520,
        "stroke": "#03A9F4",
        "dx": -34,
        "dy": 130
    },
    {
        "id": "4",
        "text": "SUB-DIRECCIÓN",
        "title": "DRA. IREYLI ZULUAMY IRACHETA LARA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/34-Ireyli.png",
        "parent": "1",
        "dir": "horizontal",
        "type": "img-card",
        "width": 344,
        "height": 90,
        "headerColor": "#607D8B",
        "fixed": false,
        "editable": true,
        "x": 1605,
        "y": 260,
        "stroke": "#607D8B",
        "open": true,
        "dx": -5,
        "dy": -60
    },
    {
        "id": "4.1",
        "text": "DEPARTAMENTO DE PLANES Y PROGRAMAS",
        "title": "MDU ALMA DENISSE QUINTANA CHÁVEZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/25-Denisse.png",
        "parent": "4",
        "type": "img-card",
        "width": 375,
        "height": 90,
        "headerColor": "#00C7B5",
        "fixed": false,
        "editable": true,
        "x": 1185,
        "y": 390,
        "stroke": "#00C7B5",
        "open": true,
        "dx": -45,
        "dy": 130
    },
    {
        "id": "4.2",
        "text": "DEPARTAMENTO DE GEOMÁTICA",
        "title": "ISC CARLOS ALBERTO MARTÍNEZ MAR",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/21-Charlie.png",
        "parent": "4",
        "type": "img-card",
        "width": 343,
        "height": 90,
        "headerColor": "#00C7B5",
        "fixed": false,
        "editable": true,
        "x": 1848,
        "y": 390,
        "stroke": "#00C7B5",
        "open": true,
        "dx": -98,
        "dy": 130
    },
    {
        "id": "3.2",
        "text": "DEPARTAMENTO JURÍDICO",
        "title": "LIC. RAÚL ANTONIO SIFUENTES TORRES",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/27-Raul.png",
        "parent": 3,
        "type": "img-card",
        "width": 346,
        "height": 90,
        "headerColor": "#00C7B5",
        "fixed": false,
        "editable": true,
        "x": 759,
        "y": 390,
        "stroke": "#00C7B5",
        "dx": -34,
        "dy": 130,
        "dir": "horizontal"
    },
    {
        "id": "3.2.1",
        "text": "AUXILIAR JURÍDICO",
        "title": "LIC. ALEJANDRO VILLA LEYVA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/32-Alex.png",
        "parent": "3.2",
        "type": "img-card",
        "width": 287,
        "height": 90,
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "x": 759,
        "y": 520,
        "stroke": "#03A9F4",
        "dx": -34,
        "dy": 130
    },
    {
        "from": "1",
        "to": "1.3",
        "id": "u1705947560973",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1207,
                "y": 90
            },
            {
                "x": 1207,
                "y": 90
            },
            {
                "x": 1207,
                "y": 145
            },
            {
                "x": 1648,
                "y": 145
            }
        ],
        "width": 441,
        "height": 55,
        "x": 1207,
        "y": 90
    },
    {
        "from": 1,
        "to": "2",
        "id": "u1705947560974",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1207,
                "y": 90
            },
            {
                "x": 1207,
                "y": 240
            },
            {
                "x": 195,
                "y": 240
            },
            {
                "x": 195,
                "y": 390
            }
        ],
        "width": 1012,
        "height": 300,
        "x": 1207,
        "y": 90
    },
    {
        "from": 2,
        "to": "2.1",
        "id": "u1705947560975",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 10,
                "y": 435
            },
            {
                "x": -9.5,
                "y": 435
            },
            {
                "x": -9.5,
                "y": 555
            },
            {
                "x": 30,
                "y": 555
            }
        ],
        "width": 20,
        "height": 120,
        "x": 10,
        "y": 435
    },
    {
        "from": 1,
        "to": "3",
        "id": "u1705947560978",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1207,
                "y": 90
            },
            {
                "x": 1207,
                "y": 240
            },
            {
                "x": 730,
                "y": 240
            },
            {
                "x": 730,
                "y": 390
            }
        ],
        "width": 477,
        "height": 300,
        "x": 1207,
        "y": 90
    },
    {
        "from": 3,
        "to": "3.1",
        "id": "u1705947560979",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 730,
                "y": 480
            },
            {
                "x": 730,
                "y": 500
            },
            {
                "x": 540,
                "y": 500
            },
            {
                "x": 540,
                "y": 520
            }
        ],
        "width": 190,
        "height": 40,
        "x": 730,
        "y": 480
    },
    {
        "from": 3.1,
        "to": "3.1.1",
        "id": "u1705947560980",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 540,
                "y": 610
            },
            {
                "x": 540,
                "y": 630
            },
            {
                "x": 533,
                "y": 630
            },
            {
                "x": 533,
                "y": 650
            }
        ],
        "width": 7,
        "height": 40,
        "x": 540,
        "y": 610
    },
    {
        "from": "1",
        "to": "4",
        "id": "u1705947560982",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1207,
                "y": 90
            },
            {
                "x": 1207,
                "y": 240
            },
            {
                "x": 1772,
                "y": 240
            },
            {
                "x": 1772,
                "y": 200
            }
        ],
        "width": 565,
        "height": 110,
        "x": 1207,
        "y": 90
    },
    {
        "from": "4",
        "to": "4.1",
        "id": "u1705947560983",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1772,
                "y": 290
            },
            {
                "x": 1772,
                "y": 310
            },
            {
                "x": 1328,
                "y": 310
            },
            {
                "x": 1328,
                "y": 520
            }
        ],
        "width": 444,
        "height": 230,
        "x": 1772,
        "y": 290
    },
    {
        "from": "4",
        "to": "4.2",
        "id": "u1705947560984",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1772,
                "y": 290
            },
            {
                "x": 1772,
                "y": 310
            },
            {
                "x": 1922,
                "y": 310
            },
            {
                "x": 1922,
                "y": 520
            }
        ],
        "width": 150,
        "height": 230,
        "x": 1772,
        "y": 290
    },
    {
        "from": 3,
        "to": "3.2",
        "id": "u1705947560986",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 730,
                "y": 480
            },
            {
                "x": 730,
                "y": 500
            },
            {
                "x": 898,
                "y": 500
            },
            {
                "x": 898,
                "y": 520
            }
        ],
        "width": 168,
        "height": 40,
        "x": 730,
        "y": 480
    },
    {
        "from": "3.2",
        "to": "3.2.1",
        "id": "u1705947560987",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 898,
                "y": 610
            },
            {
                "x": 898,
                "y": 630
            },
            {
                "x": 869,
                "y": 630
            },
            {
                "x": 869,
                "y": 650
            }
        ],
        "width": 29,
        "height": 40,
        "x": 898,
        "y": 610
    },
    {
        "id": "u1705947561062",
        "parent": "2.1",
        "type": "img-card",
        "width": 334,
        "height": 90,
        "title": "LCI TANIA EDITH ESCOBEDO MINGURA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/10-Tania.png",
        "text": "OFICINA DE VINCULACIÓN Y DIFUSIÓN",
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "x": 40,
        "y": 520,
        "stroke": "#03A9F4",
        "open": true,
        "dx": -10,
        "dy": 110
    },
    {
        "from": "2.1",
        "to": "u1705947561062",
        "id": "u1705947561063",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 30,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 675
            },
            {
                "x": 30,
                "y": 675
            }
        ],
        "width": 0,
        "height": 120,
        "x": 30,
        "y": 555
    },
    {
        "id": "u1705947561095",
        "parent": "2.1",
        "type": "img-card",
        "width": 300,
        "height": 90,
        "title": "JUANA CONTRERAS HINOJOSA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/5-Juanis.png",
        "text": "INTENDENCIA",
        "headerColor": "#7E6BAD",
        "fixed": false,
        "editable": true,
        "x": 40,
        "y": 780,
        "stroke": "#03A9F4",
        "open": true,
        "dx": 10,
        "dy": 120
    },
    {
        "from": "2.1",
        "to": "u1705947561095",
        "id": "u1705947561096",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 30,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 945
            },
            {
                "x": 50,
                "y": 945
            }
        ],
        "width": 20,
        "height": 390,
        "x": 30,
        "y": 555
    },
    {
        "id": "u1705947561117",
        "parent": "u1705947561062",
        "type": "img-card",
        "width": 329,
        "height": 90,
        "title": "LIC ALBERTO HERNÁNDEZ SEGURA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/14-Alberto.png",
        "text": "AUXILIAR DISEÑO GRÁFICO",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 40,
        "y": 650,
        "stroke": "#9575CD",
        "dx": 30,
        "dy": 100
    },
    {
        "from": "u1705947561062",
        "to": "u1705947561117",
        "id": "u1705947561118",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 197,
                "y": 720
            },
            {
                "x": 197,
                "y": 740
            },
            {
                "x": 225,
                "y": 740
            },
            {
                "x": 225,
                "y": 750
            }
        ],
        "width": 28,
        "height": 30,
        "x": 197,
        "y": 720
    },
    {
        "id": "u1705947561185",
        "parent": "2.1",
        "type": "img-card",
        "width": 308,
        "height": 90,
        "title": "RAFAEL ACOSTA ARZAGA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/1-Rafa.png",
        "text": "MANTENIMIENTO Y MENSAJERÍA",
        "headerColor": "#7E6BAD",
        "fixed": false,
        "editable": true,
        "x": 40,
        "y": 910,
        "stroke": "#03A9F4",
        "dx": 10,
        "dy": 120
    },
    {
        "from": "2.1",
        "to": "u1705947561185",
        "id": "u1705947561186",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 30,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 1075
            },
            {
                "x": 50,
                "y": 1075
            }
        ],
        "width": 20,
        "height": 520,
        "x": 30,
        "y": 555
    },
    {
        "id": "u1705947561207",
        "parent": "2.1",
        "type": "img-card",
        "width": 337,
        "height": 90,
        "title": "DIANA LISBETH DOMÍNGUEZ VARGAS",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/9-Diana.png",
        "text": "AUXILIAR CONTABLE",
        "headerColor": "#7E6BAD",
        "fixed": false,
        "editable": true,
        "x": 40,
        "y": 1040,
        "stroke": "#03A9F4",
        "dx": 10,
        "dy": 120
    },
    {
        "from": "2.1",
        "to": "u1705947561207",
        "id": "u1705947561208",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 30,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 1205
            },
            {
                "x": 50,
                "y": 1205
            }
        ],
        "width": 20,
        "height": 650,
        "x": 30,
        "y": 555
    },
    {
        "id": "u1705947561229",
        "parent": "2.1",
        "type": "img-card",
        "width": 316,
        "height": 90,
        "title": "MAYRA YARLET TREJO CERVANTES",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/28-Mayra.png",
        "text": "AUXILIAR CONTABLE",
        "headerColor": "#7E6BAD",
        "fixed": false,
        "editable": true,
        "x": 40,
        "y": 1170,
        "stroke": "#03A9F4",
        "dx": 10,
        "dy": 120
    },
    {
        "from": "2.1",
        "to": "u1705947561229",
        "id": "u1705947561230",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 30,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 555
            },
            {
                "x": 10.5,
                "y": 1335
            },
            {
                "x": 50,
                "y": 1335
            }
        ],
        "width": 20,
        "height": 780,
        "x": 30,
        "y": 555
    },
    {
        "id": "u1705947561434",
        "parent": "4.1",
        "type": "img-card",
        "width": 365,
        "height": 90,
        "title": "ARQ. MARÍA ARTEMISA MACÍAS HERRERA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/19-Micha.png",
        "text": "JEFA OFICINA",
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "x": 1145,
        "y": 520,
        "stroke": "#03A9F4",
        "open": true,
        "dx": -45,
        "dy": 130,
        "dir": "vertical"
    },
    {
        "from": "4.1",
        "to": "u1705947561434",
        "id": "u1705947561435",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1328,
                "y": 610
            },
            {
                "x": 1328,
                "y": 630
            },
            {
                "x": 1283,
                "y": 630
            },
            {
                "x": 1283,
                "y": 650
            }
        ],
        "width": 45,
        "height": 40,
        "x": 1328,
        "y": 610
    },
    {
        "id": "u1705947561456",
        "parent": "4.2",
        "type": "img-card",
        "width": 387,
        "height": 90,
        "title": "IDT JEMIMA ABIGAIL PLASCENCIA QUEZADA ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/24-Jemi.png",
        "text": "JEFA OFICINA",
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "x": 1628,
        "y": 520,
        "stroke": "#03A9F4",
        "open": true,
        "dir": "vertical",
        "dx": -108,
        "dy": 130
    },
    {
        "from": "4.2",
        "to": "u1705947561456",
        "id": "u1705947561457",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1922,
                "y": 610
            },
            {
                "x": 1922,
                "y": 630
            },
            {
                "x": 1714,
                "y": 630
            },
            {
                "x": 1714,
                "y": 650
            }
        ],
        "width": 208,
        "height": 40,
        "x": 1922,
        "y": 610
    },
    {
        "id": "u1705947561478",
        "parent": "4.2",
        "type": "img-card",
        "width": 301,
        "height": 90,
        "title": "MIC ROCIO GPE. MARTÍNEZ ",
        "text": "OFICINA DE INFRAESTRUCTURA TECNÓLÓGICA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/20-Rocio.png",
        "headerColor": "#03A9F4",
        "fixed": false,
        "editable": true,
        "x": 2055,
        "y": 520,
        "stroke": "#03A9F4",
        "open": true,
        "dir": "vertical",
        "dx": -98,
        "dy": 130
    },
    {
        "from": "4.2",
        "to": "u1705947561478",
        "id": "u1705947561479",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1922,
                "y": 610
            },
            {
                "x": 1922,
                "y": 630
            },
            {
                "x": 2108,
                "y": 630
            },
            {
                "x": 2108,
                "y": 650
            }
        ],
        "width": 186,
        "height": 40,
        "x": 1922,
        "y": 610
    },
    {
        "id": "u1705947561632",
        "parent": "u1705947561456",
        "type": "img-card",
        "width": 335,
        "height": 90,
        "title": "LG LEONCIO ELMER ORNELAS",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/22-Elmer.png",
        "text": "ANALISTA DE DATOS GEOESPACIALES",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1648,
        "y": 650,
        "stroke": "#9575CD",
        "dx": -108,
        "dy": 130
    },
    {
        "from": "u1705947561456",
        "to": "u1705947561632",
        "id": "u1705947561633",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1520,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 825
            },
            {
                "x": 1540,
                "y": 825
            }
        ],
        "width": 20,
        "height": 130,
        "x": 1520,
        "y": 695
    },
    {
        "id": "u1705947561654",
        "parent": "u1705947561456",
        "type": "img-card",
        "width": 337,
        "height": 90,
        "title": "MCA SAMUEL CORDERO LÓPEZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/6-Samuel.png",
        "text": "ANALISTA DE DATOS GEOESPACIALES",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1648,
        "y": 780,
        "stroke": "#9575CD",
        "dx": -108,
        "dy": 130
    },
    {
        "from": "u1705947561456",
        "to": "u1705947561654",
        "id": "u1705947561655",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1520,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 955
            },
            {
                "x": 1540,
                "y": 955
            }
        ],
        "width": 20,
        "height": 260,
        "x": 1520,
        "y": 695
    },
    {
        "id": "u1705947561676",
        "parent": "u1705947561456",
        "type": "img-card",
        "width": 338,
        "height": 90,
        "title": "IDT JOEL ARTURO LÓPEZ G.",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/17-Joel.png",
        "text": "ANALISTA DE DATOS GEOESPACIALES",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1648,
        "y": 910,
        "stroke": "#9575CD",
        "dx": -108,
        "dy": 130
    },
    {
        "from": "u1705947561456",
        "to": "u1705947561676",
        "id": "u1705947561677",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1520,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 1085
            },
            {
                "x": 1540,
                "y": 1085
            }
        ],
        "width": 20,
        "height": 390,
        "x": 1520,
        "y": 695
    },
    {
        "id": "u1705947561698",
        "parent": "u1705947561456",
        "type": "img-card",
        "width": 341,
        "height": 90,
        "title": "IDT EDUARDO RUBALCABA MEZA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/36-Lalo.png",
        "text": "ANALISTA DE DATOS GEOESPACIALES",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1648,
        "y": 1040,
        "stroke": "#9575CD",
        "dx": -108,
        "dy": 130
    },
    {
        "from": "u1705947561456",
        "to": "u1705947561698",
        "id": "u1705947561699",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1520,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 1215
            },
            {
                "x": 1540,
                "y": 1215
            }
        ],
        "width": 20,
        "height": 520,
        "x": 1520,
        "y": 695
    },
    {
        "id": "u1705947561720",
        "parent": "u1705947561456",
        "type": "img-card",
        "width": 339,
        "height": 90,
        "title": "*VACANTE*",
        "text": "ANALISTA DE DATOS GEOESPACIALES",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1648,
        "y": 1170,
        "stroke": "#9575CD",
        "img": "",
        "dx": -108,
        "dy": 130
    },
    {
        "from": "u1705947561456",
        "to": "u1705947561720",
        "id": "u1705947561721",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1520,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 695
            },
            {
                "x": 1500.5,
                "y": 1345
            },
            {
                "x": 1540,
                "y": 1345
            }
        ],
        "width": 20,
        "height": 650,
        "x": 1520,
        "y": 695
    },
    {
        "id": "u1705947561742",
        "parent": "u1705947561478",
        "type": "img-card",
        "width": 333,
        "height": 90,
        "title": "ISC LUIS CARLOS CRUZ CASTILLO",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/7-Luis.png",
        "text": "PROGRAMADOR ANALISTA",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 2075,
        "y": 650,
        "stroke": "#9575CD",
        "dx": -98,
        "dy": 130
    },
    {
        "from": "u1705947561478",
        "to": "u1705947561742",
        "id": "u1705947561743",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1957,
                "y": 695
            },
            {
                "x": 1937.5,
                "y": 695
            },
            {
                "x": 1937.5,
                "y": 825
            },
            {
                "x": 1977,
                "y": 825
            }
        ],
        "width": 20,
        "height": 130,
        "x": 1957,
        "y": 695
    },
    {
        "id": "u1705947561764",
        "parent": "u1705947561478",
        "type": "img-card",
        "width": 329,
        "height": 90,
        "title": "ISC MIGUEL ÁNGEL VALDÉZ RODARTE",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/30-Mike.png",
        "text": "PROGRAMADOR ANALISTA",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 2075,
        "y": 780,
        "stroke": "#9575CD",
        "dx": -93,
        "dy": 140
    },
    {
        "from": "u1705947561478",
        "to": "u1705947561764",
        "id": "u1705947561765",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1957,
                "y": 695
            },
            {
                "x": 1937.5,
                "y": 695
            },
            {
                "x": 1937.5,
                "y": 965
            },
            {
                "x": 1982,
                "y": 965
            }
        ],
        "width": 25,
        "height": 270,
        "x": 1957,
        "y": 695
    },
    {
        "id": "u1705955461715",
        "parent": "u1705947561434",
        "dx": -35,
        "dy": 130,
        "type": "img-card",
        "width": 360,
        "height": 90,
        "title": "MDU ANA GABRIELA CERVANTES GARCÍA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/4-Gaby.png",
        "text": "ANALISTA URBANO",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 650,
        "stroke": "#9575CD",
        "open": true
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461715",
        "id": "u1705955461716",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 825
            },
            {
                "x": 1130,
                "y": 825
            }
        ],
        "width": 30,
        "height": 130,
        "x": 1100,
        "y": 695
    },
    {
        "id": "u1705955461769",
        "parent": "u1705947561434",
        "dx": -45,
        "dy": 130,
        "type": "img-card",
        "width": 308,
        "height": 90,
        "title": "ARQ. JESSICA ELIZABETH URQUIDI",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/29-Eli.png",
        "text": "ANALISTA URBANO",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 780,
        "stroke": "#9575CD"
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461769",
        "id": "u1705955461770",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 955
            },
            {
                "x": 1120,
                "y": 955
            }
        ],
        "width": 20,
        "height": 260,
        "x": 1100,
        "y": 695
    },
    {
        "id": "u1705955461805",
        "parent": "u1705947561434",
        "dx": -45,
        "dy": 130,
        "type": "img-card",
        "width": 328,
        "height": 90,
        "title": "ARQ. IRAM FELIPE ACOSTA BARRERA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/35-Iram.png",
        "text": "ANALISTA URBANO",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 910,
        "stroke": "#9575CD"
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461805",
        "id": "u1705955461806",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 1085
            },
            {
                "x": 1120,
                "y": 1085
            }
        ],
        "width": 20,
        "height": 390,
        "x": 1100,
        "y": 695
    },
    {
        "id": "u1705955461827",
        "parent": "u1705947561434",
        "dx": -45,
        "dy": 130,
        "type": "img-card",
        "width": 346,
        "height": 90,
        "title": "ARQ. MARÍA ISABEL CASTAÑEDA PEREA",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/3-Isabel.png",
        "text": "ANALISTA URBANO",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 1040,
        "stroke": "#9575CD"
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461827",
        "id": "u1705955461828",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 1215
            },
            {
                "x": 1120,
                "y": 1215
            }
        ],
        "width": 20,
        "height": 520,
        "x": 1100,
        "y": 695
    },
    {
        "id": "u1705955461849",
        "parent": "u1705947561434",
        "dx": -45,
        "dy": 130,
        "type": "img-card",
        "width": 258,
        "height": 90,
        "title": "ING. FERNANDO SÁNCHEZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/38-LuisF.png",
        "text": "ANALISTA DE MOVILIDAD",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 1170,
        "stroke": "#9575CD"
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461849",
        "id": "u1705955461850",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 1345
            },
            {
                "x": 1120,
                "y": 1345
            }
        ],
        "width": 20,
        "height": 650,
        "x": 1100,
        "y": 695
    },
    {
        "id": "u1705955461871",
        "parent": "u1705947561434",
        "dx": -45,
        "dy": 130,
        "type": "img-card",
        "width": 423,
        "height": 90,
        "title": "ING. ECOL. HUMBERTO VELDERRAIN ARMENDÁRIZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/31-Humberto.png",
        "text": "ANALISTA ECOLOGÍA",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 1300,
        "stroke": "#9575CD"
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461871",
        "id": "u1705955461872",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 1475
            },
            {
                "x": 1120,
                "y": 1475
            }
        ],
        "width": 20,
        "height": 780,
        "x": 1100,
        "y": 695
    },
    {
        "id": "u1705955461904",
        "parent": "u1705947561434",
        "dx": -45,
        "dy": 130,
        "type": "img-card",
        "width": 328,
        "height": 90,
        "title": "GUILLERMO HERNÁNDEZ RODRÍGUEZ",
        "img": "https://sitioimplan.s3.us-east-2.amazonaws.com/img/Imagenes-Elementos/13-Guillermo.png",
        "text": "ANALISTA PROT. CIVIL",
        "headerColor": "#9575CD",
        "fixed": false,
        "editable": true,
        "x": 1165,
        "y": 1430,
        "stroke": "#9575CD"
    },
    {
        "from": "u1705947561434",
        "to": "u1705955461904",
        "id": "u1705955461905",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "title": {
            "fontSize": 14,
            "lineHeight": 14,
            "textAlign": "center",
            "textVerticalAlign": "center",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontColor": "#4C4C4C",
            "fill": "#FFF",
            "draggable": true,
            "editable": true,
            "hidden": false
        },
        "points": [
            {
                "x": 1100,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 695
            },
            {
                "x": 1080.5,
                "y": 1605
            },
            {
                "x": 1120,
                "y": 1605
            }
        ],
        "width": 20,
        "height": 910,
        "x": 1100,
        "y": 695
    }
];

const editor = new dhx.DiagramEditor("body_organigrama", {
    type: "org",
    controls: {
        apply: false, // hides/shows the Apply All button
        reset: false, // hides/shows the Reset Changes button
        import: false, // hides/shows the Import Data button
        export: false, // hides/shows the Export Data button
        gridStep: false, // hides/shows the Grid step sidebar option in the right panel of the editor
        scale: true,
        shapeToolbar: false,
        editManager: false
    },
    shapeType: "img-card", // the "img-card" type is used for shapes with images
});

editor.parse(bigOrgChartData);