document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre.highlight');
    codeBlocks.forEach((codeBlock) => {
        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.className = 'copy-code-button';
        copyButton.innerText = 'Copy';
        codeBlock.append(copyButton);

        copyButton.addEventListener('click', async () => {
            const codeElement = codeBlock.querySelector('code');
            const textToCopy = codeElement ? codeElement.innerText : codeBlock.innerText;
            try {
                await navigator.clipboard.writeText(textToCopy.trim());
                copyButton.innerText = 'Copied!';
                copyButton.classList.add('copied');
                setTimeout(() => {
                    copyButton.innerText = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Clipboard error:', err);
                copyButton.innerText = 'Error';
            }
        });
    });
});
