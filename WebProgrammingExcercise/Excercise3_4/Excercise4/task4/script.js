function countOccur() {
    const textA = document.getElementById('inputA').value;
    const textB = document.getElementById('inputB').value;

    if (textA && textB) {
        let count = 0;
        let pos = textA.indexOf(textB);

        while (pos !== -1) {
            count++;
            pos = textA.indexOf(textB, pos + 1);
        }

        document.getElementById('result').textContent = `Số lần xuất hiện của '${textB}' trong '${textA}' là: ${count}`;
    } else {
        document.getElementById('result').textContent = 'Vui lòng nhập (A) và (B).';
    }
}