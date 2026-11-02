

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const firstName =
            document.getElementById("firstName").value;

        const lastName =
            document.getElementById("lastName").value;

        const email =
            document.getElementById("registerEmail").value;

        const password =
            document.getElementById("registerPassword").value;

        const terms =
            document.getElementById("terms").checked;


        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        ) {

            alert("Please fill in all fields.");
            return;
        }


        if (!terms) {

            alert("Please accept the terms.");
            return;
        }


        localStorage.setItem("userEmail", email);

        localStorage.setItem("userPassword", password);

        localStorage.setItem("userName", firstName);


        alert("Account created successfully!");


        window.location.href = "index.html";

    });

}



const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;


        const savedEmail =
            localStorage.getItem("userEmail");

        const savedPassword =
            localStorage.getItem("userPassword");


        if (!savedEmail || !savedPassword) {

            alert("You need to register first.");
            return;
        }


        if (
            email === savedEmail &&
            password === savedPassword
        ) {

            alert("Login successful!");

            window.location.href = "home.html";

        }

        else {

            alert("Wrong email or password.");

        }

    });

}





const showPasswordButton =
    document.getElementById("showPassword");


if (showPasswordButton) {

    showPasswordButton.addEventListener("click", function() {

        const password =
            document.getElementById("registerPassword");


        if (password.type === "password") {

            password.type = "text";

        }

        else {

            password.type = "password";

        }

    });

}





const forgotForm =
    document.getElementById("forgotForm");


if (forgotForm) {

    forgotForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("forgotEmail").value;

        const savedEmail =
            localStorage.getItem("userEmail");


        if (!savedEmail) {

            alert("No account registered yet.");
            return;
        }


        if (email === savedEmail) {

            alert("Email found! You can reset your password.");

        }

        else {

            alert("No account found with this email.");

        }

    });

}



const searchButton =
    document.getElementById("searchButton");


if (searchButton) {

    searchButton.addEventListener("click", function() {


        const destination =
            document.getElementById("destination").value;


        const date =
            document.getElementById("travelDate").value;


        const price =
            document.getElementById("price").value;



       
        if (destination === "") {

            alert("Please choose a destination.");

            return;

        }



      
        if (date === "") {

            alert("Please choose a date.");

            return;

        }



        
        if (price === "") {

            alert("Please choose a price.");

            return;

        }



     
        if (destination === "dubai") {

            window.location.href =
                "dubai.html?date=" +
                encodeURIComponent(date) +
                "&price=" +
                encodeURIComponent(price);

        }


        
        else if (destination === "somalia") {

            window.location.href =
                "somalia.html?date=" +
                encodeURIComponent(date) +
                "&price=" +
                encodeURIComponent(price);

        }


       
        else if (destination === "kurdistan") {

            window.location.href =
                "kurdistan.html?date=" +
                encodeURIComponent(date) +
                "&price=" +
                encodeURIComponent(price);

        }
        else if (destination === "maldives") {

    window.location.href =
        "maldives.html?date=" +
        encodeURIComponent(date) +
        "&price=" +
        encodeURIComponent(price);

}


        
        else {

            alert("This destination is coming soon.");

        }

    });

}




const hotelFilters =
    document.querySelectorAll(".destination-filter");

const hotelCards =
    document.querySelectorAll(".hotel-card");

