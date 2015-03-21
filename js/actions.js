var fn = {
    ready: function(){
         document.addEventListener('deviceready',fn.init,false);
        
    },
    init: function(){
        var x = false;
        if(!x)
            window.location.href = "#registro";
       /* $('#registro').tap(fn.registrar);
    },
    registrar: function(){
        //$('#nombre').val();
       // $('#registro input').val();
       // alert($('#registro input:eq(0)').val(););
        
         var nom=$('#registro input:eq(0)').val();
             var mail=$('#registro input:eq(1)').val();
         var tel=$('#registro input:eq(2)').val();
                  alert(nom + ' - ' + mail + ' - ' + tel);
        
    }*/
        $('#registro a:eq(1)').tap(fn.registrar);
    },
       registrar: function(){
        //$('#nombre').val();
       // $('#registro input').val();
       // alert($('#registro input:eq(0)').val(););
        
         var nom=$('#registro input:eq(0)').val();
             var mail=$('#registro input:eq(1)').val();
         var tel=$('#registro input:eq(2)').val();
           
           
           
           if(nom != '' && mail!='' && tel !='')
               
                  alert(nom + ' - ' + mail + ' - ' + tel);
           else
                  // alert('Todos los campos son requeridos');
                  navigator.notification.alert('Todos los campus son requeridos',null,'Error de Datos','Aceptar');
    }  
        
};

//window.addEventListener("load",fn.init,false);
// param1 nombre del evento
// funcionalidad del evento
// por default siempres false
// jquery $(document).ready(fn.init);

//function nombre=jQuery('#id',) simepre lleva parametros se llama selector(){}
//nombre();

//function nombre(){
// return obj;
//}

//var nobj = nombre=jQuery();
//nobj.ready();

//document.html.body.h1.innerHTML='hola';
//document.getElementbyId() = jQuery('#id');
//Seleccionar la clase jQuery('.') 
//Seleccionar el nombre de la clase jQuery('div')
//Seleccionar el nombre del elemento jQUery('div[rel=ayuda]');
//var nobj=$('div[rel=ayuda]');
//var nobj=$(document);
//nobj.ready(frameElement.init);//
//$(document).ready(fn.init);
    //nombre de la funcion : function()
//$(fn.init);
$(fn.ready);