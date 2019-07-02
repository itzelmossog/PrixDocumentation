# Side Menu

This is the file containing the **SideMenu**, component by the 
**Prix Team **

## Design Specificaions

The Side Menu is a navigation element that helps the user move through the webpage by giving a direct access to different sections presented in an unordered list that contains list elements. These unordered lists may have nested unordered lists that have more options given a broader parent element.

## Demo


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
        "items" : [
            {
                "title" : "HOME",
                "levels" : [],
                "options" : [
                    
                    {
                        "title" : "Opción 1",
                        "url" : "https://base22.com/"
                    },

                    {
                        "title" : "Opción 2",
                        "url" : "https://base22.com/"
                    }
                   
                
                ]
            },
            {
                "title" : "HOME 2",
                "levels" : [
                    {
                        "title" : "Opción 1",
                        "options" : [
                            {
                                "title" : "Subnivel 1",
                                "url" : "https://base22.com/"
                            }
                        ]
                    }
                ],
                "options" : []
            }
        ]
    }
}
```
## Properties
#### Table

This is a table:

| Property        | Attribute 	     | Description                                                    | Type   | Default|
| :-------- | :-------: | :---------------------------------------------------------------------------|-------:|-------:|
|``message``|``message``|This attribute defines the message displayed in before the options in a menu|``String``|``{ }``| 
|  ``dark`` | ``dark``  |This is changed upon a dark menu option                                     |``bool``|``false``|


## Public API
| Method   			| Params    	|  Description  												 |
| ----------------- |:-------------:| :--------------------------------------------------------------|
|  	                | () 	        |	                                                             |




