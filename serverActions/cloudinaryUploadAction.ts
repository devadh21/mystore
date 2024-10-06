"use server";
import cloudinary from "@/cloudinaryconfig";

async function cloudinaryUploadAction(
  formdata: FormData,
) {
  // cloudinary.uploader.rename('products/honey orange', 'new_name')
  // await cloudinary.uploader.explicit('products/honey orange')
  // .then(result=>console.log("result",result));

  // console.log("result")



  let url: string | undefined = "";
  const image_name = formdata.get("name") as string; // get product name .
  const image_file = formdata.get("img_url") as File; // get file img  .

  //buffer file img
  const arrayBuffer = await image_file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  
  // Upload  image to Cloudinary
  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { public_id: image_name }, // rename public_id  with name of the uploaded file.
        function (error, result) {
          if (error) return reject(error);
          url = result!.secure_url;
          resolve(result);
        }
      )
      .end(buffer);
  });

  return url;
}

export default cloudinaryUploadAction;
