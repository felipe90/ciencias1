

var matriz1=[]; //matriz 1
var matriz2=[]; //matriz 2
var matrizResult=[]; //matriz Resultado
var n1,n2,m1,m2; 

//crea el codigo del la tabla

function generarTabla (n,m,id) {
    var html = "<table class='fija' border=1>";

    for (var i = 0; i < m; i++) {
        html = html+"<tr>";
        for (var j = 0; j < n; j++) {
            html = html+"<td>";        
            html = html+"<input type='text' id='M"+id+"input"+i+"_"+j+"' placeholder=("+i+","+j+") />";
            html = html+"</td>";
        }
        html = html+"</tr>";
    }  

    html = html+"</table>";
    return html; 
}


function guardarDatosMatrizes () {
    //crea y asigna la matriz para m1
    for (var i = 0; i < m1; i++) {
        matriz1[i]=[];
        for (var j = 0; j < n1; j++) {
            matriz1[i][j]=0;
        }
    }

    for (var i = 0; i < m1; i++) {
        for (var j = 0; j < n1; j++) {
            matriz1[i][j]=$("#M1input"+i+"_"+j).val();
        }
    }

    //crea y asigna la matriz para m2
    for (var i = 0; i < m2; i++) {
        matriz2[i]=[];
    }
    for (var i = 0; i < m2; i++) {
        for (var j = 0; j < n2; j++) {
            matriz2[i][j]=$("#M2input"+i+"_"+j).val();
        }
    }

}

function multiplicarMatricez () {

    // init matriz resutlado M1 X N2

    for (var i = 0; i < m1; i++) {
        matrizResult[i]=[];
         for (var j = 0; j < n2; j++) {
            matrizResult[i][j]=0;
        }       
    }

    for (var i = 0; i < m1; i++) { 
        for (var j = 0; j < n2; j++) {
            for (var k = 0; k < n1; k++) {
                temp=matriz1[i][k]*matriz2[k][j];
                matrizResult[i][j] = matrizResult[i][j]+temp;
            }
        }
    }
}

function generarTablaResultado () {
    var html = "<h2>Resultado</h2>";
    html += "<table class='fija' border=1>";

    for (var i = 0; i < m1; i++) {
        html = html+"<tr>";
        for (var j = 0; j < n2; j++) {
            html = html+"<td>";        
            html = html+ matrizResult[i][j];
            html = html+"</td>";
        }
        html = html+"</tr>";
    }  

    html = html+"</table>";
    return html; 
 
}


//funcion pricipal, se ejecuta luego de cargar la pagina
$(function () {

    //funcion para crear tabla GUI M1
    $("#btnM1").on("click",function(){
        n1=$("#M1_N").val();
        m1=$("#M1_M").val();

        htmlTable=generarTabla(n1,m1,1);
        $("#tablaMatriz1").html(htmlTable);        
    });

    //funcion para crear tabla GUI M2
    $("#btnM2").on("click",function(){
        n2=$("#M2_N").val();
        m2=$("#M2_M").val();
    
        htmlTable=generarTabla(n2,m2,2);
        $("#tablaMatriz2").html(htmlTable);
    });

	//funcion para agregar nodos
	$("#btnResultado").on("click",function(){
        guardarDatosMatrizes();
        
        if(n1==m2){
            multiplicarMatricez();    
            htmlTable=generarTablaResultado();
        }else{
            htmlTable="Matrices no validas"
        }
        

        
        $("#resultado").html(htmlTable);
	});

});