hotelFilters.forEach(function(button) {

    button.addEventListener("click", function() {

        const country =
            button.getAttribute("data-country");

        hotelFilters.forEach(function(filter) {
            filter.classList.remove("active-filter");
        });

        button.classList.add("active-filter");

        hotelCards.forEach(function(card) {

            const hotelCountry =
                card.getAttribute("data-country");

            if (
                country === "all" ||
                country === hotelCountry
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});




const hotelSearchButton =
    document.getElementById("hotelSearchButton");

if (hotelSearchButton) {

    hotelSearchButton.addEventListener("click", function() {

        const destination =
            document.getElementById("hotelDestination").value;

        const checkIn =
            document.getElementById("checkin").value;

        const checkOut =
            document.getElementById("checkout").value;

        if (destination === "")
             {
            alert
            ("Please choose a destination.");
            return;
        }

        if (checkIn === "") {
            alert("Please choose a check-in date.");
            return;
        }

        if (checkOut === "") {
            alert("Please choose a check-out date.");
            return;
        }

        hotelCards.forEach(function(card) {

            const country =
                card.getAttribute("data-country");

            if (country === destination) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        document.querySelector(".popular-hotels")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}









/* SUSU HORIZON - HOTEL BOOKING */

document.addEventListener("DOMContentLoaded", function () {

    // Only run on the hotel booking page
    const roomSelect = document.getElementById("roomSelect");

    if (!roomSelect) return;

    const rooms = {
        standard: { name: "Standard Room", price: 90, image: "fotos/hotels/1.jpg" },
        deluxe: { name: "Deluxe Room", price: 150, image: "fotos/hotels/2.jpg" },
        premium: { name: "Premium Suite", price: 250, image: "fotos/hotels/3.jpg" }
    };

    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");
    const guests = document.getElementById("guests");
    const message = document.getElementById("message");

    function updateBooking() {
        const room = rooms[roomSelect.value];
        if (!room) return null;

        let nights = 0;

        if (checkin.value && checkout.value) {
            const start = Date.parse(checkin.value + "T00:00:00Z");
            const end = Date.parse(checkout.value + "T00:00:00Z");

            nights = Math.max(0, Math.round((end - start) / 86400000));
        }

       const adults = Number(document.getElementById("guests").value);

const priceWithGuests = calculateHotelPrice(room.price, adults);

const total = nights * priceWithGuests;


function calculateHotelPrice(basePrice, adults) {
    if (adults >= 2 && adults <= 4) {
        return basePrice * 1.30;
    }

    return basePrice;
}


        document.getElementById("roomName").textContent = room.name;
        document.getElementById("nightPrice").textContent = "€" + room.price;
        document.getElementById("nights").textContent = nights;
        document.getElementById("guestCount").textContent = guests.value;
        document.getElementById("total").textContent = "€" + total;

        document.getElementById("selectedImage").src = room.image;
        document.getElementById("selectedRoomName").textContent = room.name;
        document.getElementById("selectedRoomPrice").textContent =
            "€" + room.price + " per night";

        document.querySelectorAll(".booking-room").forEach(function(card) {
            const selected = card.dataset.room === roomSelect.value;
            card.classList.toggle("selected", selected);

            const button = card.querySelector(".choose-room");
            if (button) {
                button.textContent = selected ? "Selected ✓" : "Select Room";
            }
        });

        return { room, nights, total };
    }

    // Select room using cards
    document.querySelectorAll(".choose-room").forEach(function(button) {
        button.addEventListener("click", function() {
            roomSelect.value = button.dataset.room;
            message.textContent = "";
            updateBooking();

            document.getElementById("bookingSection").scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Update when room, dates or guests change
    [roomSelect, checkin, checkout, guests].forEach(function(element) {
        element.addEventListener("change", updateBooking);
        element.addEventListener("input", updateBooking);
    });

    // Confirm booking
    document.getElementById("bookNow").addEventListener("click", function() {
        const booking = updateBooking();

        if (!booking || booking.nights <= 0) {
            message.style.color = "#c0392b";
            message.textContent = "Please select valid booking dates.";
            return;
        }

        message.style.color = "#16835c";
        message.textContent =
            "✓ Demo booking confirmed! " +
            booking.room.name + ", " +
            booking.nights + " night(s), " +
            guests.value + " guest(s). Total: €" +
            booking.total;
    });

    updateBooking();
});



const checkinDate = document.getElementById("checkin");
const checkoutDate = document.getElementById("checkout");

if (checkinDate && checkoutDate) {

    function getToday() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    const today = getToday();

    // Don't allow past dates
    checkinDate.min = today;
    checkoutDate.min = today;

    checkinDate.addEventListener("change", function () {

        // Checkout must be after check-in
        const nextDay = new Date(checkinDate.value + "T00:00:00");
        nextDay.setDate(nextDay.getDate() + 1);

        const year = nextDay.getFullYear();
        const month = String(nextDay.getMonth() + 1).padStart(2, "0");
        const day = String(nextDay.getDate()).padStart(2, "0");

        checkoutDate.min = `${year}-${month}-${day}`;

        if (checkoutDate.value <= checkinDate.value) {
            checkoutDate.value = "";
        }
    });

    // Stop invalid dates
    document.getElementById("bookNow")?.addEventListener("click", function (event) {

        if (
            !checkinDate.value ||
            !checkoutDate.value ||
            checkinDate.value < getToday() ||
            checkoutDate.value <= checkinDate.value
        ) {
            event.preventDefault();
            event.stopImmediatePropagation();
            alert("Please select valid future booking dates.");
        }

    }, true);
}

