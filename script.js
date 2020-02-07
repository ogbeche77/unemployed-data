 // data retrieved on 07.02.2020 from https://datahub.io/core/employment-us#resource-aat1
// working with chart.js & API locally (file saved on localhost)

async function getData() { 
    const response = await fetch("unemploy.txt");
    const data = await response.text();  
    console.log(data);
   
   //parse the csv; meaning breaking up the data and arranging it objects etc
    //we use the split function here to put the element in an array
   
    //we can split the table with line break since each row is demacated by a "\n"
    //table could also be demacated with \, \. etc

    const table = data.split("\n");
    //row refers to the rows in the table and 
    //first 3 rows are splited in column
    table.forEach(row =>{
        const columns =row.split(",");
       const year =columns[0];
       /*  xlabels.push(year); */ //chart ref can be added here
       const unEmploy =columns[9];
         /* avgMonths.push(tempA); */  //chart ref can be added here
        
        console.log(year,unEmploy);
    });
}
getData();



/*

// Presenting the result of the ocean mean temperature in a chart

// To present as chart we create a new variable and set to blank array
const xlabels =[];  //important its made a global variable
const avgMonths = [];  //important its made a global variable
              //important its made a global variable

chartIt();  //calling function (position matter)

async function chartIt(){
    await getData();  //after chartIt is called, it waits for getData() before executing
const ctx = document.getElementById('chart').getContext('2d');




const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabels,  //const newLabel is referenced here
        datasets: [{
            label: 'Ocean Avg temperature (Global in C°)',
            data: avgMonths,
            backgroundColor: 'rgba(235, 186, 52 0.2)',
            borderColor: 'rgba(235, 186, 52)',
            borderWidth: 1,
            fill: false,
           }],    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    // This call backfunction can be used to edit the y-axis
                    callback: function(value, index, values) {
                        return value + "°C" ;
                    }
                }


            }]
     }
     
    }
    });
}
 */