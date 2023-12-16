function copy(button) {
    // Get the text content of the corresponding paragraph
    var textToCopy = button.previousElementSibling.textContent;

    // Create a temporary textarea element
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    try {
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        alert('Text copied to clipboard');
    } catch (err) {
        console.error('Unable to copy text to clipboard', err);
    }

    // Remove the temporary textarea
    document.body.removeChild(textarea);
}
