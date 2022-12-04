const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);

    const temperatureselected = document.getElementById('temp_difference');
    const valueTemp = temperatureselected.options[temperatureselected.selectedIndex].value; 
   

    console.log(valueTemp);

    const celsiustofah = (numberTemp) =>{
        let fahrenheit = Math.round( numberTemp * 9/5 ) + 32;
        return fahrenheit;
    }

    const fahtocelsius = (numberTemp) =>{ 
        let celsius = Math.round( numberTemp - 32) *  5/9;
        return celsius;
    }
   

    

    let result;
    if(valueTemp == 'cel'){
        result = celsiustofah(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `= ${result} °Fahernheight`;
    }else{
        result = fahtocelsius(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `= ${result} °Celsius`;
    }

}