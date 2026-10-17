function escapeHTML(code) {
    return code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}
//side btn
let moreButton = document.querySelector(".more-button");
let sideMenu = document.querySelector(".side-menu");
let closeButton = document.querySelector(".close-button");
let menuOverlay = document.querySelector(".menu-overlay");

moreButton.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
});
closeButton.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});
menuOverlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});

//bubble sort 
const bubbleCppBtn = document.querySelector(".bubbleCpp");
const bubbleCBtn = document.querySelector(".bubbleC");
const bubbleJavaBtn = document.querySelector(".bubbleJava");
const bubblePythonBtn = document.querySelector(".bubblePython");

const bubbleCodeDisplay = document.querySelector(".bubbleSortCodeContent");

bubbleCppBtn.addEventListener("click", () => {

    bubbleCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCBtn.style.color = "white";
    bubbleCBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleJavaBtn.style.color = "white";
    bubbleJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubblePythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubblePythonBtn.style.color = "white";
    bubblePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubbleCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubbleCppBtn.style.color = "rgb(23, 23, 23)";
    bubbleCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped)
            break;
    }
}

int main() {
    vector<int> arr = {5, 1, 4, 2, 8};

    bubbleSort(arr);

    for (int x : arr)
        cout << x << " ";

    return 0;
}
`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

bubbleCBtn.addEventListener("click", () => {

    bubbleCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCppBtn.style.color = "white";
    bubbleCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleJavaBtn.style.color = "white";
    bubbleJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubblePythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    bubblePythonBtn.style.color = "white";
    bubblePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubbleCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubbleCBtn.style.color = "rgb(23, 23, 23)";
    bubbleCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = 1;
            }
        }

        if (!swapped)
            break;
    }
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

bubbleJavaBtn.addEventListener("click", () => {

    bubbleCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCppBtn.style.color = "white";
    bubbleCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCBtn.style.color = "white";
    bubbleCBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubblePythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubblePythonBtn.style.color = "white";
    bubblePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubbleJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubbleJavaBtn.style.color = "rgb(23, 23, 23)";
    bubbleJavaBtn.style.border = "3px solid white";

    const javaCode = `
public class Main {

    static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    swapped = true;
                }
            }

            if (!swapped)
                break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};

        bubbleSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

