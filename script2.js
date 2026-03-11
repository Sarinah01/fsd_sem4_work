
    // setTimeout(() => {
    //       console.log("I'm Sarinahhh!")
    // }, 5000);
   
    // function ut(){
    //     const times =  new Date().toLocaleTimeString()
    //     console.log(times)
    // }

    // ut()
    // setInterval(ut, 1000)

    function main(cb){
        console.log("operation 1")

        setTimeout(()=>{
            cb('operation end')

        },2000)

        console.log("Operation 2")
    }

    function func(result){
        console.log('Final answer',result)
    }

    main(func)