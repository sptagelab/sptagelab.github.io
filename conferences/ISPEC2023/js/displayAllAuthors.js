const programAuthor = new Map();

// Web ID, Presenter, Present Type, All Authors
function loadAllData() {
    programAuthor.set("item_aisec_m1_1", ["Samaneh Mohammadi", "phy", "Samaneh Mohammadi, Sima Sinaei, Ali Balador, and Francesco Flammini"]);
    programAuthor.set("item_aisec_m1_2", ["Tran Duc Luong", "vir", "Tran Duc Luong, Vuong Minh Tien, Phan The Duy, and Van-Hau Pham"]);
    programAuthor.set("item_aisec_m1_3", ["Ahmed Emad Samy", "vir", "Ahmed Emad Samy, and Šarūnas Girdzijauskas"]);
    programAuthor.set("item_priv_s1_1", ["Yulong Fu", "vir", "Jiahui Wang, Yulong Fu, Mengru Liu, Jin Cao, Hui Li, and Zheng Yan"]);
    programAuthor.set("item_priv_s1_2", ["Cezara Petrui", "phy", "Sebastian Simon, Cezara Petrui, Carlos Pinzon, and Catuscia Palamidessi"]);
    programAuthor.set("item_priv_s1_3", ["Yuqing Zhang", "vir", "Na Wang, Gaofei Wu, Jingfeng Rong, Zheng Yan, Qiuling Yue, Jinglu Hu, Yuqing Zhang"]);
    programAuthor.set("item_sesec_m1_1", ["Yohei Watanabe", "phy", "Yohei Watanabe, Naoto Yanai, and Junji Shikata"]);
    programAuthor.set("item_sesec_m1_2", ["Xinyu Rao", "vir", "Jia Zhao, Xinyu Rao, Jiqiang Liu, Yue Guo, and Bokai Yang"]);
    programAuthor.set("item_sesec_m1_3", ["Rauli Kaksonen", "phy", "Rauli Kaksonen, Kimmo Halunen, Marko Laakso, and uha Röning"]);
    programAuthor.set("item_websec_s1_1", ["Kwan Yin Chan", "phy", "Kwan Yin Chan, Handong Cui, and Tsz Hon Yuen"]);
    programAuthor.set("item_websec_s1_2", ["Mahdieh Safarzadehvahed", "vir", "Mahdieh Safarzadehvahed, Farzaneh Abazari, and Fateme Shabani"]);
    programAuthor.set("item_websec_s1_3", ["Rabeya Basri", "vir", "Rabeya Basri, Gour Karmakar, Joarder Kamruzzaman, S. H. Shah Newaz, Linh Nguyen, and Muhammad Usman"]);
    programAuthor.set("item_malsec_m1_1", ["Mohan Anand Putrevu", "phy", "P. Mohan Anand, P.V. Sai Charan, Hrushikesh Chunduri, and Sandeep K Shukla"]);
    programAuthor.set("item_malsec_m1_2", ["Bikash Saha", "vir", "Bikash Saha, Nanda Rani, and Sandeep Kumar Shukla"]);
    programAuthor.set("item_malsec_m1_3", ["Yuqing Zhang", "vir", "Ying Li, Yuhao Lin, Yongchao Zhong, Qiuling Yue, Jinglu Hu, Wenjie Wang, Huiyang Shi, and Yuqing Zhang"]);
    programAuthor.set("item_apcryp_s1_1", ["Yuejun Liu", "vir", "Guanghui Liu, Yuejun Liu, Yongbin Zhou, and Yiwen Gao"]);
    programAuthor.set("item_apcryp_s1_2", ["Thomas Prantl", "phy", "Thomas Prantl, Simon Engel, Lukas Horn, Dennis Kaiser, Lukas Iffländer, André Bauer, Christian Krupitzer, and Samuel Kounev"]);
    programAuthor.set("item_apcryp_s1_3", ["Sohto Chiku", "phy", "Sohto Chiku, Keisuke Hara, and Junji Shikata"]);
    programAuthor.set("item_apcryp_m1_1", ["Chao Liu", "vir", "Chao Liu, and Bozhong Liu"]);
    programAuthor.set("item_apcryp_m1_2", ["Yoshifumi Manabe", "phy", "Tomoya Morooka, Yoshifumi Manabe, and Kazumasa Shinagawa"]);
    programAuthor.set("item_apcryp_m1_3", ["Maciej Grzeskowiak", "phy", "Maciej Grzeskowiak, Lukasz Krzywiecki, and Karol Niczyj"]);
    programAuthor.set("item_sesec_s1_1", ["Łukasz Krzywiecki", "phy", "Hannes Salin, and Łukasz Krzywiecki"]);
    programAuthor.set("item_sesec_s1_2", ["Yuchen Yin", "vir", "Yuchen Yin, Qingqing Gan, Cong Zuo, Ning Liu, Changji Wang, and Yuming Jiang"]);
    programAuthor.set("item_sesec_s1_3", ["Philipp Jakubeit", "phy", "Philipp Jakubeit, Andreas Peter, and Maarten van Steen"]);
    programAuthor.set("item_block_m1_1", ["Yalan Wang", "phy", "Yalan Wang, Liqun Chen, Long Meng, and Yangguang Tian"]);
    programAuthor.set("item_block_m1_2", ["Mingming Wang", "vir", "Mingming Wang, and Qianhong Wu"]);
    programAuthor.set("item_block_m1_3", ["Andres Gomez Ramirez", "phy", "Andres Gomez Ramirez, Loui Al Sardy, and Francis Gomez Ramirez"]);
    programAuthor.set("item_apcryp_s2_1", ["Mathieu De Goyon", "phy", "Mathieu De Goyon, and Atsuko Miyaji"]);
    programAuthor.set("item_apcryp_s2_2", ["Dipanwita Roy Chowdhury", "vir", "Bijoy Das, Abhijit Das, and Dipanwita Roy Chowdhury"]);
    programAuthor.set("item_apcryp_s2_3", ["Li Liu", "vir", "Li Liu, and Puwen Wei"]);
    programAuthor.set("item_websec_m1_1", ["Sergejs Kozlovičs", "phy", "Sergejs Kozlovičs, Krišjānis Petručen, a, Dāvis Lārin, š, and Juris Viksna"]);
    programAuthor.set("item_websec_m1_2", ["Son Ngo Duc Hoang", "vir", "Ngo Duc Hoang Son, Huynh Thai Thi, Phan The Duy, and Van-Hau Pham"]);
    programAuthor.set("item_websec_m1_3", ["Mamoru Mimura", "phy", "Yuki Nakagawa, and Mamoru Mimura"]);
    programAuthor.set("item_block_s1_1", ["Jiachen Shen", "phy", "Zhen Xia, Zhenfu Cao, Jiachen Shen, Xiaolei Dong, Jun Zhou, Liming Fang, Zhe Liu, Chunpeng Ge, and Chunhua Su"]);
    programAuthor.set("item_block_s1_2", ["Sanjeet Kumar Nayak", "vir", "Ajay Chandra Korlapati, Sanjeet Kumar Nayak, Sarathi Chakraborty, and Somanath Tripathy"]);
}

