const texts = [
    "print(\"🤵Hello, I'm Lê Đức Sơn\")", 
    "print(\"⚒️I'm an Embedded Developer\")", 
    "print(\"🔭 Currently working with C/C++, C#, Python, Scripting\")", 
    "print(\"📨Contact me: Facebook | Zalo\")",
    "print(\"More about me: Youtube | Github\")",
    "print(\"Loading system... Access Granted!\")"
];

function formatCode(text) {
        text = text.replace(/(\"[\s\S]*?\")/g, "<span class='string'>$1</span>");
        text = text.replace(/([(),])/g, "<span class='operator'>$1</span>");
        text = text.replace(/(print)/g, "<span class='keyword'>$1</span>");
        return text;
    }
function typeWriter(elementId, text, i, callback) {
    if (i < text.length) {
        document.getElementById(elementId).textContent = text.substring(0, i + 1);
        const formattedText = formatCode(text.substring(0, i + 1));
        document.getElementById(elementId).innerHTML = formattedText;

        setTimeout(() => typeWriter(elementId, text, i + 1, callback), 25);
    } else if (callback) {
        setTimeout(callback, 25);
    }
}

let index = 0;

function startTyping() {
    if (index < texts.length) {
        let elementId = `line${index + 1}`;
        let element = document.getElementById(elementId);

        if (element) {
            typeWriter(elementId, texts[index], 0, () => {
                document.getElementById(`output${index + 1}`).style.display = "block";
                index++;
                startTyping();
            });
        } else {
            index++;
            startTyping();
        }
    }
}

function goBack() {
    window.history.back();
}

startTyping();
