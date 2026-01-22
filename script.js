const webhookURL = "https://discord.com/api/webhooks/1463930896511139949/VZ9JIyPPIH3SeHwr1ZqlKviX0ixGxerVk0CQ1VpPOQf9Emo06CWmHsfwFEEMfwXt_abX";

let selectedItem = "";

function openOrder(item) {
  selectedItem = item;
  document.getElementById("orderTitle").innerText = "Order: " + item;
  document.getElementById("orderForm").style.display = "block";
}

function closeOrder() {
  document.getElementById("orderForm").style.display = "none";
}

function submitOrder() {
  const realName = document.getElementById("realName").value;
  const robloxUser = document.getElementById("robloxUser").value;
  const discordUser = document.getElementById("discordUser").value || "Not provided";

  if (!realName || !robloxUser) {
    alert("Please fill in required fields.");
    return;
  }

  const data = {
    content: null,
    embeds: [
      {
        title: "🧠 New Brainrot Order",
        color: 0x00ffcc,
        fields: [
          { name: "Real Name", value: realName, inline: false },
          { name: "Roblox Username", value: robloxUser, inline: false },
          { name: "Discord Username", value: discordUser, inline: false },
          { name: "Order", value: selectedItem, inline: false }
        ],
        footer: {
          text: "Payment: In school (IQD)"
        },
        timestamp: new Date()
      }
    ]
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Order sent! Pay in school to receive your brainrot.");
  closeOrder();
}
