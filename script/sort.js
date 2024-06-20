document.getElementById('mergeSortForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let arraySize = parseInt(document.getElementById('arraySizeInput').value);
    
    // Clear previous inputs if any
    document.getElementById('arrayInputs').innerHTML = '';

    // Create input fields for array elements
    for (let i = 0; i < arraySize; i++) {
        let input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Element ' + (i + 1);
        input.required = true;
        document.getElementById('arrayInputs').appendChild(input);
    }

    // Display the array input section
    document.getElementById('arrayInputSection').style.display = 'block';
});

function sortArray() {
    let inputs = document.getElementById('arrayInputs').getElementsByTagName('input');
    let arr = [];

    // Retrieve values from input fields
    for (let i = 0; i < inputs.length; i++) {
        arr.push(parseInt(inputs[i].value));
    }

    // Display array before sorting
    document.getElementById('beforeSortOutput').textContent = arr.join(' ');

    // Perform merge sort
    mergeSort(arr, 0, arr.length - 1);

    // Display array after sorting
    document.getElementById('afterSortOutput').textContent = arr.join(' ');

    // Display the output section
    document.getElementById('outputSection').style.display = 'block';
}

function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function resetForm() {
    document.getElementById('arraySizeInput').value = '';
    document.getElementById('arrayInputs').innerHTML = '';
    document.getElementById('beforeSortOutput').textContent = '';
    document.getElementById('afterSortOutput').textContent = '';
    document.getElementById('arrayInputSection').style.display = 'none';
    document.getElementById('outputSection').style.display = 'none';
}