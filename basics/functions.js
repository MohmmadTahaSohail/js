function addtwonumbers(n1,n2) {
    if (typeof(n1)=="number" && typeof(n2)=="number") {
        // console.log(n1+n2);
        // console.log(typeof n1)
    }
    else{
        // console.log(typeof n1);
        // console.log("Please enter Numbers")
        addtwonumbers(2,3); 
    }
}
// addtwonumbers(null,1);




const user={
    username:"Ts",
    prics:1000000,


    welcomemssg: function(){
        console.log(this.username)
    }
}
user.welcomemssg();