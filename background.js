// Listener para mensagens enviadas pelo popup.js
browser.runtime.onMessage.addListener(function (message) {
  if (message.action === "showPopup") {
    // Mostra a mensagem em um pop-up
    browser.notifications.create({
      type: "basic",
      title: "Resultado da Pesquisa",
      message: message.message
    });
  }
});
