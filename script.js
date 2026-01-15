 // JavaScript: The Logic
        function processText() {
            const input = document.getElementById("userInput").value;

            // 1. Extract Phone Number (Looking for 10-11 digits)
            const phoneMatch = input.match(/(09\d{9})|(\d{10})/);
            let phone = phoneMatch ? phoneMatch[0] : "NOT FOUND";

            // NEW: If it starts with 0, remove it
            if (phone.startsWith("0")) {
            phone = phone.slice(1);
            }

            document.getElementById("outPhone").innerText = phone;

            // 2. Clean text: UpperCase, remove symbols, swap &
            const cleaned = input
                .toUpperCase()
                .replace(/&/g, "AND")
                .replace(/[#.',\-:]/g, ""); // The hyphen fix we discussed!

            document.getElementById("outGeneral").innerText = cleaned;
        }

        function copyText(elementId) {
            const text = document.getElementById(elementId).innerText;
            if (text !== "---" && text !== "NOT FOUND") {
                navigator.clipboard.writeText(text).then(() => {
                    alert("Copied to clipboard!");
                });
            }
        }

        function clearAll() {
            document.getElementById("userInput").value = "";
            document.getElementById("outPhone").innerText = "---";
            document.getElementById("outGeneral").innerText = "---";
        }