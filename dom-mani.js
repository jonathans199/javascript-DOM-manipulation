let elements = document.getElementsByName('cssProperty');
    console.log(elements) //getting all the items 

let div = document.getElementById('modify')

function set()
{

    for( let item = 0; item < elements.length; item ++) {
                console.log( elements[ item ] ); // getting each ITEM within ELEMENTS

            let cssProperty = elements[ item ].getAttribute('id'); // getting the id of every ITEM
                console.log(cssProperty)

            let cssValue = elements[ item ].value; // geting VALUE of each ITEM within 
                console.log( elements[ item ].value); 

                div.style[ cssProperty ] = cssValue; // assigining the cssProperty to the cssValue of each ITEM

    }
}

document.getElementById('set').addEventListener('click', set)  //listening for the click event on the button "set"