const a=[1,3,2,3,5,4,5,9];
const b=[2,9,4,5,8];

const c=[];

const fun=()=>{
  
  let i,j,k,t,l;
  
  for(i=0;i<a.length;i++){
    t=false
    for(k=0;k<c.length;k++){
      if(a[i]==c[k]){
        t=true
        break;
      }
    }
    if(!t){
      c.push(a[i])
    }
  }
  //2nd Array
    for(j=0;j<b.length;j++){
    l=false
    for(k=0;k<c.length;k++){
      if(b[j]==c[k]){
        l=true
        break;
      }
    }
    if(!l){
      c.push(b[j])
    }
  }
  ///
  return c
  //-------------
  for(i=0;i<a.length;i++){
    l=false
    for(j=0;j<b.length;j++){
      if(a[i]==b[j]){
        l=true
        break;
      }
    }
    if(l){
      t=true
        for(k=0;k<c.length;k++){
      if(c[k]==a[i]){
        t=false
        break;
      }
     
    }
     if(t){
        c.push(a[i])
      }
    }
  
  }
  return c
}

console.log(fun())