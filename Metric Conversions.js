//Temperature Conversion
//Conversion from Degrees Celsius to Fahrehneheit
function TempConv(degc)
{
  let  Temp = (degc*1.8) + 32;
  console.log(Temp);
}
TempConv(20);//taking 20 degrees celsius as our parameter and passing it to the function

//Conversion from  Degrees Celsius to FahrehneheitDegrees 
function TempConv(degfah)
{
  let  Temp = (degfah-32) *2;
  console.log(Temp);
}
TempConv(280);//taking 20 fahrenheit our parameter and passing it top the function
