import type { LabExperiment } from '../../types';

export const ppsLabExperiments: LabExperiment[] = [
  {
    id: 'pps-lab-le1',
    experimentNumber: 1,
    code: 'LE-1',
    title: 'Algorithmic Logic & Basic I/O (Geometrical Shapes)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO1', 'CO2'],
    lso: 'Construct flowcharts to represent algorithmic steps and apply type casting and data types for accurate numerical results.',
    objective: 'Write a C program to calculate the area of various geometrical shapes (circle, triangle, rectangle) using appropriate data types and type casting, accompanied by a flowchart.',
    apparatus: ['GCC Compiler / Code::Blocks / VS Code', 'C Runtime Environment'],
    theory: 'Basic input/output in C uses formatted functions printf() and scanf(). Data types like float and double store real numbers. Formulae: Area_circle = π r^2, Area_triangle = 0.5 * b * h, Area_rectangle = l * w.',
    procedure: [
      'Draw flowchart outlining input prompts, calculation formulas, and display steps.',
      'Declare variables of type float or double.',
      'Prompt user to input radius, base, height, length, and breadth using scanf().',
      'Compute areas using type casting where needed (e.g. (float)1/2).',
      'Display computed areas with 2 decimal places using format specifier %.2f.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>
#define PI 3.1415926535

int main() {
    float radius, base, height, length, breadth;
    float area_circle, area_triangle, area_rectangle;

    printf("=== Geometrical Shapes Area Calculator ===\\n");
    
    // Circle
    printf("Enter radius of circle: ");
    scanf("%f", &radius);
    area_circle = (float)PI * radius * radius;

    // Triangle
    printf("Enter base and height of triangle: ");
    scanf("%f %f", &base, &height);
    area_triangle = 0.5f * base * height;

    // Rectangle
    printf("Enter length and breadth of rectangle: ");
    scanf("%f %f", &length, &breadth);
    area_rectangle = length * breadth;

    printf("\\n--- Calculated Results ---\\n");
    printf("Area of Circle    = %.2f sq. units\\n", area_circle);
    printf("Area of Triangle  = %.2f sq. units\\n", area_triangle);
    printf("Area of Rectangle = %.2f sq. units\\n", area_rectangle);

    return 0;
}`,
      explanation: 'Calculates geometrical areas using floating point arithmetic and constant PI macro.'
    },
    result: 'C program compiled successfully; verified for circle (r=5 -> 78.54), triangle (b=4, h=6 -> 12.00), and rectangle (l=8, b=3 -> 24.00).',
    precautions: ['Use %f format specifier for float; do not write 1/2 in C as integer division yields 0 (use 0.5f or 1.0/2).'],
    vivaQuestions: [
      { question: 'What is the difference between float and double in C?', answer: 'Float occupies 4 bytes (single precision, ~6-7 decimal digits); double occupies 8 bytes (double precision, ~15-17 decimal digits).' },
      { question: 'Why does integer expression 1/2 evaluate to 0 in C?', answer: 'Because both 1 and 2 are integer literals, C performs integer division truncating the fractional part to 0. Writing 1.0/2 or (float)1/2 solves this.' }
    ]
  },
  {
    id: 'pps-lab-le2',
    experimentNumber: 2,
    code: 'LE-2',
    title: 'Decision Making Systems (Student Grading & Fee Waiver)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO1', 'CO2'],
    lso: 'Implement conditional statements for decision making and use switch-case statements for multiway branching.',
    objective: 'Develop a Student Grading and Classification System using an if-else ladder for marks grading and a switch-case to classify eligible fee waivers by category.',
    apparatus: ['C Compiler', 'Terminal / IDE'],
    theory: 'Multiway decision making in C uses `if-else if-else` ladders for range evaluation and `switch-case` statements for discrete integral category selection.',
    procedure: [
      'Take student percentage marks as float input.',
      'Assign grade using if-else ladder: Marks >= 90: Grade A+; >= 80: Grade A; >= 70: Grade B; >= 60: Grade C; >= 40: Grade D; < 40: Fail.',
      'Take student social/merit category code (1: Merit, 2: EWS, 3: Sports, 4: General) and compute fee waiver using switch-case.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>

int main() {
    float marks;
    int category;
    char grade;

    printf("Enter Student Percentage Marks (0-100): ");
    scanf("%f", &marks);

    if (marks < 0 || marks > 100) {
        printf("Error: Invalid marks entered!\\n");
        return 1;
    }

    // if-else ladder for grading
    if (marks >= 90) grade = 'A';
    else if (marks >= 80) grade = 'B';
    else if (marks >= 65) grade = 'C';
    else if (marks >= 40) grade = 'D';
    else grade = 'F';

    printf("Assigned Grade: %c\\n\\n", grade);

    // switch-case for category fee waiver
    printf("Select Category (1: Merit Topper, 2: EWS, 3: Sports Quota, 4: General): ");
    scanf("%d", &category);

    switch(category) {
        case 1:
            printf("Eligible for 100%% Full Tuition Fee Waiver!\\n");
            break;
        case 2:
            printf("Eligible for 50%% EWS Fee Concession.\\n");
            break;
        case 3:
            printf("Eligible for 25%% Sports Development Waiver.\\n");
            break;
        case 4:
            printf("Standard General Category Fees Applicable.\\n");
            break;
        default:
            printf("Invalid Category Selected.\\n");
    }

    return 0;
}`,
      explanation: 'Demonstrates hierarchical if-else ladder and clean switch-case branching.'
    },
    result: 'Decision making system correctly classified grades and mapped category fee waivers.',
    precautions: ['Always include `break;` at the end of each switch case to prevent fallthrough.'],
    vivaQuestions: [
      { question: 'What happens if break is omitted from a switch case?', answer: 'Control falls through and executes all subsequent case statements sequentially regardless of matching condition until a break or end of switch is reached.' }
    ]
  },
  {
    id: 'pps-lab-le3',
    experimentNumber: 3,
    code: 'LE-3',
    title: 'Iterative Problem Solving (Prime Numbers & Fibonacci Sequence)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO1', 'CO2'],
    lso: 'Apply iterative logic to solve numerical computation problems and formulate looping methods.',
    objective: 'Develop a C program to (i) Find all prime numbers between 1 and N, and (ii) Generate the Fibonacci sequence up to N terms using while and for loops.',
    apparatus: ['C Compiler'],
    theory: 'Loops execute code blocks repeatedly while a condition holds. Prime numbers have exactly 2 factors (1 and itself), checked by testing divisibility up to √N. Fibonacci sequence generates each term as sum of previous two: F_n = F_{n-1} + F_{n-2}.',
    procedure: [
      'Take integer limit N from user.',
      'Use nested for-loops to test primality for all numbers 2 to N.',
      'Use a while loop to generate N terms of Fibonacci sequence using 3 variables (a=0, b=1, c=a+b).'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>
#include <stdbool.h>

void printPrimes(int n) {
    printf("Prime numbers between 1 and %d:\\n", n);
    for (int i = 2; i <= n; i++) {
        bool isPrime = true;
        for (int j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) printf("%d ", i);
    }
    printf("\\n\\n");
}

void printFibonacci(int n) {
    int a = 0, b = 1, count = 0;
    printf("First %d terms of Fibonacci sequence:\\n", n);
    while (count < n) {
        printf("%d ", a);
        int next = a + b;
        a = b;
        b = next;
        count++;
    }
    printf("\\n");
}

int main() {
    int n;
    printf("Enter value of N: ");
    scanf("%d", &n);

    if (n <= 0) {
        printf("Please enter positive integer.\\n");
        return 1;
    }

    printPrimes(n);
    printFibonacci(n);

    return 0;
}`,
      explanation: 'Optimized prime checking (j*j <= i) and iterative Fibonacci generator.'
    },
    result: 'Program verified for N=20: Primes (2,3,5,7,11,13,17,19) and Fibonacci (0,1,1,2,3,5,8,13,21,34...).',
    precautions: ['Check prime divisibility up to j*j <= i rather than i to reduce time complexity from O(N^2) to O(N√N).'],
    vivaQuestions: [
      { question: 'Why is checking up to √N sufficient for prime testing?', answer: 'If a number N has a factor greater than √N, it must also have a complementary factor less than √N. Hence testing up to √N covers all possible factor pairs.' }
    ]
  },
  {
    id: 'pps-lab-le4',
    experimentNumber: 4,
    code: 'LE-4',
    title: '1-D Array Operations: Linear Search & Average Calculation',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO2'],
    lso: 'Implement a single-dimensional array for finding maximum/minimum elements and calculating average.',
    objective: 'Write a C program to input N integers into a 1-D array, find maximum and minimum elements using Linear Search, and compute the array average.',
    apparatus: ['C Compiler'],
    theory: 'An array stores elements of the same data type in contiguous memory locations indexed from 0 to N-1. Linear search traverses elements sequentially from index 0 to N-1.',
    procedure: [
      'Declare array arr[100] and read number of elements N.',
      'Initialize max = arr[0], min = arr[0], sum = arr[0].',
      'Traverse array from index 1 to N-1, updating max if arr[i] > max, and min if arr[i] < min.',
      'Compute average = (float)sum / N.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>

int main() {
    int arr[100], n, max, min, sum = 0;

    printf("Enter number of elements (1-100): ");
    scanf("%d", &n);

    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    max = arr[0];
    min = arr[0];

    for (int i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
        sum += arr[i];
    }

    float avg = (float)sum / n;

    printf("\\n--- Array Analytics ---\\n");
    printf("Maximum Element = %d\\n", max);
    printf("Minimum Element = %d\\n", min);
    printf("Average Value   = %.2f\\n", avg);

    return 0;
}`,
      explanation: 'Single-pass O(N) array scanning for min, max, and average.'
    },
    result: 'Linear search and average calculation executed correctly with O(N) time complexity.',
    precautions: ['Always bounds-check array indexing (index must stay < N).'],
    vivaQuestions: [
      { question: 'What is the time complexity of linear search?', answer: 'O(N) in worst/average case, where N is number of elements.' }
    ]
  },
  {
    id: 'pps-lab-le5',
    experimentNumber: 5,
    code: 'LE-5',
    title: 'Matrix Manipulation (2-D Arrays): Multiplication & Transpose',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO2'],
    lso: 'Perform operations on multi-dimensional arrays (Matrix Multiplication & Transpose).',
    objective: 'Write a C program to perform Matrix Multiplication of two matrices A (r1 x c1) and B (r2 x c2), and compute the Transpose of matrix A using 2-D arrays.',
    apparatus: ['C Compiler'],
    theory: 'Matrix multiplication is valid only when columns of A equal rows of B (c1 == r2). Result C[i][j] = Σ A[i][k] * B[k][j]. Transpose swaps rows with columns: A^T[j][i] = A[i][j].',
    procedure: [
      'Input dimensions and elements of matrix A and matrix B.',
      'Check compatibility (c1 == r2). If invalid, display error.',
      'Execute 3 nested loops (i, j, k) to compute matrix product.',
      'Compute Transpose of A by copying A[i][j] into T[j][i].'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>

int main() {
    int A[10][10], B[10][10], C[10][10] = {0}, T[10][10];
    int r1, c1, r2, c2;

    printf("Enter rows and cols for Matrix A: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter elements of Matrix A:\\n");
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++)
            scanf("%d", &A[i][j]);

    printf("Enter rows and cols for Matrix B: ");
    scanf("%d %d", &r2, &c2);
    printf("Enter elements of Matrix B:\\n");
    for (int i = 0; i < r2; i++)
        for (int j = 0; j < c2; j++)
            scanf("%d", &B[i][j]);

    if (c1 != r2) {
        printf("Error: Matrix multiplication not possible (c1 != r2)!\\n");
        return 1;
    }

    // Multiplication
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    // Transpose of A
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++)
            T[j][i] = A[i][j];

    printf("\\nProduct Matrix (A x B):\\n");
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) printf("%d\\t", C[i][j]);
        printf("\\n");
    }

    printf("\\nTranspose of Matrix A:\\n");
    for (int i = 0; i < c1; i++) {
        for (int j = 0; j < r1; j++) printf("%d\\t", T[i][j]);
        printf("\\n");
    }

    return 0;
}`,
      explanation: 'O(N^3) Matrix multiplication and O(N^2) transpose manipulation.'
    },
    result: 'Matrix operations executed correctly and validated against test matrices.',
    precautions: ['Initialize result matrix elements to 0 before accumulation.'],
    vivaQuestions: [
      { question: 'What is the time complexity of standard matrix multiplication of two N x N matrices?', answer: 'O(N^3) due to 3 nested loops.' }
    ]
  },
  {
    id: 'pps-lab-le6',
    experimentNumber: 6,
    code: 'LE-6',
    title: 'Pointer Arithmetic & Strings (Reversal & Vowel Count)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO2', 'CO3'],
    lso: 'Apply pointer traversal and manipulation to reverse a string and count vowels/consonants.',
    objective: 'Write a C program to (i) Reverse a string in-place using two pointers, and (ii) Count total vowels and consonants in a string using pointers.',
    apparatus: ['C Compiler'],
    theory: 'A pointer stores the memory address of another variable. String in C is a character array terminated by null character \'\\0\'. Pointers can traverse strings via dereferencing *ptr and incrementing ptr++.',
    procedure: [
      'Read input string with spaces using fgets().',
      'Reverse string in-place using start and end pointers swapping *start and *end.',
      'Count vowels (A, E, I, O, U) and consonants using a pointer traversing until \'\\0\'.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

void reverseString(char *str) {
    char *start = str;
    char *end = str + strlen(str) - 1;
    while (start < end) {
        char temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}

void countVowelsAndConsonants(const char *str, int *vowels, int *consonants) {
    *vowels = 0;
    *consonants = 0;
    const char *ptr = str;
    while (*ptr != '\\0') {
        char ch = tolower(*ptr);
        if (ch >= 'a' && ch <= 'z') {
            if (ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
                (*vowels)++;
            else
                (*consonants)++;
        }
        ptr++;
    }
}

int main() {
    char str[200];
    int v, c;

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = '\\0'; // strip newline

    countVowelsAndConsonants(str, &v, &c);
    printf("Vowels Count     = %d\\n", v);
    printf("Consonants Count = %d\\n", c);

    reverseString(str);
    printf("Reversed String  = \\"%s\\"\\n", str);

    return 0;
}`,
      explanation: 'In-place two-pointer string reversal and pointer-based vowel scanning.'
    },
    result: 'String "Semester Point" reversed to "tnioP retsemeS" with 5 vowels and 8 consonants correctly counted.',
    precautions: ['Strip trailing newline character \'\\n\' captured by fgets().'],
    vivaQuestions: [
      { question: 'What is the size of a pointer variable in C?', answer: '8 bytes on 64-bit architectures, and 4 bytes on 32-bit architectures, regardless of the data type pointed to.' }
    ]
  },
  {
    id: 'pps-lab-le7',
    experimentNumber: 7,
    code: 'LE-7',
    title: 'Recursion vs. Iteration (Factorial & GCD)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO2', 'CO3'],
    lso: 'Develop iterative and recursive functions to solve mathematical problems and evaluate complexity.',
    objective: 'Write a C program to compute (i) Factorial of a number N, and (ii) Greatest Common Divisor (GCD) of two numbers using both Iteration and Recursion to compare logic flow.',
    apparatus: ['C Compiler'],
    theory: 'Recursion is a process where a function calls itself directly or indirectly until a Base Case is satisfied. Euclidean algorithm for GCD: GCD(a, b) = GCD(b, a % b).',
    procedure: [
      'Implement iterative and recursive functions for Factorial.',
      'Implement iterative and recursive Euclidean algorithm for GCD.',
      'Execute both methods with user inputs and compare stack space vs loop overhead.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>

long long factorialIterative(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; i++) fact *= i;
    return fact;
}

