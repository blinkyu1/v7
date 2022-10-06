
let TipoPersona=["CUENTA CLASICA","CUENTA SOL FUTURO","CUENTA MAYOR","AHORRO ONLINE"];
let asalariados=["CREDITO VIVIENDA SOCIAL","CREDITO VIVIENDA","CREDITO DE CONSUMO","CREDITO VEHICULO PARTICULAR"];
let noasalariados=["CREDITO VIVIENDA SOCIAL","CREDITO VIVIENDA","CREDITO DE CONSUMO","CREDITO VEHICULO PARTICULAR","CREDITO PARA NEGOCIO","CREDITO PRODUCCION Y AGROPECUARIO"];

let c1=["PERSONAL NATURAL"];
let c2 =["SOLECITO","SOL GENERACION"];
let c3=["PERSONAL NATURAL"];
let c4=["PERSONAL NATURAL"];
let total =[c1,c2,c3,c4];
var select = "";
select = document.getElementById("Categoria");
var conts=0;
for (i = 0; i < TipoPersona.length; i++) {
  option = document.createElement("option");
  option.value = "TP"+i;
  option.text = TipoPersona[i];
  select.appendChild(option);
}
var combo5 = document.getElementById("Categoria");
var Categoria=combo5.options[combo5.selectedIndex].text;
for (i = 0; i < TipoPersona.length; i++) {
  if(Categoria==TipoPersona[i]){
    var selectrf = "";
    selectrf = document.getElementById("SubCategoria");
    for (let i = selectrf.options.length; i >= 0; i--) {
      selectrf.remove(i);
    }
    for (let index = 0; index < total[i].length; index++) {
      option = document.createElement("option");
        option.value = i+""+index;
        option.text =  total[i][index];
        selectrf.appendChild(option);
    }
  }
}  
$("#monto").on({
  "focus": function (event) {
      $(event.target).select();
  },
  "keyup": function (event) {
      $(event.target).val(function (index, value ) {
          return value.replace(/\D/g, "")
                      .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
      });
  }
});
  

function cargar(){
  var combo5 = document.getElementById("Categoria");
  var Categoria=combo5.options[combo5.selectedIndex].text;
 //console.log(Categoria);
  for (i = 0; i < TipoPersona.length; i++) {
    if(Categoria==TipoPersona[i]){
      var selectrf = "";
      selectrf = document.getElementById("SubCategoria");
      for (let i = selectrf.options.length; i >= 0; i--) {
        selectrf.remove(i);
      }
      for (let index = 0; index < total[i].length; index++) {
        option = document.createElement("option");
          option.value = i+""+index;
          option.text =  total[i][index];
          selectrf.appendChild(option);
      }
    }
  }  
}
var resultc="";
function ganadob(monto){
  if(monto>15000000){
    resultc=(monto*(2/100))/12; 
  } else{
    if(monto>=10000001 && monto<15000001){
      resultc=(monto*(1.5/100))/12; 
    } 
    else{
      if(monto>=5000001  && monto<10000001){
        resultc=(monto*(1/100))/12; 
      }else{
        if(monto>=1 && monto<5000001); 
          resultc=(monto*(0.5/100))/12; 
      } 
    }
  }
}


