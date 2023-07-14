function changeImage()
{
    var pic =document.getElementById("bulb");
    if(pic.src.match("bulb_off"))
    {
    console.log("OFF");
    pic.src="bulb_on.jpg";
    }
    else
    {
    console.log("ON");
    pic.src="bulb_off.jpg";
}
}