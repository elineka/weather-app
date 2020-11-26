let mySearch = document.getElementById("search");
let myButton = document.getElementById("searchbtn");
let myParagraph = document.getElementById("print");

myButton.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${mySearch.value}&lat=LATITUDE&lon=LONGITUDE&units=metric&APPID=ed51ad9f97704b89c72b2486d127a813`
  )
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("datat", JSON.stringify(data));
      console.log(data);
      if (!data) {
        console.log(error);
      } else {
        document.getElementById("name").textContent = data.name;
        document.getElementById("country").textContent = data.sys.country;

        document.getElementById("temp").textContent =
          "Temperature:" + " " + data.main.temp + "\u00B0C.";

        let date = new Date(data.dt * 1000);
        let options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        let newDate = date.toLocaleString("en-US", options);

        document.getElementById("time").textContent = newDate;
        document.getElementById("lati").textContent =
          "Latitude:" + " " + data.coord.lat + "\u00B0";
        document.getElementById("long").textContent =
          "Longitude:" + " " + data.coord.lon + "\u00B0";
      }
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("name").textContent = "City/Country not exist";
      document.getElementById("country").textContent = "empty";

      document.getElementById("temp").textContent = "empty";

      //let date =new Date(data.dt*1000);
      //let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      //let newDate = date.toLocaleString('en-US', options);

      document.getElementById("time").textContent = "empty";
      document.getElementById("lati").textContent = "empty";
      document.getElementById("long").textContent = "empty";
    });
});

window.onload = function () {
  let data = JSON.parse(localStorage.getItem("datat"));
  if (data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("country").textContent = data.sys.country;

    document.getElementById("temp").textContent =
      "Temperature:" + " " + JSON.parse(data.main.temp) + "\u00B0C.";

    let date = new Date(data.dt * 1000);
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    let newDate = date.toLocaleString("en-US", options);

    document.getElementById("time").textContent = newDate;
    document.getElementById("lati").textContent =
      "Latitude:" + " " + data.coord.lat + "\u00B0";
    document.getElementById("long").textContent =
      "Longitude:" + " " + data.coord.lon + "\u00B0";
  }
};
