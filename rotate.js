//Cyclically rotate an array by one
// Input:
// N = 5
//const a = [1, 2, 3, 4, 5]
const a=[9, 8, 7, 6, 4, 2, 1, 3]

// Output:
// 5 1 2 3 4


const rotateArray = () => {
    let lastterm=a[a.length-1];
    for (let i = a.length - 1; i >= 0; i--){
        a[i] = a[i - 1];
    }
    a[0] = lastterm;

    console.log(a);
}

rotateArray();