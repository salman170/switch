$(document).ready(function () {
  
   var baseurl= 'https://www.switchmobilityev.com/'; 
    $('[data-background]').each(function () {
        
        if ($(this).data('background') != '') {
            $(this).css('background-image', 'url(' + $(this).data('background') + ')');
        }
    });

    $(".team-carousel").unwrap();
    $(".team-list").unwrap();
    
    $("#edit-name").attr("placeholder", "Enter Username");
    $("#edit-pass").attr("placeholder", "Enter Password");

    //code to replace node:: form a tag
    $("a[href^='#vehicles']").each(function(){ 
        var href=$(this).attr('href');
        $(this).attr('href', "/"+drupalSettings.path.currentLanguage+"/current-vehicles"+href);
   
    });
    $("a[href^='#elcvehicles']").each(function(){ 
        var href=$(this).attr('href');
        $(this).attr('href', "/"+drupalSettings.path.currentLanguage+"/current-vehicles"+href);
       

        
    });
    
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 769) {
     $('.subul li').on("click", "a", function(){
    $("#hamburgerClose").trigger("click");   
    });
    }
    
    if(drupalSettings.path.currentPath!='node/643' && drupalSettings.path.currentPath!='node/756' && drupalSettings.path.currentPath!='node/1466' && drupalSettings.path.currentPath!='node/2185' && drupalSettings.path.currentPath!='node/2186' && drupalSettings.path.currentPath!='node/3146' && drupalSettings.path.currentPath!='node/3185')
    {
    $("a[href^='#']").each(function(){ 
        $(this).attr('href', "javascript:void(0);");
        
    });
    }
    //console.log(drupalSettings.path.currentPath);
    if(drupalSettings.path.currentPath=='node/199')
    {
    	$('.view-filters').show();
        $('.views-exposed-form').addClass('form-primary');
    }else{
        $('.view-filters').hide();
    }
    
    if(drupalSettings.path.currentPath=='node/577')
    {
         $('.navbar-toggler').attr('style','display:none !important');
         $('#navbarSupportedContent').attr('style','display:none !important');
        $('.custom-control-label').text("I'd like to be kept up to date with Switch product news");
    }

        
    $('.prod-link').on('click', function (e) {
        var vehiclesData = $(this).attr('data-name');
        $.ajax
        ({ 
            url: baseurl+drupalSettings.path.currentLanguage+'/getvehiclesblocks',
            data: {"vehiclesData": vehiclesData},
            type: 'post',
            success: function(result)
            {
                $('#leadershipTeamModal').modal('show');
               // var data = $.parseJSON(result);
                $('.modal-body').html(result); 
                //vehicleslide()
                
                
            }
        });
    });

    $('.team-card .team-link').click(function(){
        var leaderData = $(this).attr('data-name');
        $.ajax
        ({ 
            url: baseurl+drupalSettings.path.currentLanguage+'/getfooterblocks',
            data: {"leaderData": leaderData},
            type: 'post',
            success: function(result)
            {
                $('#leadershipTeamModal').modal('show');
               // var data = $.parseJSON(result);
                $('.modal-body').html(result); 
                
            }
        });
    });
    
    $("#roadBlockCop26").modal("show");
   /* $(function () {
    var item = $('#navbarSupportedContent .nav-link');
    for (var i = 0; i <= item.length; i++) {
        if ($(item[i]).text().trim() === 'COP26') {
            $(item[i]).addClass('active');
        }
    }
});*/

    $('.link-grey').attr("href",baseurl+drupalSettings.path.currentLanguage+"/privacy-policy")
    $('.e1').attr("href",baseurl+drupalSettings.path.currentLanguage+"/e1")
    
    $('.job-link').on('click', function (e) {
        var recruitmentdata = $(this).attr('data-name');
        $.ajax
        ({ 
            url: baseurl+drupalSettings.path.currentLanguage+'/getrecruitmentblocks',
            data: {"recruitmentdata": recruitmentdata},
            type: 'post',
            success: function(result)
            {
                $('#leadershipTeamModal').modal('show');
               // var data = $.parseJSON(result);
                $('.modal-body').html(result); 
                //vehicleslide()
                
                
            }
        });
    });
    
     $('.sw-news').each(function(){
var url = $(this).attr('href')
url = url.replace('news', 'en/news')
$(this).attr('href', url)
  });
    
    $("#location").change(function() {
        
        var l_val='';
        var c_val='';
        var h_val='';
        var f_val='';
        var location_value=$("#location").val();
        if(location_value!='')
        {
            l_val='location='+location_value;
        }
        var contract_type=$("#contract_type").val();
        if(contract_type!='')
        {
            c_val='contract_type='+contract_type;
        }
        var hours_of_work=$("#hours_of_work").val();
        if(hours_of_work!='')
        {
            h_val='hours_of_work='+hours_of_work;
        }
        var function_val=$("#function_val").val();
       
        if(function_val!='' && function_val!='Function')
        {
            f_val='function_val='+function_val;
        }
        var params = [
            l_val,
            c_val,
            h_val,
            f_val

        ];
       window.location.href = window.location.pathname+"?"+params.join('&');
      });
     
      $("#contract_type").change(function() {
        var l_val='';
        var c_val='';
        var h_val='';
        var f_val='';
        var location_value=$("#location").val();
        if(location_value!='')
        {
            l_val='location='+location_value;
        }
        var contract_type=$("#contract_type").val();
        if(contract_type!='')
        {
            c_val='contract_type='+contract_type;
        }
        var hours_of_work=$("#hours_of_work").val();
        if(hours_of_work!='')
        {
            h_val='hours_of_work='+hours_of_work;
        }
        var function_val=$("#function_val").val();
        if(function_val!='' && function_val!='Function')
        {
            f_val='function_val='+function_val;
        }
        var params = [
            l_val,
            c_val,
            h_val,
            f_val

        ];
       window.location.href = window.location.pathname+"?"+params.join('&');
      });

      $("#hours_of_work").change(function() {
        var l_val='';
        var c_val='';
        var h_val='';
        var f_val='';
        var location_value=$("#location").val();
        if(location_value!='')
        {
            l_val='location='+location_value;
           
        }
        var contract_type=$("#contract_type").val();
        if(contract_type!='')
        {
            c_val='contract_type='+contract_type;
        }
        var hours_of_work=$("#hours_of_work").val();
        if(hours_of_work!='')
        {
            h_val='hours_of_work='+hours_of_work;
        }
        var function_val=$("#function_val").val();
        if(function_val!='' && function_val!='Function')
        {
            f_val='function_val='+function_val;
        }
        var params = [
            l_val,
            c_val,
            h_val,
            f_val

        ];
       window.location.href = window.location.pathname+"?"+params.join('&');
      });

      $("#function_val").change(function() {
        var l_val='';
        var c_val='';
        var h_val='';
        var f_val='';
        var location_value=$("#location").val();
        if(location_value!='')
        {
            l_val='location='+location_value;
           
        }
        var contract_type=$("#contract_type").val();
        if(contract_type!='')
        {
            c_val='contract_type='+contract_type;
           
        }
        var hours_of_work=$("#hours_of_work").val();
        if(hours_of_work!='')
        {
            h_val='hours_of_work='+hours_of_work;
           
        }
        var function_val=$("#function_val").val();
        if(function_val!='' && function_val!='Function')
        {
            f_val='function_val='+function_val;
           
           
        }
        var params = [
            l_val,
            c_val,
            h_val,
            f_val

        ];
       window.location.href = window.location.pathname+"?"+params.join('&');
      });




    $('.embed-responsive-item').html('<source src="https://www.switchmobilityev.com/themes/custom/switchmobility/resources/images/company-animation-v2.mp4" type="video/mp4">Your browser does not support the video tag.');

$('.embed-responsive-item-tech').html('<source src="https://www.switchmobilityev.com/sites/default/files/tech-animation.mp4" type="video/mp4">Your browser does not support the video tag.');

    $(document).on('click', '#signupSubmit', function (e) {
       
        e.preventDefault();

        var result = ValidateForm();
        if (result) {
            var resultData = $('#signupForm').serialize();
            $("#errSubscribeCheck").text('Please wait...');
          $.ajax({
                cache: false,
                type: "POST",
                url: "https://www.switchmobilityev.com/newsletter-savedata",
                data: resultData,
                success: function (data) { 
                    $("#errSubscribeCheck").text('');
                    $("#signupSuccessMsg").modal("show");
                    $('#signupForm')[0].reset();
                 }
            }); 
        }
    });

    function ValidateForm() {

        var IsValid = true;

        var emailAddress = document.getElementById("emailAddress").value;
        if (emailAddress.trim() == "" || emailAddress.trim() == "Email Address") {
            $('#errEmailAddress').text('Please enter your email address');
            IsValid = false;
        } else if (ValidateEmail(emailAddress.trim()) == false) {
            $('#errEmailAddress').text('Please enter valid email address');
            IsValid = false;
        } else {
            $('#errEmailAddress').text('');
        }

        var fullName = document.getElementById("fullName").value;
        if (fullName.trim() == "" || fullName.trim() == "Please enter your full name") {
            $('#errFullName').text('Please enter your full name')
            IsValid = false;
        } else if (fullName.trim() != "" && fullName.trim() != "Please enter your full name" && ischar(fullName.trim()) == false) {
            $('#errFullName').text('Please enter valid full name');
            IsValid = false;
        } else if (!(chkSpecialchar(fullName.trim()))) {
            $('#errFullName').text('Please enter valid full name');
            IsValid = false;
        } else {
            $('#errFullName').text('')
        }
        
        var jobtitle = document.getElementById("jobtitle").value;
        if (jobtitle.trim() == "" || jobtitle.trim() == "Please enter your job title") {
            $('#errJobTitle').text('Please enter your job title')
            IsValid = false;
        } else if (jobtitle.trim() != "" && jobtitle.trim() != "Please enter your job title" && ischar(jobtitle.trim()) == false) {
            $('#errJobTitle').text('Please enter valid job title');
            IsValid = false;
        } else if (!(chkSpecialchar(jobtitle.trim()))) {
            $('#errJobTitle').text('Please enter valid job title');
            IsValid = false;
        } else {
            $('#errJobTitle').text('')
        }

        var interest = document.getElementById("interest").value;
        if (interest.trim() == "" || interest.trim() == "0") {
            $('#errInterest').text('Please select your interest');
            IsValid = false;
        } else {
            $('#errInterest').text('');
        }

        var subscribeCheck = document.getElementById("subscribeCheck");
        if (!subscribeCheck.checked) {
            $('#errSubscribeCheck').text('Please subscribe');
            IsValid = false;
        }
        else {
            $('#errSubscribeCheck').text('');
        }

        return IsValid;
    }
    
    $(document).on('click', '#enquirySubmit', function (e) {
       
        e.preventDefault();

        var result = ValidateenquiryForm();
        if (result) {
            var resultData = $('#enquiryForm').serialize();
            $("#errenquiryMessage").text('Please wait...');
          $.ajax({
                cache: false,
                type: "POST",
                url: baseurl+"enquiry-savedata",
                data: resultData,
                success: function (data) { 
                 $("#errenquiryMessage").text('');
                    $('#enquiryForm')[0].reset();
                    $('.enquiry').modal('toggle');
                    $("#edSuccessMsg").modal("show");

                 }
            }); 
        }
    });

    function ValidateenquiryForm() {

        var IsValid = true;

        var fullName = document.getElementById("fullName").value;
        if (fullName.trim() == "" || fullName.trim() == "Please enter your full name") {
            $('#errenquiryFullName').text('Please enter your full name')
            IsValid = false;
        } else if (fullName.trim() != "" && fullName.trim() != "Please enter your full name" && ischar(fullName.trim()) == false) {
            $('#errenquiryFullName').text('Please enter valid full name');
            IsValid = false;
        } else if (!(chkSpecialchar(fullName.trim()))) {
            $('#errenquiryFullName').text('Please enter valid full name');
            IsValid = false;
        } else {
            $('#errenquiryFullName').text('')
        }

        var emailAddress = document.getElementById("emailAddress").value;
        if (emailAddress.trim() == "" || emailAddress.trim() == "Email Address") {
            $('#errenquiryEmailAddress').text('Please enter your email address');
            IsValid = false;
        } else if (ValidateEmail(emailAddress.trim()) == false) {
            $('#errenquiryEmailAddress').text('Please enter valid email address');
            IsValid = false;
        } else {
            $('#errenquiryEmailAddress').text('');
        }

        

        var interest = document.getElementById("message").value;
        if (interest.trim() == "" || interest.trim() == "0") {
            $('#errenquiryMessage').text('Please enter message');
            IsValid = false;
        } else {
            $('#errenquiryMessage').text('');
        }

        
        return IsValid;
    }
    
     $('.ev12').click(function(){
        $("#leadsource1").val('EiV 12');
        $("#leadsource").val('EiV 12');
  
     });

     $('.ev22').click(function(){
        $("#leadsource1").val('EiV 22');
        $("#leadsource").val('EiV 22');
  
     });
     
     $('.metrocity').click(function(){
        $("#leadsource1").val('Metrocity');
        $("#leadsource").val('Metrocity');
  
     });
     
     $('.metrodecker').click(function(){
        $("#leadsource1").val('Metrodecker');
        $("#leadsource").val('Metrodecker');
  
     });
     

    $(document).on('click', '#downloadbrochureSubmit', function (e) {
       
        e.preventDefault();

        var result = ValidatedownloadbrochureForm();
        if (result) {
            var resultData = $('#downloadbrochureForm').serialize();
            $("#errdownloadbrochureMessage").text('Please wait...');
          $.ajax({
                cache: false,
                type: "POST",
                url: baseurl+"downloadbrochure-savedata",
                data: resultData,
                success: function (data) { 
                $("#errdownloadbrochureMessage").text('');
                    $('#downloadbrochureForm')[0].reset();
                    $('.download').modal('toggle');
                    $("#edSuccessMsg").modal("show");
                    if($("#leadsource").val()=='EiV 12')
                    {
                        downloadb('https://www.switchmobilityev.com/sites/default/files/switch_eiv12_brochure.pdf');
                    }else if($("#leadsource").val()=='EiV 22')
                    {
                        downloadb('https://www.switchmobilityev.com/sites/default/files/switch_eiv22_brochure.pdf');
                    }else if($("#leadsource").val()=='Metrocity')
                    {
                        downloadb('https://www.switchmobilityev.com/sites/default/files/switch_metrocity_brochure_en.pdf');
                    }else if($("#leadsource").val()=='Metrodecker')
                    {
                        downloadb('https://www.switchmobilityev.com/sites/default/files/switch_metrodecker_brochure_en.pdf');
                    }else{
                    if(drupalSettings.path.currentLanguage=="es")
                    {
                        downloadb('https://www.switchmobilityev.com/sites/default/files/switch_e1_brochure_es.pdf');
                    }else{
                        downloadb('https://www.switchmobilityev.com/sites/default/files/switch_e1_brochure_en.pdf');
                    }
                    }
                   

                 }
            }); 
        }
    });

    

    function downloadb(url) {
       // alert(url);
        if(url!="")
        {
           var durl=url;
        }else{
            var durl='https://www.switchmobilityev.com/sites/default/files/switch_e1_brochure_en.pdf';
        }
        $.ajax({
            url: durl,
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data) {
                var a = document.createElement('a');
                var file = new Blob([data], { type: 'application/pdf' });
                var url = window.URL.createObjectURL(file);
                 var Filename= durl.split('/').pop();
                 
                a.href = url;
                 a.download = Filename;
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        });
    }

    function ValidatedownloadbrochureForm() {

        var IsValid = true;

        var fullName = document.getElementById("downloadbrochurefullName").value;
        if (fullName.trim() == "" || fullName.trim() == "Please enter your full name") {
            $('#errdownloadbrochureFullName').text('Please enter your full name')
            IsValid = false;
        } else if (fullName.trim() != "" && fullName.trim() != "Please enter your full name" && ischar(fullName.trim()) == false) {
            $('#errdownloadbrochureFullName').text('Please enter valid full name');
            IsValid = false;
        } else if (!(chkSpecialchar(fullName.trim()))) {
            $('#errdownloadbrochureFullName').text('Please enter valid full name');
            IsValid = false;
        } else {
            $('#errdownloadbrochureFullName').text('')
        }

        var emailAddress = document.getElementById("downloadbrochureemailAddress").value;
        if (emailAddress.trim() == "" || emailAddress.trim() == "Email Address") {
            $('#errdownloadbrochureEmailAddress').text('Please enter your email address');
            IsValid = false;
        } else if (ValidateEmail(emailAddress.trim()) == false) {
            $('#errdownloadbrochureEmailAddress').text('Please enter valid email address');
            IsValid = false;
        } else {
            $('#errdownloadbrochureEmailAddress').text('');
        }

        return IsValid;
    }
    
    $(document).on('click', '#downloadInfoModal', function (e) {
   
    $(".infoDiv").hide();
    $(".downloadFormDiv").show();
    });


    $(document).on('click', '#vepopupSubmit', function (e) {
       
        e.preventDefault();

        var result = ValidatevepopupForm();
        if (result) {
           // var resultData = $('#vepopupForm').serialize();
            $("#errvepopupMessage").text('Please wait...');
            var vepopupfullName=$("#vepopupfullName").val();
            var vepopupemailAddress=$("#vepopupemailAddress").val();
            var leadsource=$("#leadsource").val();  
            var furl=$("#furl").val();
          $.ajax({
                cache: false,
                type: "POST",
                url: baseurl+"downloadbrochure-savedata",
                data: { downloadbrochureyourname: vepopupfullName,downloadbrochureyouremail: vepopupemailAddress,leadsource: leadsource},
                success: function (data) { 
                    $("#sucessalert").show();
                    $("#sucessalert").text('Thank you!');
                    $('#vepopupForm')[0].reset();
                    downloadb(furl);

                 }
            }); 
        }
    });

    function ValidatevepopupForm() {

        var IsValid = true;

        var fullName = document.getElementById("vepopupfullName").value;
        if (fullName.trim() == "" || fullName.trim() == "Please enter your full name") {
            $('#errvepopupFullName').text('Please enter your full name')
            IsValid = false;
        } else if (fullName.trim() != "" && fullName.trim() != "Please enter your full name" && ischar(fullName.trim()) == false) {
            $('#errvepopupFullName').text('Please enter valid full name');
            IsValid = false;
        } else if (!(chkSpecialchar(fullName.trim()))) {
            $('#errvepopupFullName').text('Please enter valid full name');
            IsValid = false;
        } else {
            $('#errvepopupFullName').text('')
        }

        var emailAddress = document.getElementById("vepopupemailAddress").value;
        if (emailAddress.trim() == "" || emailAddress.trim() == "Email Address") {
            $('#errvepopupEmailAddress').text('Please enter your email address');
            IsValid = false;
        } else if (ValidateEmail(emailAddress.trim()) == false) {
            $('#errvepopupEmailAddress').text('Please enter valid email address');
            IsValid = false;
        } else {
            $('#errvepopupEmailAddress').text('');
        }

        if(grecaptcha.getResponse() == "") {
            
            $('#errrecaptcha').text('Please Check');
            IsValid = false;
          } else {
            $('#errrecaptcha').text('');
          }


        return IsValid;
    }

    function ischar(s) {
        var i;
        for (i = 0; i < s.length; i++) {
            // Check that current character is number.

            var c = s.charAt(i);
            if (!((c < "0") || (c > "9"))) {
                return false;
            }
        }
        // All characters are numbers.
        return true;
    }

    function chkSpecialchar(s) {
        var i;
        for (i = 0; i < s.length; i++) {
            // Check that current character is number.

            var c = s.charAt(i);
            if (c == "!" || c == "#" || c == "'" || c == "^" || c == ":" || c == "\"" || c == "*" || c == ":" || c == "(" || c == ")" || c == "+" || c == "=" || c == "|" || c == "<" || c == ">" || c == "%" || c == "?" || c == "/" || c == "@") {
                return false;
            }
        }
        // All characters are numbers.
        return true;
    }

    function ValidateEmail(email) {
        var isValid = false;
        //var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
       // var regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
       var regex = /^\S+@\S+\.\S+$/
        isValid = regex.test(email);
        return isValid;
    }

   if(typeof(drupalSettings.path.currentQuery.location) != "undefined" && drupalSettings.path.currentQuery.location !== null) {
$('#location').val(drupalSettings.path.currentQuery.location);
}

if(typeof(drupalSettings.path.currentQuery.hours_of_work) != "undefined" && drupalSettings.path.currentQuery.hours_of_work !== null) {
$('#hours_of_work').val(drupalSettings.path.currentQuery.hours_of_work);
}
if(typeof(drupalSettings.path.currentQuery.contract_type) != "undefined" && drupalSettings.path.currentQuery.contract_type !== null) {
$('#contract_type').val(drupalSettings.path.currentQuery.contract_type);
}
if(typeof(drupalSettings.path.currentQuery.function_val) != "undefined" && drupalSettings.path.currentQuery.function_val !== null) {
$('#function_val').val(drupalSettings.path.currentQuery.function_val);
}



});

