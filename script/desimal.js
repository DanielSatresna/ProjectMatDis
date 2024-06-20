document.getElementById('decimalToBinaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let decimal = parseInt(document.getElementById('decimalInput').value);

    let binary = decimalToBinary(decimal);

    // Display the result
    document.getElementById('binaryOutput').textContent = binary;
    document.getElementById('resultContainer').style.display = 'block';
    });

    function decimalToBinary(decimal) {
        if (decimal === 0) {
            return "0";
        }

        let binary = "";
        while (decimal > 0) {
            let remainder = decimal % 2;
            binary = remainder + binary;
            decimal = Math.floor(decimal / 2);
        }

        return binary;
    }

    function resetForm() {
        document.getElementById('decimalInput').value = '';
        document.getElementById('binaryOutput').textContent = '';
        document.getElementById('resultContainer').style.display = 'none';
    }
