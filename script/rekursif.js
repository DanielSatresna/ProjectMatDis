document.getElementById('powerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let base = parseFloat(document.getElementById('baseInput').value);
    let exponent = parseInt(document.getElementById('exponentInput').value);

    let result = calculatePower(base, exponent);

    // Display the result
    document.getElementById('resultOutput').textContent = result;
    document.getElementById('resultContainer').style.display = 'block';
});

function calculatePower(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * calculatePower(base, exponent - 1);
    } else {
        return 1 / (base * calculatePower(base, -exponent - 1));
    }
}

function resetForm() {
    document.getElementById('baseInput').value = '';
    document.getElementById('exponentInput').value = '';
    document.getElementById('resultOutput').textContent = '';
    document.getElementById('resultContainer').style.display = 'none';
}
