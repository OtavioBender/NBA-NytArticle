document.getElementById("container-btn").addEventListener("click", async () => {
    const name = document.getElementById("name").value

    const responsenba = await fetch(`http://localhost:3001/api/nba/getPlayerName/${name}`)

    const dataNba = await responsenba.json()

    const playerName = dataNba.data.response.name

    const responsearticle = await fetch(`http://localhost:3002/api/nyt/${playerName}`)


    const dataarticle = await responsearticle.json()

    if(dataNba.data.response.sucess == true && dataarticle.data.response.sucess){
        document.getElementById("player-name").innerHTML = "Player name: " + dataNba.data.response.name
        document.getElementById("age").innerHTML = "Age: " + dataNba.data.response.age
        document.getElementById("country").innerHTML = "Country: " + dataNba.data.response.country
        document.getElementById("height").innerHTML = "Height: " + dataNba.data.response.height + " m"
        document.getElementById("weight").innerHTML = "Weight: " + dataNba.data.response.weight + " kg"
    
        document.getElementById("abstract").innerHTML = "Abstract: " + dataarticle.data.response.abstract
        const link = document.getElementById("web_url")
        link.href = dataarticle.data.response.web_url
        link.innerHTML = dataarticle.data.response.web_url
    }else{
        document.getElementById("sucess").innerHTML = "Nome inválido"
        document.getElementById("player-name").innerHTML = " "
        document.getElementById("age").innerHTML = " "
        document.getElementById("country").innerHTML = " "
        document.getElementById("height").innerHTML = " "
        document.getElementById("weight").innerHTML = "  " 
    
        document.getElementById("abstract").innerHTML = " "
        const link = document.getElementById("web_url")
        link.innerHTML = " "
    }
    

    console.log(dataNba)
    console.log(dataarticle)
})    