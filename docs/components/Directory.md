# Directory


This is the file containing the **Directory**, component by the 
**Prix Team**

## Design Specifications
The Directory shows a set of listed elements in alphabetical order that can be filther by letter one by one or all at the same time.

## How do I do? (HTML Markup)
	<prix-directory></prix-directory>
## JSON Data Model
``` json
"configuration": {
    "sort": {
      "direction": "asc",
      "byField": "index"
    },
    "sort-level": {
      "direction": "asc",
      "byField": "title"
    }
  },
  "styling": {
    "colorscheme": ""
  },
  "data": {
    "items": [
      {
        "index": "#",
        "content": [
          {
            "title": "2",
            "url": "https://en.wikipedia.org/wiki/Two-element_Boolean_algebra"
          }
        ]
      },
      {
        "index": "A",
        "content": [
          {
            "title": "Amazon",
            "url": "https://www.amazon.com.mx/ref=nav_logo"
          },
          {
            "title": "Aeromexico",
            "url": "https://www.aeromexico.com"
          },
          {
            "title": "Antara",
            "url": "http://www.antara.com.mx/"
          }
        ]
      },
      
```


## Properties

| Property        | Attribute 	     | Description      | Type   | Default|
| :-------------- | :--------------: | :----------------|-------:|-------:|
|``configuration``| ``configuration``| Common attributes|``any``|``{}``|
| ``data``        | ``data``         | Common attributes|``any``|``{}``|

## Public API
| Method   			| Params    	|  Description  												 |
| ----------------- |:-------------:| :--------------------------------------------------------------|
| toggleSelection 	| () 	        | Use this method to apply selection to all letters 			 |
| toggleModal    	| ()            | Use this method to show a directory grid in mobile phones 	 |
| filterByInput    	| () 			| Use this method to filter items by typing in search box 		 |
| filterByCheckBox  | input:String  | Use this method to filter items by checking any nav bar letter |