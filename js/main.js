/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
        
        $('#fromLeft').keypress(function () {
            if ($(this).val().length >= 0) {
                $('#fromCenterV').val('');
                $('#fromRight').val('');
                
                $('#fromTop').val('');
                $('#fromCenterH').val('');
                $('#fromBottom').val('');
            }
        });
        
        
        $('#fromCenterV').keypress(function () {
            if ($(this).val().length >= 0) {
                $('#fromLeft').val('');
                $('#fromRight').val('');
                
                $('#fromTop').val('');
                $('#fromCenterH').val('');
                $('#fromBottom').val('');
            }
        });
        
        $('#fromRight').keypress(function () {
            if ($(this).val().length >= 0) {
                //$('#fromLeft').val('');
                $('#fromLeft').val('');
                $('#fromCenterV').val('');
                
                $('#fromTop').val('');
                $('#fromCenterH').val('');
                $('#fromBottom').val('');
            }
        });
        
        $('#fromTop').keypress(function () {
            if ($(this).val().length >= 0) {
                
                $('#fromLeft').val('');
                $('#fromCenterV').val('');
                $('#fromRight').val('');
                
                //$('#fromTop').val('');
                $('#fromCenterH').val('');
                $('#fromBottom').val('');
            }
        });
        
        $('#fromCenterH').keypress(function () {
            if ($(this).val().length >= 0) {
                
                $('#fromLeft').val('');
                $('#fromCenterV').val('');
                $('#fromRight').val('');
                
                $('#fromTop').val('');
                //$('#fromCenterH').val('');
                $('#fromBottom').val('');
            }
        });
        
        $('#fromBottom').keypress(function () {
            if ($(this).val().length >= 0) {
                
                $('#fromLeft').val('');
                $('#fromCenterV').val('');
                $('#fromRight').val('');
                
                $('#fromTop').val('');
                $('#fromCenterH').val('');
                //$('#fromBottom').val('');
            }
        });
        
        
        
        
        var verticalValue;
        var horizontalValue;
        
        //SET CENTER GUIDES
        $("#btn_top").click(function () {
            csInterface.evalScript('horGuideTop(0)');
        });
        $("#btn_center_h").click(function () {
            csInterface.evalScript('horGuideCenter(0)');
        });
        $("#btn_bottom").click(function () {
            csInterface.evalScript('horGuideBottom(0)');
        });
        
        $("#btn_left").click(function () {
            csInterface.evalScript('vertGuideLeft(0)');
        });
        $("#btn_center_v").click(function () {
            csInterface.evalScript('vertGuideCenter(0)');
        });
        $("#btn_right").click(function () {
            csInterface.evalScript('vertGuideRight(0)');
        });
                
        
            
        //SET GUIDE WITH VALUES
        $("#btn_setGuide").click(function () {
            
            if ($('#fromLeft').val().length > 0) {
                verticalValue = document.getElementById("fromLeft").value;
                csInterface.evalScript('vertGuideLeft(' + verticalValue + ')');
            }
            
            if ($('#fromCenterV').val().length > 0) {
                verticalValue = document.getElementById("fromCenterV").value;
                csInterface.evalScript('vertGuideCenter(' + verticalValue + ')');
            }
            
            if ($('#fromRight').val().length > 0) {
                verticalValue = document.getElementById("fromRight").value;
                csInterface.evalScript('vertGuideRight(' + verticalValue + ')');
            }
            
            if ($('#fromTop').val().length > 0) {
                horizontalValue = document.getElementById("fromTop").value;
                csInterface.evalScript('horGuideTop(' + horizontalValue + ')');
            }
            
            if ($('#fromCenterH').val().length > 0) {
                horizontalValue = document.getElementById("fromCenterH").value;
                csInterface.evalScript('horGuideCenter(' + horizontalValue + ')');
            }
            
            if ($('#fromBottom').val().length > 0) {
                horizontalValue = document.getElementById("fromBottom").value;
                csInterface.evalScript('horGuideBottom(' + horizontalValue + ')');
            }

        });
        
        //CLEAR GUIDES
        $("#btn_clearGuide").click(function () {
            csInterface.evalScript('clearAllGuides()');
        });
        
        //SET ROW
        $("#btn_setGuide").click(function () {
            var gridH = document.getElementById("grid_h").value;
            var gridMargin = document.getElementById("grid_margin").value;
            csInterface.evalScript('createGridH(' + gridH + ', ' + gridMargin + ')');
        });
        
        //SET COL
        $("#btn_setGuide").click(function () {
            var gridV = document.getElementById("grid_v").value;
            var gridMargin = document.getElementById("grid_margin").value;
            csInterface.evalScript('createGridV(' + gridV + ', ' + gridMargin + ')');
        });
        
        //TOOLTIP
        $(document).ready(function () {
        // Tooltip only Text
            $('.masterTooltip').hover(function () {
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                    .text(title)
                    .appendTo('body')
                    .fadeIn('slow');
            }, function () {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
            }).mousemove(function (e) {
                var mousex = e.pageX - 20; //Get X coordinates
                var mousey = e.pageY + 10; //Get Y coordinates
                $('.tooltip')
                    .css({ top: mousey, left: mousex });
            });
        });
        
        
    }
        
    init();

}());
    
