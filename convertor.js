var str=document.querySelector("#str");

var convert_btn=document.getElementById("convert_btn");


var toCamelCase= function (str)
 {
    // Lower cases the string
     return str.value.toLowerCase()
      // Replaces any - or _ characters with a space 
      .replace( /[-_]+/g, ' ')
      // Removes any non alphanumeric characters 
      .replace( /[^\w\s]/g, '')
      // Uppercases the first character in each group immediately following a space 
      // (delimited by spaces) 
      .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
      // Removes spaces 
      .replace( / /g, '' );
    
  }
 
var toPascalCase= function (str)
 {
    // Lower cases the string
    return str.value.toLowerCase()
      // Removes any non alphanumeric characters 
      .replace( /[^\w\s]/g, '')
      // Uppercases the first character in each group immediately following a space 
      // (delimited by spaces) 
      .replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();})
      // Removes spaces 
      .replace( / /g, '' );
  }
  

var toSnakeCase=function  (str){
  // Lower cases the string
  return str.value.toLowerCase()
  // Replace white space with _
  .replace(/ /g, '_');

}


var toScreamingKebabCase=function(str){
  return str.value.toUpperCase()
  // Removes any non alphanumeric characters 
  .replace( /[^\w\s]/g, '')
  // Removes digits
  .replace( /\d/g, '')
  // Replace white space with -
  .replace(/ /g, '-');
}

var toKebabCase=function  (str){
    // Lower cases the string
    return str.value.toLowerCase()
    // Removes any non alphanumeric characters 
    .replace( /[^\w\s]/g, '')
    // Replace white space with -
    .replace(/ /g, '-');
  
  }

var toScreamingSnakeCase=function(str){
  return str.value.toUpperCase()
  // Removes any non alphanumeric characters 
  .replace( /[^\w\s]/g, '')
   // Removes digits
  .replace( /\d/g, '')
  // Replace white space with _
  .replace(/ /g, '_');
}


convert_btn.addEventListener("click",()=>{
    // console.log(str.value);
    var camelCase=toCamelCase(str);
    var camelcase=document.getElementById("camelcase");
    camelcase.innerHTML=camelCase;
    var  pascalCase=toPascalCase(str);
    var pascalcase=document.getElementById("pascalcase");
    pascalcase.innerHTML=pascalCase;
    var  snakeCase=toSnakeCase(str);
    var snakecase=document.getElementById("snakecase");
    snakecase.innerHTML=snakeCase;
    var  kebabCase=toKebabCase(str);
    var Kebabcase=document.getElementById("Kebabcase");
    Kebabcase.innerHTML=kebabCase;
    var  scrkebabCase=toScreamingKebabCase(str);
    var scrkebabcase=document.getElementById("scrkebabcase");
    scrkebabcase.innerHTML=scrkebabCase;
    var  scrsnakeCase=toScreamingSnakeCase(str);
    var scrsnakecase=document.getElementById("scrsnakecase");
    scrsnakecase.innerHTML=scrsnakeCase;
    str.value=""

  })
  