function getPresenterHTML( element_id ) {
    var allInfo = programAuthor.get( element_id );
    var addHtml = '';
    switch (allInfo[1]) {
        case "phy":
            addHtml += '<svg width=\"16px\" height=\"16px\" viewBox=\"-5 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">' + '\n';
            addHtml += '<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">' + '\n';
            addHtml += '<g id=\"Icon-Set\" sketch:type=\"MSLayerGroup\" transform=\"translate(-105.000000, -307.000000)\" fill=\"#000000\">' + '\n';
            addHtml += '<path d=\"M111,314 C111,311.238 113.239,309 116,309 C118.761,309 121,311.238 121,314 L121,324 C121,326.762 118.761,329 116,329 C113.239,329 111,326.762 111,324 L111,314 L111,314 Z M116,331 C119.866,331 123,327.866 123,324 L123,314 C123,310.134 119.866,307 116,307 C112.134,307 109,310.134 109,314 L109,324 C109,327.866 112.134,331 116,331 L116,331 Z M127,326 L125,326 C124.089,330.007 120.282,333 116,333 C111.718,333 107.911,330.007 107,326 L105,326 C105.883,330.799 110.063,334.51 115,334.955 L115,337 L114,337 C113.448,337 113,337.448 113,338 C113,338.553 113.448,339 114,339 L118,339 C118.552,339 119,338.553 119,338 C119,337.448 118.552,337 118,337 L117,337 L117,334.955 C121.937,334.51 126.117,330.799 127,326 L127,326 Z\" id=\"microphone\" sketch:type=\"MSShapeGroup\">' + '\n';
            addHtml += '</path>' + '\n';
            addHtml += '</g>' + '\n';
            addHtml += '</g>' + '\n';
            addHtml += '</svg>' + '\n';
            break;
        case "vir":
            addHtml += '<svg fill=\"#000000\" width=\"16px\" height=\"16px\" viewBox=\"0 0 512 512\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">' + '\n';
            addHtml += '<g>' + '\n';
            addHtml += '<path d=\"m437.02 74.98c-48.353-48.352-112.64-74.98-181.02-74.98s-132.667 26.628-181.02 74.98-74.98 112.64-74.98 181.02 26.628 132.667 74.98 181.02 112.64 74.98 181.02 74.98 132.667-26.628 181.02-74.98 74.98-112.64 74.98-181.02-26.628-132.667-74.98-181.02zm-2.132 315.679c-15.31-10.361-31.336-19.314-47.952-26.789 7.339-28.617 11.697-59.688 12.784-91.87h79.702c-3.144 44.336-19.244 85.147-44.534 118.659zm-402.31-118.659h79.702c1.088 32.183 5.446 63.254 12.784 91.87-16.616 7.475-32.642 16.427-47.952 26.789-25.29-33.512-41.39-74.323-44.534-118.659zm44.53-150.654c15.31 10.362 31.336 19.315 47.954 26.79-7.338 28.615-11.695 59.683-12.783 91.864h-79.701c3.144-44.334 19.243-85.142 44.53-118.654zm283.519-42.581c-5.863-10.992-12.198-20.911-18.935-29.713 27.069 11.25 51.473 27.658 71.977 47.997-11.625 7.638-23.702 14.369-36.155 20.185-4.886-13.664-10.528-26.547-16.887-38.469zm-12.965 50.404c-29.211 9.792-60.039 14.831-91.662 14.831s-62.451-5.039-91.662-14.831c20.463-58.253 54.273-97.169 91.662-97.169s71.199 38.916 91.662 97.169zm-203.359 110.831c1.056-28.342 4.885-55.421 10.937-80.116 32.136 10.644 66.018 16.116 100.76 16.116s68.624-5.472 100.76-16.116c6.053 24.695 9.881 51.773 10.937 80.116zm223.394 32c-1.057 28.344-4.885 55.424-10.938 80.12-32.139-10.646-66.02-16.12-100.759-16.12s-68.62 5.474-100.759 16.12c-6.053-24.696-9.882-51.776-10.938-80.12zm-216.324-193.235c-6.358 11.922-12 24.805-16.887 38.468-12.452-5.815-24.53-12.547-36.155-20.185 20.503-20.34 44.907-36.747 71.977-47.997-6.737 8.803-13.073 18.722-18.935 29.714zm-16.886 316.008c4.886 13.661 10.528 26.542 16.885 38.462 5.863 10.992 12.198 20.911 18.935 29.713-27.067-11.25-51.469-27.655-71.971-47.992 11.625-7.637 23.701-14.368 36.151-20.183zm29.853-11.938c29.213-9.794 60.04-14.835 91.66-14.835s62.447 5.041 91.66 14.835c-20.463 58.251-54.272 97.165-91.66 97.165s-71.197-38.914-91.66-97.165zm196.287 50.4c6.357-11.92 11.999-24.801 16.885-38.462 12.451 5.815 24.527 12.547 36.151 20.183-20.502 20.337-44.904 36.743-71.971 47.992 6.737-8.802 13.073-18.721 18.935-29.713zm39.093-193.235c-1.088-32.18-5.445-63.249-12.783-91.864 16.618-7.475 32.645-16.428 47.954-26.79 25.287 33.511 41.386 74.319 44.53 118.654z\"/>' + '\n';
            addHtml += '</g>' + '\n';
            addHtml += '</svg>' + '\n';
            break;
        default:
            return undefined;
            break;
    }
    addHtml += allInfo[0] + '\n';
    addHtml += '<a href=\"#\" onClick=\"javascript:extendAuthor(\'' + element_id + '\');\">' + '\n';
    addHtml += '<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">' + '\n';
    addHtml += '<path d=\"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '<path d=\"M15.9965 12H16.0054" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '<path d=\"M11.9955 12H12.0045" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '<path d=\"M7.99451 12H8.00349" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '</svg>' + '\n';
    addHtml += '</a>' + '\n';
    return addHtml;
}

function getAllAuthorHTML( element_id ) {
    var allInfo = programAuthor.get(element_id);
    var addHtml = '';
    addHtml += allInfo[2];
    addHtml += '<a href=\"#\" onClick=\"javascript:compressAuthor(\'' + element_id + '\');\">' + '\n';
    addHtml += '<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">' + '\n';
    addHtml += '<path d=\"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '<path d=\"M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '<path d=\"M8.57 10.7701L7 9.19012L8.57 7.62012\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>' + '\n';
    addHtml += '</svg>' + '\n';
    addHtml += '</a>' + '\n';
    return addHtml;
}

function extendAuthor( element_id ) {
    document.getElementById( element_id ).innerHTML = this.getAllAuthorHTML( element_id );
}

function compressAuthor( element_id ) {
    document.getElementById( element_id ).innerHTML = this.getPresenterHTML( element_id );
}

window.onload = function() {
    loadAllData();
}
