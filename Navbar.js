/** @format */
document
  .querySelector("#list-2-submenu-1-p")
  .addEventListener("click", contentAppend1);

document
  .querySelector("#list-2-submenu-2-p")
  .addEventListener("click", contentAppend2);

document
  .querySelector("#list-2-submenu-3-p")
  .addEventListener("click", contentAppend3);

document
  .querySelector("#list-2-submenu-4-p")
  .addEventListener("click", contentAppend4);

document
  .querySelector("#list-2-submenu-5-p")
  .addEventListener("click", contentAppend5);

document
  .querySelector("#list-2-submenu-6-p")
  .addEventListener("click", contentAppend6);

document
  .querySelector("#list-2-submenu-7-p")
  .addEventListener("click", contentAppend7);

document
  .querySelector("#list-2-submenu-8-p")
  .addEventListener("click", contentAppend8);

document
  .querySelector("#list-2-submenu-9-p")
  .addEventListener("click", contentAppend9);

function contentAppend1() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "The Basics";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "How To Choose";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML = "Templates";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Traffic Generation Tips";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Landing Page Recipes";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML =
    "Best Practices ";

  document.querySelector("#list-2-submenu-content-7-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function contentAppend2() {
  let div = document.querySelector(".list-2-submenu-content");

  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "The Basics";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "Inbound vs Outbound";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML =
    "Engaging Web Visitors";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Engagement and Conversions";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Nuturing Web Visitors";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML =
    "Closing Deals ";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
  div.style.opacity = 1;
}

function contentAppend4() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "The Basics";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "Segmenting Leads";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML =
    "Automated Email Templates";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Email Presentation";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Tools and Platforms";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function contentAppend5() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "Introduction";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "Advantages";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML = "Elements";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Value Ladder";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Lead Nurturing";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML =
    "Landing Pages";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML =
    "Strategies";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function contentAppend6() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "What is a Lead?";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "Importance of Lead Generation";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML =
    "Lead and Prospectus";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Master Lead Generation";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Lead Generation Best Practices";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function contentAppend7() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "What is CRM??";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML = "Sales CRM";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML =
    "Email Marketing CRM";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "MCRM with Marketing Automation";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Sales Automation";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML =
    "Sales Management";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML =
    "Sales Pipeline";

  document.querySelector("#list-2-submenu-content-8-p").innerHTML =
    "Small Business Marketing Automation";
}

function contentAppend8() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "Helpdesk Software";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "Especially Small";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML =
    "Purpose of Helpdesk Software";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Right Helpdesk Software";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML =
    "Resolve Angry Customer";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML =
    "Main Features of Help Desk";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML =
    "EngageBay's Helpdesk";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function contentAppend9() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML = "Zapier";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML = "SendGrid";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML = "Mailgun";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML = "Mandrill";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML = "Xero";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function contentAppend3() {
  document.querySelector("#list-2-submenu-content-1-p").innerHTML =
    "What are Web Popups?";
  document.querySelector("#list-2-submenu-content-2-p").innerHTML =
    "Types of Web Popups";
  document.querySelector("#list-2-submenu-content-3-p").innerHTML =
    "Advantages of Web Popups";

  document.querySelector("#list-2-submenu-content-4-p").innerHTML =
    "Tips and Tricks";
  document.querySelector("#list-2-submenu-content-5-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-6-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-7-p").innerHTML = "";
  document.querySelector("#list-2-submenu-content-8-p").innerHTML = "";
}

function Signup() {
  location.href = "signup.html";
}
