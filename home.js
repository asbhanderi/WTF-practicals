// Form submission event
document.getElementById("registrationForm")
.addEventListener("submit", function(event)
{
    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let massage = document.getElementById("message").value.trim();

    // Get error element
    let error = document.getElementById("error");

    if (fname === "")
    {
        error.innerHTML = "Please enter your first name.";
        return;
    }

    if (!/^[A-Za-z]+$/.test(fname))
    {
        error.innerHTML = "First name should contain only letters.";
        return;
    }

    if (lname === "")
    {
        error.innerHTML = "Please enter your last name.";
        return;
    }

    if (!/^[A-Za-z]+$/.test(lname))
    {
        error.innerHTML = "Last name should contain only letters.";
        return;
    }

    if (mobile === "")
    {
        error.innerHTML = "Please enter your mobile number.";
        return;
    }

    if (!/^[6-9][0-9]{9}$/.test(mobile))
    {
        error.innerHTML =
            "Please enter a valid 10-digit mobile number.";
        return;
    }

    verifyDetails(fname, lname, mobile);
});


function verifyDetails(fname, lname, mobile)
{
    let error = document.getElementById("error");

    if (
        fname.length > 0 &&
        lname.length > 0 &&
        mobile.length === 10
    )
    {
        error.innerHTML =
            "Verification Successful!<br>" +
            "Name: " + fname + " " + lname + "<br>" +
            "Mobile Number: " + mobile;
    }
    else
    {
        error.innerHTML =
            "Verification Failed. Please check your details.";
    }
}
