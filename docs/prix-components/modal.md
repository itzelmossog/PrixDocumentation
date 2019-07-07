# Modal

This is the file containing the **Modal**, component by the 
**Prix Team**

## Design Specifications
The Modal shows a pop up space where content is displayed to either show a warning, a message, or even a set of options where the user can choose.

## Demo
<modalDemo/>

## How do I do? (HTML Markup)
``` html
<prix-modal
      color-header="white"
      color-header-text="black"
      color-body="white"
      color-body-text="black"
      color-footer="white"
      expand-size-height="70%"
      opacity="false"
      opacity-color="rgba(0,0,0,0.3)"
      cancel-label="Decline"
      accept-label="Ok"
    >
      <h1 slot="headerModalContent">
        Base22
      </h1>
      <div slot="bodyModalContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </prix-modal>
```

## JSON Data Model

``` json
{
    "configuration":{  
        "colorHeader" : "",
        "colorHeaderText" : "",
        "colorBody" :  "",
        "colorBodyText" : "",
        "colorFooter" : "",
        "expandSizewidth" : "",
        "opacity" : "false",
        "opacityColor" :  "",
        "closable" : "false",
        "cancelLabel" : "Cancel",
        "acceptLabel" : "Ok",
        "cancelLabelColor" : "blue",
        "cancelLabelColorText" : "blue",
        "acceptLabelColor" :  "#EAF4EB",
        "acceptLabelColorText" : "#43a047"
    }

}
```

## Properties


| Property               | Attribute 	             | Description                                | Type     | Default     |
| :--------------------- | :---------------------: | :------------------------------------------|---------:|------------:|
|``colorHeader`` 	       |``Any CSS color``		     |Changes the header's background color 	    |``String``|``{white}``  |
|``colorHeaderText``     |``Any CSS color``		     |Changes the header's text color 	          |``String``|``{black}``  |
|``colorBody``	  	     |``Any CSS color``		     |Changes the body background color 					|``String``|``{white}``  |
|``colorBodyText``	     |``Any CSS color``		     |Changes the body text color 						    |``String``|``{black}``  |
|``colorFooter``	       |``Any CSS color`` 	     |Changes the footer background color 		    |``String``|``{white}``  |
|``expandSizewidth``     |``%number from 0 to 100``|Sets the the width of the modal 					  |``String``|``{80%}``    |
|``cancelLabel``	       |``String`` 		           |Sets the text on the cancel label 				  |``String``|``{Cancel}`` |
|``acceptLabel``	       |``String``		           |Stes the text on the acept label 				 		|``String``|``{Ok}``     |
|``cancelLabelColor``    |``Any CSS color``		     |Changes the color of the cancel buttom 	 		|``String``|``{#FBE4E4}``|
|``cancelLabelColorText``| ``Any CSS color``	     |Changes the color of the cancel buttom text |``String``|``{#B52626}``|
|``acceptLabelColor:``   | ``Any CSS color``	     |Changes the color of the acept buttom 	 	  |``String``|``{#EAF4EB}``|
|``acceptLabelColorText``| ``Any CSS color``	     |Changes the color of the acept buttom text  |``String``|``{#43A047}``|

## Public API
| Method  		| Params  |  Description  												                         |
| ----------- |:-------:| :--------------------------------------------------------------|
| onOk 				| () 	    | Emits a signal the moment that the ok buttom was pressed	     |
| onCncel 		| ()      | Emits a signal the moment that the cancel buttom was pressed   |
| showModal 	| () 			| Displays de modal							            					           |
| hideModal 	| () 			| Hides de modal							   					      								 |