bubblePythonBtn.addEventListener("click", () => {

    bubbleCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCppBtn.style.color = "white";
    bubbleCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCBtn.style.color = "white";
    bubbleCBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleJavaBtn.style.color = "white";
    bubbleJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubblePythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubblePythonBtn.style.color = "rgb(23, 23, 23)";
    bubblePythonBtn.style.border = "3px solid white";

    const pythonCode = `
def bubble_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        swapped = False

        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break

    return arr


arr = [5, 1, 4, 2, 8]
bubble_sort(arr)

print(*arr)`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//insertion sort 
const insertionCppBtn = document.querySelector(".insertionCpp");
const insertionCBtn = document.querySelector(".insertionC");
const insertionJavaBtn = document.querySelector(".insertionJava");
const insertionPythonBtn = document.querySelector(".insertionPython");

const insertionCodeDisplay = document.querySelector(".insertionSortCodeContent");

insertionCppBtn.addEventListener("click", () => {

    insertionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCBtn.style.color = "white";
    insertionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionJavaBtn.style.color = "white";
    insertionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionPythonBtn.style.color = "white";
    insertionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionCppBtn.style.color = "rgb(23, 23, 23)";
    insertionCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

int main() {
    vector<int> arr = {5, 1, 4, 2, 8};

    insertionSort(arr);

    for (int x : arr)
        cout << x << " ";

    return 0;
}`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

insertionCBtn.addEventListener("click", () => {

    insertionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCppBtn.style.color = "white";
    insertionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionJavaBtn.style.color = "white";
    insertionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionPythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    insertionPythonBtn.style.color = "white";
    insertionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionCBtn.style.color = "rgb(23, 23, 23)";
    insertionCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

insertionJavaBtn.addEventListener("click", () => {

    insertionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCppBtn.style.color = "white";
    insertionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCBtn.style.color = "white";
    insertionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionPythonBtn.style.color = "white";
    insertionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionJavaBtn.style.color = "rgb(23, 23, 23)";
    insertionJavaBtn.style.border = "3px solid white";

    const javaCode = `
public class Main {

    static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};

        insertionSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

insertionPythonBtn.addEventListener("click", () => {

    insertionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCppBtn.style.color = "white";
    insertionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCBtn.style.color = "white";
    insertionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionJavaBtn.style.color = "white";
    insertionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionPythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionPythonBtn.style.color = "rgb(23, 23, 23)";
    insertionPythonBtn.style.border = "3px solid white";

    const pythonCode = `
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    return arr


arr = [5, 1, 4, 2, 8]
insertion_sort(arr)

print(*arr)`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//selection sort 
const selectionCppBtn = document.querySelector(".selectionCpp");
const selectionCBtn = document.querySelector(".selectionC");
const selectionJavaBtn = document.querySelector(".selectionJava");
const selectionPythonBtn = document.querySelector(".selectionPython");

const selectionCodeDisplay = document.querySelector(".selectionSortCodeContent");

selectionCppBtn.addEventListener("click", () => {

    selectionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCBtn.style.color = "white";
    selectionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionJavaBtn.style.color = "white";
    selectionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionPythonBtn.style.color = "white";
    selectionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionCppBtn.style.color = "rgb(23, 23, 23)";
    selectionCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    vector<int> arr = {5, 1, 4, 2, 8};

    selectionSort(arr);

    for (int x : arr)
        cout << x << " ";

    return 0;
}`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

selectionCBtn.addEventListener("click", () => {

    selectionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCppBtn.style.color = "white";
    selectionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionJavaBtn.style.color = "white";
    selectionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionPythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    selectionPythonBtn.style.color = "white";
    selectionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionCBtn.style.color = "rgb(23, 23, 23)";
    selectionCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

selectionJavaBtn.addEventListener("click", () => {

    selectionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCppBtn.style.color = "white";
    selectionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCBtn.style.color = "white";
    selectionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionPythonBtn.style.color = "white";
    selectionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionJavaBtn.style.color = "rgb(23, 23, 23)";
    selectionJavaBtn.style.border = "3px solid white";

    const javaCode = `
public class Main {

    static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;

            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};

        selectionSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

selectionPythonBtn.addEventListener("click", () => {

    selectionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCppBtn.style.color = "white";
    selectionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCBtn.style.color = "white";
    selectionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionJavaBtn.style.color = "white";
    selectionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionPythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionPythonBtn.style.color = "rgb(23, 23, 23)";
    selectionPythonBtn.style.border = "3px solid white";

    const pythonCode = `
def selection_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        min_index = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr


arr = [5, 1, 4, 2, 8]
selection_sort(arr)

print(*arr)`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//quick sort 
const quickCppBtn = document.querySelector(".quickCpp");
const quickCBtn = document.querySelector(".quickC");
const quickJavaBtn = document.querySelector(".quickJava");
const quickPythonBtn = document.querySelector(".quickPython");

const quickCodeDisplay = document.querySelector(".quickSortCodeContent");

quickCppBtn.addEventListener("click", () => {

    quickCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCBtn.style.color = "white";
    quickCBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickJavaBtn.style.color = "white";
    quickJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickPythonBtn.style.color = "white";
    quickPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickCppBtn.style.color = "rgb(23, 23, 23)";
    quickCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    vector<int> arr = {5, 1, 4, 2, 8};

    quickSort(arr, 0, arr.size() - 1);

    for (int x : arr)
        cout << x << " ";

    return 0;
}`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

quickCBtn.addEventListener("click", () => {

    quickCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCppBtn.style.color = "white";
    quickCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickJavaBtn.style.color = "white";
    quickJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickPythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    quickPythonBtn.style.color = "white";
    quickPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickCBtn.style.color = "rgb(23, 23, 23)";
    quickCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }

    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

quickJavaBtn.addEventListener("click", () => {

    quickCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCppBtn.style.color = "white";
    quickCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCBtn.style.color = "white";
    quickCBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickPythonBtn.style.color = "white";
    quickPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickJavaBtn.style.color = "rgb(23, 23, 23)";
    quickJavaBtn.style.border = "3px solid white";

    const javaCode = `
public class Main {

    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    }

    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);

            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};

        quickSort(arr, 0, arr.length - 1);

        for (int x : arr)
            System.out.print(x + " ");
    }
}`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

quickPythonBtn.addEventListener("click", () => {

    quickCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCppBtn.style.color = "white";
    quickCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCBtn.style.color = "white";
    quickCBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickJavaBtn.style.color = "white";
    quickJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickPythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickPythonBtn.style.color = "rgb(23, 23, 23)";
    quickPythonBtn.style.border = "3px solid white";

    const pythonCode = `
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)

        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)


arr = [5, 1, 4, 2, 8]
quick_sort(arr, 0, len(arr) - 1)

print(*arr)`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//merge sort 
const mergeCppBtn = document.querySelector(".mergeCpp");
const mergeCBtn = document.querySelector(".mergeC");
const mergeJavaBtn = document.querySelector(".mergeJava");
const mergePythonBtn = document.querySelector(".mergePython");

const mergeCodeDisplay = document.querySelector(".mergeSortCodeContent");

mergeCppBtn.addEventListener("click", () => {

    mergeCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeCBtn.style.color = "white";
    mergeCBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergeJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeJavaBtn.style.color = "white";
    mergeJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergePythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergePythonBtn.style.color = "white";
    mergePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    mergeCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    mergeCppBtn.style.color = "rgb(23, 23, 23)";
    mergeCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp;
    int i = left;
    int j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j])
            temp.push_back(arr[i++]);
        else
            temp.push_back(arr[j++]);
    }

    while (i <= mid)
        temp.push_back(arr[i++]);

    while (j <= right)
        temp.push_back(arr[j++]);

    for (int k = 0; k < temp.size(); k++)
        arr[left + k] = temp[k];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {5, 1, 4, 2, 8};

    mergeSort(arr, 0, arr.size() - 1);

    for (int x : arr)
        cout << x << " ";

    return 0;
}`;

    mergeCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

mergeCBtn.addEventListener("click", () => {

    mergeCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeCppBtn.style.color = "white";
    mergeCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergeJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeJavaBtn.style.color = "white";
    mergeJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergePythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    mergePythonBtn.style.color = "white";
    mergePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    mergeCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    mergeCBtn.style.color = "rgb(23, 23, 23)";
    mergeCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int *L = malloc(n1 * sizeof(int));
    int *R = malloc(n2 * sizeof(int));

    if (L == NULL || R == NULL) {
        free(L);
        free(R);
        return;
    }

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];

    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    while (i < n1)
        arr[k++] = L[i++];

    while (j < n2)
        arr[k++] = R[j++];

    free(L);
    free(R);
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`;

    mergeCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

mergeJavaBtn.addEventListener("click", () => {

    mergeCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeCppBtn.style.color = "white";
    mergeCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergeCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeCBtn.style.color = "white";
    mergeCBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergePythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergePythonBtn.style.color = "white";
    mergePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    mergeJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    mergeJavaBtn.style.color = "rgb(23, 23, 23)";
    mergeJavaBtn.style.border = "3px solid white";

    const javaCode = `
public class Main {

    static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[left + i];

        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j])
                arr[k++] = L[i++];
            else
                arr[k++] = R[j++];
        }

        while (i < n1)
            arr[k++] = L[i++];

        while (j < n2)
            arr[k++] = R[j++];
    }

    static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};

        mergeSort(arr, 0, arr.length - 1);

        for (int x : arr)
            System.out.print(x + " ");
    }
}`;

    mergeCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

mergePythonBtn.addEventListener("click", () => {

    mergeCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeCppBtn.style.color = "white";
    mergeCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergeCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeCBtn.style.color = "white";
    mergeCBtn.style.border = "2px solid rgb(180, 178, 178)";

    mergeJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    mergeJavaBtn.style.color = "white";
    mergeJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    mergePythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    mergePythonBtn.style.color = "rgb(23, 23, 23)";
    mergePythonBtn.style.border = "3px solid white";

    const pythonCode = `
def merge(arr, left, mid, right):
    L = arr[left:mid + 1]
    R = arr[mid + 1:right + 1]

    i = 0
    j = 0
    k = left

    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1

    while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1


def merge_sort(arr, left, right):
    if left < right:
        mid = left + (right - left) // 2

        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)
        merge(arr, left, mid, right)


arr = [5, 1, 4, 2, 8]
merge_sort(arr, 0, len(arr) - 1)

print(*arr)`;

    mergeCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});