 // Function to convert Word document to PDF using ConvertAPI
    function convertToPDFUsingAPI(file) {
        
// API ko import kro with the help of function (incase if I have to use it another time anywhere)
import ConvertApi from 'convertapi-js'
// secret key insert kro (authenticatation ky liye )
let convertApi = ConvertApi.auth('1tFCVfMy2kl1yq9Y')
// parameters done 
let params = convertApi.createParams()
// select file ko parameters mein add kro 
params.add('File', elFileInput.files[0]);
// this will perform the conversion of doc to pdf using API 
let result = await convertApi.convert('docx', 'pdf', params)

            } catch (error) {
                // for error
                reject(error);
            }
