 export const API_KEY = 'AIzaSyCQq11FhYFAou3vhW08yjGZSY3rci6h7Pg';


 export const value_converter = ( value ) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"k";
    }
    else{
        return value;
    }
}