$(document).on("click", ".simulaUm", function () {
  
 
  jQuery(".resultados").show();
  jQuery("html, body");
  let cont=0;
  var combo1 = document.getElementById("Categoria");
  var Categoria=combo1.options[combo1.selectedIndex].text;
  var combo2 = document.getElementById("SubCategoria");
  var SubCategoria=combo2.options[combo2.selectedIndex].text;
  var combo3 = document.getElementById("TipoMoneda");
  var garantia=combo3.options[combo3.selectedIndex].text;
  var  mont=document.getElementById("monto").value;
 








  mont=mont.replace(/[^\d\.\-]/g, ""); 
  let monto= parseFloat(mont);
// console.log(monto+" "+document.getElementById("monto").value);

  
  let interes=0;
  let resultado1=0;
  let resultado2=0;
  let resultado3=0;
  let iva=0;

  
  switch(Categoria)
  
        { 
          
                
          case "CUENTA CLASICA":
            console.log(Categoria);
                switch(SubCategoria)
                {
                  case "PERSONAL NATURAL":
                    switch(garantia){
                      case "BOLIVIANOS":
                        {
                                if (monto < 70000){
                                  resultado1 = (parseFloat((mont*(2/100))/12));                             
                                  iva=(parseFloat(resultado1-(resultado1*(13/100))));                              
                                  interes = 2
                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                              } else {
                                  if (monto >= 70000 ){
                                      resultado1 = (parseFloat((mont*0.01)/12));
                               
                                      iva=(parseFloat(resultado1-(resultado1*(13/100))));
                                
                                      interes = 0.01
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                                    } else {
                                      resultado1 = 0
                                      resultado2 =  0
                                      interes = 0
                                      }
                              }
                          break;
                      }
                      case "DOLARES":
                        {
                                if (monto < 70000){
                                  resultado1 = (parseFloat((mont*0.01)/12));
                                  iva=(parseFloat(resultado1-(resultado1*0.13)));
                                 
                                  interes = 0.01
                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                              } else {
                                  if (monto >= 70000 ){
                                      resultado1 = (parseFloat((mont*0.01)/12));
                                      
                                      iva=(parseFloat(resultado1-(resultado1*(13/100))));
                                     
                                      interes = 0.01
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                                    } else {
                                      resultado1 = 0
                                      resultado2 =  0
                                      interes = 0
                                      }
                              }
                          break;
                      }

                    }
                        
               }
            break;
          case "CUENTA SOL FUTURO":
            console.log(Categoria);
                switch(SubCategoria)
                {
                  case "SOLECITO":
                    console.log(SubCategoria);
                    {
                      switch(garantia){
                        
                        case "BOLIVIANOS":
                          console.log(garantia);
                          {
                                  if (monto < 70000){
                                    resultado1 = (parseFloat((mont*(3.5/100))/12));                             
                                    iva=(parseFloat(resultado1-(resultado1*(13/100))));
                                 
                                    interes = 2
                                    resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                } else {
                                    if (monto >= 70000 ){
                                        resultado1 = (parseFloat((mont*(3.5/100))/12));
                                 
                                        iva=(parseFloat(resultado1-(resultado1*(13/100))));
                             
                                        interes = 0.01
                                        resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                                      } else {
                                        resultado1 = 0
                                        resultado2 =  0
                                        interes = 0
                                        }
                                }
                            break;
                        }
                        case "DOLARES":
                          {
                            resultado1 = 0
                            resultado2 =  0
                            interes = 0
                            iva=0
                            break;
                        }
  
                      }
                       
                        }
                        
                    break;
                  case "SOL GENERACION":
                      {
                        switch(garantia){
                          case "BOLIVIANOS":
                               {
                                  if (monto < 70000){
                                    resultado1 = (parseFloat((mont*(3.5/100))/12));                             
                                    iva=(parseFloat(resultado1-(resultado1*(13/100))));
                                 
                                    interes = 2
                                    resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                } else {
                                    if (monto >= 70000 ){
                                        resultado1 = (parseFloat((mont*(3.5/100))/12));
                                 
                                        iva=(parseFloat(resultado1-(resultado1*(13/100))));
                             
                                        interes = 0.01
                                        resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                                      } else {
                                        resultado1 = 0
                                        resultado2 =  0
                                        interes = 0
                                        }
                                }
                              break;
                          }
                          case "DOLARES":
                            {
                              resultado1 = 0
                              resultado2 =  0
                              interes = 0
                              iva=0
                              break;
                          }
    
                        }
                         
                          }
                          
                      break;
                   
                    }
            break;
          case "CUENTA MAYOR":
            switch(SubCategoria)
            {
              case "PERSONAL NATURAL":
                switch(garantia){
                  case "BOLIVIANOS":
                    {
                           if(mont>300000){
                            resultado1 = (parseFloat((mont*(4/100))/12));
                            iva=(parseFloat(resultado1-(resultado1*0.13)));
                           
                            interes = 4
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                           }else{
                            if(mont>=70001&&mont<300001){
                              resultado1 = (parseFloat((mont*(3.5/100))/12));
                              iva=(parseFloat(resultado1-(resultado1*0.13)));
                             
                              interes = 3.5
                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                             }
                             else{
                              if(mont>=5000&&mont<70001){
                                resultado1 = (parseFloat((mont*(2/100))/12));
                                iva=(parseFloat(resultado1-(resultado1*0.13)));
                               
                                interes = 2
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                               }
                               else{
                                resultado1 = 0;
                                iva=0;
                               
                                interes = 0
                                resultado3 = 'no habilitado para el monto :'+mont
                               }
                             }
                           }
                      break;
                  }
                  case "DOLARES":
                    {
                            
                              resultado1 = (parseFloat((mont*(0.1/100))/12));
                              iva=(parseFloat(resultado1-(resultado1*0.13)));
                             
                              interes = 0.1
                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                          
                      break;
                  }

                }      
            }
        break;
          case "AHORRO ONLINE":
            switch(SubCategoria)
                {
                  case "PERSONAL NATURAL":
                    switch(garantia){
                      case "BOLIVIANOS":
                        {
                                
                                  resultado1 = (parseFloat((mont*(3/100))/12));                             
                                  iva=(parseFloat(resultado1-(resultado1*(13/100))));                              
                                  interes = 3
                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                             
                          break;
                      }
                      case "DOLARES":
                        {
                              
                                       iva=0;
                               
                                      resultado1 = 0
                                      resultado2 =  0
                                      interes = 0
                                      resultado3 = 'no se encuentra habilidato en dolares'
                                  
                          break;
                      }

                    }  
                    break;
                }
            break;
            
        
          
		}

  
  
var mm="";
if(garantia=="BOLIVIANOS"){
  mm="Bs"
}
else{
  mm="$"
}


let montt=(parseFloat(mont)+parseFloat(iva)).toFixed(2);
console.log(montt);
 if(cont==0){
 document.getElementById("subm").click();
  var tabla = document.getElementById("table_body");
  tabla.innerHTML = "";
  $("#table_body").empty();
  
    tabla.innerHTML +=
    "<div class=" +
    '"' +
    "right-form" +
    '"' +
    " >" +
    "<div class=" +
    '"' +
    "form resultados" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    " mb-10 relative rounded shadow-header w-full" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    " border-b-1 flex flex-row justify-between w-full" +
    '"' +
    " >" +
    "<div class=" +
    '"' +
    "input-text" +
    '"' +
    "></div>" +
    "<div class=" +
    '"' +
    "border-r-1 flex items-center justify-center w-1/2 COLORA generic-title" +
    '"' +
    "><img src=" +
    "./assets/BSOLlogo_220513.png " +
    'width="' +
    120 +
    '" ></div>' +
    "<div class=" +
    '"' +
    "flex items-center justify-center w-1/2 COLORB" +
    '"' +
    "> <span class=" +
    '"' +
    "font-light text-base text-center" +
    '"' +
    ">Tasa de Interés <span class=" +
    '"' +
    "apTas" +
    '"' +
    ">" +
    interes +
    "</span>%</span>" +
    "</div>" +
    "</div>" +
    "<hr />" +
    "<div class=" +
    '"' +
    "p2" +
    '"' +
    ">Interés Calculado para el Monto "+mm+" <span class=" +
    '"' +
    "apTGan" +
    '"' +
    ">" +
    document.getElementById("monto").value +
    "</span>.</div>" +
    "<div class=" +
    '"' +
    "flex flex-row w-full justify-between pt-5" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Sin RC-IVA "+garantia+":</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    ">"+mm+" <span class=" +
    '"' +
    "text-2xl text-custom-blue apTGan" +
    '"' +
    ">" +
    (resultado1).toFixed(2)+
    "</span></span>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Tipo Moneda</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    "> <span class=" +
    '"' +
    "text-2xl text-custom-blue apPlaz" +
    '"' +
    ">" +
    garantia +
    "</span>.</span>" +
    "<div class=" +
    '"' +
    "flex flex-col" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-700 text-size-description" +
    '"' +
    "></span> </div>" +
    "</div>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-row w-full justify-between pt-5" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Total Ganado con RC-IVA:</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    ">"+mm+" <span class=" +
    '"' +
    "text-2xl text-custom-blue apMont" +
    '"' +
    ">" +
    (iva).toFixed(2) +
    "</span></span>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Monto total</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    ">"+mm+" <span class=" +
    '"' +
    "text-2xl text-custom-blue apTot" +
    '"' +
    ">" +
    montt +
    "</span></span>" +
    "<div class=" +
    '"' +
    "flex flex-col" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-700 text-size-description" +
    '"' +
    "></span> </div>" +
    "</div>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-row w-full justify-between pt-5" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">CONDICIONES</span>" +
    "<p1>1. Tasa de interes <span class=" +
    '"' +
    "apTas" +
    '"' +
    ">" +
    interes +
    "</span> % anual.</p1>" +
    "<p1>2. Tipo Moneda <span class=" +
    '"' +
    "apPlaz" +
    '"' +
    ">" +
    garantia +
    "</span>.</p1>" +
    "<p1>3. Excento de IVA</p1>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">REQUISITOS</span>" +
    "<p1>1. Solo para personas naturales.</p1>" +
    "<p1>2. Contar con Carnet de Identidad.</p1>" +
    "<p1>3. Realizar el deposito en <span class=" +
    '"' +
    "apTipoM" +
    '"' +
    ">" +
    "Bolivianos." +
    "</span></p1>" +
    "<div class=" +
    '"' +
    "flex flex-col" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-700 text-size-description" +
    '"' +
    "></span> </div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</br>";
  
  
    var button = document.getElementById("tab-2");

    button.click();
 

    
 }
  else{
    alert("Banco Sol Informa: Porfavor realizar las selecciones correctas para el simulador.")
   
  }
  
});
