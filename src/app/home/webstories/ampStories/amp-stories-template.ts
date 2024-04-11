

export const ampStoryTemplate=(storyPage:string)=>{ return `
<amp-story publisher-logo-src="http://balindra.com/favicon.ico" poster-portrait-src="https://static.toiimg.com/thumb/msid-100270635,width-960,height-1280,resizemode-6.cms" publisher="Navbharat Times" title="मैच्योर पुरुष रिश्ते में कभी नहीं करते ये काम" standalone>
      <amp-analytics type="googleanalytics" style="width:1px;height:1px;" id="gatracker" data-block-on-consent="data-block-on-consent">
        <script type="application/json">{ "vars": { "account": "UA-429254-3" }, "extraUrlParams" : { "cd1": "web_story", "cd4": "shagun-bhagwane","cd22": "Navbharattimes" }, "triggers": { "linkClick2": { "on": "click", "selector": "#btn_link", "request": "event", "vars": { "event_name": "cta_click", "eventCategory": "", "eventAction": "cta-click", "event_label": "" } }, "linkClick" : { "on": "click", "selector": "#btn_link_next", "request": "event", "vars": { "event_name": "click_readmore", "eventCategory": "WEB_VisualStories", "eventAction": "click_readmore", "eventLabel": "NBTonline_https://navbharattimes.indiatimes.com/web-stories/lifestyle/relationship-advice-these-things-can-destroy-your-relationship-know-tips-to-save/photoshow/100269564.cms" }, "extraUrlParams" : { "cd5": "Google AMP", "cm4": 1 } }, "storyPageVisible": { "on": "story-page-visible", "request": "pageview", "vars": { "title": "मैच्योर पुरुष रिश्ते में कभी नहीं करते ये काम", "documentLocation": "/web-stories/lifestyle/mature-men-never-do-these-things-in-a-relationship/photoshow/100270611.cms?" }, "extraUrlParams" : { "cd5": "Google AMP web stories", "cd33": "" } }, "tooltipClickThrough": { "on": "story-click-through", "request": "pageview", "selector": "#rc1", "vars": { "event_name": "custom", "event_action": "click-midscreen-webstory", "event_category": "web_story", "event_label": "https://navbharattimes.indiatimes.com/web-stories/lifestyle/mature-men-never-do-these-things-in-a-relationship/photoshow/100270611.cms", "send_to": ["UA-429254-3"] } }, "tooltipClickThrough": { "on": "story-click-through", "request": "pageview", "selector": "#rc2", "vars": { "event_name": "custom", "event_action": "click-midscreen-webstory", "event_category": "web_story", "event_label": "https://navbharattimes.indiatimes.com/web-stories/lifestyle/mature-men-never-do-these-things-in-a-relationship/photoshow/100270611.cms", "send_to": ["UA-429254-3"] } } } }</script>
      </amp-analytics>
      <amp-analytics data-block-on-consent type="comscore">
        <script type="application/json">{ "vars":{"c1":"2", "c2":"6036484"}, "extraUrlParams": { "comscorekw": "amp" }, "triggers": { "storyPageview": { "on": "story-page-visible", "request": "pageview" } } }</script>
      </amp-analytics>
      <amp-analytics id="ibeatanalytics" type="ibeatanalytics">
        <script type="application/json">{ "vars": { "d":"navbharattimes.indiatimes.com" } ,"triggers": { "storyPageVisible": { "on": "story-page-visible", "request": "track", "vars": { "sourceUrl": "https://navbharattimes.indiatimes.com/web-stories/lifestyle/mature-men-never-do-these-things-in-a-relationship/photoshow/100270611.cms?", "requestCount": 1 } } } }</script>
      </amp-analytics>
  
      ${storyPage}

     

     
      <amp-story-auto-ads>
        <script type="application/json"> { "ad-attributes": { "type": "doubleclick", "data-slot": "/7176/NBT_AMP/NBT_AMP_Others/NBT_AMP_Others_WebstoriesAd1" } } </script>
      </amp-story-auto-ads>
      </amp-story>`;
}



    export const allStoryPage=(storyData:any)=>{
     
      let x=""
      for(let i=0;i<storyData.length;i++){
       
         x = `${x}
         <amp-story-page class="cover" auto-advance-after="" id="amp-cover">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" class="image" layout="responsive" src="http://balindra.com/post/${storyData[i].web_img1}" alt="मैच्योर पुरुष रिश्ते में कभी नहीं करते ये काम"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer template="vertical">
           <div class="logo tech-show">
             <amp-img layout="fixed" class="logo" src="http://balindra.com/favicon.ico" width="80" height="28"></amp-img>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div class="inner-align-end tech-show">
             <h1 class="phone-heading-lang">${storyData[i].web_heading1}</h1>
             <p class="amp-cover__date date">${storyData[i].web_date}</p><b class="amp-cover__author author">By: ${storyData[i].post_author}</b></div>
         </amp-story-grid-layer>
       </amp-story-page>

      
      <amp-story-page class="slide" auto-advance-after="" id="page2">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img1}" alt="इन्हें आता है रिश्ता संभालना"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-top" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-top ooh" animate-in="fly-in-top">
             <h2 class="story_title"><span>${storyData[i].web_heading1}</span></h2>
             <p class="summary">${storyData[i].web_heading_desc1}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr"><a href="http://balindra.com/">Go to Home</a></p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

       
       <amp-story-page class="slide" auto-advance-after="" id="page3">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img2}" alt="जेंटलमैन होते हैं ये लोग"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading2}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc2}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

      
       <amp-story-page class="slide" auto-advance-after="" id="page4">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img3}" alt="कभी नहीं करते ये काम"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-top" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-top ooh" animate-in="fly-in-top">
           <h2 class="story_title"><span>${storyData[i].web_heading3}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc3}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

       
       <amp-story-page class="slide" auto-advance-after="" id="page5">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img4}" alt="लुक्स पर No कमेंट्स"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading4}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc4}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

      
       
       <amp-story-page class="slide" auto-advance-after="" id="page6">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img5}" alt="पर्सनल स्पेस में दखलअंदाज़ी नहीं"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading5}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc5}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

       
       <amp-story-page class="slide" auto-advance-after="1x8fi419o6" id="page7">
         <amp-story-grid-layer template="fill">
           <div class="video-overlay">
             <amp-video id="1x8fi419o6" layout="fill" height="1280" width="720" autoplay cache="google" poster="http://balindra.com/post/${storyData[i].web_img6}">
               <source type="video/mp4" src="https://www.youtube.com/watch?v=x2HQv5W4JVU"></source>
               <!--/amp_web_stories_videoinfo.cms?_id=1x8fi419o6&ext=xml&v=100&crosshostconfig=354_1&type=video_sourcepotime:3-->
             </amp-video>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading6}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc6}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

      
       <amp-story-page class="slide" auto-advance-after="" id="page8">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img7}" alt="आपकी वैल्यू"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading7}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc7}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

      
       <amp-story-page class="slide" auto-advance-after="" id="page9">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img8}" alt="ऑप्शन की तरह नहीं लेगा"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading8}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc8}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

       
       <amp-story-page class="slide" auto-advance-after="" id="page10">
         <amp-story-grid-layer template="fill">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" class="zoom-out" src="http://balindra.com/post/${storyData[i].web_img9}" alt="धोखा नहीं देगा"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay=".5s" class="inner-align-end ooh" animate-in="fly-in-bottom">
           <h2 class="story_title"><span>${storyData[i].web_heading9}</span></h2>
           <p class="summary">${storyData[i].web_heading_desc9}</p>
           </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit">
             <p class="ftr">Source:pexels</p>
           </div>
         </amp-story-grid-layer>
       </amp-story-page>

       

       
       <amp-story-page class="slide" auto-advance-after="" id="page12">
         <amp-story-grid-layer template="fill" style="background-color:#8b0000">
           <amp-img tabindex="0" height="750" width="400" layout="fixed" src="http://balindra.com/post/${storyData[i].web_heading_web_img10}" alt="इन वजहों से खराब हो सकता है आपका रिलेशनशिप!"></amp-img>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="3s" animate-in-delay=".5s" animate-in="fade-in" class="inner-align-end-next">
             <p>
             <span style="font-size:12px; text-align:left;background:black;padding:4px;"> Published ${storyData[i].web_dateNext} Time: ${storyData[i].web_timePub}</span>
             </p>
             <h2>${storyData[i].web_titleNext}</h2>
             <p>${storyData[i].web_heading_desc10}</p>
             </div>
         </amp-story-grid-layer>
         <amp-story-grid-layer class="align-end" template="vertical">
           <div animate-in-duration="2s" animate-in-delay="2s" animate-in="fade-in" class="inner-align-end photo_credit"></div>
         </amp-story-grid-layer>

          
                       
       </amp-story-page>
       <amp-story-auto-ads>
         <script type="application/json"> { "ad-attributes": { "type": "doubleclick", "data-slot": "/7176/NBT_AMP/NBT_AMP_Others/NBT_AMP_Others_WebstoriesAd1" } } </script>
       </amp-story-auto-ads>
         `
      }
      return x;
    }

