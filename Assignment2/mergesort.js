function merge(left, right)
{
    const A = [];
    let i = 0, j = 0, k = 0;
    while(i < left.length && j < right.length){
        if(left[i] <= right[i])
            A[k++] = left[i++];
        else    
            A[k++] = right[j++]; 
    }

    while(i < left.length)
        A[k++] = left[i++];

    while(j < right.length) 
        A[k++] = right[j++];

    return A;
}

function mergeSort(A)
{
    if(A.length < 2)
        return A;
    
    const mid = Math.floor(A.length / 2);
   
    const left = mergeSort(A.slice(0, mid));
    const right = mergeSort(A.slice(mid, A.length));
    return merge(left, right);
    
}

console.log(mergeSort([5,4,3]));