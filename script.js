document.getElementById("saveButton").addEventListener("click", function() {
    const inputText = document.getElementById("curlInput").value;
    
    if (inputText.trim() === "") {
        alert("Please enter a valid cURL profile.");
        return; 
    }

    const randomFileName = generateRandomString(4) + ".har";
    
    const blob = new Blob([inputText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = randomFileName;
    link.click();
    
    URL.revokeObjectURL(url);
});

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
