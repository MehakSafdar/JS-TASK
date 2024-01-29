 // Function to convert Word document to PDF using ConvertAPI
 async function convertToPDFUsingAPI(file) {
        try {        
// API ko import kro with the help of function (incase if I have to use it another time anywhere)
const ConvertApi = require('convertapi-js');
// secret key insert kro (authenticatation ky liye )
const convertApi = ConvertApi.auth('1tFCVfMy2kl1yq9Y')
// parameters done 
const params = convertApi.createParams();
// select file ko parameters mein add kro 
params.add('File', elFileInput.files[0]);
// this will perform the conversion of doc to pdf using API 
const result = await convertApi.convert('docx', 'pdf', params);

            } catch (error) {
                console.error('Error during conversion:', error.message);
            }
        }