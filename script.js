//programs using anonymous function
//print odd numbers in a array


function odd(arr){
    var temp= [];
    for(var i=0; i< arr.length; i++)
        {
            if(arr[i]%2 != 0){
    temp.push(arr[i]);            
    
                }
                
        }
        return temp;
    }
        console.log(odd([2,5,1,8,9]));

        //2.convert all the strings to title caps in a string array
        function titleCaps(str){
            str=str.split(" ");
            
            for(i=0; i<str.length;i++)
            {
                str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
            
            }
            str= str.join(" ");
              return str;
            }
            console.log(titleCaps("this is sujitha"));