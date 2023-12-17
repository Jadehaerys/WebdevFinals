function Mobilenumber(input) {
  
    let Mobilenumber= input.value.replace(/\D/g, '');
  
   
    Mobilenumber = sanitizedValue.slice(0, 12);

   
    input.value = Mobilenumber;
}