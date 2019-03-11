// let elements = document.getElementsByName('cssProperty');

// let div = document.getElementById('modify');

// function set()
// {
    
//     for( let index = 0; index < elements.length; index++ )
//     {
//         let cssProperty = elements[ index ].getAttribute('id');
        
//         let cssValue = elements[ index ].value;
        
//         div.style[ cssProperty ] = cssValue;
//     }
// }

// document.getElementById('set').addEventListener('click',set);

    

let elements = document.getElementsByName('cssProperty');
    console.log(elements) //getting all the items 
    console.log( elements[ item ] ); // getting entire element

let div = document.getElementById('modify')

function set()
{
    

    for( let item = 0; item < elements.length; item ++) {
            
                

                console.log( elements[ item ].value); // geting value of each element within 

                console.log( elements[ item ].getAttribute('id')); // getting the id of every element 

            let cssProperty = elements[ item ].getAttribute('id');
                console.log(cssProperty)

            let cssValue = elements[ item ].value;
                div.style[ cssProperty ] = cssValue;

    }
    
}

document.getElementById('set').addEventListener('click', set)  