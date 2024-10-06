import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dg7swxjgw', 
  api_key: '636275396251145', 
  api_secret: 'tEUtfoDcxachCw5egQv7VRYHN88' 
});


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

export default cloudinary 