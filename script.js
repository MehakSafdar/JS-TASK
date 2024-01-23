document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const fileInput = document.getElementById('fileInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    // Add a click event listener to the convertBtn
    convertBtn.addEventListener('click', () => {
        // Check if a file is selected
        if (fileInput.files.length > 0) {
            // Call the convertToPDF function with the selected file
            convertToPDF(fileInput.files[0]);
        }
    });

    // Function to convert Word document to PDF using ConvertAPI
    async function convertToPDF(file) {
        try {
            // Use ConvertAPI to convert the Word document to PDF
            const pdfBlob = await convertToPDFUsingAPI(file);

            // Create a Blob URL for the converted PDF
            const pdfBlobUrl = URL.createObjectURL(pdfBlob);

            // Open the converted PDF in a new tab or window
            window.open(pdfBlobUrl, '_blank');

            // Display a success message in the resultDiv
            const conversionResult = 'Conversion successful! PDF opened.';
            resultDiv.innerHTML = conversionResult;
        } catch (error) {
            console.error('Error during conversion:', error);
            resultDiv.innerHTML = 'Conversion failed. Please try again.';
        }
    }

    // Function to convert Word document to PDF using ConvertAPI
    function convertToPDFUsingAPI(file) {
        
import ConvertApi from 'convertapi-js'
let convertApi = ConvertApi.auth('1tFCVfMy2kl1yq9Y')
let params = convertApi.createParams()
params.add('File', elFileInput.files[0]);
let result = await convertApi.convert('docx', 'pdf', params)

            } catch (error) {
                reject(error);
            }
        });
