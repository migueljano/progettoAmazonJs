const submitBtn = document.getElementById("submitBtn");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU4NzIzNTA3ZGI3MzAwMTU0MDYzYmEiLCJpYXQiOjE3MzM4NDk2NTQsImV4cCI6MTczNTA1OTI1NH0.xtpRGA5_H-u6zVjn-Q9evf6HaXvhMC99N2eu_dBZVfk"

submitBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageURL = document.getElementById("imageURL").value;
    const price = document.getElementById("price").value;
    const phone = {
        name: name,
        description: description,
        brand: brand,
        imageUrl: imageURL,
        price: price
    };

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify(phone)
    })
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("Errore nella richiesta");
            }
        })
        .then((data) => {
            console.log("Telefono aggiunto:", data);
            sessionStorage.setItem("newPhone", JSON.stringify(data));
            window.location.href = "detagli.html";
        })
        .catch((error) => {
            console.error("Errore:", error);
        });
        
});

