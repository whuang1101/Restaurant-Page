import "./contact_style.css";
import Phone from './phone.svg';
import Map from "./map.svg";
import mapImage from "./location_image.png";

function contact(){
    const mainContact = document.createElement("div");
    mainContact.classList.add("main-contact");
    const myPhone = new Image();
    const phoneContact = document.createElement("div");
    const phoneNumber = document.createElement("div");
    phoneContact.classList.add("contact-info");
    phoneNumber.textContent = "(877) 585-1085";
    myPhone.src = Phone;
    myPhone.classList.add("phone");
    phoneContact.append(myPhone);
    phoneContact.append(phoneNumber);
    mainContact.append(phoneContact);
    const myAddress = new Image();
    myAddress.src = Map;
    const addressContact = document.createElement("div");
    const address = document.createElement("div");
    myAddress.classList.add("phone");
    addressContact.classList.add("contact-info");
    address.textContent = "4409 Northwest Blitchton Road, Ocala, FL 34482";
    addressContact.append(myAddress);
    addressContact.append(address);
    mainContact.append(addressContact);
    const myImage = new Image();
    myImage.src = mapImage;
    myImage.classList.add("opaque");
    mainContact.append(myImage);
    return mainContact;
}
export{contact}