

var array=[];  
var n; 


function generateTableInput () {
    var html = "<table class='fija' border=1>";
    html = html+"<tr>";
    for (var i = 0; i < n; i++) {
        html = html+"<td>";        
        html = html+"<input type='text' class='tableInput' id='input"+i+"' />";
        html = html+"</td>";
    }
    html = html+"</tr>";
    html = html+"</table>";
    return html; 
}


function saveArrayData () {
    //use of array method to add element
    for (var i = 0; i < n; i++) {
        temp=$("#input"+i).val();
        array.push( parseInt(temp) );
    }
}


function generateTable (array) {
    var html = "<table class='fija' border=1>";
    html = html+"<tr>";
    for (var i = 0; i < n; i++) {
        html = html+"<td>";        
        html = html+array[i];
        html = html+"</td>";
    }
    html = html+"</tr>";
    html = html+"</table>";
    return html; 
}

//----------------sort methods

function bubbleSort (a) {
    var i,j,temp;
    i=0;
    while(i < n -1){
        j = i+1;
        while(j < n){
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
            j++;
        }
        i++;
    }
    return generateTable(a);
}

function insertSort (a) {
    var i,j,temp;
    i=2;
    while(i < n){
        j = i - 1;
        temp = a[i];
        while(temp < a[j]){
            a[j+1] = a[j];
            j -= 1;
        }
        a[j+1] = temp;
        i++;
    }
    return generateTable(a); 
}

function selectSort(a){
    for(var i=0 ; i<n ; i++){
        var menor = i;
        for(var j=i+1 ; j<n ; j++){
            if (a[menor] > a[j]) menor = j;
        }
        var temp = a[menor];
        a[menor] = a[i];
        a[i] = temp;
    }

    return generateTable(a);    
}


function quickSort (a,i,j) {
    //seleccion
    var x,tempi,tempj,temp;
    tempi = i;
    tempj = j;
    x = a[ (i+j) /  2];

    do{
        while(x > a[i]) i = i + 1;
        while(x < a[j]) j = j -1;
        if (i < j) {
            
        }
    }while(i < j);

    if (i == j) {
        if (x < a[i]) {

        }
        else{

        }
    }
    if (j-1 == tempi) {
        if (a[tempi] > a[j]) {

        }
    }
    else if (true) {

    }


    return generateTable(tempArray);
}

function shellSort () {
    var tempArray=JSON.parse(JSON.stringify(array));
    return generateTable(tempArray);
}

function mergeSort () {
    var tempArray=JSON.parse(JSON.stringify(array));
    return generateTable(tempArray);
}

function heapSort () {
    var tempArray=JSON.parse(JSON.stringify(array));
    return generateTable(tempArray);
}

function radixSort () {
    var tempArray=JSON.parse(JSON.stringify(array));
    return generateTable(tempArray);    
}


//main function
$(function () {

    $("#btnN").on("click",function(){
        n=$("#txtN").val();

        htmlTable=generateTableInput();
        $("#tablaArreglo").html(htmlTable);        
    });

	$("#btnResultado").on("click",function(){
        saveArrayData();

        var tempArray=JSON.parse(JSON.stringify(array));

        $("#bubblesort").append(bubbleSort(tempArray));
        $("#insertsort").append(insertSort(tempArray));
        $("#selectsort").append(selectSort(tempArray));

/*      
        $("#quicksort").append(quickSort(tempArray));
        $("#shellsort").append(shellSort);
        $("#mergesort").append(mergeSort);
        $("#heapsort").append(heapSort);
        $("#radixsort").append(radixSort);
*/
        console.log(array);
	});

});


