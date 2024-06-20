function inputMatrices() {
    let size = parseInt(document.getElementById('matrixSize').value);
    
    // Clear previous matrices if any
    document.getElementById('matrixA').innerHTML = '';
    document.getElementById('matrixB').innerHTML = '';

    // Create inputs for matrix A
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.id = 'matrixA_' + i + '_' + j;
            input.placeholder = '[' + (i + 1) + '][' + (j + 1) + ']';
            document.getElementById('matrixA').appendChild(input);
        }
        let breakline = document.createElement('br');
        document.getElementById('matrixA').appendChild(breakline);
    }

    // Create inputs for matrix B
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.id = 'matrixB_' + i + '_' + j;
            input.placeholder = '[' + (i + 1) + '][' + (j + 1) + ']';
            document.getElementById('matrixB').appendChild(input);
        }
        let breakline = document.createElement('br');
        document.getElementById('matrixB').appendChild(breakline);
    }

    // Display the matrix input section
    document.getElementById('matrixInputs').style.display = 'block';
}

function addMatrices() {
    let size = parseInt(document.getElementById('matrixSize').value);
    let matrixA = [];
    let matrixB = [];

    // Retrieve matrix A values
    for (let i = 0; i < size; i++) {
        matrixA[i] = [];
        for (let j = 0; j < size; j++) {
            let val = parseInt(document.getElementById('matrixA_' + i + '_' + j).value);
            matrixA[i][j] = val;
        }
    }

    // Retrieve matrix B values
    for (let i = 0; i < size; i++) {
        matrixB[i] = [];
        for (let j = 0; j < size; j++) {
            let val = parseInt(document.getElementById('matrixB_' + i + '_' + j).value);
            matrixB[i][j] = val;
        }
    }

    // Calculate the result matrix
    let resultMatrix = [];
    for (let i = 0; i < size; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < size; j++) {
            resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    // Display the result matrix
    let resultDiv = document.getElementById('resultMatrix');
    resultDiv.innerHTML = '';
    for (let i = 0; i < size; i++) {
        let rowDiv = document.createElement('div');
        for (let j = 0; j < size; j++) {
            let span = document.createElement('span');
            span.textContent = resultMatrix[i][j] + ' ';
            rowDiv.appendChild(span);
        }
        resultDiv.appendChild(rowDiv);
    }
}