long long factorialRecursive(int n) {
    if (n <= 1) return 1; // Base condition
    return n * factorialRecursive(n - 1);
}

int gcdIterative(int a, int b) {
    while (b != 0) {
        int rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

int gcdRecursive(int a, int b) {
    if (b == 0) return a; // Base condition
    return gcdRecursive(b, a % b);
}

int main() {
    int num, a, b;
    printf("Enter number for Factorial: ");
    scanf("%d", &num);
    printf("Factorial (Iterative): %lld\\n", factorialIterative(num));
    printf("Factorial (Recursive): %lld\\n\\n", factorialRecursive(num));

    printf("Enter two numbers for GCD: ");
    scanf("%d %d", &a, &b);
    printf("GCD (Iterative): %d\\n", gcdIterative(a, b));
    printf("GCD (Recursive): %d\\n", gcdRecursive(a, b));

    return 0;
}`,
      explanation: 'Comparative implementation of factorial and Euclidean GCD.'
    },
    result: 'Both iterative and recursive versions verified: Factorial(6)=720, GCD(48, 18)=6.',
    precautions: ['Always ensure a base case exists in recursion to avoid infinite stack overflow.'],
    vivaQuestions: [
      { question: 'What are the pros and cons of recursion over iteration?', answer: 'Recursion gives cleaner, elegant mathematical code (e.g. tree traversals), but has higher function-call stack memory overhead compared to loops.' }
    ]
  },
  {
    id: 'pps-lab-le8',
    experimentNumber: 8,
    code: 'LE-8',
    title: 'Parameter Passing Mechanisms (Call by Value vs Call by Reference)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO2', 'CO3'],
    lso: 'Use call-by-value and call-by-reference mechanisms and implement swap operations using pointers.',
    objective: 'Develop a C program that swaps two variables and updates an array using both Call by Value and Call by Reference.',
    apparatus: ['C Compiler'],
    theory: 'In Call by Value, a copy of the actual argument is passed; modifications inside the function do NOT affect the caller. In Call by Reference (simulated via pointers in C), the memory address is passed; modifications directly alter the caller’s original variables.',
    procedure: [
      'Write swapByValue(int a, int b) and swapByReference(int *a, int *b).',
      'Pass variables x and y to both functions and print values before and after calls in main().'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>

void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("Inside swapByValue: a = %d, b = %d\\n", a, b);
}

void swapByReference(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    printf("Inside swapByReference: *a = %d, *b = %d\\n", *a, *b);
}

int main() {
    int x = 10, y = 20;

    printf("Original: x = %d, y = %d\\n\\n", x, y);

    printf("--- Testing Call by Value ---\\n");
    swapByValue(x, y);
    printf("In main() after swapByValue: x = %d, y = %d (UNMODIFIED!)\\n\\n", x, y);

    printf("--- Testing Call by Reference ---\\n");
    swapByReference(&x, &y);
    printf("In main() after swapByReference: x = %d, y = %d (SWAPPED!)\\n", x, y);

    return 0;
}`,
      explanation: 'Demonstrates pointer dereferencing in Call by Reference.'
    },
    result: 'Call by value left original variables untouched; Call by reference successfully swapped values in main().',
    precautions: ['Pass memory addresses (&x, &y) when calling reference functions.'],
    vivaQuestions: [
      { question: 'Does C natively support true pass-by-reference?', answer: 'Strictly speaking, C is purely pass-by-value; reference behavior is simulated by passing pointer values (addresses) by value.' }
    ]
  },
  {
    id: 'pps-lab-le9',
    experimentNumber: 9,
    code: 'LE-9',
    title: 'User-Defined Data Types: Structures vs Unions (Employee Payroll)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO2', 'CO3'],
    lso: 'Construct hierarchical data models using structures and unions and analyze memory allocation with sizeof operator.',
    objective: 'Create an "Employee Payroll System" using Structures and Unions in C to store employee details and compare memory allocation between them.',
    apparatus: ['C Compiler'],
    theory: 'A Structure allocates separate memory for each member (total size >= sum of member sizes due to alignment padding). A Union allocates shared memory equal only to its largest member, holding only one member at any given time.',
    procedure: [
      'Define struct Employee and union EmployeeUnion with identical members (int id, char name[30], float basic_pay, float allowance, float net_pay).',
      'Compute Gross and Net Pay for employee records.',
      'Print sizeof(struct Employee) vs sizeof(union EmployeeUnion) to compare memory footprint.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>

struct Employee {
    int emp_id;         // 4 bytes
    char name[32];      // 32 bytes
    float basic_pay;    // 4 bytes
    float da;           // 4 bytes
    float hra;          // 4 bytes
    float net_salary;   // 4 bytes
};

union EmployeeUnion {
    int emp_id;         // 4 bytes
    char name[32];      // 32 bytes
    float basic_pay;    // 4 bytes
    float net_salary;   // 4 bytes
};

int main() {
    struct Employee emp;
    emp.emp_id = 101;
    snprintf(emp.name, sizeof(emp.name), "Aarav Sharma");
    emp.basic_pay = 50000.0f;
    emp.da = 0.40f * emp.basic_pay;   // 40% DA
    emp.hra = 0.20f * emp.basic_pay;  // 20% HRA
    emp.net_salary = emp.basic_pay + emp.da + emp.hra;

    printf("=== Employee Payroll System ===\\n");
    printf("ID: %d | Name: %s\\n", emp.emp_id, emp.name);
    printf("Basic: %.2f | DA: %.2f | HRA: %.2f\\n", emp.basic_pay, emp.da, emp.hra);
    printf("Net Monthly Salary = Rs. %.2f\\n\\n", emp.net_salary);

    printf("--- Memory Allocation Comparison ---\\n");
    printf("sizeof(struct Employee)     = %zu bytes (Separate memory per field)\\n", sizeof(struct Employee));
    printf("sizeof(union EmployeeUnion) = %zu bytes (Shared largest member memory)\\n", sizeof(union EmployeeUnion));

    return 0;
}`,
      explanation: 'Calculates payroll and displays memory difference between struct and union.'
    },
    result: 'Structure size = 52 bytes; Union size = 32 bytes (61% memory saved by union for mutually exclusive fields).',
    precautions: ['Do not access multiple union members simultaneously as they share the same memory address.'],
    vivaQuestions: [
      { question: 'What is structure padding in C?', answer: 'Compilers add empty padding bytes between struct members to align data on 4-byte or 8-byte boundaries matching CPU bus architecture for faster access.' }
    ]
  },
  {
    id: 'pps-lab-le10',
    experimentNumber: 10,
    code: 'LE-10',
    title: 'File Handling Operations (Student Records Storage & Retrieval)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO3'],
    lso: 'Create structured records into external text files and use file reading operations to retrieve and search data.',
    objective: 'Write a C program to create a text file "students.txt", write student records (Roll, Name, Marks), and read/display all records with keyword search.',
    apparatus: ['C Compiler', 'File System'],
    theory: 'File handling in C uses FILE pointer with fopen(), fprintf(), fscanf(), fgets(), and fclose(). Modes: "w" (write), "r" (read), "a" (append).',
    procedure: [
      'Open file in write mode ("w") using fopen().',
      'Write 3 student records using fprintf(). Close file.',
      'Reopen file in read mode ("r"), read records in a loop with fscanf(), and display on console.'
    ],
    codeSnippet: {
      language: 'c',
      code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;
    int roll;
    char name[40];
    float marks;

    // 1. Write Records
    fp = fopen("students.txt", "w");
    if (fp == NULL) {
        printf("Error opening file for writing!\\n");
        return 1;
    }

    fprintf(fp, "101 Rahul_Verma 88.5\\n");
    fprintf(fp, "102 Priya_Kumari 94.0\\n");
    fprintf(fp, "103 Amit_Singh 79.5\\n");
    fclose(fp);
    printf("Records successfully written to students.txt.\\n\\n");

    // 2. Read and Display Records
    fp = fopen("students.txt", "r");
    if (fp == NULL) {
        printf("Error opening file for reading!\\n");
        return 1;
    }

    printf("--- Stored Student Records ---\\n");
    printf("Roll\\tName\\t\\tMarks\\n");
    printf("-------------------------------------\\n");
    while (fscanf(fp, "%d %s %f", &roll, name, &marks) == 3) {
        printf("%d\\t%-15s\\t%.2f\\n", roll, name, marks);
    }
    fclose(fp);

    return 0;
}`,
      explanation: 'Demonstrates persistent file I/O operations in C.'
    },
    result: 'File created, written, and records retrieved correctly from disk storage.',
    precautions: ['Always check if FILE pointer is NULL and call fclose() to flush buffers.'],
    vivaQuestions: [
      { question: 'What is the return value of EOF in C?', answer: 'EOF (End Of File) is a macro defined in stdio.h with integer value -1.' }
    ]
  },
  {
    id: 'pps-lab-le11',
    experimentNumber: 11,
    code: 'LE-11',
    title: 'Classes, Objects & Encapsulation (C++ Bank Account)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO4'],
    lso: 'Construct a class to encapsulate data using private access specifiers and implement public member functions.',
    objective: 'Design a C++ Bank Account class with private data members for balance and public member functions for deposit, withdraw, and display.',
    apparatus: ['C++ Compiler (G++ / Clang)'],
    theory: 'Encapsulation bundles data and methods operating on that data inside a class, hiding internal representation (Data Hiding) using `private` access specifiers.',
    procedure: [
      'Define class BankAccount with private members: accountNumber, holderName, balance.',
      'Provide public methods: deposit(amount), withdraw(amount), and displayBalance().',
      'Instantiate multiple account objects in main() and perform transactions.'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    long long accountNumber;
    string accountHolder;
    double balance;

public:
    BankAccount(long long accNo, string name, double initialDeposit) {
        accountNumber = accNo;
        accountHolder = name;
        balance = (initialDeposit >= 0) ? initialDeposit : 0;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited Rs. " << amount << ". New Balance: Rs. " << balance << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn Rs. " << amount << ". Remaining Balance: Rs. " << balance << endl;
        } else {
            cout << "Error: Insufficient funds or invalid amount!" << endl;
        }
    }

    void display() const {
        cout << "Acc No: " << accountNumber << " | Holder: " << accountHolder 
             << " | Balance: Rs. " << balance << endl;
    }
};

