

// class Test{
//     bubble_sort(arr){
//         arr.len
//     }
// }

function bubble_sort(arr){
    let len = arr.length;
    let flag =0
    for(let i =0 ; i <=len;i++){
        for(let j = 0;j<=len;j++){
            if(arr[j]>arr[j+1]){
                let temp;
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
            else{
                flag++
            }
        }
        console.log(len)
        console.log(flag)
        if(flag == len){
            break;
        }
        flag =0
        console.log('________')
    }
    return arr
}

// let arr = [7,3,2,4,0,5,1]
let arr = [12, 5, 8, 3, 15, 22, 7, 19, 1, 14,]
console.log(arr)
res = bubble_sort(arr)
console.log(res)
