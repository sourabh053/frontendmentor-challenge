fetch('data.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("rxn").innerText = data[0].category;
      document.getElementById("score1").innerText = data[0].score+ "     ";
      document.getElementById("image1").src = data[0].icon;

      document.getElementById("memo").innerText = data[1].category;
      document.getElementById("score2").innerText = data[1].score+ "     ";
      document.getElementById("image2").src = data[1].icon;

      document.getElementById("verb").innerText = data[2].category;
      document.getElementById("score3").innerText = data[2].score+ "     ";
      document.getElementById("image3").src = data[2].icon;

      document.getElementById("visu").innerText = data[3].category;
      document.getElementById("score4").innerText = data[3].score+ "     ";
      document.getElementById("image4").src = data[3].icon;
    })
