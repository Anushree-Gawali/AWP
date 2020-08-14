function message()
{
    let mess = document.querySelector("#message").value;
    let message = document.createElement("div");
    message.style.background = "yellowgreen";
    message.style.color = "black";
    message.style.padding ="2px";
    message.style.display ="flex";
    message.style.justifyContent ="flex-end";
    message.style.alignItems ="flex-end";

    let chat =document.querySelector("#chat");
    chat.appendChild(message);
    document.querySelector("#message").value ="";
}