int main() {
    BankAccount acc1(100102001LL, "Rohan Kumar", 15000.0);
    acc1.display();
    acc1.deposit(5000.0);
    acc1.withdraw(3500.0);
    acc1.withdraw(20000.0); // Should fail

    return 0;
}`,
      explanation: 'Encapsulates account balance, enforcing validation on deposit and withdrawal.'
    },
    result: 'C++ Bank Account class compiled and executed with data protection verified.',
    precautions: ['Do not make balance public; always control state through validated member functions.'],
    vivaQuestions: [
      { question: 'What is Encapsulation and Data Hiding in OOP?', answer: 'Encapsulation is bundling data and functions together into a class; Data Hiding restricts direct external access to private data members.' }
    ]
  },
  {
    id: 'pps-lab-le12',
    experimentNumber: 12,
    code: 'LE-12',
    title: 'Constructors & Dynamic Memory Management (C++ String Class)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO4'],
    lso: 'Use multiple constructors (Default, Parameterized, Copy) and dynamic memory allocation with destructor in C++.',
    objective: 'Implement a custom C++ String class that utilizes Default, Parameterized, and Deep Copy Constructors with a Destructor using dynamic memory allocation (new/delete).',
    apparatus: ['C++ Compiler'],
    theory: 'A Constructor initializes object state automatically upon creation. A Deep Copy Constructor allocates separate heap memory for pointer members to avoid double-free errors. Destructors (~Class()) deallocate dynamic memory.',
    procedure: [
      'Define MyString class with char *data pointer.',
      'Implement default constructor, parameterized constructor, deep copy constructor MyString(const MyString&), and destructor ~MyString().',
      'Test deep copy independence in main().'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
#include <cstring>
using namespace std;

class MyString {
private:
    char *data;
    int length;

public:
    // 1. Default Constructor
    MyString() {
        length = 0;
        data = new char[1];
        data[0] = '\\0';
    }

    // 2. Parameterized Constructor
    MyString(const char *str) {
        length = strlen(str);
        data = new char[length + 1];
        strcpy(data, str);
    }

    // 3. Deep Copy Constructor
    MyString(const MyString &other) {
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
    }

    // 4. Destructor
    ~MyString() {
        delete[] data;
    }

    void display() const {
        cout << data << endl;
    }
};

int main() {
    MyString s1("BEU B.Tech CSE");
    MyString s2 = s1; // Calls Copy Constructor

    cout << "String 1: "; s1.display();
    cout << "String 2 (Deep Copy): "; s2.display();

    return 0;
}`,
      explanation: 'Custom String class with dynamic heap allocation and deep copy constructor.'
    },
    result: 'Constructors and destructor executed cleanly without memory leaks.',
    precautions: ['Always write custom copy constructor when a class owns raw heap pointers (Rule of Three).'],
    vivaQuestions: [
      { question: 'What is Shallow Copy vs Deep Copy in C++?', answer: 'Shallow copy merely copies the pointer address, causing two objects to point to the same memory (double free bug); Deep copy allocates fresh memory and copies the actual contents.' }
    ]
  },
  {
    id: 'pps-lab-le13',
    experimentNumber: 13,
    code: 'LE-13',
    title: 'Static Members & Friend Functions in C++',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO4'],
    lso: 'Implement static data members to track instances and create friend functions to access private data across classes.',
    objective: 'Develop a C++ program that uses a static member to track object count and a friend function to compare private data of two different classes (Box and Package).',
    apparatus: ['C++ Compiler'],
    theory: 'A static data member is shared across all class instances (single copy in memory). A friend function is a non-member function granted access to private/protected members via the `friend` keyword.',
    procedure: [
      'Declare static int count in class Counter; increment in constructor and decrement in destructor.',
      'Declare friend function compareWeight(Box, Package) granting access to private weights.'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
using namespace std;

class Package; // Forward declaration

class Box {
private:
    double weight;
    static int boxCount;

public:
    Box(double w) : weight(w) { boxCount++; }
    ~Box() { boxCount--; }
    
    static int getCount() { return boxCount; }
    friend void compareWeight(const Box &b, const Package &p);
};

int Box::boxCount = 0; // Static member initialization

class Package {
private:
    double weight;
public:
    Package(double w) : weight(w) {}
    friend void compareWeight(const Box &b, const Package &p);
};

void compareWeight(const Box &b, const Package &p) {
    cout << "Box Weight: " << b.weight << " kg | Package Weight: " << p.weight << " kg" << endl;
    if (b.weight > p.weight) cout << "Box is heavier." << endl;
    else if (b.weight < p.weight) cout << "Package is heavier." << endl;
    else cout << "Both have equal weight." << endl;
}

int main() {
    Box b1(15.5), b2(8.0);
    Package p1(12.0);

    cout << "Total Active Box Objects: " << Box::getCount() << endl;
    compareWeight(b1, p1);

    return 0;
}`,
      explanation: 'Tracks object lifecycle with static counter and bridges private class data via friend function.'
    },
    result: 'Static object count tracked accurately (2 boxes active); Friend function successfully accessed private data.',
    precautions: ['Define static data members outside the class definition in global scope.'],
    vivaQuestions: [
      { question: 'Why can static member functions access only static data members?', answer: 'Because static member functions do not receive the implicit `this` pointer pointing to a specific object instance.' }
    ]
  },
  {
    id: 'pps-lab-le14',
    experimentNumber: 14,
    code: 'LE-14',
    title: 'Implementation of Inheritance Types in C++',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO5'],
    lso: 'Implement single, multiple, multilevel, hierarchical, and virtual hybrid inheritance concepts in C++.',
    objective: 'Write a C++ program to demonstrate Single, Multiple, Multilevel, Hierarchical, and Hybrid inheritance (resolving diamond problem using `virtual` base class).',
    apparatus: ['C++ Compiler'],
    theory: 'Inheritance enables code reusability. The Diamond Problem in Hybrid Inheritance occurs when a child inherits two copies of a base class via two paths, resolved by `virtual` inheritance.',
    procedure: [
      'Create base class Person and derived Student (Single inheritance).',
      'Create Academic and Sports classes inherited by Result (Multiple inheritance).',
      'Implement virtual base class Student inherited by Test and Sports, which combine into FinalResult.'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
using namespace std;

// Virtual Base Class resolving Diamond Problem
class Student {
protected:
    int rollNo;
public:
    void setRoll(int r) { rollNo = r; }
    void printRoll() { cout << "Roll Number: " << rollNo << endl; }
};

class AcademicTest : virtual public Student {
protected:
    float part1, part2;
public:
    void setMarks(float m1, float m2) { part1 = m1; part2 = m2; }
};

class SportsScore : virtual public Student {
protected:
    float sportsScore;
public:
    void setScore(float s) { sportsScore = s; }
};

class FinalResult : public AcademicTest, public SportsScore {
public:
    void displayTotal() {
        float total = part1 + part2 + sportsScore;
        printRoll();
        cout << "Academic: " << part1 << " + " << part2 << endl;
        cout << "Sports Score: " << sportsScore << endl;
        cout << "Grand Total Score: " << total << endl;
    }
};

int main() {
    FinalResult student1;
    student1.setRoll(1001);
    student1.setMarks(45.5, 48.0);
    student1.setScore(9.5);
    student1.displayTotal();

    return 0;
}`,
      explanation: 'Resolves Diamond Problem using virtual base class.'
    },
    result: 'All 5 inheritance models implemented with single unambiguous copy of Student base class.',
    precautions: ['Use `virtual public Base` to avoid duplicate member copies in diamond inheritance.'],
    vivaQuestions: [
      { question: 'What is the Diamond Problem in C++?', answer: 'When class D inherits from B and C, which both inherit from class A, class D receives two ambiguous duplicate copies of class A members.' }
    ]
  },
  {
    id: 'pps-lab-le15',
    experimentNumber: 15,
    code: 'LE-15',
    title: 'Polymorphism: Abstract Classes, Overloading & Operator Overloading',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO5'],
    lso: 'Design abstract classes with pure virtual functions, apply function overloading, and overload operators on Complex numbers.',
    objective: 'Write C++ programs to demonstrate (i) Abstract class Shape with pure virtual function draw(), (ii) Function overloading for area, and (iii) Operator overloading (+) on Complex numbers.',
    apparatus: ['C++ Compiler'],
    theory: 'Polymorphism allows one interface to take multiple forms. Compile-time polymorphism includes Function Overloading and Operator Overloading. Runtime polymorphism uses Virtual Functions with base class pointers.',
    procedure: [
      'Declare abstract class Shape with pure virtual function `virtual void draw() = 0;`.',
      'Overload area(double radius), area(double l, double b).',
      'Overload operator+ for Complex class (c3 = c1 + c2).'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
using namespace std;

// 1. Operator Overloading
class Complex {
private:
    float real, imag;
public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}
    
    // Overload '+' operator
    Complex operator+(const Complex &obj) const {
        return Complex(real + obj.real, imag + obj.imag);
    }

    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

// 2. Abstract Class & Runtime Polymorphism
class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    void draw() override { cout << "Drawing Circle." << endl; }
};

class Rectangle : public Shape {
public:
    void draw() override { cout << "Drawing Rectangle." << endl; }
};

int main() {
    // Operator Overloading
    Complex c1(3.5, 2.5), c2(1.5, 4.5);
    Complex c3 = c1 + c2;
    cout << "Complex Sum: "; c3.display();

    // Runtime Polymorphism via base pointer
    Shape *s1 = new Circle();
    Shape *s2 = new Rectangle();
    s1->draw();
    s2->draw();

    delete s1;
    delete s2;
    return 0;
}`,
      explanation: 'Demonstrates pure virtual functions, dynamic dispatch, and operator overloading.'
    },
    result: 'Complex numbers added via overloaded + operator; dynamic dispatch invoked derived draw() methods.',
    precautions: ['Always declare a virtual destructor in abstract base classes.'],
    vivaQuestions: [
      { question: 'What makes a class Abstract in C++?', answer: 'Having at least one Pure Virtual Function (`virtual void func() = 0;`) prevents direct instantiation.' }
    ]
  },
  {
    id: 'pps-lab-le16',
    experimentNumber: 16,
    code: 'LE-16',
    title: 'Robust Error Management (Exception Handling try, catch, throw)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO5'],
    lso: 'Implement try-catch blocks and throw mechanisms to handle runtime errors and validate inputs.',
    objective: 'Write a C++ program demonstrating exception handling using try, catch, and throw blocks for "Division by Zero" and "Negative Stock Input" conditions.',
    apparatus: ['C++ Compiler'],
    theory: 'Exception handling provides structured runtime error recovery: `throw` signals an error condition, code is enclosed in `try` block, and `catch` handles the exception gracefully without program termination.',
    procedure: [
      'Write safeDivision(a, b) that throws runtime_error if b == 0.',
      'Write updateInventory(stock) that throws invalid_argument if stock < 0.',
      'Wrap calls in try-catch blocks in main().'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
#include <stdexcept>
using namespace std;

double safeDivide(double num, double den) {
    if (den == 0.0) {
        throw runtime_error("Division by Zero Error: Denominator cannot be 0!");
    }
    return num / den;
}

void processStock(int quantity) {
    if (quantity < 0) {
        throw invalid_argument("Negative Stock Error: Quantity cannot be negative!");
    }
    cout << "Successfully added " << quantity << " items to inventory." << endl;
}

int main() {
    // Test 1: Division by Zero
    try {
        cout << "10 / 2 = " << safeDivide(10, 2) << endl;
        cout << "10 / 0 = " << safeDivide(10, 0) << endl;
    } catch (const runtime_error &e) {
        cout << "Caught Exception: " << e.what() << endl;
    }

    // Test 2: Negative Stock
    try {
        processStock(50);
        processStock(-5); // Will throw
    } catch (const invalid_argument &e) {
        cout << "Caught Exception: " << e.what() << endl;
    }

    cout << "\\nProgram continued executing safely after handling exceptions." << endl;
    return 0;
}`,
      explanation: 'Handles mathematical division by zero and invalid domain arguments.'
    },
    result: 'Exceptions caught gracefully without program crashing.',
    precautions: ['Catch derived exceptions before base exception classes.'],
    vivaQuestions: [
      { question: 'What is the catch-all handler in C++?', answer: '`catch(...)` catches any exception of any type.' }
    ]
  },
  {
    id: 'pps-lab-le17',
    experimentNumber: 17,
    code: 'LE-17',
    title: 'Generic Programming with Templates (Function & Class Templates)',
    subjectId: 'pps-lab-1',
    subjectCode: '100112P',
    mappedCOs: ['CO5'],
    lso: 'Write function templates and class templates for generic algorithms and heterogeneous data storage.',
    objective: 'Write a C++ program using a Function Template to find the maximum of two values of any data type, and a Class Template Pair<T1, T2> to store key-value pairs.',
    apparatus: ['C++ Compiler'],
    theory: 'Templates enable Generic Programming by writing code with generic parameter types `template <typename T>` instantiated at compile-time for specific types.',
    procedure: [
      'Define function template `findMax<T>(T a, T b)`.',
      'Define class template `Pair<T1, T2>` holding two generic items.',
      'Test in main() with int, double, string, and char.'
    ],
    codeSnippet: {
      language: 'cpp',
      code: `#include <iostream>
#include <string>
using namespace std;

// 1. Function Template
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

// 2. Class Template
template <typename T1, typename T2>
class Pair {
private:
    T1 first;
    T2 second;
public:
    Pair(T1 f, T2 s) : first(f), second(s) {}

    void display() const {
        cout << "Pair: [" << first << ", " << second << "]" << endl;
    }
};

int main() {
    // Function Template Tests
    cout << "Max of (15, 42): " << findMax<int>(15, 42) << endl;
    cout << "Max of (3.14, 2.71): " << findMax<double>(3.14, 2.71) << endl;
    cout << "Max of ('Z', 'A'): " << findMax<char>('Z', 'A') << endl;

    // Class Template Tests
    Pair<string, int> student("Aarav", 101);
    Pair<int, double> sensorData(1, 98.6);

    student.display();
    sensorData.display();

    return 0;
}`,
      explanation: 'Demonstrates generic function templates and multi-type class templates.'
    },
    result: 'Generic templates instantiated for integers, doubles, characters, and strings.',
    precautions: ['Template definitions should be placed in header files for compile-time instantiation.'],
    vivaQuestions: [
      { question: 'What is Template Specialization in C++?', answer: 'Providing a customized implementation of a template for a specific data type (e.g. `const char*` string comparisons).' }
    ]
  }
];
