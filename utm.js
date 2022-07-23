

import {review_tags,email2} from "./export.js"

document.getElementById("importreview-5").innerHTML=review_tags();
document.getElementById("importemail-5").innerHTML=email2();





// let cont=document.getElementById("first-5")

// let count=0
// function func1(){
//   count++;
//   append()
// }

// function append(){
//     if(count%2==1){
       
//        let p=document.createElement("p")
//        p.innerText="UTM or Urchin Tracking Module is a simple code that can be attached to any URL to generate Google Analytics data for digital campaigns. These UTM parameters are attached at the end of a URL/link that directs to a page on your website. These help you easily track the metrics related to the performance of campaigns such as paid ad or affiliate. There are five types of UTM parameters, each one covering a separate data segment."

//        let p1=document.createElement("p");
//        p1.innerText="utm_source — source where your traffic originates, e.g. from google search, email opens and clicks, facebook, bing, etc."

//        let p2=document.createElement("p");
//        p2.innerText="utm_medium — the medium that your source uses. For example, if the utm_source is email, the utm_medium could be “newsletter”. Alternatively, Pay-Per-Click (PPC) campaigns on Google or Facebook would ideally use utm_medium=CPC, etc."

//        let p3=document.createElement("p");
//        p3.innerText="utm_campaign — your campaign’s name, e.g. “BlackFridayOffer”, 01-twitter-ads-EU,first-fortnightly-newsletter-2021-08, any-convenient-campaign-name"

//        let p4=document.createElement("p");
//        p4.innerText="utm_content — the particular variant of your content that you are showing with your link. For any particular campaign, you may want to show different types of content. Utm_content identifies the type that has been served to the reader, so you may analyze its performance at a later time. Some examples: “tan-lotion-2020-variant-SPF50” or “summer-fashion-2020-collection-3”."
    
//        let p5=document.createElement("p")
//        p5.innerText="utm_term — the best practice for this parameter is to use relevant keywords, if necessary"


//        let p6=document.createElement("p")
//        p6.innerText="Mandatory parameter: utm_source."

//        let p7=document.createElement("p")
//        p7.innerText="Best practices parameters: utm_source, utm_medium, utm_campaign."

//        cont.append(p,p1,p2,p3,p4,p5,p6,p7)


//     }
//     if(count%2==0){
//         cont.innerHTML=null;
//     }
//     else if(count==0){
//       let p=document.createElement("p")
//        p.innerText="UTM or Urchin Tracking Module is a simple code that can be attached to any URL to generate Google Analytics data for digital campaigns. These UTM parameters are attached at the end of a URL/link that directs to a page on your website. These help you easily track the metrics related to the performance of campaigns such as paid ad or affiliate. There are five types of UTM parameters, each one covering a separate data segment."

//        let p1=document.createElement("p");
//        p1.innerText="utm_source — source where your traffic originates, e.g. from google search, email opens and clicks, facebook, bing, etc."

//        let p2=document.createElement("p");
//        p2.innerText="utm_medium — the medium that your source uses. For example, if the utm_source is email, the utm_medium could be “newsletter”. Alternatively, Pay-Per-Click (PPC) campaigns on Google or Facebook would ideally use utm_medium=CPC, etc."

//        let p3=document.createElement("p");
//        p3.innerText="utm_campaign — your campaign’s name, e.g. “BlackFridayOffer”, 01-twitter-ads-EU,first-fortnightly-newsletter-2021-08, any-convenient-campaign-name"

//        let p4=document.createElement("p");
//        p4.innerText="utm_content — the particular variant of your content that you are showing with your link. For any particular campaign, you may want to show different types of content. Utm_content identifies the type that has been served to the reader, so you may analyze its performance at a later time. Some examples: “tan-lotion-2020-variant-SPF50” or “summer-fashion-2020-collection-3”."
    
//        let p5=document.createElement("p")
//        p5.innerText="utm_term — the best practice for this parameter is to use relevant keywords, if necessary"


//        let p6=document.createElement("p")
//        p6.innerText="Mandatory parameter: utm_source."

//        let p7=document.createElement("p")
//        p7.innerText="Best practices parameters: utm_source, utm_medium, utm_campaign."

//        cont.append(p,p1,p2,p3,p4,p5,p6,p7)

      
//     }

// }

// let cont1=document.getElementById("second-5")
// let c1=0
// function func2(){
//     c1++;
//     append2()
//   }

// function append2(){
//     if(c1%2==1){
//         let p=document.createElement("p")
//         p.innerText="There are two different ways to create an UTM code. The easier one is to use our own UTM builder. This will automatically generate a customized, ready-to-use URL based on your inputs."
    
//         let p1=document.createElement("p")
//         p1.innerText="The other way is to create the tracking URL manually, by adding each UTM parameter at the end of your link, attached with special characters such as the “?” symbol after the primary part of your URL, followed by the “&” symbol between all parameters."
    
//         let p2=document.createElement("p")
//         p2.innerText="A properly tagged URL would then look like this:"
    
//         let p3=document.createElement("p")
//         p3.innerText="https://www.xyzabc.com/?utm_source=google&utm_medium=cpc&utm_campaign=03-october-campaign&utm_term=page-visitors-targeting&utm_content=type-c-USA-ad"

//         cont1.append(p,p1,p2,p3)
//     }
//     if(c1%2==0){
//         cont1.innerHTML=null;
//     }
    
// }


// let cont2=document.getElementById("third-5")
// let c2=0
// function func3(){
//     c2++;
//     append3()
//   }

//   function append3(){
//     if(c2%2==1){
//         let p=document.createElement("p")
//         p.innerText="In the event that you are running paid ad campaigns on Twitter, the best option is to use utm_source as Twitter, utm_medium as CPC. For utm_term it is recommended that you describe the name of the relevant adgroup segmentation with some descriptive terms, e.g.. “18-40-interested-in-SUVs”. utm_content could be the specific variant of your ad. In case you are running a/b tests for your ads, you might want to identify the better-performing version. The best practice is to generate two separate links with different utm_content for each ad in the same ad group/campaign."

//         cont2.append(p)
//     }else{
//         cont2.innerHTML=null;
//     }
//   }

//   let cont3=document.getElementById("forth-5")
//   let c3=0;

//   function func4(){
//     c3++;
//     append4()
//   }

//   function append4(){
//     if(c3%2==1){
//         let p=document.createElement("p")
//         p.innerText="For Google Ads, you really don’t need to use UTMs to evaluate their performance in your Google Analytics tracking property. Here, you simply link both the ad account and the GA (Google Analytics) account to enable sending data with a ‘gclid' parameter of the ad. This will allow you to automatically create an internal link between click and session, and also import data both ways without having to create any additional setup. It is simpler, more convenient and more accurate than using UTM for Google Ads tracking."

//         cont3.append(p)
//     }else{
//         cont3.innerHTML=null;
//     }
//   }

//   let cont4=document.getElementById("fifth-5")
//   let c4=0;

//   function func5(){
//     c4++;
//     append5()
//   }

//   function append5(){
//     if(c4%2==1){
//         let p=document.createElement("p")
//         p.innerText="Like internet passwords, UTM codes are also case sensitive - the convenient way to go about it is to use small cases and be consistent with your naming pattern. It gets easier with our tool which you can use to switch between lowercase and uppercase letters on the fly. Additionally, we have also enabled an option to remove spaces and replace them with a dash."

//         cont4.append(p)
//     }
//     else{
//         cont4.innerHTML=null;
//     }
//   }



