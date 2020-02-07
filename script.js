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
        xyears.push(year);  //chart ref can be added here
       const unEmploy =columns[9];
         empPercent.push(unEmploy);   //chart ref can be added here
        
        console.log(year,unEmploy);
    });
}




// Presenting the result of the ocean mean temperature in a chart

// To present as chart we create a new variable and set to blank array
const xyears =[];  //important its made a global variable
const empPercent = [];  //important its made a global variable
              //important its made a global variable

 empChart();  //calling function (position matter)

async function empChart(){
    await getData();  //after empChart is called, it waits for getData() before executing
const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: xyears,  //const newLabel is referenced here
        datasets: [{
            label: 'Unemployment (In %)',
            data: empPercent,
            backgroundColor: 'rgba(235, 186, 52 0.2)',
            borderColor: 'rgb(45, 233, 247)',
            borderWidth: 2,
            fill: false,
           }],    },
           options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // This call backfunction can be used to edit the y-axis
                        callback: function(value, index, values) {
                            return value + "%" ;
                        }
                    }
    
    
                }]
         }
         
        }

    });
}
 