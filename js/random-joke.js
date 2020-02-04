window.onload = getjoke
    function getjoke(){
            axios.get('https://autumnfish.cn/api/joke/list?num=1')
            .then(
                function(response) {
                    document.getElementById("joke").innerHTML=response.data.jokes[0];
                    //this.joke=response.data.jokes[0];
                    console.log(response.data.jokes[0]);
                },
                function(err){
                    console.log(err);
                }
            )
    }
    setInterval(getjoke,20000);