# Drawer

This is the file containing the **Drawer**, component by the 
**Prix Team**

## Design Specifications
The Drawer shows space on the page that can be used to add content using slots.


## How do I do? (HTML Markup)

``` html
<prix-drawer color="#AAA" expand-size="small" side="es-left" opacity="true">
	<h1 slot="drawer-content">Base 22 Drawer</h1>
    <p slot="drawer-content">Some Content</p>
    <p slot="drawer-content">Some Content</p>
    <p slot="drawer-content">Some Content</p>
</prix-drawer>
```

## JSON Data Model
``` json
{
    "configuration":{
        "color":{"value" : ""},
        "expandSize":{"value" : ""},
        "side":{"value" : ""},
        "opacity":{"value" : ""}
    },
    "styling":{
        "colorscheme":""
    },
    "data":{
        "slot":{ "elements": []}
    }
}
```

## Properties

| Property	   | Attribute 	                         	| Description                               | Type     | Default  |
| :------------| :------------------------------------: | :-----------------------------------------|:--------:|---------:|
|``color``     | ``Any CSS color``                      | Changes the drawer's color                |``design``|``#AFA``  |
|``expandSize``| ``small, medium, large``               |Sets the width of the drawer depending on the viewport|``design``|``small``|
| ``side``     |``es-top, es-buttom, es-left, es-right``| Sets the side from where the drawer opens |``design``|``left``  |
|``opacity``   | ``boolean`` 		                    | An opacity effect applied to the body     |``design``|``false`` |


## Public API
| Method     | Params    |  Description                                             |
| -----------| :------:  | :--------------------------------------------------------|
| showDrawer | () 	     | async, shows the drawer. Triggered outside the component |
| hideDrawer | ()        | async, hides the drawer. Triggered outside the component |


