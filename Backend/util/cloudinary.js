
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
export default cloudinary;

/* 
  ? Cloudinary हे एक cloud-based media management platform आहे, जे मुख्यत्वे images, videos, आणि अन्य media files चं storage, optimization, 
  आणि delivery करण्यासाठी वापरलं जातं. MERN stack मध्ये Cloudinary चा वापर images किंवा videos store करण्यासाठी होतो, जेव्हा आपण user uploads manage
   करतो.
 
  * उदाहरणार्थ, एक e-commerce website मध्ये, users त्यांच्या profile साठी images अपलोड करू शकतात किंवा product photos अपलोड करू शकतात. 
   हे images लोकल storage मध्ये save करण्याऐवजी, Cloudinary सारख्या cloud service मध्ये save करून, त्यांचे URLs आपल्या database मध्ये save केले जातात. 
   त्यामुळे, images secure आणि scalable पद्धतीने store होतात, आणि हे images CDN (Content Delivery Network) द्वारे वेगाने serve केले जातात, 
   ज्यामुळे website ची performance वाढते.
 
  ^ Cloudinary चा वापर करण्यासाठी, आपण Cloudinary च्या npm package install करून, images किंवा videos upload करण्यासाठी API integration करू शकता. 
  Cloudinary automatic image optimization आणि transformation देखील पुरवते, ज्यामुळे आपली website अधिक वेगवान आणि efficient बनते.

*/