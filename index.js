const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","pug");

const conversions = {
    length: {
        meterToKilometer: (value) => value / 1000,
        kilometerToMeter: (value) => value * 1000,
        inchToCentimeter: (value) => value * 2.54,
        centimeterToInch: (value) => value / 2.54,
    },
    weight: {
        kilogramToGram: (value) => value * 1000,
        gramToKilogram: (value) => value / 1000,
        poundToKilogram: (value) => value * 0.453592,
        kilogramToPound: (value) => value / 0.453592,
    },
    temperature: {
        celsiusToFahrenheit: (value) => (value * 9) / 5 + 32,
        fahrenheitToCelsius: (value) => ((value - 32) * 5) / 9,
        celsiusToKelvin: (value) => value + 273.15,
        kelvinToCelsius: (value) => value - 273.15,
    },
};

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/convert",(req,res)=>{
    const {value,fromUnit,toUnit,category} = req.body;
    const conversionKey = `${fromUnit}To${toUnit}`;

    if(conversions[category]&&conversions[category][conversionKey]){
        const convertedValue = conversions[category][conversionKey](parseFloat(value));
        res.render("result",{value,fromUnit,toUnit,convertedValue});
    }else{
        res.render("result",{error:"Invalid conversion."});
    }
});

app.listen(PORT,()=>{
    console.log(`Unit Converted app runing at http://localhost:${PORT}`);
});