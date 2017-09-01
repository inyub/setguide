var iselected;

function vertGuideLeft(_verticalValueLeft) {
    
    if (selectionCheck(activeDocument)) {
        iselected= app.activeDocument.selection.bounds;
    
        for (i=0; i < iselected.length; i++) {
        iselected[i] = parseInt(iselected[i]);
        }
        verticalGuide(iselected[0]+_verticalValueLeft);
    }
    else {
        var verticalValue = (activeDocument.width - activeDocument.width)+_verticalValueLeft;
        verticalGuide(verticalValue);
        }
}

function vertGuideCenter(_verticalValueCenter) {
        if (selectionCheck(activeDocument)) {
        iselected= app.activeDocument.selection.bounds;
    
        for (i=0; i < iselected.length; i++) {
        iselected[i] = parseInt(iselected[i]);
        }
        verticalGuide((iselected[2]-iselected[0])/2+iselected[0]+_verticalValueCenter);
    }
    else {
    var verticalValue = (activeDocument.width / 2)+_verticalValueCenter;
    verticalGuide(verticalValue);
        }
}

function vertGuideRight(_verticalValueRight) {
        if (selectionCheck(activeDocument)) {
        iselected= app.activeDocument.selection.bounds;
    
        for (i=0; i < iselected.length; i++) {
        iselected[i] = parseInt(iselected[i]);
        }
        verticalGuide(iselected[2]-_verticalValueRight);
    }
    else {
        var verticalValue = activeDocument.width - _verticalValueRight;
        verticalGuide(verticalValue);
    }
}


function horGuideTop(_horizontalValueTop) {
        if (selectionCheck(activeDocument)) {
        iselected= app.activeDocument.selection.bounds;
    
        for (i=0; i < iselected.length; i++) {
        iselected[i] = parseInt(iselected[i]);
        }
        horizontalGuide(iselected[1]+_horizontalValueTop);
    }
    else {
    var horizontalValue = (activeDocument.height - activeDocument.height)+_horizontalValueTop;
    horizontalGuide(horizontalValue);
        }
}

function horGuideCenter(_horizontalValueCenter) {
    if (selectionCheck(activeDocument)) {
        iselected= app.activeDocument.selection.bounds;
    
        for (i=0; i < iselected.length; i++) {
        iselected[i] = parseInt(iselected[i]);
        }
        horizontalGuide((iselected[3]-iselected[1])/2+iselected[1]+_horizontalValueCenter);
    }
    else {
    var horizontalValue = (activeDocument.height / 2)+_horizontalValueCenter;
    horizontalGuide(horizontalValue);
        }
}
function horGuideBottom(_horizontalValueBottom) {
            if (selectionCheck(activeDocument)) {
        iselected= app.activeDocument.selection.bounds;
    
        for (i=0; i < iselected.length; i++) {
        iselected[i] = parseInt(iselected[i]);
        }
        horizontalGuide(iselected[3]-_horizontalValueBottom);
    }
    else {
    var horizontalValue = activeDocument.height - _horizontalValueBottom;
    horizontalGuide(horizontalValue);
        }
}

function selectionCheck(doc) {
    var selectionstatus = false;
    var historystate = doc.activeHistoryState;
    doc.selection.deselect();
    if (historystate != doc.activeHistoryState) {
        selectionstatus = true;
        doc.activeHistoryState = historystate;
    }
    return selectionstatus;
}

function verticalGuide(_verticalValue) {
   
    var idMk = charIDToTypeID( "Mk  " );
    var desc2438 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc2439 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc2439.putUnitDouble( idPstn, idPxl, _verticalValue );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc2439.putEnumerated( idOrnt, idOrnt, idVrtc );
        var idKnd = charIDToTypeID( "Knd " );
        var idKnd = charIDToTypeID( "Knd " );
        var idDcmn = charIDToTypeID( "Dcmn" );
        desc2439.putEnumerated( idKnd, idKnd, idDcmn );
        var idnull = charIDToTypeID( "null" );
            var ref744 = new ActionReference();
            var idDcmn = charIDToTypeID( "Dcmn" );
            ref744.putIdentifier( idDcmn, 2772 );
            var idGd = charIDToTypeID( "Gd  " );
            ref744.putIndex( idGd, 1 );
        desc2439.putReference( idnull, ref744 );
    var idGd = charIDToTypeID( "Gd  " );
    desc2438.putObject( idNw, idGd, desc2439 );
    var idnull = charIDToTypeID( "null" );
        var ref745 = new ActionReference();
        var idGd = charIDToTypeID( "Gd  " );
        ref745.putClass( idGd );
    desc2438.putReference( idnull, ref745 );
    var idguideTarget = stringIDToTypeID( "guideTarget" );
    var idguideTarget = stringIDToTypeID( "guideTarget" );
    var idguideTargetCanvas = stringIDToTypeID( "guideTargetCanvas" );
    desc2438.putEnumerated( idguideTarget, idguideTarget, idguideTargetCanvas );
executeAction( idMk, desc2438, DialogModes.NO );
}

function horizontalGuide(_horizontalValue) {
    var idMk = charIDToTypeID( "Mk  " );
    var desc2450 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc2451 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc2451.putUnitDouble( idPstn, idPxl, _horizontalValue );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc2451.putEnumerated( idOrnt, idOrnt, idHrzn );
        var idKnd = charIDToTypeID( "Knd " );
        var idKnd = charIDToTypeID( "Knd " );
        var idDcmn = charIDToTypeID( "Dcmn" );
        desc2451.putEnumerated( idKnd, idKnd, idDcmn );
        var idnull = charIDToTypeID( "null" );
            var ref750 = new ActionReference();
            var idDcmn = charIDToTypeID( "Dcmn" );
            ref750.putIdentifier( idDcmn, 2772 );
            var idGd = charIDToTypeID( "Gd  " );
            ref750.putIndex( idGd, 1 );
        desc2451.putReference( idnull, ref750 );
    var idGd = charIDToTypeID( "Gd  " );
    desc2450.putObject( idNw, idGd, desc2451 );
    var idnull = charIDToTypeID( "null" );
        var ref751 = new ActionReference();
        var idGd = charIDToTypeID( "Gd  " );
        ref751.putClass( idGd );
    desc2450.putReference( idnull, ref751 );
    var idguideTarget = stringIDToTypeID( "guideTarget" );
    var idguideTarget = stringIDToTypeID( "guideTarget" );
    var idguideTargetCanvas = stringIDToTypeID( "guideTargetCanvas" );
    desc2450.putEnumerated( idguideTarget, idguideTarget, idguideTargetCanvas );
executeAction( idMk, desc2450, DialogModes.NO );
}