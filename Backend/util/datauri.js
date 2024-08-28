
import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;


 /* 
    * DataURI हा एक library आहे जो data URIs तयार करण्यासाठी वापरला जातो. data URIs म्हणजे images किंवा अन्य files च्या contents 
    ला एक string मध्ये encode करून inline format मध्ये ठेवणे, जेणेकरून त्या file ला external server वरून download करण्याची आवश्यकता नसते.

    ^ MERN stack च्या backend मध्ये DataURI चा वापर विशेषतः तेव्हा होतो, जेव्हा आपल्याला images किंवा अन्य files च्या binary data ला एका URL मध्ये convert 
    करायचे असते. हे उपयोगी असते ज्या वेळी आपण फाइल्स cloud services वर अपलोड करत असता, जसे की Cloudinary.

    * उदाहरणार्थ, एखादी image file आपल्याला Cloudinary वर अपलोड करायची असेल, तर DataURI चा वापर करून त्या file ला base64 string मध्ये convert
     केले जाते. त्यानंतर हा string Cloudinary च्या API ला पाठवून, त्या image चा URL प्राप्त केला जातो, जो आपण database मध्ये save करू शकतो.

    ? DataURI library सोप्या पद्धतीने file data ला data URI मध्ये convert करण्याची सुविधा देते, ज्यामुळे backend कोड अधिक कार्यक्षम आणि सोपा बनतो.
 */